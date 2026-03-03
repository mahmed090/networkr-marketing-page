import { Handshake, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'

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
      className="py-32 px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 to-white" aria-hidden />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm text-amber-700 mb-6 font-display"
            variants={itemSection}
          >
            <Handshake className="w-3.5 h-3.5" aria-hidden />
            {po.badge}
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light tracking-tight mb-6 font-display"
            variants={itemSection}
          >
            {po.headline}
            <span className="font-serif italic">{po.headlineItalic}</span>
          </motion.h2>
        </div>

        <motion.div className="relative" variants={itemSection}>
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
              <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>{po.paragraphFirst}</p>
                <p>
                  {secondPrefix}
                  <span className="text-black font-medium">{po.paragraphSecondBold}</span>
                  {po.paragraphSecondSuffix}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={po.ctaPrimary.href}
                  className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 flex items-center justify-center gap-2 group"
                >
                  {po.ctaPrimary.label}
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
                <Link
                  to={po.ctaSecondary.href}
                  className="px-8 py-4 border border-gray-200 rounded-full text-lg font-medium hover:border-black transition-all duration-300 text-center"
                >
                  {po.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
