import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'

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
      className="py-24 lg:py-32 bg-linear-to-b from-surface/50 to-background px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12" variants={itemSection}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/30 mb-4 font-display">
            {strategicValue.badge}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary leading-tight">
            {strategicValue.headline}
            <span className="font-display italic">{strategicValue.headlineItalic}</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-xl text-primary/80 font-light mb-10 leading-relaxed"
          variants={itemSection}
        >
          {strategicValue.tagline}
        </motion.p>

        <motion.p
          className="text-primary/70 leading-relaxed mb-12"
          variants={itemSection}
        >
          {bodyText}
        </motion.p>

        <motion.div variants={itemSection}>
          <div className="p-8 lg:p-12 rounded-2xl border border-primary/10 bg-slate-50/70">
            <p className="font-display text-2xl lg:text-3xl font-light text-primary leading-snug text-center">
              {strategicValue.quote}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
