import { Sparkles, Shield, Settings, ChevronRight, Check } from "lucide-react";
import { motion } from "../lib/motion";
import { containerSection, itemSection, defaultViewport } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";
import type { SolutionIconName } from "../utils/data";
import SectionTitle from "./ui/SectionTitle";

const iconMap = {
  shield: Shield,
  sparkles: Sparkles,
  settings: Settings,
} as const;

function CardIcon({ name }: { name: SolutionIconName }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className="w-6 h-6" strokeWidth={1.5} /> : null;
}

export default function NetworkrSolution() {
  const solution = useTenantStore((s) => s.siteData.solution);

  return (
    <motion.section
      id="solution"
      className="py-12 md:py-20 relative overflow-hidden bg-linear-to-b from-surface/50 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="app-container relative z-10">
        <SectionTitle
          tagVariant="solution"
          tagIcon={<Sparkles className="w-3.5 h-3.5" aria-hidden />}
          badge={solution.badge}
          headline={solution.headline}
          headlineItalic={solution.headlineItalic}
          subtitle={solution.subtitle}
          universityLogo={solution.universityLogo}
          universityName={solution.universityName}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  mt-10 md:mt-16 lg:mt-20">
          {solution.cards.map((card) => (
            <motion.div
              key={card.title}
              className="relative group cursor-pointer"
              variants={itemSection}
            >
              <div
                className="p-4 md:p-8 rounded-3xl border transition-all duration-500 h-full min-w-0
                  bg-background border-border hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300
                    bg-surface text-muted-foreground group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground shrink-0"
                >
                  <CardIcon name={card.icon} />
                </div>
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-primary group-hover:text-primary-foreground wrap-break-word font-display">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-secondary group-hover:text-primary-foreground/90 wrap-break-word">
                  {card.description}
                </p>
                {card.bulletPoints && card.bulletPoints.length > 0 && (
                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 text-secondary group-hover:text-primary-foreground/90">
                    {card.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs md:text-sm wrap-break-word"
                      >
                        <Check
                          className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0"
                          strokeWidth={2}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted group-hover:text-primary-foreground/90 group-hover:gap-3 transition-all flex-wrap">
                  <span className="group-hover:underline">
                    {card.learnMoreText}
                  </span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
