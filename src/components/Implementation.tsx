import { Rocket, Clock, Check, Database, Palette, Shield } from 'lucide-react'
import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'
import type { ImplementationStepIconName } from '../utils/data'
import SectionTitle from './ui/SectionTitle'

const stepIconMap = {
  database: Database,
  palette: Palette,
  shield: Shield,
} as const

function StepIcon({ name }: { name: ImplementationStepIconName }) {
  const Icon = stepIconMap[name]
  return Icon ? <Icon className="w-6 h-6" strokeWidth={1.5} /> : null
}

export default function Implementation() {
  const impl = useTenantStore((s) => s.siteData.implementation)

  return (
    <motion.section
      id="implementation"
      className="py-14 lg:py-24 bg-linear-to-b from-background to-surface/50"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="app-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: badge, heading, subtitle, requirements card */}
          <div>
            <SectionTitle
              tagVariant="implementation"
              tagIcon={<Rocket className="w-3.5 h-3.5" aria-hidden />}
              badge={impl.badge}
              headline={impl.headline}
              headlineItalic={impl.headlineItalic}
              subtitle={impl.subtitle}
              className='grid items-center gap-5 justify-items-start text-left mb-7'
            />
            <motion.div
              className="p-6 sm:p-8 rounded-3xl bg-background border border-border shadow-lg shadow-gray-100/80"
              variants={itemSection}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-muted shrink-0" aria-hidden />
                <span className="font-medium text-primary">
                  {impl.requirementsTitle}
                </span>
              </div>
              <ul className="space-y-4">
                {impl.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'var(--color-check-success-bg)',
                        color: 'var(--color-check-success)',
                      }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-secondary">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: vertical steps with connector line */}
          <div className="relative mt-0 md:mt-28">
            {/* Vertical connector line — runs through center of first icon (left-7 = 1.75rem), from top of first step to bottom */}
            <div
              className="absolute left-7 top-14 bottom-14 w-px bg-linear-to-b from-border-strong to-transparent origin-top"
              aria-hidden
            />
            <div className="relative z-10 flex flex-col gap-0">
              {impl.steps.map((step) => (
                <motion.div
                  key={step.title}
                  className="relative flex gap-6"
                  variants={itemSection}
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-black/20">
                      <StepIcon name={step.icon} />
                    </div>
                  </div>
                  <div className="flex-1 pb-10 sm:pb-12">
                    <h3 className="text-xl font-display font-medium text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
