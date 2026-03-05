import * as React from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/cn";

const base =
  "rounded-lg font-medium transition-all duration-300 text-center inline-flex items-center justify-center gap-2";

const variantStyles = {
  solid:
    "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-xl hover:shadow-black/20",
  outline:
    "border border-border-strong text-primary hover:border-primary group",
} as const;

const sizeStyles = {
  sm: "px-5 h-9 md:h-10 text-xs md:text-sm",
  md: "px-6 h-9 sm:px-8 md:h-10 text-sm md:text-base",
} as const;

export type CtaButtonVariant = keyof typeof variantStyles;
export type CtaButtonSize = keyof typeof sizeStyles;

type BaseCtaButtonProps = {
  variant?: CtaButtonVariant;
  size?: CtaButtonSize;
  /** Show trailing arrow (→) on hover. Only used when variant is "outline". Default true for outline, false for solid. */
  showTrailingArrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

type CtaButtonAsButton = BaseCtaButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseCtaButtonProps> & {
    to?: never;
    href?: never;
  };

type CtaButtonAsLink = BaseCtaButtonProps &
  Omit<LinkProps, keyof BaseCtaButtonProps> & {
    to: LinkProps["to"];
    href?: never;
  };

type CtaButtonAsAnchor = BaseCtaButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseCtaButtonProps> & {
    href: string;
    to?: never;
  };

export type CtaButtonProps =
  | CtaButtonAsButton
  | CtaButtonAsLink
  | CtaButtonAsAnchor;

function CtaButton({
  variant = "solid",
  size = "md",
  showTrailingArrow,
  children,
  className,
  to,
  href,
  ...rest
}: CtaButtonProps) {
  const isOutline = variant === "outline";
  const showArrow =
    showTrailingArrow ?? (variant === "outline" ? true : false);

  const sizeClass = sizeStyles[size];
  const variantClass = variantStyles[variant];
  const classes = cn(base, sizeClass, variantClass, className);

  const content = (
    <>
      {isOutline && showArrow ? (
        <span className="group-hover:mr-1 transition-all">{children}</span>
      ) : (
        children
      )}
      {isOutline && showArrow && (
        <span className="inline-block transition-all" aria-hidden>
          →
        </span>
      )}
    </>
  );

  if (to != null) {
    return (
      <Link to={to} className={classes} {...(rest as Omit<CtaButtonAsLink, keyof BaseCtaButtonProps | "to">)}>
        {content}
      </Link>
    );
  }

  if (href != null) {
    return (
      <a href={href} className={classes} {...(rest as Omit<CtaButtonAsAnchor, keyof BaseCtaButtonProps | "href">)}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export default CtaButton;
