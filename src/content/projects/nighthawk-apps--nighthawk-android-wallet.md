---
repo: "nighthawk-apps/nighthawk-android-wallet"
name: "nighthawk-android-wallet"
description: "Nighthawk Wallet 3.0 for DarkFi Testnet"
readmeQualityOk: true
url: "https://github.com/nighthawk-apps/nighthawk-android-wallet"
homepage: "https://nighthawkwallet.com"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [55, 25]
topics: ["darkfi"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-03-13T16:03:34Z"
lastCommitAt: "2026-11-23T10:25:48Z"
lastReleaseAt: "2024-11-27T06:11:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 68
maintainers: ["nighthawk24"]
openGraphImageUrl: "https://opengraph.githubassets.com/df33c67b3595c5b09733ee6749962068a71c60bb1664d71431bf02563dd2c209/nighthawk-apps/nighthawk-android-wallet"
---

# Nighthawk Wallet (DarkFi Edition) — Android

  &nbsp;&nbsp;

Privacy-preserving wallet (work-in-progress) by [Nighthawk Apps](https://nighthawkapps.com). This tree ships as a **new Android application id** on the DarkFi network (DRK). The app integrates a native DarkFi wallet API via **UniFFI** (`rust/darkfi-mobile-ffi` → generated Kotlin + `DarkfiMobileFfiApi`) for chain sync, broadcast, and chat.

**3.01.19** (`WALLET_VERSION_CODE=30100819`). The F-Droid native build turns off thin LTO so two rebuilds match. It also strips machine paths. Chat is the tab selected when you open the app. Default sync trial-decrypts notes in parallel. DarkFi pin `9d7ceaf77`, Arti 0.48, UniFFI 0.32.2 (`darkfi-mobile-ffi` 0.2.3), nym-smolmix `5f0dba82`. Aligns with iOS 3.01.19, desktop 3.1.19, Moonshine 3.1.19, and lightwalletd 0.3.12 (see [docs/VERSION_LOCKSTEP.md](https://github.com/nighthawk-apps/nighthawk-android-wallet/blob/HEAD/docs/VERSION_LOCKSTEP.md)).
