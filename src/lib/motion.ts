import type { Variants } from "framer-motion";

/** Re-export motion for one import point */
export { motion } from "framer-motion";

/** Default viewport for whileInView (animate once when in view) */
export const defaultViewport = { once: true, margin: "-60px" } as const;

/** Stagger container: hero (faster) — use with animate="visible" */
export const containerHero: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Stagger container: section (e.g. StrengthNetwork) — use with whileInView="visible" */
export const containerSection: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

/** Generic stagger container — customize via options or use presets above */
export function containerStagger(options?: {
  staggerChildren?: number;
  delayChildren?: number;
}): Variants {
  const { staggerChildren = 0.1, delayChildren = 0.05 } = options ?? {};
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Item: fade up (default, ~24px) — for hero/section children */
export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Item: fade up small (~16px) — for cards / tighter lists */
export const itemFadeUpSm: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Item: fade up medium (~20px) — section cards */
export const itemFadeUpMd: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Item: fade only (no movement) */
export const itemFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Item: fade + scale (e.g. icons, badges) */
export const itemFadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

/** Convenience: default item for hero */
export const itemHero = itemFadeUp;

/** Convenience: default item for section cards */
export const itemSection = itemFadeUpMd;
