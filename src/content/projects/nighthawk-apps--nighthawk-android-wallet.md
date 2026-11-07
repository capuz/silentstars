---
repo: "nighthawk-apps/nighthawk-android-wallet"
name: "nighthawk-android-wallet"
description: "Nighthawk Wallet 3.0 for DarkFi Testnet"
readmeQualityOk: true
url: "https://github.com/nighthawk-apps/nighthawk-android-wallet"
homepage: "https://nighthawkwallet.com"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [54, 24]
topics: ["darkfi"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-03-13T16:03:34Z"
lastCommitAt: "2026-11-07T22:51:51Z"
lastReleaseAt: "2024-11-27T06:11:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 65
maintainers: ["nighthawk24"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21ba695d3bc6a33ac43ac4a73821d38c46110fbf41f4820c57237e55d363f69/nighthawk-apps/nighthawk-android-wallet"
---

# Nighthawk Wallet (DarkFi Edition) — Android

Privacy-preserving wallet (work-in-progress) by [Nighthawk Apps](https://nighthawkapps.com). This tree ships as a **new Android application id** on the DarkFi network (DRK). The app integrates a native DarkFi wallet API via **UniFFI** (`rust/darkfi-mobile-ffi` → generated Kotlin + `DarkfiMobileFfiApi`) for chain sync, broadcast, and chat.

**3.01.07** (`WALLET_VERSION_CODE=30100807`). Cyberpunk is the default theme on a light or dark system. The Void wallpaper stays anchored at the top left and continues under the status bar and the navigation bar. Body text uses DejaVu Sans Mono. Light and Paper use graphite and grey instead of teal. Sync uses lightwalletd proto 2.1.0. The default is padded trial decryption of Money notes, token mints, and compact DAO calls. UnifOMR is an experimental Advanced setting and is not maintained until DarkFi mainnet contracts are live. Embedded Tor is Arti 0.48. The wallet opens without waiting for Nym or Tor; the sync thread dials lightwalletd only once the tunnel is up. Nym is the default network for the wallet, DarkIRC, and the embedded node. The splash shows mixnet progress and **Continue without Nym**…
