# GameCartDemo (SwiftUI Multiplatform)

A SwiftUI multiplatform demo app for Steam + PlayStation game aggregation, price comparison, and review hints.

## Included Features

- Home: grouped list (`Today's Deals` / `Popular`) + search
- GameDetail: recommendation banner + Steam/PS offer shelf cards + external buy links
- Wishlist: add/remove favorite games
- Settings: `Region` and `Currency` with `@AppStorage`
- Optional enhancements included:
  - Adaptive offer layout (iPhone vertical, iPad/macOS horizontal via `ViewThatFits`)
  - Discount badge + `PS Plus 可玩` capsule
  - Switchable data source (`Mock` / `Steam Live` with in-memory cache and fallback)
  - Deep link routing (`gamecart://game/<gameID>`)

## Xcode Setup

1. Create a new **App** project in Xcode with:
   - Interface: SwiftUI
   - Language: Swift
   - Platforms: iOS + macOS (Multiplatform)
   - Product Name: `GameCartDemo`
2. Add all files under `Shared` to your shared target.
3. Add `GameCartDemoApp.swift` to the app target.
4. Add test file under your test target.
5. Configure URL scheme as documented in `DEEP_LINK_SETUP.md`.

## Steam API Notes

When Settings -> Data Source is `Steam Live (Fallback to Mock)`, Steam offers with `steamAppID` call:

`https://store.steampowered.com/api/appdetails?appids=APPID&cc=REGION&filters=price_overview`

Failures or missing price data automatically keep Mock pricing.
