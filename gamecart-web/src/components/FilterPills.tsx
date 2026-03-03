interface FilterPillsProps {
  label: string;
  value: string;
  options: string[];
  onChange: (next: string) => void;
}

export function FilterPills({ label, value, options, onChange }: FilterPillsProps): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{label}</span>
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={active ? "chip chip-accent" : "chip hover:border-neon/40 hover:text-ink"}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
