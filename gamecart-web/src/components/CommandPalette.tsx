import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

export interface CommandItem {
  id: string;
  label: string;
  hint: string;
  type: "page" | "game";
  path?: string;
  gameId?: string;
}

interface CommandPaletteProps {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  items: CommandItem[];
  onSelect: (item: CommandItem) => void;
  onClose: () => void;
}

export function CommandPalette({
  open,
  query,
  onQueryChange,
  items,
  onSelect,
  onClose
}: CommandPaletteProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return items.slice(0, 8);
    }
    const q = query.toLowerCase();
    return items.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(q)).slice(0, 10);
  }, [items, query]);

  useEffect(() => {
    if (!open) {
      return;
    }
    setActiveIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const max = Math.max(0, filteredItems.length - 1);
    setActiveIndex((prev) => Math.min(prev, max));
  }, [filteredItems, open]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, Math.max(0, filteredItems.length - 1)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const next = filteredItems[activeIndex];
      if (next) {
        onSelect(next);
      }
      return;
    }

    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.section
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-20 z-[80] w-[92vw] max-w-2xl -translate-x-1/2 overflow-hidden rounded-panel border border-line bg-panel-hi/95 shadow-lift"
          >
            <div className="border-b border-line/80 p-3">
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search games, pages, commands"
                className="w-full rounded-lg border border-line/80 bg-bg/70 px-3 py-2 text-sm text-ink outline-none transition focus:border-neon/60"
              />
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-2">
              {filteredItems.length ? (
                filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                      index === activeIndex ? "bg-neon/12 text-ink" : "text-muted hover:bg-bg/70 hover:text-ink"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted">{item.hint}</p>
                    </div>
                    <span className="chip text-[10px] uppercase">{item.type}</span>
                  </button>
                ))
              ) : (
                <div className="rounded-lg border border-dashed border-line/80 p-5 text-sm text-muted">
                  Nothing matched this search.
                </div>
              )}
            </div>
          </motion.section>
        </>
      ) : null}
    </AnimatePresence>
  );
}
