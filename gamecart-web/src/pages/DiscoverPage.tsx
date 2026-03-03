import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GameCard } from "../components/GameCard";
import { SectionHeader } from "../components/SectionHeader";
import { EmptyState } from "../components/EmptyState";
import { GameRecord } from "../types/game";

interface DiscoverPageProps {
  games: GameRecord[];
  focusGameId?: string;
  onCompare: (gameId: string) => void;
  onDetails: (gameId: string) => void;
}

export function DiscoverPage({ games, focusGameId, onCompare, onDetails }: DiscoverPageProps): JSX.Element {
  const [search, setSearch] = useState("");

  const spotlight = games.find((game) => game.id === focusGameId) ?? games[0];

  const filtered = useMemo(() => {
    if (!search.trim()) {
      return games;
    }
    const q = search.toLowerCase();
    return games.filter((game) => `${game.title} ${game.genre.join(" ")} ${game.subtitle}`.toLowerCase().includes(q));
  }, [games, search]);

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.26 }}
        className="surface-card-hi overflow-hidden"
      >
        <img src={spotlight.hero} alt={spotlight.title} className="h-52 w-full object-cover md:h-64" />
        <div className="space-y-3 p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-accent">Spotlight</span>
            <span className="chip">{spotlight.primaryPlatform}</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{spotlight.title}</h1>
          <p className="max-w-3xl text-sm text-muted md:text-base">{spotlight.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {spotlight.dnaTags.map((tag) => (
              <span key={tag} className="chip bg-bg/60 text-ink">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>
        <SectionHeader title="Explore Catalog" subtitle="Find your next campaign with high-signal metadata." />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Filter by title, genre, or vibe"
          className="mb-4 w-full rounded-xl border border-line/80 bg-panel/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-neon/60 md:max-w-lg"
        />

        {filtered.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                variant="discover"
                onCompare={onCompare}
                onDetails={onDetails}
                onAddTonight={() => onCompare(game.id)}
              />
            ))}
          </div>
        ) : (
          <EmptyState title="No discovery matches" description="Try a broader genre or remove the search keywords." />
        )}
      </motion.section>
    </div>
  );
}
