interface TopbarProps {
  title: string;
  onOpenCommandPalette: () => void;
  onOpenCompare: () => void;
  compareCount: number;
  tonightCount: number;
}

export function Topbar({
  title,
  onOpenCommandPalette,
  onOpenCompare,
  compareCount,
  tonightCount
}: TopbarProps): JSX.Element {
  return (
    <header className="sticky top-0 z-20 mb-5 flex items-center justify-between gap-3 border-b border-line/70 bg-bg/80 pb-3 pt-4 backdrop-blur">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Platform Hub</p>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="hidden items-center gap-2 rounded-xl border border-line bg-panel/75 px-3 py-2 text-xs font-medium text-muted transition hover:border-neon/50 hover:text-ink sm:inline-flex"
        >
          <span>Search</span>
          <kbd className="rounded border border-line/90 bg-bg px-1.5 py-0.5 text-[10px]">⌘K</kbd>
        </button>

        <button
          type="button"
          onClick={onOpenCompare}
          className="flex items-center gap-2 rounded-xl border border-line/80 bg-panel/70 px-3 py-2 text-xs text-muted transition hover:border-neon/40 hover:text-ink"
        >
          <span>Tonight {tonightCount}</span>
          <span className="text-line">•</span>
          <span>Compare {compareCount}</span>
        </button>
      </div>
    </header>
  );
}
