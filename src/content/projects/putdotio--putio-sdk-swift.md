---
repo: "putdotio/putio-sdk-swift"
name: "putio-sdk-swift"
description: "Swift SDK for the put.io API"
readmeQualityOk: true
url: "https://github.com/putdotio/putio-sdk-swift"
homepage: "https://cocoapods.org/pods/PutioSDK"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["frontend", "api-client", "ios", "open-source", "putio", "sdk", "swift"]
stars: 19
forks: 4
openIssues: 4
closedIssues: 18
watchers: 5
contributors: 9
recentReleases: 5
createdAt: "2019-03-13T20:37:39Z"
lastCommitAt: "2026-10-13T10:57:31Z"
lastReleaseAt: "2026-08-25T20:48:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 94
undervaluedScore: 72
maintainers: ["altaywtf", "putio-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/63f04eb5dee5a772f7cc82095299589b714d5cb0373b8e76a5b0f42eb426e511/putdotio/putio-sdk-swift"
---

Swift SDK for the <a href="https://api.put.io/v2/docs">put.io API</a>

    Swift Package: <code>PutioSDK</code>

## Installation

Requires Xcode 26 or newer. The Swift Package targets iOS, macOS, Mac Catalyst, tvOS, and watchOS 26.

Install with Swift Package Manager in Xcode using:

```text
https://github.com/putdotio/putio-sdk-swift.git
```

Or add it to `Package.swift` and depend on the `PutioSDK` product:

```swift
dependencies: [
    .package(url: "https://github.com/putdotio/putio-sdk-swift.git", from: "4.0.0")
]
```

CocoaPods is no longer supported: [trunk goes read-only](https://blog.cocoapods.org/CocoaPods-Specs-Repo/) in December 2026, and `3.8.1` is the last `PutioSDK` pod. Switch to Swift Package Manager for `4.0.0` and later.

## Quick Start

```swift
import PutioSDK

let sdk = PutioSDK(
    config: PutioSDKConfig(
        clientID: "<your-client-id>",
        token: "<your-access-token>"
    )
)

Task {
    do {
        let account = try await sdk.getAccountInfo()
        print(account.username)
    } catch let error as PutioSDKError {
        print(error.message)
        print(error.recoverySuggestion ?? "")
    }
}
```

Every network call is `async throws` over…
