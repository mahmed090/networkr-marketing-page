import { Link } from 'react-router-dom'
import { useTenantStore } from '../stores/tenantStore'

export default function Footer() {
  const siteData = useTenantStore((s) => s.siteData)
  const brandName = siteData.brandName
  const footer = siteData.footer

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div>
          <Link
            to="/"
            className="flex items-center gap-1 mb-4 text-black hover:opacity-80 transition-opacity"
          >
            <img src={footer.logo} alt={brandName} className="w-8 md:w-10 h-8 md:h-10" />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
            {footer.tagline}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-500">
            <span
              className="w-2 h-2 rounded-lg bg-green-400 inline-block animate-pulse"
              aria-hidden
            />
            {footer.onboardingBadge}
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
