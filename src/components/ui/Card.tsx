import * as React from 'react'; 
import { cn } from "../../lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Optional: adds a subtle circular glow in the top-right. Pass a theme bg class for tint (e.g. bg-brand-gold/15). */
  withGlow?: boolean;
  /** Glow circle background class (e.g. bg-brand-gold/15). Defaults to gray if withGlow and not set. */
  glowClassName?: string;
}

export default function Card({
  children,
  className,
  withGlow = false,
  glowClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        "card relative overflow-hidden p-6 sm:p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {withGlow && (
        <div
          className={cn(
            "pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl",
            glowClassName ?? "bg-gray-100/80"
          )}
          aria-hidden
        />
      )}
      <div className="relative z-10 text-left">{children}</div>
    </div>
  );
}
