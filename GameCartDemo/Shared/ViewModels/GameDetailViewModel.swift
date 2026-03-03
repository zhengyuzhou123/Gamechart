import Foundation

@MainActor
final class GameDetailViewModel: ObservableObject {
    @Published private(set) var liveSteamOffer: Offer?

    private let steamService: SteamPriceService

    init(steamService: SteamPriceService = SteamPriceService()) {
        self.steamService = steamService
    }

    func refresh(for game: Game, region: Region, mode: DataSourceMode) async {
        guard mode == .steamLive,
              let steamOffer = game.steamOffer
        else {
            liveSteamOffer = nil
            return
        }

        liveSteamOffer = await steamService.resolveOffer(steamOffer, region: region)
    }

    func resolvedOffers(for game: Game) -> [Offer] {
        game.offers
            .map { offer in
                guard offer.platform == .steam else { return offer }
                return liveSteamOffer ?? offer
            }
            .sorted { $0.platform.order < $1.platform.order }
    }

    func recommendationText(for game: Game) -> String {
        let offers = resolvedOffers(for: game)

        if let psOffer = offers.first(where: { $0.platform == .playStation }), psOffer.psPlusIncluded {
            return "有 PS Plus 别买直接玩"
        }

        guard let cheapest = offers.min(by: { $0.currentPriceUSD < $1.currentPriceUSD }) else {
            return "暂无可比较报价"
        }

        return "当前更划算平台 = \(cheapest.platform.displayName)"
    }
}
