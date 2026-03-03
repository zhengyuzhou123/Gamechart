import { motion } from "framer-motion";
import { GameRecord } from "../types/game";
import { formatCurrency, priceDropPercent } from "../lib/format";

type CardVariant = "library" | "carousel" | "discover";

interface GameCardProps {
  game: GameRecord;
  variant?: CardVariant;
  onAddTonight?: (gameId: string) => void;
  onCompare?: (gameId: string) => void;
  onDetails?: (gameId: string) => void;
}

export function GameCard({
  game,
  variant = "library",
  onAddTonight,
  onCompare,
  onDetails
}: GameCardProps): JSX.Element {
  const drop = priceDropPercent(game.currentPrice, game.previousPrice);

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="group relative overflow-hidden rounded-[22px] border border-line/90 bg-panel-hi/95 shadow-soft"
    >
      <img src={game.cover} alt={game.title} className="h-44 w-full object-cover md:h-48" loading="lazy" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="chip bg-bg/80 text-ink">{game.primaryPlatform}</span>
        {drop > 0 ? <span className="chip chip-accent">-{drop}%</span> : null}
      </div>

      <div className="absolute bottom-0 left-0 right-0 space-y-2 p-3">
        <div className="space-y-1">
          <h3 className="line-clamp-1 text-sm font-semibold text-ink md:text-base">{game.title}</h3>
          <p className="line-clamp-2 text-xs text-muted md:text-sm">{game.subtitle}</p>
        </div>

        {variant === "carousel" ? (
          <>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg/70">
              <motion.div
                className="h-full bg-neon"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, game.progress))}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{game.progress}% complete</span>
              <span>{game.lastPlayed}</span>
            </div>
          </>
        ) : null}

        {variant === "discover" ? (
          <>
            <div className="flex flex-wrap gap-1.5">
              {game.dnaTags.slice(0, 2).map((tag) => (
                <span key={tag} className="chip bg-bg/70 text-[11px] text-ink">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" className="action-btn" onClick={() => onCompare?.(game.id)}>
                Compare
              </button>
              <button type="button" className="action-btn" onClick={() => onDetails?.(game.id)}>
                Details
              </button>
            </div>
          </>
        ) : null}

        {variant === "library" ? (
          <div className="pointer-events-none flex translate-y-2 items-center gap-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="action-btn pointer-events-auto"
              onClick={() => onAddTonight?.(game.id)}
            >
              Add to Tonight
            </button>
            <button
              type="button"
              className="action-btn pointer-events-auto"
              onClick={() => onCompare?.(game.id)}
            >
              Compare
            </button>
            <button
              type="button"
              className="action-btn pointer-events-auto"
              onClick={() => onDetails?.(game.id)}
            >
              Details
            </button>
          </div>
        ) : null}

        {variant !== "library" ? (
          <div className="flex items-center justify-between text-xs text-muted">
            <span>{formatCurrency(game.currentPrice)}</span>
            <span>
              {game.criticScore} Meta / {game.playerScore.toFixed(1)} User
            </span>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
