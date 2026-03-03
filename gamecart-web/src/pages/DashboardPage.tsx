import { motion } from "framer-motion";
import { GameCard } from "../components/GameCard";
import { SectionHeader } from "../components/SectionHeader";
import { GameRecord } from "../types/game";
import { formatCurrency, priceDropPercent } from "../lib/format";

interface DashboardPageProps {
  continuePlaying: GameRecord[];
  deals: GameRecord[];
  recommendations: GameRecord[];
  onOpenCommandPalette: () => void;
  onCompare: (gameId: string) => void;
  onDetails: (gameId: string) => void;
}

export function DashboardPage({
  continuePlaying,
  deals,
  recommendations,
  onOpenCommandPalette,
  onCompare,
  onDetails
}: DashboardPageProps): JSX.Element {
  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="surface-card-hi relative overflow-hidden p-5 md:p-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(55,233,255,0.16),transparent_40%)]" />
        <p className="text-xs uppercase tracking-[0.22em] text-neon">Game Platform</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">One Library. Two Worlds.</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          Steam and PlayStation collections in one shelf, with instant price intelligence and momentum-based recommendations.
        </p>

        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="mt-5 flex w-full items-center justify-between rounded-xl border border-line/80 bg-bg/60 px-4 py-3 text-left text-sm text-muted transition hover:border-neon/50 hover:text-ink md:max-w-lg"
        >
          <span>Search game, page, or quick command</span>
          <kbd className="rounded border border-line/80 bg-panel px-2 py-0.5 text-[11px]">Cmd/Ctrl + K</kbd>
        </button>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>
        <SectionHeader title="Continue Playing" subtitle="Resume where momentum is strongest." />
        <div className="flex snap-x gap-4 overflow-x-auto pb-2">
          {continuePlaying.map((game) => (
            <div key={game.id} className="min-w-[280px] max-w-[320px] flex-1 snap-start">
              <GameCard game={game} variant="carousel" />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <SectionHeader title="Deals Radar" subtitle="Price drops, near-all-time lows, and timing windows." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {deals.map((game) => {
            const drop = priceDropPercent(game.currentPrice, game.previousPrice);
            const atlGap = Math.max(0, Math.round(((game.currentPrice - game.lowestPrice) / game.lowestPrice) * 100));

            return (
              <article key={game.id} className="surface-card space-y-3 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="line-clamp-1 text-sm font-semibold">{game.title}</h3>
                  <span className="chip chip-accent">-{drop}%</span>
                </div>
                <p className="text-xs text-muted">Current {formatCurrency(game.currentPrice)}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-line/80 bg-bg/60 p-2">
                    <p className="text-muted">Lowest</p>
                    <p className="mt-1 text-sm font-semibold text-neon">{formatCurrency(game.lowestPrice)}</p>
                  </div>
                  <div className="rounded-lg border border-line/80 bg-bg/60 p-2">
                    <p className="text-muted">Gap vs ATL</p>
                    <p className="mt-1 text-sm font-semibold text-ink">+{atlGap}%</p>
                  </div>
                </div>
                <button type="button" className="action-btn w-full" onClick={() => onCompare(game.id)}>
                  Add to Compare
                </button>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
        <SectionHeader title="For You" subtitle="Recommendation clusters based on your Game DNA." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {recommendations.map((game) => (
            <article key={game.id} className="surface-card-hi space-y-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold">{game.title}</h3>
                  <p className="mt-1 text-xs text-muted">{game.genre.join(" · ")}</p>
                </div>
                <span className="chip">{game.primaryPlatform}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {game.dnaTags.map((tag) => (
                  <span key={tag} className="chip bg-bg/60 text-[11px] text-ink">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted">
                <span>{game.criticScore} critic</span>
                <span>{game.playerScore.toFixed(1)} user</span>
              </div>

              <button type="button" className="action-btn w-full" onClick={() => onDetails(game.id)}>
                Open Details
              </button>
            </article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
