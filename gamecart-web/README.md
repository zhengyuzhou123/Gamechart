# GameCart Web Demo

Pure web version of the Steam + PlayStation game aggregation demo.

## Features

- Steam-style dark UI with compact, information-dense layout
- Game artwork for every title (cover in list + hero banner in detail)
- Home: grouped list (`Today's Deals` / `Popular`) + search + rating summary + deal quality tags
- GameDetail: recommendation banner + wishlist heart + Steam/PS Offer shelf
- GameDetail: ratings panel + player snapshot + price intelligence + platform feature comparison
- GameDetail: community pulse + risk notes (recent issues and content advisory tags)
- Wishlist: open detail and remove items
- Settings: Region, Currency, Data Source (`Mock` / `Steam Live`) in `localStorage`
- Steam live mode: calls Steam appdetails API with in-memory cache and fallback to mock data
- Responsive offer shelf: mobile vertical, tablet/desktop side-by-side

## Run

Option 1 (quick):
- Open `index.html` directly in browser.

Option 2 (recommended, avoids local file restrictions):
1. In terminal:
   - `cd /Users/ksgg/Documents/Playground/gamecart-web`
   - `python3 -m http.server 8080`
2. Open `http://localhost:8080`

## Route examples

- Home: `#home`
- Wishlist: `#wishlist`
- Settings: `#settings`
- Game detail: `#game/eldenring`

## Steam API

When Data Source is `Steam Live`, Steam offers call:

`https://store.steampowered.com/api/appdetails?appids=APPID&cc=REGION&filters=price_overview`

If the request fails or price data is missing, the UI falls back to mock pricing.
