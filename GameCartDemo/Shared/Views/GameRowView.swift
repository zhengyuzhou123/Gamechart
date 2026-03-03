import SwiftUI

struct GameRowView: View {
    let game: Game
    let bestOffer: Offer?
    let currency: CurrencySetting

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(game.name)
                .font(.headline)

            Text(game.shortDescription)
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .lineLimit(2)

            if let bestOffer {
                Text("From \(PriceFormatter.currentPriceText(for: bestOffer, currency: currency)) on \(bestOffer.platform.displayName)")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
        }
        .padding(.vertical, 4)
    }
}
