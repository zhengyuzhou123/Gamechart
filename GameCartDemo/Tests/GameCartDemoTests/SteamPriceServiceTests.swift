import Foundation
import XCTest
@testable import GameCartDemo

final class SteamPriceServiceTests: XCTestCase {
    func testParsePriceOverview() {
        let json = """
        {
          "1245620": {
            "success": true,
            "data": {
              "price_overview": {
                "currency": "USD",
                "initial": 5999,
                "final": 3999,
                "discount_percent": 33,
                "initial_formatted": "$59.99",
                "final_formatted": "$39.99"
              }
            }
          }
        }
        """

        let data = Data(json.utf8)
        let parsed = SteamPriceService.parsePriceOverview(from: data, appID: 1245620)

        XCTAssertNotNil(parsed)
        XCTAssertEqual(parsed?.currency, "USD")
        XCTAssertEqual(parsed?.initial, 5999)
        XCTAssertEqual(parsed?.final, 3999)
        XCTAssertEqual(parsed?.discountPercent, 33)
    }

    func testResolveOfferFallsBackToMockOnFailure() async {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [URLProtocolStub.self]
        let session = URLSession(configuration: configuration)

        URLProtocolStub.requestHandler = { _ in
            throw URLError(.notConnectedToInternet)
        }

        let service = SteamPriceService(session: session)

        let mockOffer = Offer(
            id: "steam-offer",
            platform: .steam,
            currentPriceUSD: 39.99,
            originalPriceUSD: 59.99,
            version: "Standard",
            psPlusIncluded: false,
            buyURL: URL(string: "https://store.steampowered.com/app/1245620")!,
            steamAppID: 1245620,
            livePrice: nil
        )

        let resolved = await service.resolveOffer(mockOffer, region: .us)
        XCTAssertEqual(resolved, mockOffer)
    }
}

final class URLProtocolStub: URLProtocol {
    nonisolated(unsafe) static var requestHandler: (@Sendable (URLRequest) throws -> (HTTPURLResponse, Data))?

    override class func canInit(with request: URLRequest) -> Bool {
        true
    }

    override class func canonicalRequest(for request: URLRequest) -> URLRequest {
        request
    }

    override func startLoading() {
        guard let handler = Self.requestHandler else {
            client?.urlProtocol(self, didFailWithError: URLError(.badServerResponse))
            return
        }

        do {
            let (response, data) = try handler(request)
            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: data)
            client?.urlProtocolDidFinishLoading(self)
        } catch {
            client?.urlProtocol(self, didFailWithError: error)
        }
    }

    override func stopLoading() {}
}
