---
repo: "synonymdev/bitkit-android"
name: "bitkit-android"
description: "Self-custodial Bitcoin and Lightning Wallet"
readmeQualityOk: true
url: "https://github.com/synonymdev/bitkit-android"
homepage: "https://bitkit.to"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["bitcoin", "bitcoin-wallet", "lightning", "lightning-network", "self-custody", "synonym"]
stars: 13
forks: 5
openIssues: 100
closedIssues: 307
watchers: 3
contributors: 16
recentReleases: 1
createdAt: "2024-06-27T17:40:18Z"
lastCommitAt: "2026-09-21T09:14:30Z"
lastReleaseAt: "2026-06-29T05:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 75
maintainers: ["jvsena42", "pwltr", "ovitrif"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b852b8c47189af2d6463645a4c7202d0d3ae94d6ac407f0d6bb123adc46669/synonymdev/bitkit-android"
---

# Bitkit Android (Native)

## About

This repository contains the **native Android app** for Bitkit.

## Development

### Prerequisites

#### 1. Firebase Configuration

Dev and testnet debug builds use a checked-in placeholder at `app/google-services.json` so a fresh clone can compile without private Firebase files.

Download `google-services.json` from the Firebase Console when you need real Firebase integration for push notifications testing:
- Debug builds: Place in `app/src/debug/google-services.json`
- mainnetRelease: Place in `app/src/mainnetRelease/google-services.json`

The debug file above is ignored by Git and takes precedence over the checked-in placeholder. To use real Firebase integration across debug variants, make sure it includes each application ID you build.

> **Note**: Placeholder config is only for local dev and testnet debug builds. FCM token registration and push notifications require real Firebase configuration. The mainnet release flavor should always use the real `mainnetRelease/google-services.json` file.

#### 2. GitHub Packages setup

Some internal libraries are distributed via GitHub Packages. Configure credentials so Gradle can resolve them.

1)…
