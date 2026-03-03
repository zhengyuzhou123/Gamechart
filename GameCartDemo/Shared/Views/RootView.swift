import SwiftUI

struct RootView: View {
    @StateObject private var store = AppStore()

    @AppStorage("settings.region") private var regionRawValue = Region.us.rawValue
    @AppStorage("settings.currency") private var currencyRawValue = CurrencySetting.usd.rawValue
    @AppStorage("settings.dataSourceMode") private var dataSourceRawValue = DataSourceMode.mock.rawValue

    private var region: Region {
        Region(rawValue: regionRawValue) ?? .us
    }

    private var currency: CurrencySetting {
        CurrencySetting(rawValue: currencyRawValue) ?? .usd
    }

    private var dataSourceMode: DataSourceMode {
        DataSourceMode(rawValue: dataSourceRawValue) ?? .mock
    }

    var body: some View {
        TabView(selection: $store.selectedTab) {
            HomeView(region: region, currency: currency, dataSourceMode: dataSourceMode)
                .tabItem {
                    Label("Home", systemImage: "house")
                }
                .tag(AppTab.home)

            WishlistView(region: region, currency: currency, dataSourceMode: dataSourceMode)
                .tabItem {
                    Label("Wishlist", systemImage: "heart")
                }
                .tag(AppTab.wishlist)

            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape")
                }
                .tag(AppTab.settings)
        }
        .environmentObject(store)
        .onOpenURL { url in
            store.handleDeepLink(url)
        }
    }
}
