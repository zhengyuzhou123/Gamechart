import Foundation

enum GameGroup: String, Hashable {
    case todaysDeals
    case popular

    var title: String {
        switch self {
        case .todaysDeals: return "Today's Deals"
        case .popular: return "Popular"
        }
    }
}

struct Game: Identifiable, Hashable {
    let id: String
    let name: String
    let shortDescription: String
    let groups: Set<GameGroup>
    let offers: [Offer]

    var steamOffer: Offer? {
        offers.first(where: { $0.platform == .steam })
    }

    var playStationOffer: Offer? {
        offers.first(where: { $0.platform == .playStation })
    }
}
