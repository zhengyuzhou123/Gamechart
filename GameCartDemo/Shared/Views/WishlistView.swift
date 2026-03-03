import SwiftUI

struct WishlistView: View {
    @EnvironmentObject private var store: AppStore

    let region: Region
    let currency: CurrencySetting
    let dataSourceMode: DataSourceMode

    var body: some View {
        NavigationStack {
            Group {
                if store.wishlistGames.isEmpty {
                    ContentUnavailableView(
                        "Wishlist Is Empty",
                        systemImage: "heart",
                        description: Text("Tap the heart icon in Game Detail to add games.")
                    )
                } else {
                    List {
                        ForEach(store.wishlistGames) { game in
                            NavigationLink {
                                GameDetailView(
                                    gameID: game.id,
                                    region: region,
                                    currency: currency,
                                    dataSourceMode: dataSourceMode
                                )
                            } label: {
                                GameRowView(
                                    game: game,
                                    bestOffer: store.lowestOffer(in: game),
                                    currency: currency
                                )
                            }
                        }
                        .onDelete { indexSet in
                            let ids = indexSet.map { store.wishlistGames[$0].id }
                            ids.forEach(store.removeFromWishlist)
                        }
                    }
                }
            }
            .navigationTitle("Wishlist")
        }
    }
}
