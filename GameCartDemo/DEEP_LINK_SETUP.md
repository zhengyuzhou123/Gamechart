# Deep Link Setup (Xcode)

1. Open the app target in Xcode.
2. Go to **Signing & Capabilities** (or **Info** -> **URL Types**).
3. Add a new URL Type:
   - Identifier: `gamecart`
   - URL Schemes: `gamecart`
4. Run the app and test:
   - iOS Simulator: `xcrun simctl openurl booted "gamecart://game/eldenring"`
   - macOS app: open `gamecart://game/eldenring` from browser or Terminal.

The app handles this in `RootView` using `.onOpenURL`, then routes to Home -> GameDetail.
