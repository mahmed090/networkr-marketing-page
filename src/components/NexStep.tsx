import { Rocket } from "lucide-react";
import { motion } from "../lib/motion";
import { containerSection, itemSection, defaultViewport } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";
import SectionTitle from "./ui/SectionTitle";
import CtaButton from "./ui/CtaButton";

export default function NexStep() {
  const siteData = useTenantStore((s) => s.siteData);
  const next = siteData.nextStep;
  const brandName = siteData.brandName;

  return (
    <motion.section
      className="py-14 lg:py-24 px-6 bg-linear-to-b from-surface/50 to-background text-primary relative overflow-hidden"
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

      <div className="app-container relative z-10">
        <SectionTitle
          tagVariant="aboutNetworkr"
          tagIcon={<Rocket className="w-3.5 h-3.5" aria-hidden />}
          badge={next.badge}
          headline={next.headline}
          headlineItalic={next.headlineItalic}
          subtitle={next.paragraph}
          headingClassName="max-w-2xl mx-auto"
        />
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-14"
          variants={itemSection}
        >
          <CtaButton
            to={next.ctaPrimary.href}
            variant="solid"
            size="sm"
          >
            {next.ctaPrimary.label}
          </CtaButton>
          <CtaButton
            to={next.ctaSecondary.href}
            variant="outline"
            size="sm"
          >
            {next.ctaSecondary.label}
          </CtaButton>
        </motion.div>

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
