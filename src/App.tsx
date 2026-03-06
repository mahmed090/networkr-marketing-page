import { useEffect } from 'react'
import { Toaster } from 'sonner'
import ContactFormModal from './components/ContactFormModal'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import CoreProblem from './components/CoreProblem'
import NetworkrSolution from './components/NetworkrSolution'
import StrategicValue from './components/StrategicValue'
import Implementation from './components/Implementation'
import MattersNow from './components/MattersNow'
import PartnerOppertunity from './components/PartnerOppertunity'
import AboutNetworkr from './components/AboutNetworkr'
import NexStep from './components/NexStep'
import Footer from './layouts/Footer'
import { useTenantStore } from './stores/tenantStore'
import { useContactModalStore } from './stores/contactModalStore'
import { applySeo } from './utils/seo'

const CONTACT_TRIGGER_HASHES = ['#get-started', '#demo']

export default function App() {
  const initFromConfig = useTenantStore((s) => s.initFromConfig)
  const tenantId = useTenantStore((s) => s.tenantId)
  const siteData = useTenantStore((s) => s.siteData)
  const openContactModal = useContactModalStore((s) => s.open)

  useEffect(() => {
    initFromConfig()
  }, [initFromConfig])

  // Update document head (title, meta, og, twitter) when tenant / siteData changes
  useEffect(() => {
    applySeo(siteData.seo)
  }, [tenantId, siteData.seo])

  // Open contact modal when hash is #get-started or #demo (e.g. from direct link or refresh)
  useEffect(() => {
    const hash = window.location.hash
    if (hash && CONTACT_TRIGGER_HASHES.some((h) => hash === h || hash.startsWith(h))) {
      openContactModal()
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [openContactModal])

  // Intercept clicks on links that point to contact trigger hashes — open modal instead
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor || !anchor.href) return
      try {
        const url = new URL(anchor.href)
        const hash = url.hash || ''
        if (CONTACT_TRIGGER_HASHES.some((h) => hash === h || hash.startsWith(h))) {
          e.preventDefault()
          openContactModal()
        }
      } catch {
        // ignore invalid URLs
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [openContactModal])

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" richColors />
      <ContactFormModal />
      <Navbar />
      <main>
        <Hero />
        <CoreProblem />
        <NetworkrSolution />
        <StrategicValue />
        <Implementation />
        <MattersNow />
        <PartnerOppertunity />
        <AboutNetworkr />
        <NexStep />
      </main>
      <Footer />
    </div>
  )
}
