import { TrendingUp } from 'lucide-react'
import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'
import SectionTitle from './ui/SectionTitle'

const INSTITUTION_PLACEHOLDER = '[Institution Name]'

export default function StrategicValue() {
  const siteData = useTenantStore((s) => s.siteData)
  const strategicValue = siteData.strategicValue
  const institutionName = siteData.institutionName
  const brandName = siteData.brandName

  const institutionDisplay = institutionName || brandName
  const bodyText = strategicValue.body.replace(
    INSTITUTION_PLACEHOLDER,
    institutionDisplay
  )

  return (
    <motion.section
      id="value"
      className="py-12 lg:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="app-container">
        <motion.div className="mb-12" variants={itemSection}>
          <SectionTitle
            tagVariant="value"
            tagIcon={<TrendingUp className="w-3.5 h-3.5" aria-hidden />}
            badge={strategicValue.badge}
            headline={strategicValue.headline}
            headlineItalic={strategicValue.headlineItalic}
            subtitle={strategicValue.tagline}
            className='grid items-center gap-5 justify-items-start text-left'
          />
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-primary/80 font-light mb-10 leading-relaxed"
          variants={itemSection}
        >
          {strategicValue.tagline}
        </motion.p>

        <motion.p
          className="text-primary/70 leading-relaxed mb-12 text-sm sm:text-base md:text-lg"
          variants={itemSection}
        >
          {bodyText}
        </motion.p>

        <motion.div variants={itemSection}>
          <div className="p-4 md:p-8 rounded-2xl border border-primary/10 bg-slate-50/70">
            <p className="font-display text-sm sm:text-base md:text-lg font-light text-primary leading-snug text-center">
              {strategicValue.quote}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
