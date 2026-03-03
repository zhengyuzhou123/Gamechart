# Gamechart

Steam + PlayStation game shelf demo with player-focused decision info.

## What is in this repo

- `gamecart-web/`: pure web demo (Steam-style UI, price comparison, ratings, player insights)
- `GameCartDemo/`: SwiftUI Multiplatform demo source (iOS + macOS)
- `index.html`: root entry that loads `gamecart-web`
- `src/` and root `styles.css`: legacy snake demo files

## Quick start (web)

```bash
cd /Users/ksgg/Documents/Playground
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Web routes

- Home: `#home`
- Wishlist: `#wishlist`
- Settings: `#settings`
- Game detail: `#game/eldenring`

## Notes

- Steam live price mode uses: `https://store.steampowered.com/api/appdetails?appids=APPID&cc=REGION&filters=price_overview`
- If live request fails, UI falls back to mock data.
