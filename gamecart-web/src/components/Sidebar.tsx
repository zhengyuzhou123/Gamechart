import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: "◈" },
  { to: "/discover", label: "Discover", icon: "⌗" },
  { to: "/library", label: "Library", icon: "▦" },
  { to: "/wishlist", label: "Wishlist", icon: "♡" },
  { to: "/settings", label: "Settings", icon: "⚙" }
];

export function Sidebar(): JSX.Element {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r border-line/70 bg-panel/80 px-4 py-5 md:flex md:flex-col">
      <div className="surface-card-hi mb-6 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-neon">GameCart</p>
        <h1 className="mt-1 text-xl font-semibold">One Library. Two Worlds.</h1>
      </div>

      <nav className="space-y-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "tab-link active" : "tab-link")}
          >
            <span className="text-xs text-neon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto surface-card p-3 text-xs text-muted">
        Compare instant price intelligence across Steam and PlayStation.
      </div>
    </aside>
  );
}
