import Foundation

enum AppRoute: Hashable {
    case gameDetail(String)
}

enum DeepLinkParser {
    static func route(from url: URL) -> AppRoute? {
        guard url.scheme?.lowercased() == "gamecart" else { return nil }
        guard url.host?.lowercased() == "game" else { return nil }

        let gameID = url.pathComponents
            .filter { $0 != "/" }
            .first?
            .lowercased() ?? ""

        guard !gameID.isEmpty else { return nil }
        return .gameDetail(gameID)
    }
}
