import Foundation

enum Region: String, CaseIterable, Identifiable {
    case us = "US"
    case jp = "JP"
    case gb = "GB"

    var id: String { rawValue }

    var label: String {
        switch self {
        case .us: return "United States (US)"
        case .jp: return "Japan (JP)"
        case .gb: return "United Kingdom (GB)"
        }
    }
}

enum CurrencySetting: String, CaseIterable, Identifiable {
    case usd = "USD"
    case jpy = "JPY"
    case gbp = "GBP"

    var id: String { rawValue }

    // Demo-only static conversion rates from USD.
    var usdMultiplier: Double {
        switch self {
        case .usd: return 1.0
        case .jpy: return 150.0
        case .gbp: return 0.79
        }
    }
}

enum DataSourceMode: String, CaseIterable, Identifiable {
    case mock
    case steamLive

    var id: String { rawValue }

    var label: String {
        switch self {
        case .mock:
            return "Mock"
        case .steamLive:
            return "Steam Live (Fallback to Mock)"
        }
    }
}
