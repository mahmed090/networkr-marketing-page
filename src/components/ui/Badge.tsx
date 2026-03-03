import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center',
  {
    variants: {
      variant: {
        default: 'bg-surface border border-border text-text-secondary',
        accent: 'bg-surface text-text-primary border border-border',
        success: 'bg-green-50 text-green-700 border border-green-200',
        warning: 'bg-amber-50 text-amber-700 border border-amber-200',
        muted: 'bg-surface text-text-muted',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded-full',
        md: 'text-sm px-3 py-1 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, variant, size, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}

export { badgeVariants };
