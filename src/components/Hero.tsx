import { Sparkles } from "lucide-react";
import { motion } from "../lib/motion";
import CtaButton from "./ui/CtaButton";
import Tag from "./ui/Tag";
import { containerHero, itemHero } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";

export default function Hero() {
  const hero = useTenantStore((s) => s.siteData.hero);

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center relative pb-10 2xl:pb-0"
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
            transform: "scale(1.16)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.016) 0%, transparent 70%)",
            transform: "scale(1.08)",
          }}
        />
      </div>
      {/* Background: grid */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-(--grid-opacity)"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
        }}
      />

      <div className="app-container w-full relative z-10 mt-24 xl:mt-32">
        <div className="grid items-center gap-9 md:gap-12">
          {/* Tag */}
          <div className="grid items-center gap-6 max-w-2xl">
            <motion.div variants={itemHero}>
              <Tag
                icon={
                  <Sparkles
                    className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted"
                    aria-hidden
                  />
                }
                variant="default"
              >
                {hero.tag}
              </Tag>
            </motion.div>
            {/* Headline — smaller on mobile */}
            <motion.h1
              className="font-light tracking-tight leading-[1.1] text-primary text-3xl sm:text-4xl md:text-5xl font-display"
              variants={itemHero}
            >
              {hero.headlineParts.map((part, i) => (
                <span
                  key={i}
                  className={`inline-block mr-[0.3em] ${part.italic ? "font-display italic" : "font-display"}`}
                >
                  {part.text}
                </span>
              ))}
            </motion.h1>

            {/* Tagline — smaller on mobile */}
            <motion.p
              className="text-secondary font-light max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg"
              variants={itemHero}
            >
              {hero.tagline}
            </motion.p>
          </div>
          {/* CTAs */}
          <motion.div
            className="flex flex-row gap-3 sm:gap-4"
            variants={itemHero}
          >
            <CtaButton
              to={{ pathname: "/", hash: hero.ctaPrimary.hash }}
              variant="solid"
              size="sm"
            >
              {hero.ctaPrimary.label}
            </CtaButton>
            <CtaButton
              to={{ pathname: "/", hash: hero.ctaSecondary.hash }}
              variant="outline"
              size="sm"
            >
              {hero.ctaSecondary.label}
            </CtaButton>
          </motion.div>

          {/* Card */}
          <motion.div
            className="p-4 md:p-8 rounded-(--radius-card) border border-border relative overflow-hidden bg-linear-to-br from-(--color-card-from) to-(--color-card-to)"
            variants={itemHero}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-surface/50 to-transparent rounded-full blur-3xl"
              aria-hidden
            />
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                {hero.card.intro}
                <span className="text-primary font-medium">
                  {hero.card.boldInIntro}
                </span>
                {hero.card.introRest}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {hero.card.columns.map((col) => (
                  <div key={col.title} className="group">
                    <p className="text-sm font-medium text-muted mb-1">
                      {col.title}
                    </p>
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
            className="text-center text-secondary text-sm sm:text-base md:text-lg font-display"
            variants={itemHero}
          >
            {hero.bottomLine}
            {hero.bottomLineBold.map((word, i) => (
              <span key={i}>
                {i > 0 &&
                  (i === hero.bottomLineBold.length - 1 ? " and " : ", ")}
                <span className="text-primary font-medium">{word}</span>
              </span>
            ))}
            .
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
