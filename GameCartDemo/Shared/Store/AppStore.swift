import Foundation
import SwiftUI

@MainActor
final class AppStore: ObservableObject {
    @Published private(set) var games: [Game]
    @Published var selectedTab: AppTab = .home
    @Published var homePath: [AppRoute] = []
    @Published private(set) var wishlistIDs: Set<String> = []

    init(games: [Game] = MockGames.games) {
        self.games = games
    }

    func game(id: String) -> Game? {
        games.first(where: { $0.id == id })
    }

    func isWishlisted(gameID: String) -> Bool {
        wishlistIDs.contains(gameID)
    }

    func toggleWishlist(gameID: String) {
        if wishlistIDs.contains(gameID) {
            wishlistIDs.remove(gameID)
        } else {
            wishlistIDs.insert(gameID)
        }
    }

    func removeFromWishlist(gameID: String) {
        wishlistIDs.remove(gameID)
    }

    var wishlistGames: [Game] {
        games
            .filter { wishlistIDs.contains($0.id) }
            .sorted { $0.name.localizedCaseInsensitiveCompare($1.name) == .orderedAscending }
    }

    func lowestOffer(in game: Game) -> Offer? {
        game.offers.min(by: { $0.currentPriceUSD < $1.currentPriceUSD })
    }

    func openGame(_ gameID: String) {
        selectedTab = .home
        homePath = [.gameDetail(gameID)]
    }

    func handleDeepLink(_ url: URL) {
        guard let route = DeepLinkParser.route(from: url) else { return }

        switch route {
        case .gameDetail(let gameID):
            guard game(id: gameID) != nil else { return }
            openGame(gameID)
        }
    }
}
