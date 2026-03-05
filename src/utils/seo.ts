/**
 * Apply tenant SEO data to document head (title + meta tags).
 * Called from App when siteData.seo is available so each tenant gets correct SEO.
 */

import type { SeoData } from './data'

function ensureAbsoluteUrl(url: string): string {
  if (typeof window === 'undefined') return url
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = window.location.origin
  return url.startsWith('/') ? `${base}${url}` : `${base}/${url}`
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
  if (typeof document === 'undefined') return
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applySeo(seo: SeoData): void {
  if (typeof document === 'undefined') return

  document.title = seo.title

  setMeta('description', seo.description)

  const ogTitle = seo.ogTitle ?? seo.title
  const ogDesc = seo.ogDescription ?? seo.description
  const ogImage = seo.ogImage ? ensureAbsoluteUrl(seo.ogImage) : undefined
  const ogUrl = seo.ogUrl ?? (typeof window !== 'undefined' ? window.location.href : undefined)

  setMeta('og:title', ogTitle, 'property')
  setMeta('og:description', ogDesc, 'property')
  if (ogImage) setMeta('og:image', ogImage, 'property')
  if (ogUrl) setMeta('og:url', ogUrl, 'property')
  setMeta('og:type', seo.ogType ?? 'website', 'property')

  const twTitle = seo.twitterTitle ?? seo.title
  const twDesc = seo.twitterDescription ?? seo.description
  const twImage = seo.twitterImage ? ensureAbsoluteUrl(seo.twitterImage) : ogImage

  setMeta('twitter:card', seo.twitterCard ?? 'summary_large_image', 'name')
  setMeta('twitter:title', twTitle, 'name')
  setMeta('twitter:description', twDesc, 'name')
  if (twImage) setMeta('twitter:image', twImage, 'name')

  if (seo.canonical) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = seo.canonical.startsWith('http') ? seo.canonical : ensureAbsoluteUrl(seo.canonical)
  }
}
