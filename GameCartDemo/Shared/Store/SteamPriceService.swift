import Foundation

private struct SteamAppDetailsResponse: Decodable {
    let success: Bool
    let data: SteamAppData?
}

private struct SteamAppData: Decodable {
    let priceOverview: SteamPriceOverview?

    enum CodingKeys: String, CodingKey {
        case priceOverview = "price_overview"
    }
}

actor SteamPriceService {
    private let session: URLSession
    private var cache: [String: SteamPriceOverview] = [:]

    init(session: URLSession = .shared) {
        self.session = session
    }

    func resolveOffer(_ mockOffer: Offer, region: Region) async -> Offer {
        guard mockOffer.platform == .steam,
              let appID = mockOffer.steamAppID,
              let livePrice = await fetchPriceOverview(appID: appID, region: region)
        else {
            return mockOffer
        }

        return mockOffer.applying(steamPrice: livePrice)
    }

    func fetchPriceOverview(appID: Int, region: Region) async -> SteamPriceOverview? {
        let cacheKey = "\(appID)-\(region.rawValue)"
        if let cached = cache[cacheKey] {
            return cached
        }

        guard let requestURL = URL(
            string: "https://store.steampowered.com/api/appdetails?appids=\(appID)&cc=\(region.rawValue)&filters=price_overview"
        ) else {
            return nil
        }

        do {
            let (data, response) = try await session.data(from: requestURL)
            guard let httpResponse = response as? HTTPURLResponse,
                  (200..<300).contains(httpResponse.statusCode),
                  let overview = Self.parsePriceOverview(from: data, appID: appID)
            else {
                return nil
            }

            cache[cacheKey] = overview
            return overview
        } catch {
            return nil
        }
    }

    nonisolated static func parsePriceOverview(from data: Data, appID: Int? = nil) -> SteamPriceOverview? {
        guard let decoded = try? JSONDecoder().decode([String: SteamAppDetailsResponse].self, from: data) else {
            return nil
        }

        if let appID {
            let key = String(appID)
            guard let entry = decoded[key], entry.success else { return nil }
            return entry.data?.priceOverview
        }

        guard let firstEntry = decoded.values.first, firstEntry.success else { return nil }
        return firstEntry.data?.priceOverview
    }
}
