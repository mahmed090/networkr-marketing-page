
import { cn } from '../../lib/cn';

interface StatusDotProps {
  status: any;
  size?: number;
}

const statusConfig: Record<any, { color: string; pulse: string }> = {
  open: { color: 'bg-status-open', pulse: 'pulse-dot pulse-dot-green' },
  mentorship_only: { color: 'bg-status-mentorship', pulse: 'pulse-dot pulse-dot-amber' },
  busy: { color: 'bg-status-busy', pulse: '' },
};

export default function StatusDot({ status, size = 12 }: StatusDotProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn('relative inline-block rounded-full', config.color, config.pulse)}
      style={{ width: size, height: size }}
    />
  );
}
