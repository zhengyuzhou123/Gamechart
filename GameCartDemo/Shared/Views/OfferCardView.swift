import SwiftUI

struct OfferCardView: View {
    let offer: Offer
    let currency: CurrencySetting

    @Environment(\.openURL) private var openURL

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .top) {
                Text(offer.platform.displayName)
                    .font(.headline)

                Spacer()

                Text(PriceFormatter.discountText(for: offer))
                    .font(.caption.bold())
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.orange.opacity(0.18), in: Capsule())
            }

            HStack(alignment: .firstTextBaseline, spacing: 8) {
                Text(PriceFormatter.currentPriceText(for: offer, currency: currency))
                    .font(.title3.weight(.bold))

                if offer.effectiveOriginalPrice > offer.effectiveCurrentPrice {
                    Text(PriceFormatter.originalPriceText(for: offer, currency: currency))
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                        .strikethrough()
                }
            }

            Text("Version: \(offer.version)")
                .font(.subheadline)
                .foregroundStyle(.secondary)

            if offer.platform == .playStation && offer.psPlusIncluded {
                Text("PS Plus 可玩")
                    .font(.caption.weight(.semibold))
                    .padding(.horizontal, 10)
                    .padding(.vertical, 6)
                    .background(Color.green.opacity(0.18), in: Capsule())
            }

            Button("Buy") {
                openURL(offer.buyURL)
            }
            .buttonStyle(.borderedProminent)
            .controlSize(.regular)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(.thinMaterial, in: RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .stroke(.quaternary, lineWidth: 1)
        )
    }
}
