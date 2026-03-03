import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  hasUnderline: boolean;
  titleParts: string[];
  titleUnderline: string;
  title: string;
  /** Optional description below the title */
  description?: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionTitle({
  label,
  hasUnderline,
  titleParts,
  titleUnderline,
  title,
  description,
}: SectionTitleProps) {
  return (
    <motion.header className="text-center flex items-center flex-col gap-3 mb-10 md:mb-16" variants={item}>
      <motion.div
        className="flex items-center gap-2 rounded-full border px-4 py-2 bg-surface border-card-border"
        variants={item}
      >
        <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0 animate-pulse" />
        <span className="text-base sm:text-lg font-medium text-text-primary font-display">
          {label}
        </span>
      </motion.div>

      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-display">
        {hasUnderline ? (
          <>
            {titleParts[0]}
            <span className="relative inline-block">
              {titleUnderline}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <motion.p
          className="text-text-secondary text-lg max-w-2xl mx-auto"
          variants={item}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
