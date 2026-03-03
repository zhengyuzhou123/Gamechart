import Foundation

enum PriceFormatter {
    static func currentPriceText(for offer: Offer, currency: CurrencySetting) -> String {
        if let live = offer.livePrice,
           live.currencyCode.uppercased() == currency.rawValue,
           let formatted = live.currentFormatted,
           !formatted.isEmpty {
            return formatted
        }

        return format(
            amount: offer.currentPriceUSD * currency.usdMultiplier,
            currencyCode: currency.rawValue
        )
    }

    static func originalPriceText(for offer: Offer, currency: CurrencySetting) -> String {
        if let live = offer.livePrice,
           live.currencyCode.uppercased() == currency.rawValue,
           let formatted = live.originalFormatted,
           !formatted.isEmpty {
            return formatted
        }

        return format(
            amount: offer.originalPriceUSD * currency.usdMultiplier,
            currencyCode: currency.rawValue
        )
    }

    static func discountText(for offer: Offer) -> String {
        "-\(offer.discountPercent)%"
    }

    private static func format(amount: Double, currencyCode: String) -> String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.currencyCode = currencyCode
        formatter.minimumFractionDigits = currencyCode == "JPY" ? 0 : 2
        formatter.maximumFractionDigits = currencyCode == "JPY" ? 0 : 2

        let value = NSNumber(value: amount)
        return formatter.string(from: value) ?? "\(amount) \(currencyCode)"
    }
}
