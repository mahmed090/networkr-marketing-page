import { Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "../lib/motion";
import { containerSection, itemSection, defaultViewport } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";

export default function NexStep() {
  const siteData = useTenantStore((s) => s.siteData);
  const next = siteData.nextStep;
  const brandName = siteData.brandName;

  return (
    <motion.section
      className="py-32 px-6 bg-linear-to-b from-surface/50 to-background text-primary relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      {/* Radial gradient orbs */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.025) 0%, transparent 70%)",
            transform:
              "translate(calc(-50% + 31px), calc(-50% - 19px)) scale(1.125)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.016) 0%, transparent 70%)",
            transform:
              "translate(calc(50% - 3px), calc(50% + 5px)) scale(1.18)",
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50/70 border border-gray-100 text-sm text-gray-500 mb-8 font-display"
            variants={itemSection}
          >
            <Rocket className="w-3.5 h-3.5" aria-hidden />
            {next.badge}
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-8 font-display"
            variants={itemSection}
          >
            {next.headline}
            <span className="font-serif italic">{next.headlineItalic}</span>.
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
            variants={itemSection}
          >
            {next.paragraph}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemSection}
          >
            <Link
              to={next.ctaPrimary.href}
              className="px-6 py-3 sm:px-8 sm:py-3.5 bg-slate-100 text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100/20 flex items-center justify-center gap-2 group"
            >
              {next.ctaPrimary.label}
              <ArrowRight
                className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                aria-hidden
              />
            </Link>
            <Link
              to={next.ctaSecondary.href}
              className="px-6 py-3 sm:px-8 sm:py-3.5 border border-gray-200 rounded-full text-lg font-medium hover:bg-gray-100/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-[18px] h-[18px]" aria-hidden />
              {next.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 pt-12 border-t border-gray-100 text-center"
          variants={itemSection}
        >
          <p className="text-2xl md:text-3xl font-light font-display">
            <span className="font-medium">{brandName}</span>
            <span className="mx-4 text-gray-500">—</span>
            <span className="text-gray-500 font-serif italic">
              {next.footerTagline}
            </span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
