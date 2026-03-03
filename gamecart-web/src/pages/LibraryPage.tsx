import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { EmptyState } from "../components/EmptyState";
import { FilterPills } from "../components/FilterPills";
import { GameCard } from "../components/GameCard";
import { SectionHeader } from "../components/SectionHeader";
import { GameRecord } from "../types/game";

interface LibraryPageProps {
  games: GameRecord[];
  onAddTonight: (gameId: string) => void;
  onCompare: (gameId: string) => void;
  onDetails: (gameId: string) => void;
}

export function LibraryPage({ games, onAddTonight, onCompare, onDetails }: LibraryPageProps): JSX.Element {
  const genreOptions = useMemo(() => {
    const all = new Set<string>();
    games.forEach((game) => game.genre.forEach((genre) => all.add(genre)));
    return ["All", ...Array.from(all).slice(0, 10)];
  }, [games]);

  const [platformFilter, setPlatformFilter] = useState("All");
  const [genreFilter, setGenreFilter] = useState("All");
  const [multiplayerFilter, setMultiplayerFilter] = useState("All");
  const [completedFilter, setCompletedFilter] = useState("All");
  const [recentFilter, setRecentFilter] = useState("All");

  const filtered = useMemo(
    () =>
      games.filter((game) => {
        if (platformFilter !== "All" && !game.platforms.includes(platformFilter as "Steam" | "PlayStation")) {
          return false;
        }

        if (genreFilter !== "All" && !game.genre.includes(genreFilter)) {
          return false;
        }

        if (multiplayerFilter === "Multiplayer" && !game.multiplayer) {
          return false;
        }

        if (multiplayerFilter === "Single-player" && game.multiplayer) {
          return false;
        }

        if (completedFilter === "Completed" && !game.completed) {
          return false;
        }

        if (completedFilter === "In Progress" && game.completed) {
          return false;
        }

        if (recentFilter === "Recently Played" && !game.recentlyPlayed) {
          return false;
        }

        if (recentFilter === "Backlog" && game.recentlyPlayed) {
          return false;
        }

        return true;
      }),
    [games, platformFilter, genreFilter, multiplayerFilter, completedFilter, recentFilter]
  );

  return (
    <div className="space-y-6">
      <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
        <SectionHeader title="Library" subtitle="Tune filters to surface what matters right now." />

        <div className="surface-card space-y-3 p-4">
          <FilterPills
            label="Platform"
            value={platformFilter}
            options={["All", "Steam", "PlayStation"]}
            onChange={setPlatformFilter}
          />
          <FilterPills label="Genre" value={genreFilter} options={genreOptions} onChange={setGenreFilter} />
          <FilterPills
            label="Multiplayer"
            value={multiplayerFilter}
            options={["All", "Multiplayer", "Single-player"]}
            onChange={setMultiplayerFilter}
          />
          <FilterPills
            label="Completed"
            value={completedFilter}
            options={["All", "Completed", "In Progress"]}
            onChange={setCompletedFilter}
          />
          <FilterPills
            label="Recency"
            value={recentFilter}
            options={["All", "Recently Played", "Backlog"]}
            onChange={setRecentFilter}
          />
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>
        {filtered.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                variant="library"
                onAddTonight={onAddTonight}
                onCompare={onCompare}
                onDetails={onDetails}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No games fit this loadout"
            description="Try resetting one of the filters or switching platform scope."
          />
        )}
      </motion.section>
    </div>
  );
}
