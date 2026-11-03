---
repo: "devdasx/oath-wallet"
name: "oath-wallet"
description: "Oath Wallet is an open-source, self-custodial wallet for iPhone and iPad. See Releases for source tags and build verification records."
readmeQualityOk: true
url: "https://github.com/devdasx/oath-wallet"
homepage: "https://oathwallet.org"
language: "Swift"
languages: ["Swift"]
languagePcts: [73]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-30T17:08:49Z"
lastCommitAt: "2026-11-03T10:49:28Z"
lastReleaseAt: "2026-11-03T05:12:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 67
maintainers: ["devdasx"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef3b8058909eb0930948d9c3b7a1c7bc2202a445dd86bf6303e3498492c4742/devdasx/oath-wallet"
promoted: true
postedAt: "2026-11-01T23:05:53.666Z"
---

# Oath Wallet 5.0.2

A native multichain wallet for iPhone and iPad.

**GitHub prerelease: 5.0.2 (104).** This version contains subsequent audit fixes and has not been uploaded to App Store Connect. The separate **5.0.1 (103)** submission remains the version reported as Waiting for Review on 2 November 2026.

[Prerelease notes](https://github.com/devdasx/oath-wallet/blob/HEAD/releases/5.0.2.md) · [Website](https://oathwallet.org) ·
[Security model](https://github.com/devdasx/oath-wallet/blob/HEAD/Documentation/SecurityModel.md) · [Reporting policy](https://github.com/devdasx/oath-wallet/blob/HEAD/SECURITY.md) · [Build configuration](https://github.com/devdasx/oath-wallet/blob/HEAD/Documentation/PublicBuild.md) ·
[MIT license](https://github.com/devdasx/oath-wallet/blob/HEAD/LICENSE)

## What's new

- Includes the public audit repairs made after build 103: interrupted wallet-import recovery, wallet ordering and Bitcoin address discovery.
- Improves encrypted backup file handling and stale-progress protection, and clears revealed private keys when the app leaves the foreground.
- Hardens malformed WalletConnect encodings and XRP amount/simulation validation.
- Preserves pending…
