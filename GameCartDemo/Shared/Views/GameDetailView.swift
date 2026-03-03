import SwiftUI

struct GameDetailView: View {
    @EnvironmentObject private var store: AppStore

    let gameID: String
    let region: Region
    let currency: CurrencySetting
    let dataSourceMode: DataSourceMode

    @StateObject private var viewModel = GameDetailViewModel()

    var body: some View {
        Group {
            if let game = store.game(id: gameID) {
                detailContent(for: game)
            } else {
                ContentUnavailableView("Game Not Found", systemImage: "questionmark.circle")
            }
        }
        .navigationTitle("Game Detail")
#if !os(macOS)
        .navigationBarTitleDisplayMode(.inline)
#endif
    }

    private func detailContent(for game: Game) -> some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                HStack(alignment: .top) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text(game.name)
                            .font(.largeTitle.bold())

                        Text(game.shortDescription)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                    }

                    Spacer(minLength: 12)

                    Button {
                        store.toggleWishlist(gameID: game.id)
                    } label: {
                        Image(systemName: store.isWishlisted(gameID: game.id) ? "heart.fill" : "heart")
                            .font(.title2)
                            .foregroundStyle(.red)
                    }
#if os(macOS)
                    .buttonStyle(.borderless)
#else
                    .buttonStyle(.plain)
#endif
                }

                Text("系统建议：\(viewModel.recommendationText(for: game))")
                    .font(.subheadline.weight(.semibold))
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(Color.blue.opacity(0.12), in: RoundedRectangle(cornerRadius: 10, style: .continuous))

                let offers = viewModel.resolvedOffers(for: game)
                if offers.count >= 2 {
                    ViewThatFits(in: .horizontal) {
                        HStack(alignment: .top, spacing: 12) {
                            ForEach(offers) { offer in
                                OfferCardView(offer: offer, currency: currency)
                                    .frame(minWidth: 280, maxWidth: .infinity, alignment: .topLeading)
                            }
                        }

                        VStack(spacing: 12) {
                            ForEach(offers) { offer in
                                OfferCardView(offer: offer, currency: currency)
                            }
                        }
                    }
                } else {
                    ForEach(offers) { offer in
                        OfferCardView(offer: offer, currency: currency)
                    }
                }
            }
            .padding(16)
        }
        .task(id: "\(game.id)-\(region.rawValue)-\(dataSourceMode.rawValue)") {
            await viewModel.refresh(for: game, region: region, mode: dataSourceMode)
        }
    }
}
