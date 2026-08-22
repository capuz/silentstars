---
repo: "lexe-app/lexe-public"
name: "lexe-public"
description: "Lexe's public monorepo including the node, app, SDKs, and shared libraries"
readmeQualityOk: true
url: "https://github.com/lexe-app/lexe-public"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [69, 24]
stars: 80
forks: 1
openIssues: 3
closedIssues: 12
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2022-04-13T01:52:34Z"
lastCommitAt: "2026-08-22T04:06:31Z"
lastReleaseAt: "2025-01-30T04:09:32Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 46
maintainers: ["MaxFangX", "nicolft", "phlip9"]
openGraphImageUrl: "https://opengraph.githubassets.com/f66302a9e2fcd61b4b5fee2832c6d5824bfe770d67162560dcb3d520b3bba25c/lexe-app/lexe-public"
---

# Lexe Public Monorepo

Lexe is a managed, non-custodial Lightning node and wallet based on Intel SGX.

- [LDK](https://github.com/lightningdevkit/rust-lightning)-based Lightning node written in Rust
- Flutter/Dart [iOS](https://www.lexe.app/ios) and [Android](https://www.lexe.app/android) apps
- [BDK](https://github.com/bitcoindevkit/bdk) wallet for on-chain payments
- [Fortanix EDP](https://edp.fortanix.com/) for integration with SGX

This repository contains all public code including the user Lightning node, iOS / Android apps, and shared libraries.

More information is available on our website: [lexe.app](https://lexe.app)

See our [features and roadmap](https://docs.lexe.app/roadmap/) for what Lexe supports today and what's coming next.

## Lexe SDKs

Looking for Lexe's SDKs? This repo only contains source code. You can find the
SDK docs here:

- Rust SDK: <https://github.com/lexe-app/lexe-sdk/tree/master/rust>
- Python SDK: <https://github.com/lexe-app/lexe-sdk/tree/master/python>
- Sidecar SDK: <https://github.com/lexe-app/lexe-sidecar-sdk>

## Guide to this repository

- [`node`](https://github.com/lexe-app/lexe-public/blob/HEAD/node): Lightning node (usually referred to…
