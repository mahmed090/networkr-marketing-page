import * as React from "react";
import { motion } from "../../lib/motion";
import { itemSection } from "../../lib/motion";
import Tag, { type TagVariant } from "./Tag";
import { cn } from "../../lib/cn";

export type SectionTitleProps = {
  /** Tag/badge theme variant (dynamic per section) */
  tagVariant: TagVariant;
  /** Optional icon shown inside the Tag */
  tagIcon?: React.ReactNode;
  /** Badge text */
  badge: string;
  /** Headline text before the italic part */
  headline: string;
  /** Headline part rendered in italic */
  headlineItalic: string;
  /** Optional suffix after italic (e.g. ".") */
  headlineSuffix?: string;
  /** Optional paragraph below the headline */
  subtitle?: string;
  /** Optional university logo URL (shown on the right of the headline) */
  universityLogo?: string;
  /** Optional university name (shown on the right of the headline) */
  universityName?: string;
  /** Wrapper className (e.g. "text-center") */
  className?: string;
  /** Optional className for the h2 */
  headingClassName?: string;
  /** Optional className for the subtitle */
  subtitleClassName?: string;
};

export default function SectionTitle({
  tagVariant,
  tagIcon,
  badge,
  headline,
  headlineItalic,
  headlineSuffix = "",
  subtitle,
  universityLogo,
  universityName,
  className,
  headingClassName,
  subtitleClassName,
}: SectionTitleProps) {
  const showUniversity = universityLogo != null || (universityName != null && universityName !== "");

  return (
    <div className={cn("grid items-center gap-5 justify-items-center text-center", className)}>
      <motion.div variants={itemSection}>
        <Tag variant={tagVariant} icon={tagIcon}>
          {badge}
        </Tag>
      </motion.div>
      <motion.div
        className="grid items-center gap-4 sm:gap-5"
        variants={itemSection}
      >
        <h2
          className={cn(
            "font-light tracking-tight leading-[1.1] text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display min-w-0",
            showUniversity && "sm:text-left",
            headingClassName
          )}
        >
          {headline}
          <span className="font-display italic">{headlineItalic}</span>
          {headlineSuffix}
        </h2>
        {showUniversity && (
          <div className="flex items-center justify-center gap-3 shrink-0">
            {universityLogo != null && universityLogo !== "" && (
              <img
                src={universityLogo}
                alt={universityName ? `${universityName} logo` : ""}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[120px] object-contain object-center"
              />
            )}
            {universityName != null && universityName !== "" && (
              <span className="font-light tracking-tight leading-[1.1] text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
                {universityName}
              </span>
            )}
          </div>
        )}
      </motion.div>
      {subtitle != null && subtitle !== "" && (
        <motion.p
          className={cn(
            "text-secondary font-light max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg",
            subtitleClassName
          )}
          variants={itemSection}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
