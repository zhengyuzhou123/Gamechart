import { motion } from "framer-motion";
import { EmptyState } from "../components/EmptyState";
import { SectionHeader } from "../components/SectionHeader";
import { sparklinePath, formatCurrency, priceDropPercent } from "../lib/format";
import { GameRecord } from "../types/game";

interface WishlistPageProps {
  games: GameRecord[];
  onToggleWishlist: (gameId: string) => void;
  onCompare: (gameId: string) => void;
  onDetails: (gameId: string) => void;
}

function WishlistSparkline({ values }: { values: number[] }): JSX.Element {
  const path = sparklinePath(values, 176, 42, 4);

  return (
    <svg viewBox="0 0 176 42" className="h-10 w-full rounded-md bg-bg/60">
      <path d={path} fill="none" stroke="rgb(var(--gc-neon))" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WishlistPage({ games, onToggleWishlist, onCompare, onDetails }: WishlistPageProps): JSX.Element {
  return (
    <div className="space-y-6">
      <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
        <SectionHeader
          title="Wishlist"
          subtitle="Track drop momentum, all-time lows, and quick compare entries."
        />

        {games.length ? (
          <div className="grid gap-3">
            {games.map((game) => {
              const drop = priceDropPercent(game.currentPrice, game.previousPrice);
              const atlReached = game.currentPrice <= game.lowestPrice;

              return (
                <article key={game.id} className="surface-card-hi grid gap-4 p-4 md:grid-cols-[220px_1fr]">
                  <img src={game.cover} alt={game.title} className="h-28 w-full rounded-xl object-cover md:h-full" />

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold">{game.title}</h3>
                        <p className="text-sm text-muted">{game.subtitle}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="chip chip-accent">{drop > 0 ? `-${drop}%` : "Stable"}</span>
                        <span className="chip">{game.primaryPlatform}</span>
                      </div>
                    </div>

                    <div className="grid gap-2 text-sm md:grid-cols-3">
                      <div className="rounded-lg border border-line/80 bg-bg/70 p-2">
                        <p className="text-xs text-muted">Current</p>
                        <p className="mt-1 font-semibold">{formatCurrency(game.currentPrice)}</p>
                      </div>
                      <div className="rounded-lg border border-line/80 bg-bg/70 p-2">
                        <p className="text-xs text-muted">Lowest</p>
                        <p className="mt-1 font-semibold text-neon">{formatCurrency(game.lowestPrice)}</p>
                      </div>
                      <div className="rounded-lg border border-line/80 bg-bg/70 p-2">
                        <p className="text-xs text-muted">Badge</p>
                        <p className="mt-1 font-semibold text-ink">{atlReached ? "Historical Low" : "Tracking"}</p>
                      </div>
                    </div>

                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.14em] text-muted">Price Curve</p>
                      <WishlistSparkline values={game.priceHistory} />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button type="button" className="action-btn" onClick={() => onCompare(game.id)}>
                        Compare
                      </button>
                      <button type="button" className="action-btn" onClick={() => onDetails(game.id)}>
                        Details
                      </button>
                      <button type="button" className="action-btn" onClick={() => onToggleWishlist(game.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="Wishlist is empty"
            description="Star games from Discover or Library to start tracking live deal momentum."
          />
        )}
      </motion.section>
    </div>
  );
}
