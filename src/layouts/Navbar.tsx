import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTenantStore } from '../stores/tenantStore'
import { useContactModalStore } from '../stores/contactModalStore'
import CtaButton from '../components/ui/CtaButton'

const CONTACT_TRIGGER_HASHES = ['get-started', 'demo']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const siteData = useTenantStore((s) => s.siteData)
  const openContactModal = useContactModalStore((s) => s.open)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    if (!mobileOpen) return
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeMobile()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileOpen, closeMobile])

  const { brandName, navLinks, navCta, logo } = siteData

  const scrollToHash = useCallback((hash: string) => {
    if (CONTACT_TRIGGER_HASHES.includes(hash)) {
      openContactModal()
      closeMobile()
      return
    }
    const el = document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${hash}`)
    }
    closeMobile()
  }, [closeMobile, openContactModal])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 supports-backdrop-filter:bg-background/80 backdrop-blur-sm border-b border-border"
        role="banner"
      >
        <div className="app-container flex items-center justify-between h-14 md:h-16">
          <Link
            to="/"
            className="text-primary font-display font-medium text-lg tracking-tight hover:opacity-80 transition-opacity"
            onClick={closeMobile}
          >
            <img src={logo} alt={brandName} className="w-8 md:w-9 h-8 md:h-9" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, hash }) => (
              <Link
                key={label}
                to={`#${hash}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(hash)
                }}
                className="text-secondary text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {label}
              </Link>
            ))}
            <CtaButton
              to={`#${navCta.hash}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(navCta.hash)
              }}
              variant="outline"
              size="sm"
              className='h-8 text-xs'
            >
              {navCta.label}
            </CtaButton>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-primary rounded-lg hover:bg-surface transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay: sibling of header so it sits below the header bar (z-50) and above main content */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-14 left-0 right-0 bottom-0 z-40 bg-background border-t border-border overflow-y-auto"
          aria-hidden={false}
        >
          <nav
            className="flex flex-col p-6 gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, hash }) => (
              <Link
                key={label}
                to={`#${hash}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(hash)
                }}
                className="py-3 px-4 text-secondary font-medium hover:text-primary hover:bg-surface rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to={`#${navCta.hash}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(navCta.hash)
              }}
              className="mt-4 mx-4 py-3 rounded-(--radius-pill) bg-primary text-primary-foreground text-center font-medium hover:opacity-90 transition-all"
            >
              {navCta.label}
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
