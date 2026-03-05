import { TrendingUp, Lock, Zap } from "lucide-react";
import { motion } from "../lib/motion";
import { containerSection, itemSection, defaultViewport } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";
import type { MattersNowCardIconName } from "../utils/data";

const cardIconMap = {
  lock: Lock,
  zap: Zap,
} as const;

function CardIcon({ name }: { name: MattersNowCardIconName }) {
  const Icon = cardIconMap[name];
  return Icon ? (
    <Icon
      className="w-8 h-8 text-primary-foreground/60 shrink-0"
      strokeWidth={2}
    />
  ) : null;
}

export default function MattersNow() {
  const siteData = useTenantStore((s) => s.siteData);
  const mattersNow = siteData.mattersNow;

  return (
    <motion.section
      id="matters-now"
      className="py-16 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      {/* Blur orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="app-container relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground/80 mb-8 font-display"
          variants={itemSection}
        >
          <TrendingUp className="w-3.5 h-3.5" aria-hidden />
          {mattersNow.badge}
        </motion.div>

        <motion.h2
          className="font-light tracking-tight leading-[1.1] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display min-w-0 max-w-5xl"
          variants={itemSection}
        >
          {mattersNow.headline}
          <span className="font-display italic">
            {mattersNow.headlineItalic}
          </span>
          .
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {mattersNow.cards.map((card) => (
            <motion.div
              key={card.icon}
              className="p-8 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              variants={itemSection}
            >
              <div className="mb-6">
                <CardIcon name={card.icon} />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-display text-primary-foreground/80 leading-relaxed">
                {card.boldPrefix != null && card.boldPrefix !== "" && (
                  <span className="text-primary-foreground font-medium">
                    {card.boldPrefix}
                  </span>
                )}
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
