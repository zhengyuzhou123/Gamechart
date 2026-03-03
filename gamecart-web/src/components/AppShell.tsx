import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CompareDrawer } from "./CompareDrawer";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { GameRecord } from "../types/game";

interface AppShellProps {
  compareOpen: boolean;
  compareGames: GameRecord[];
  onOpenCompare: () => void;
  onCloseCompare: () => void;
  onRemoveCompare: (gameId: string) => void;
  onClearCompare: () => void;
  onOpenCommandPalette: () => void;
  tonightCount: number;
}

const pageTitleByPath: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/discover": "Discover",
  "/library": "Library",
  "/wishlist": "Wishlist",
  "/settings": "Settings"
};

const mobileTabs = [
  { to: "/dashboard", label: "Home" },
  { to: "/discover", label: "Discover" },
  { to: "/library", label: "Library" },
  { to: "/wishlist", label: "Wishlist" },
  { to: "/settings", label: "Settings" }
];

export function AppShell({
  compareOpen,
  compareGames,
  onOpenCompare,
  onCloseCompare,
  onRemoveCompare,
  onClearCompare,
  onOpenCommandPalette,
  tonightCount
}: AppShellProps): JSX.Element {
  const location = useLocation();
  const title = pageTitleByPath[location.pathname] ?? "Dashboard";

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="relative flex min-h-screen flex-1 flex-col px-4 pb-24 md:px-8 md:pb-10">
        <Topbar
          title={title}
          compareCount={compareGames.length}
          tonightCount={tonightCount}
          onOpenCommandPalette={onOpenCommandPalette}
          onOpenCompare={onOpenCompare}
        />

        <main className="flex-1">
          <Outlet />
        </main>

        <button
          type="button"
          onClick={onOpenCompare}
          className="fixed bottom-20 right-4 z-30 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 text-xs font-semibold text-neon shadow-neon md:hidden"
        >
          Compare ({compareGames.length})
        </button>

        <nav className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-5 border-t border-line bg-panel/95 p-2 md:hidden">
          {mobileTabs.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-2 py-2 text-center text-xs font-medium transition ${
                  isActive ? "bg-neon/12 text-neon" : "text-muted"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <CompareDrawer
        open={compareOpen}
        games={compareGames}
        onClose={onCloseCompare}
        onRemove={onRemoveCompare}
        onClear={onClearCompare}
      />
    </div>
  );
}
