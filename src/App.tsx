import { useEffect } from 'react'
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

export default function App() {
  const initFromConfig = useTenantStore((s) => s.initFromConfig)
  useEffect(() => {
    initFromConfig()
  }, [initFromConfig])

  return (
    <div className="min-h-screen bg-background">
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
