import { CircleAlert, Building2, Users, GraduationCap } from 'lucide-react'
import { motion } from '../lib/motion'
import { containerSection, itemSection, defaultViewport } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'
import type { CoreProblemIconName } from '../utils/data'

const iconMap = {
  'building2': Building2,
  'users': Users,
  'graduation-cap': GraduationCap,
} as const

function CardIcon({ name }: { name: CoreProblemIconName }) {
  const Icon = iconMap[name]
  return Icon ? <Icon className="w-6 h-6" strokeWidth={1.5} /> : null
}

export default function CoreProblem() {
  const coreProblem = useTenantStore((s) => s.siteData.coreProblem)

  return (
    <motion.section
      id="problem"
      className="py-20 md:py-32 px-4 sm:px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border-strong to-transparent"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border font-display"
            style={{
              backgroundColor: 'var(--color-section-alert-bg)',
              borderColor: 'var(--color-section-alert-border)',
              color: 'var(--color-section-alert)',
            }}
            variants={itemSection}
          >
            <CircleAlert className="w-3.5 h-3.5" aria-hidden />
            {coreProblem.badge}
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary mb-6 font-display"
            variants={itemSection}
          >
            {coreProblem.headline}
            <span className="font-display italic">{coreProblem.headlineItalic}</span>
            .
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-secondary font-light"
            variants={itemSection}
          >
            {coreProblem.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coreProblem.cards.map((card) => (
            <motion.div
              key={card.title}
              className="group relative"
              variants={itemSection}
            >
              <div
                className="absolute inset-0 bg-linear-to-br from-surface to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                aria-hidden
              />
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-border bg-background hover:border-border-strong transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100/80 h-full">
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mb-6 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <CardIcon name={card.icon} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4 font-display">{card.title}</h3>
                <p className="text-secondary leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div
          className="mt-16 md:mt-20 h-px bg-linear-to-r from-transparent via-border-strong to-transparent"
          aria-hidden
        />
      </div>
    </motion.section>
  )
}
