import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTenantStore } from '../stores/tenantStore'

export default function Footer() {
  const siteData = useTenantStore((s) => s.siteData)
  const brandName = siteData.brandName
  const footer = siteData.footer
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire to your newsletter API / backend
    console.log('Newsletter signup:', email.trim())
    setEmail('')
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link
              to="/"
              className="flex items-center gap-1 mb-4 text-black hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-semibold tracking-tight">{brandName}</span>
              <span className="text-2xl font-light text-gray-300">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              {footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs text-gray-500">
              <span
                className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"
                aria-hidden
              />
              {footer.onboardingBadge}
            </div>
          </div>

          <div className="w-full md:max-w-sm shrink-0">
            <p className="text-sm font-medium text-gray-900 mb-3">
              {footer.newsletter.heading}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder}
                className="flex-1 min-w-0 px-4 py-3 rounded-full border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-colors"
                aria-label={footer.newsletter.placeholder}
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors shrink-0"
              >
                {footer.newsletter.submitLabel}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 order-2 md:order-1">{footer.copyright}</p>
          <p className="text-sm text-gray-400 italic order-1 md:order-2 font-serif">
            {footer.handshakeTagline}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="order-3 text-sm text-gray-400 hover:text-black transition-colors flex items-center gap-1.5"
            tabIndex={0}
          >
            {footer.backToTopLabel}
            <span className="text-xs" aria-hidden>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
