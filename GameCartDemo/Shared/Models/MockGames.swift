import Foundation

enum MockGames {
    static let games: [Game] = [
        Game(
            id: "eldenring",
            name: "Elden Ring",
            shortDescription: "Open-world action RPG with deep combat and exploration.",
            groups: [.popular],
            offers: [
                Offer(
                    id: "eldenring-steam",
                    platform: .steam,
                    currentPriceUSD: 39.99,
                    originalPriceUSD: 59.99,
                    version: "Standard",
                    psPlusIncluded: false,
                    buyURL: URL(string: "https://store.steampowered.com/app/1245620")!,
                    steamAppID: 1245620,
                    livePrice: nil
                ),
                Offer(
                    id: "eldenring-ps",
                    platform: .playStation,
                    currentPriceUSD: 49.99,
                    originalPriceUSD: 69.99,
                    version: "PS5 Standard",
                    psPlusIncluded: false,
                    buyURL: URL(string: "https://store.playstation.com/en-us/product/UP0700-PPSA04610_00-ELDENRING000000")!,
                    steamAppID: nil,
                    livePrice: nil
                )
            ]
        ),
        Game(
            id: "hades",
            name: "Hades",
            shortDescription: "Roguelike dungeon crawler from Supergiant Games.",
            groups: [.todaysDeals],
            offers: [
                Offer(
                    id: "hades-steam",
                    platform: .steam,
                    currentPriceUSD: 14.99,
                    originalPriceUSD: 24.99,
                    version: "Standard",
                    psPlusIncluded: false,
                    buyURL: URL(string: "https://store.steampowered.com/app/1145360")!,
                    steamAppID: 1145360,
                    livePrice: nil
                ),
                Offer(
                    id: "hades-ps",
                    platform: .playStation,
                    currentPriceUSD: 19.99,
                    originalPriceUSD: 24.99,
                    version: "PS5 Standard",
                    psPlusIncluded: true,
                    buyURL: URL(string: "https://store.playstation.com/en-us/product/UP2125-PPSA01383_00-HADESGAME000000")!,
                    steamAppID: nil,
                    livePrice: nil
                )
            ]
        ),
        Game(
            id: "cyberpunk2077",
            name: "Cyberpunk 2077",
            shortDescription: "Narrative open-world RPG set in Night City.",
            groups: [.popular],
            offers: [
                Offer(
                    id: "cp2077-steam",
                    platform: .steam,
                    currentPriceUSD: 35.99,
                    originalPriceUSD: 59.99,
                    version: "Standard",
                    psPlusIncluded: false,
                    buyURL: URL(string: "https://store.steampowered.com/app/1091500")!,
                    steamAppID: 1091500,
                    livePrice: nil
                ),
                Offer(
                    id: "cp2077-ps",
                    platform: .playStation,
                    currentPriceUSD: 29.99,
                    originalPriceUSD: 59.99,
                    version: "PS5 Standard",
                    psPlusIncluded: false,
                    buyURL: URL(string: "https://store.playstation.com/en-us/product/UP4497-PPSA03974_00-0000000000000CP1")!,
                    steamAppID: nil,
                    livePrice: nil
                )
            ]
        )
    ]
}
