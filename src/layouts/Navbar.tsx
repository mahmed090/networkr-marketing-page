import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTenantStore } from '../stores/tenantStore'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const siteData = useTenantStore((s) => s.siteData)
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

  const { brandName, navLinks, navCta } = siteData

  const scrollToHash = useCallback((hash: string) => {
    const el = document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${hash}`)
    }
    closeMobile()
  }, [closeMobile])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 supports-backdrop-filter:bg-background/80 backdrop-blur-sm border-b border-border"
        role="banner"
      >
        <div className="w-11/12 lg:w-full lg:max-w-7xl mx-auto flex items-center justify-between h-14 md:h-16">
          <Link
            to="/"
            className="text-primary font-display font-medium text-lg tracking-tight hover:opacity-80 transition-opacity"
            onClick={closeMobile}
          >
            {brandName}
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, hash }) => (
              <a
                key={label}
                href={`#${hash}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(hash)
                }}
                className="text-secondary text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {label}
              </a>
            ))}
            <a
              href={`#${navCta.hash}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(navCta.hash)
              }}
              className="ml-2 px-5 py-2.5 rounded-(--radius-pill) bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all cursor-pointer"
            >
              {navCta.label}
            </a>
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
              <a
                key={label}
                href={`#${hash}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(hash)
                }}
                className="py-3 px-4 text-secondary font-medium hover:text-primary hover:bg-surface rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={`#${navCta.hash}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(navCta.hash)
              }}
              className="mt-4 mx-4 py-3 rounded-(--radius-pill) bg-primary text-primary-foreground text-center font-medium hover:opacity-90 transition-all"
            >
              {navCta.label}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
