---
repo: "Soneso/stellar-ios-mac-sdk"
name: "stellar-ios-mac-sdk"
description: "Stellar SDK for iOS & macOS - Swift, Stellar, Horizon, Soneso"
readmeQualityOk: true
url: "https://github.com/Soneso/stellar-ios-mac-sdk"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["stellar", "blockchain", "cryptocurrency", "sdk", "ios", "macos", "swift", "horizon"]
stars: 132
forks: 55
openIssues: 0
closedIssues: 140
watchers: 10
contributors: 13
recentReleases: 0
createdAt: "2018-01-24T11:50:31Z"
lastCommitAt: "2026-10-07T10:30:34Z"
lastReleaseAt: "2018-07-18T14:38:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 47
maintainers: ["christian-rogobete", "dependabot[bot]", "ngybnc"]
openGraphImageUrl: "https://opengraph.githubassets.com/18d8ee34a1cc9a66f7b1837ed10276d6b51f9c33fee3f44ccb238dad728d755d/Soneso/stellar-ios-mac-sdk"
discussionCount: 2
---

# [Stellar SDK for iOS & macOS](https://github.com/Soneso/stellar-ios-mac-sdk)

Build and sign Stellar transactions, query [Horizon](https://developers.stellar.org/docs/data/apis/horizon), and interact with [Soroban](https://developers.stellar.org/docs/build/smart-contracts/overview) smart contracts via RPC. Communicate with anchors and external services using the built-in SEP protocol support.

## Installation

Add the SDK with Swift Package Manager:

```swift
.package(name: "stellarsdk", url: "git@github.com:Soneso/stellar-ios-mac-sdk.git", from: "3.12.0"),
```

Requires iOS 15+, macOS 12+, Xcode 16+ (Swift 6 toolchain). Your app can build in Swift 5 or Swift 6 language mode.

## Quick examples

### Send a payment

Transfer XLM between accounts:

```swift
let paymentOp = PaymentOperation(sourceAccountId: nil,
                                 destinationAccountId: receiverId,
                                 asset: Asset(type: AssetType.ASSET_TYPE_NATIVE)!,
                                 amount: 100)
let transaction = try Transaction(sourceAccount: senderAccount,
                                  operations: [paymentOp],
                                  memo: Memo.none)
try…
