import SwiftUI

struct SettingsView: View {
    @AppStorage("settings.region") private var regionRawValue = Region.us.rawValue
    @AppStorage("settings.currency") private var currencyRawValue = CurrencySetting.usd.rawValue
    @AppStorage("settings.dataSourceMode") private var dataSourceRawValue = DataSourceMode.mock.rawValue

    var body: some View {
        NavigationStack {
            Form {
                Section("Region") {
                    Picker("Region", selection: $regionRawValue) {
                        ForEach(Region.allCases) { region in
                            Text(region.label).tag(region.rawValue)
                        }
                    }
                }

                Section("Currency") {
                    Picker("Currency", selection: $currencyRawValue) {
                        ForEach(CurrencySetting.allCases) { currency in
                            Text(currency.rawValue).tag(currency.rawValue)
                        }
                    }
                }

                Section("Data Source") {
                    Picker("Price Source", selection: $dataSourceRawValue) {
                        ForEach(DataSourceMode.allCases) { mode in
                            Text(mode.label).tag(mode.rawValue)
                        }
                    }

                    Text("Steam live mode fetches Steam appdetails price_overview with cc=Region.")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }

                Section("Deep Link") {
                    Text("URL scheme example: gamecart://game/eldenring")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
            }
            .navigationTitle("Settings")
        }
    }
}
