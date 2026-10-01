---
repo: "worldcoin/walletkit"
name: "walletkit"
description: "WalletKit enables wallets to use World ID."
readmeQualityOk: true
url: "https://github.com/worldcoin/walletkit"
homepage: "https://docs.rs/walletkit"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["managed-by-terraform", "team-product-eng-leads"]
stars: 19
forks: 8
openIssues: 4
closedIssues: 6
watchers: 16
contributors: 32
recentReleases: 0
createdAt: "2024-01-18T09:57:17Z"
lastCommitAt: "2026-10-01T10:23:32Z"
lastReleaseAt: "2025-06-01T18:53:22Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 61
maintainers: ["Dzejkop", "wld-walletkit-bot", "kilianglas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fd96bd40e581f4379333ab64b74cedf0c13d9fdba1bc8eebf786eb585c5933e/worldcoin/walletkit"
---

WalletKit enables mobile applications to use [World ID](https://world.org/world-id).

Part of the [World ID SDK](https://docs.world.org/world-id).

WalletKit can be used as a Rust crate, or directly as a Swift or Android package. WalletKit includes foreign bindings for direct usage in Swift/Kotlin through [UniFFI](https://github.com/mozilla/uniffi-rs).

## Installation

**To use WalletKit in another Rust project:**

```bash
cargo install walletkit
```

**To use WalletKit in an iOS app:**

WalletKit is distributed through a separate repo specifically for Swift bindings. This repo contains all the binaries required and is a mirror of `@worldcoin/walletkit`.

1. Navigate to File > Swift Packages > Add Package Dependency in Xcode.
2. Enter the WalletKit repo URL (note this is **not** the same repo): `https://github.com/worldcoin/walletkit-swift`

**To use WalletKit in an Android app:**

WalletKit's bindings for Kotlin are distributed through GitHub packages.

1. Update `build.gradle` (App Level)

```kotlin
dependencies {
    /// ...
    implementation "org.world:walletkit:VERSION"
}
```

Replace `VERSION` with the desired WalletKit version.

2. Sync Gradle.

## Local development…
