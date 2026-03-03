import SwiftUI

struct HomeView: View {
    @EnvironmentObject private var store: AppStore

    let region: Region
    let currency: CurrencySetting
    let dataSourceMode: DataSourceMode

    @State private var searchText = ""

    private var normalizedSearchText: String {
        searchText.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    private var filteredGames: [Game] {
        guard !normalizedSearchText.isEmpty else { return store.games }
        return store.games.filter {
            $0.name.localizedCaseInsensitiveContains(normalizedSearchText)
        }
    }

    private var todaysDeals: [Game] {
        filteredGames.filter { $0.groups.contains(.todaysDeals) }
    }

    private var popular: [Game] {
        filteredGames.filter { $0.groups.contains(.popular) }
    }

    var body: some View {
        NavigationStack(path: $store.homePath) {
            List {
                if normalizedSearchText.isEmpty {
                    if !todaysDeals.isEmpty {
                        Section(GameGroup.todaysDeals.title) {
                            gameRows(for: todaysDeals)
                        }
                    }

                    if !popular.isEmpty {
                        Section(GameGroup.popular.title) {
                            gameRows(for: popular)
                        }
                    }
                } else {
                    Section("Search Results") {
                        gameRows(for: filteredGames)
                    }
                }
            }
            .navigationTitle("Steam + PlayStation")
            .searchable(text: $searchText, prompt: "Search games")
            .navigationDestination(for: AppRoute.self) { route in
                switch route {
                case .gameDetail(let gameID):
                    GameDetailView(
                        gameID: gameID,
                        region: region,
                        currency: currency,
                        dataSourceMode: dataSourceMode
                    )
                }
            }
        }
    }

    @ViewBuilder
    private func gameRows(for games: [Game]) -> some View {
        if games.isEmpty {
            Text("No games found")
                .foregroundStyle(.secondary)
        } else {
            ForEach(games) { game in
                NavigationLink(value: AppRoute.gameDetail(game.id)) {
                    GameRowView(
                        game: game,
                        bestOffer: store.lowestOffer(in: game),
                        currency: currency
                    )
                }
            }
        }
    }
}
