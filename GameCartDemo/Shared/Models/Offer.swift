import Foundation

enum Platform: String, Hashable, Codable {
    case steam
    case playStation

    var displayName: String {
        switch self {
        case .steam:
            return "Steam"
        case .playStation:
            return "PlayStation"
        }
    }

    var order: Int {
        switch self {
        case .steam: return 0
        case .playStation: return 1
        }
    }
}

struct LivePrice: Hashable {
    let currencyCode: String
    let current: Double
    let original: Double
    let currentFormatted: String?
    let originalFormatted: String?
    let discountPercent: Int
}

struct Offer: Identifiable, Hashable {
    let id: String
    let platform: Platform
    var currentPriceUSD: Double
    var originalPriceUSD: Double
    let version: String
    let psPlusIncluded: Bool
    let buyURL: URL
    let steamAppID: Int?
    var livePrice: LivePrice?

    var effectiveCurrentPrice: Double {
        livePrice?.current ?? currentPriceUSD
    }

    var effectiveOriginalPrice: Double {
        livePrice?.original ?? originalPriceUSD
    }

    var discountPercent: Int {
        if let livePrice {
            return max(livePrice.discountPercent, 0)
        }

        guard originalPriceUSD > 0 else { return 0 }
        let ratio = (originalPriceUSD - currentPriceUSD) / originalPriceUSD
        return max(Int((ratio * 100.0).rounded()), 0)
    }

    func applying(steamPrice: SteamPriceOverview) -> Offer {
        var copy = self
        copy.livePrice = LivePrice(
            currencyCode: steamPrice.currency.uppercased(),
            current: steamPrice.currentMajorUnits,
            original: steamPrice.originalMajorUnits,
            currentFormatted: steamPrice.finalFormatted,
            originalFormatted: steamPrice.initialFormatted,
            discountPercent: steamPrice.discountPercent
        )
        return copy
    }
}
