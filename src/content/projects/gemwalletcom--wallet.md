---
repo: "gemwalletcom/wallet"
name: "wallet"
description: "Gem Wallet - Open Source iOS and Android Crypto Wallet"
readmeQualityOk: true
url: "https://github.com/gemwalletcom/wallet"
homepage: "https://gemwallet.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [60]
topics: ["bitcoin", "cryptocurrency", "cryptowallet", "defi", "ethereum", "solana", "sui", "ton", "wallet"]
stars: 369
forks: 28
openIssues: 19
closedIssues: 597
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2026-03-26T18:05:22Z"
lastCommitAt: "2026-10-24T00:15:01Z"
lastReleaseAt: "2026-04-01T23:32:03Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 29
maintainers: ["gemcoder21", "gembotter", "0xh3rman"]
openGraphImageUrl: "https://opengraph.githubassets.com/89266f59c95b546870bca323654c98d1b4af78155e0da12659d0f0b9451c6bf9/gemwalletcom/wallet"
---

# Gem Wallet

Gem Wallet is an open-source mobile wallet for iOS and Android. This repository is the monorepo for both apps and the shared Rust core they build against.

## Install

- [App Store](https://apps.apple.com/app/apple-store/id6448712670?ct=github&mt=8)
- [Google Play](https://play.google.com/store/apps/details?id=com.gemwallet.android&utm_campaign=github&utm_source=referral&utm_medium=github)
- [F-Droid](https://f-droid.org/en/packages/com.gemwallet.android/)
- [Android APK releases](https://github.com/gemwalletcom/wallet/releases/latest)

## Features

- Open source, self-custodial wallet with multi-chain support
- Native iOS and Android apps with shared Rust-based blockchain functionality
- Swaps, staking, WalletConnect, fiat on/off ramp, alerts, and market data

## Repository

- `ios/`: SwiftUI application, packages, tests, and iOS-only submodules
- `android/`: Kotlin/Compose application and Android build tooling
- `core/`: shared Rust source used by both mobile apps

## Getting Started

1. Clone the repository with iOS submodules:

```bash
git clone --recursive https://github.com/gemwalletcom/wallet.git
cd wallet
```

2. If needed, initialize iOS submodules later:…
