import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { CommandItem, CommandPalette } from "./components/CommandPalette";
import {
  continuePlayingIds,
  dealsRadarIds,
  gameMap,
  games,
  recommendationIds,
  wishlistSeedIds
} from "./data/mockGames";
import { DashboardPage } from "./pages/DashboardPage";
import { DiscoverPage } from "./pages/DiscoverPage";
import { LibraryPage } from "./pages/LibraryPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WishlistPage } from "./pages/WishlistPage";
import { GameRecord } from "./types/game";

function pick(ids: string[]): GameRecord[] {
  return ids
    .map((id) => gameMap.get(id))
    .filter((game): game is GameRecord => Boolean(game));
}

export default function App(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [tonightIds, setTonightIds] = useState<string[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(wishlistSeedIds);

  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");

  const [region, setRegion] = useState("US");
  const [currency, setCurrency] = useState("USD");
  const [priceAlerts, setPriceAlerts] = useState(true);

  const continuePlaying = useMemo(() => pick(continuePlayingIds), []);
  const dealRadar = useMemo(() => pick(dealsRadarIds), []);
  const recommendations = useMemo(() => pick(recommendationIds), []);
  const compareGames = useMemo(() => pick(compareIds), [compareIds]);
  const wishlistGames = useMemo(() => pick(wishlistIds), [wishlistIds]);

  const discoverFocusId = useMemo(() => {
    const value = new URLSearchParams(location.search).get("focus");
    return value ?? undefined;
  }, [location.search]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const addToCompare = (gameId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(gameId)) {
        return prev;
      }
      return [...prev, gameId].slice(-4);
    });
    setCompareOpen(true);
  };

  const removeFromCompare = (gameId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== gameId));
  };

  const clearCompare = () => setCompareIds([]);

  const addToTonight = (gameId: string) => {
    setTonightIds((prev) => (prev.includes(gameId) ? prev : [...prev, gameId]));
  };

  const openDetails = (gameId: string) => {
    navigate(`/discover?focus=${gameId}`);
  };

  const toggleWishlist = (gameId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(gameId)) {
        return prev.filter((id) => id !== gameId);
      }
      return [...prev, gameId];
    });
  };

  const commandItems = useMemo<CommandItem[]>(() => {
    const pages: CommandItem[] = [
      { id: "page-dashboard", label: "Go to Dashboard", hint: "Home command center", type: "page", path: "/dashboard" },
      { id: "page-discover", label: "Go to Discover", hint: "Browse and spotlight feed", type: "page", path: "/discover" },
      { id: "page-library", label: "Go to Library", hint: "Filter all owned titles", type: "page", path: "/library" },
      { id: "page-wishlist", label: "Go to Wishlist", hint: "Track prices and alerts", type: "page", path: "/wishlist" },
      { id: "page-settings", label: "Go to Settings", hint: "Region and preference controls", type: "page", path: "/settings" }
    ];

    const catalog = games.map((game) => ({
      id: `game-${game.id}`,
      label: game.title,
      hint: `${game.genre.join(" · ")} · ${game.primaryPlatform}`,
      type: "game" as const,
      gameId: game.id
    }));

    return [...pages, ...catalog];
  }, []);

  const onCommandSelect = (item: CommandItem) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.gameId) {
      navigate(`/discover?focus=${item.gameId}`);
    }

    setPaletteOpen(false);
    setPaletteQuery("");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          element={
            <AppShell
              compareOpen={compareOpen}
              compareGames={compareGames}
              onOpenCompare={() => setCompareOpen(true)}
              onCloseCompare={() => setCompareOpen(false)}
              onRemoveCompare={removeFromCompare}
              onClearCompare={clearCompare}
              onOpenCommandPalette={() => setPaletteOpen(true)}
              tonightCount={tonightIds.length}
            />
          }
        >
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                continuePlaying={continuePlaying}
                deals={dealRadar}
                recommendations={recommendations}
                onOpenCommandPalette={() => setPaletteOpen(true)}
                onCompare={addToCompare}
                onDetails={openDetails}
              />
            }
          />

          <Route
            path="/discover"
            element={<DiscoverPage games={games} focusGameId={discoverFocusId} onCompare={addToCompare} onDetails={openDetails} />}
          />

          <Route
            path="/library"
            element={<LibraryPage games={games} onAddTonight={addToTonight} onCompare={addToCompare} onDetails={openDetails} />}
          />

          <Route
            path="/wishlist"
            element={
              <WishlistPage
                games={wishlistGames}
                onToggleWishlist={toggleWishlist}
                onCompare={addToCompare}
                onDetails={openDetails}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <SettingsPage
                region={region}
                currency={currency}
                onRegionChange={setRegion}
                onCurrencyChange={setCurrency}
                priceAlerts={priceAlerts}
                onPriceAlertsChange={setPriceAlerts}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <CommandPalette
        open={paletteOpen}
        query={paletteQuery}
        onQueryChange={setPaletteQuery}
        items={commandItems}
        onClose={() => setPaletteOpen(false)}
        onSelect={onCommandSelect}
      />
    </>
  );
}
