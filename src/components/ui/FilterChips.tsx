import { motion } from 'framer-motion';

const CHIPS = ['All', 'Students', 'Founders', 'VCs', 'Engineers', 'Open Now'] as const;

interface FilterChipsProps {
  active: string;
  onChange: (chip: string) => void;
}

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CHIPS.map((chip) => {
        const isActive = active === chip;
        return (
          <button
            key={chip}
            onClick={() => onChange(chip)}
            className={`relative px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
              isActive ? 'text-white' : 'text-text-secondary hover:text-text-primary bg-card border border-border'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 bg-brand-navy rounded-full border border-brand-navy"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{chip}</span>
          </button>
        );
      })}
    </div>
  );
}
