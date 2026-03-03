import { Sparkles, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from '../lib/motion'
import { containerHero, itemHero } from '../lib/motion'
import { useTenantStore } from '../stores/tenantStore'

export default function Hero() {
  const hero = useTenantStore((s) => s.siteData.hero)

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 pt-20"
      aria-label="Hero"
      initial="hidden"
      animate="visible"
      variants={containerHero}
    >
      {/* Background: radial gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(0, 0, 0, var(--gradient-blob-opacity, 0.02)) 0%, transparent 70%)`,
            transform: 'scale(1.16)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.016) 0%, transparent 70%)',
            transform: 'scale(1.08)',
          }}
        />
      </div>
      {/* Background: grid */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-(--grid-opacity)"
        style={{
          backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)',
          backgroundSize: 'var(--grid-size) var(--grid-size)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Tag */}
        <motion.div className="mb-6 md:mb-8" variants={itemHero}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-(--radius-tag) bg-surface border border-border text-sm text-secondary font-display">
            <Sparkles className="w-3.5 h-3.5 text-muted" aria-hidden />
            {hero.tag}
          </span>
        </motion.div>

        {/* Headline — smaller on mobile */}
        <motion.h1
          className="font-light tracking-tight leading-[1.1] mb-6 md:mb-8 text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display"
          variants={itemHero}
        >
          {hero.headlineParts.map((part, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.3em] ${part.italic ? 'font-display italic' : 'font-display'}`}
            >
              {part.text}
            </span>
          ))}
        </motion.h1>

        {/* Tagline — smaller on mobile */}
        <motion.p
          className="text-secondary font-light max-w-2xl leading-relaxed mb-8 md:mb-12 text-base sm:text-lg md:text-xl"
          variants={itemHero}
        >
          {hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          variants={itemHero}
        >
          <Link
            to={{ pathname: '/', hash: hero.ctaPrimary.hash }}
            className="px-6 py-3 sm:px-8 sm:py-3 rounded-(--radius-pill) bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 text-center"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link
            to={{ pathname: '/', hash: hero.ctaSecondary.hash }}
            className="px-6 py-3 sm:px-8 sm:py-3 border border-border-strong rounded-(--radius-pill) text-primary text-base font-medium hover:border-primary transition-all duration-300 group text-center inline-flex items-center justify-center gap-2"
          >
            <span className="group-hover:mr-1 transition-all">{hero.ctaSecondary.label}</span>
            <span className="inline-block opacity-0 group-hover:opacity-100 transition-all" aria-hidden>→</span>
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          className="mt-16 md:mt-24 p-6 md:p-8 lg:p-12 rounded-(--radius-card) border border-border relative overflow-hidden bg-linear-to-br from-(--color-card-from) to-(--color-card-to)"
          variants={itemHero}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-surface/50 to-transparent rounded-full blur-3xl" aria-hidden />
          <div className="relative z-10 max-w-3xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {hero.card.intro}
              <span className="text-primary font-medium">{hero.card.boldInIntro}</span>
              {hero.card.introRest}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {hero.card.columns.map((col) => (
                <div key={col.title} className="group">
                  <p className="text-sm font-medium text-muted mb-1">{col.title}</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    {col.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          className="text-center text-secondary mt-8 md:mt-12 text-base md:text-lg font-display"
          variants={itemHero}
        >
          {hero.bottomLine}
          {hero.bottomLineBold.map((word, i) => (
            <span key={i}>
              {i > 0 && (i === hero.bottomLineBold.length - 1 ? ' and ' : ', ')}
              <span className="text-primary font-medium">{word}</span>
            </span>
          ))}
          .
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
        variants={itemHero}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-xs tracking-wider uppercase">{hero.scrollLabel}</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </motion.section>
  )
}
