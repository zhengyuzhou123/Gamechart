# Snake (Classic)

Minimal classic Snake implementation with:
- grid-based movement
- snake growth on food
- score tracking
- wall/body game-over
- restart and pause/resume

## Run

Option A (recommended for consistent behavior), from repo root:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/`

Option B: open `/Users/ksgg/Documents/Playground/index.html` directly in browser.

## Controls

- Keyboard: Arrow keys or `W/A/S/D`
- Pause/Resume: `Space` or the Pause button
- Restart: Restart button
- Mobile: on-screen directional buttons

## Manual Verification Checklist

- Movement: snake advances one cell per tick in current direction.
- Direction rules: cannot reverse directly into itself (e.g., right -> left in one move).
- Growth: eating food increases snake length by 1 and score by 1.
- Food spawn: new food never appears on the snake body.
- Boundaries: hitting a wall ends the game.
- Self-collision: hitting the snake body ends the game.
- Pause/Resume: game state freezes and resumes correctly.
- Restart: restores initial snake, score, and non-game-over state.
