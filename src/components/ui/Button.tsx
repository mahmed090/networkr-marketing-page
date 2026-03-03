import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'rounded-lg h-10 text-sm transition-colors flex items-center justify-center gap-2 px-4',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent-hover font-medium shadow-lg shadow-accent-glow',
        outline: 'border border-border text-text-primary bg-card hover:bg-surface font-medium',
        ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface',
        muted: 'bg-surface text-text-muted cursor-not-allowed',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
