import Foundation

struct SteamPriceOverview: Decodable, Equatable, Hashable {
    let currency: String
    let initial: Int
    let final: Int
    let discountPercent: Int
    let initialFormatted: String?
    let finalFormatted: String?

    enum CodingKeys: String, CodingKey {
        case currency
        case initial
        case final
        case discountPercent = "discount_percent"
        case initialFormatted = "initial_formatted"
        case finalFormatted = "final_formatted"
    }

    var currentMajorUnits: Double {
        Double(final) / 100.0
    }

    var originalMajorUnits: Double {
        Double(initial) / 100.0
    }
}
