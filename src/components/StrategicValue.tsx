import {
  TrendingUp,
  Users,
  Target,
  Award,
  Layers,
  Quote,
} from 'lucide-react'
import { motion } from '../lib/motion'
import {
  containerSection,
  itemSection,
  itemFadeScale,
  defaultViewport,
} from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'
import type { StrategicValueIconName } from '../utils/data'
import SectionTitle from './ui/SectionTitle'

const INSTITUTION_PLACEHOLDER = '[Institution Name]'

const benefitIconMap = {
  'trending-up': TrendingUp,
  users: Users,
  target: Target,
  award: Award,
  layers: Layers,
} as const satisfies Record<StrategicValueIconName, React.ComponentType<{ className?: string; strokeWidth?: number }>>

function BenefitIcon({ name }: { name: StrategicValueIconName }) {
  const Icon = benefitIconMap[name]
  return Icon ? <Icon className="w-5 h-5" strokeWidth={1.5} /> : null
}

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

  const hasBenefits =
    strategicValue.benefits && strategicValue.benefits.length > 0

  return (
    <motion.section
      id="value"
      className="py-16 lg:py-24 relative overflow-hidden bg-linear-to-b from-surface/40 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />

      <div className="app-container relative z-10">
        <motion.div className="mb-14 lg:mb-16" variants={itemSection}>
          <SectionTitle
            tagVariant="value"
            tagIcon={<TrendingUp className="w-3.5 h-3.5" aria-hidden />}
            badge={strategicValue.badge}
            headline={strategicValue.headline}
            headlineItalic={strategicValue.headlineItalic}
            subtitle={strategicValue.tagline}
            className="grid items-center gap-5 justify-items-start text-left"
          />
        </motion.div>

        {/* Benefits strip (optional) */}
        {hasBenefits && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
            variants={itemSection}
          >
            {strategicValue.benefits!.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-section-value/20 bg-section-value-bg text-primary/90 text-sm font-medium"
              >
                <span className="text-section-value">
                  <BenefitIcon name={benefit.icon} />
                </span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Body + Quote layout: two-column on large screens */}
        <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16 items-start">
          {/* Body copy */}
          <motion.div className="space-y-6 mb-10 lg:mb-0" variants={itemSection}>
            <div className="pl-4 md:pl-6 border-l-2 border-section-value/30">
              <p className="text-primary/85 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                {bodyText}
              </p>
            </div>
          </motion.div>

          {/* Quote block — prominent pull quote */}
          <motion.div
            className="relative"
            variants={itemFadeScale}
          >
            <div className="relative p-6 md:p-8 lg:p-10 rounded-3xl border border-section-value/15 bg-card shadow-sm overflow-hidden">
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] -translate-y-1/2 translate-x-1/2"
                style={{ background: 'var(--color-section-value)' }}
                aria-hidden
              />
              <div className="relative z-10 flex gap-4">
                <span
                  className="text-section-value shrink-0 mt-1"
                  aria-hidden
                >
                  <Quote className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.25} />
                </span>
                <p className="font-display text-lg md:text-xl lg:text-2xl font-light text-primary leading-snug italic">
                  {strategicValue.quote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional diagram caption */}
        {strategicValue.diagramCaption && (
          <motion.p
            className="mt-8 text-center text-sm text-muted-foreground max-w-xl mx-auto"
            variants={itemSection}
          >
            {strategicValue.diagramCaption}
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}
