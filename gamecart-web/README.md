# GameCart Platform UI

Premium game-platform style UI with both:
- a standalone static launcher (`SP.html` / `index.html`) for double-click usage,
- and the React + TypeScript + Tailwind + Framer Motion source workspace.

## Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite

## Pages

- Dashboard
- Discover
- Library
- Wishlist
- Settings

## Key UI Systems

- Dark theme with one neon accent and layered surfaces
- `Cmd/Ctrl + K` command palette (pages + game jump)
- Continue Playing carousel with progress bars
- Deals Radar cards (drop and low-price context)
- Game DNA recommendation tags
- Library multi-filter bar + hover actions
- Compare drawer with animated transitions
- Wishlist price tracking cards + mini sparkline
- Responsive mobile bottom tab bar
- Design tokens in [`src/design/tokens.ts`](./src/design/tokens.ts)

## Quick Launch (No Node Required)

- Double-click `/Users/ksgg/Documents/Playground/gamecart-web/SP.html`
- or double-click `/Users/ksgg/Documents/Playground/gamecart-web/index.html`

Both are standalone static pages and can run directly from local files.

## Dev Mode (Optional)

```bash
cd /Users/ksgg/Documents/Playground/gamecart-web
npm install
npm run dev
```

Then open the local Vite URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```
