import { AnimatePresence, motion } from "framer-motion";
import { GameRecord } from "../types/game";
import { formatCurrency, priceDropPercent } from "../lib/format";

interface CompareDrawerProps {
  open: boolean;
  games: GameRecord[];
  onClose: () => void;
  onRemove: (gameId: string) => void;
  onClear: () => void;
}

export function CompareDrawer({ open, games, onClose, onRemove, onClear }: CompareDrawerProps): JSX.Element {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-line/80 bg-panel-hi/95 p-5 shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neon">Compare</p>
                <h3 className="text-lg font-semibold">Price & Score Delta</h3>
              </div>
              <button type="button" onClick={onClose} className="action-btn px-2.5 py-1.5">
                Close
              </button>
            </div>

            {games.length ? (
              <>
                <div className="space-y-3 overflow-y-auto pr-1">
                  {games.map((game) => {
                    const drop = priceDropPercent(game.currentPrice, game.previousPrice);
                    return (
                      <article key={game.id} className="surface-card space-y-2 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-ink">{game.title}</h4>
                          <button
                            type="button"
                            onClick={() => onRemove(game.id)}
                            className="text-xs text-muted transition hover:text-ink"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <span className="chip">{game.primaryPlatform}</span>
                          <span className="chip">{game.genre[0]}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted">
                          <div className="rounded-lg border border-line/80 bg-bg/70 p-2">
                            <p>Current</p>
                            <p className="mt-1 text-sm font-semibold text-ink">{formatCurrency(game.currentPrice)}</p>
                          </div>
                          <div className="rounded-lg border border-line/80 bg-bg/70 p-2">
                            <p>Lowest</p>
                            <p className="mt-1 text-sm font-semibold text-neon">{formatCurrency(game.lowestPrice)}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted">
                          {drop > 0 ? `Price drop ${drop}% from last shelf update.` : "No active drop from previous snapshot."}
                        </p>
                      </article>
                    );
                  })}
                </div>
                <button type="button" onClick={onClear} className="action-btn mt-4 w-full">
                  Clear Compare
                </button>
              </>
            ) : (
              <div className="surface-card p-6 text-sm text-muted">Add titles from Library to compare them side by side.</div>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
