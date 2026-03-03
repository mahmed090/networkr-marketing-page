import { motion } from 'framer-motion';
import * as React from 'react';
import { cn } from '../../lib/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', hoverable = false, onClick }: GlassCardProps) {
  const base = cn('card', hoverable && 'card-hover cursor-pointer', className);

  if (hoverable) {
    return (
      <motion.div
        className={base}
        onClick={onClick}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={base} onClick={onClick}>
      {children}
    </div>
  );
}
