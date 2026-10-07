---
repo: "Soneso/stellar_flutter_sdk"
name: "stellar_flutter_sdk"
description: "Stellar SDK for flutter - dart, Stellar, Horizon, Soneso"
readmeQualityOk: true
url: "https://github.com/Soneso/stellar_flutter_sdk"
language: "Dart"
languages: ["Dart"]
languagePcts: [90]
topics: ["stellar", "flutter", "plugin", "dart", "blockchain", "soneso", "sdk"]
stars: 88
forks: 36
openIssues: 0
closedIssues: 92
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2020-06-23T07:47:04Z"
lastCommitAt: "2026-10-07T10:30:55Z"
lastReleaseAt: "2020-07-06T13:59:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 51
maintainers: ["christian-rogobete", "ngybnc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16d06b06db6b4aea764797203ba3ec47f406a69d7b1fb7fccfb4f88c7ad03de0/Soneso/stellar_flutter_sdk"
discussionCount: 2
---

# [Stellar SDK for Flutter](https://github.com/Soneso/stellar_flutter_sdk)

Build and sign Stellar transactions, query [Horizon](https://developers.stellar.org/docs/data/apis/horizon), and interact with [Soroban](https://developers.stellar.org/docs/build/smart-contracts/overview) smart contracts via RPC. Communicate with anchors and external services using built-in support for 21 SEPs.

## Installation

```yaml
dependencies:
  stellar_flutter_sdk: ^3.8.0
```

```bash
flutter pub get
```

Requires Dart SDK >=3.8.0 <4.0.0 and Flutter >=3.32.0.

### iOS

Set your app's iOS deployment target to 15.0 or higher (`platform :ios, '15.0'` in `ios/Podfile`, and the Xcode project's iOS Deployment Target). Smart account passkey features additionally require iOS 16 at runtime; on iOS 15 those calls return a not-supported result while the rest of the SDK works normally.

## Quick examples

### Send a payment

Transfer XLM between accounts:

```dart
import 'package:stellar_flutter_sdk/stellar_flutter_sdk.dart';

Transaction transaction = TransactionBuilder(senderAccount)
    .addOperation(PaymentOperationBuilder(receiverId, Asset.NATIVE, '100').build())
    .build();…
