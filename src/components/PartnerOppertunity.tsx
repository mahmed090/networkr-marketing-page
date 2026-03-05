import { Handshake, Star } from 'lucide-react'
import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'
import SectionTitle from './ui/SectionTitle'
import CtaButton from './ui/CtaButton'

const UNIVERSITY_PLACEHOLDER = '[University Name]'

export default function PartnerOppertunity() {
  const siteData = useTenantStore((s) => s.siteData)
  const po = siteData.partnerOpportunity
  const universityName =
    po.universityName || siteData.institutionName || siteData.brandName
  const secondPrefix = po.paragraphSecondPrefix.replace(
    UNIVERSITY_PLACEHOLDER,
    universityName
  )

  return (
    <motion.section
      className="py-14 lg:py-24 px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 to-white" aria-hidden />
      <div className="app-container relative z-10">
        <SectionTitle
          tagVariant="partnerOpportunity"
          tagIcon={<Handshake className="w-3.5 h-3.5" aria-hidden />}
          badge={po.badge}
          headline={po.headline}
          headlineItalic={po.headlineItalic}
        />

        <motion.div className="relative mt-10 md:mt-14" variants={itemSection}>
          <div className="p-12 md:p-16 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-100 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-gray-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-gray-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"
              aria-hidden
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-amber-500 shrink-0" aria-hidden />
                <span className="text-sm font-medium text-gray-500">{po.cardLabel}</span>
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>{po.paragraphFirst}</p>
                <p>
                  {secondPrefix}
                  <span className="text-black font-medium">{po.paragraphSecondBold}</span>
                  {po.paragraphSecondSuffix}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CtaButton
                  to={po.ctaPrimary.href}
                  variant="solid"
                  size="sm"
                >
                  {po.ctaPrimary.label}
                </CtaButton>
                <CtaButton
                  to={po.ctaSecondary.href}
                  variant="outline"
                  size="sm"
                >
                  {po.ctaSecondary.label}
                </CtaButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
