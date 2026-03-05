import * as React from "react";
import { cn } from "../../lib/cn";

const baseClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-(--radius-tag) text-xs md:text-[0.8rem] font-display border";

const defaultVariantClass =
  "bg-surface border-border text-secondary";

/** Section theme variants use CSS variables from theme (e.g. --color-section-alert-*) */
export type TagVariant =
  | "default"
  | "alert"
  | "solution"
  | "value"
  | "implementation"
  | "mattersNow"
  | "partnerOpportunity"
  | "aboutNetworkr";

const variantStyles: Record<Exclude<TagVariant, "default">, React.CSSProperties> = {
  alert: {
    backgroundColor: "var(--color-section-alert-bg)",
    borderColor: "var(--color-section-alert-border)",
    color: "var(--color-section-alert)",
  },
  solution: {
    backgroundColor: "var(--color-section-solution-bg)",
    borderColor: "var(--color-section-solution-border)",
    color: "var(--color-section-solution)",
  },
  value: {
    backgroundColor: "var(--color-section-value-bg)",
    borderColor: "var(--color-section-value-border)",
    color: "var(--color-section-value)",
  },
  implementation: {
    backgroundColor: "var(--color-section-implementation-bg)",
    borderColor: "var(--color-section-implementation-border)",
    color: "var(--color-section-implementation)",
  },
  mattersNow: {
    backgroundColor: "var(--color-primary)",
    borderColor: "var(--color-primary)",
    color: "var(--color-primary-foreground)",
  },
  partnerOpportunity: {
    backgroundColor: "var(--color-section-partner-opportunity-bg)",
    borderColor: "var(--color-section-partner-opportunity-border)",
    color: "var(--color-section-partner-opportunity)",
  },
  aboutNetworkr: {
    backgroundColor: "var(--color-section-about-networkr-bg)",
    borderColor: "var(--color-section-about-networkr-border)",
    color: "var(--color-section-about-networkr)",
  },
};

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Optional leading icon (e.g. <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted" />) */
  icon?: React.ReactNode;
  /** Theme variant — uses section CSS variables when not "default" */
  variant?: TagVariant;
  /** Inline styles — merged after variant styles */
  sx?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Tag({
  icon,
  variant = "default",
  sx,
  className,
  style,
  children,
  ...rest
}: TagProps) {
  const variantStyle = variant === "default" ? undefined : variantStyles[variant];
  const mergedStyle = { ...variantStyle, ...sx, ...style };

  return (
    <span
      className={cn(baseClass, variant === "default" && defaultVariantClass, className)}
      style={mergedStyle}
      {...rest}
    >
      {icon != null ? (
        <>
          <span aria-hidden>{icon}</span>
          {children}
        </>
      ) : (
        children
      )}
    </span>
  );
}
