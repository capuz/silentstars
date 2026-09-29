---
repo: "synonymdev/bitkit-ios"
name: "bitkit-ios"
description: "Self-custodial Bitcoin and Lightning Wallet"
readmeQualityOk: true
url: "https://github.com/synonymdev/bitkit-ios"
homepage: "https://bitkit.to"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["bitcoin", "bitcoin-wallet", "lightning", "lightning-network", "self-custody", "synonym"]
stars: 9
forks: 4
openIssues: 68
closedIssues: 164
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2024-06-27T17:39:44Z"
lastCommitAt: "2026-09-29T10:03:52Z"
lastReleaseAt: "2026-06-29T05:44:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 76
maintainers: ["jvsena42", "ovitrif", "Jasonvdb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2055e85f99ba520c2f59d04425601fdb945189c9deb4b3481f2614f1343bb3ca/synonymdev/bitkit-ios"
---

# Bitkit iOS (Native)

## About

This repository contains the **native iOS app** for Bitkit.

## Contact deep links

Use `bitkit://contact?pubky=<public-key>` to open the same flow as scanning a Pubky key.
The key can be the raw 52-character public key or include its `pubky` prefix; URL-encode the value.
Unknown keys open Add Contact, saved contacts open Contact Detail, and your own key opens Profile.
This requires an existing wallet with Paykit enabled and respects the wallet's unlock flow.
Opening the link does not save a contact or initiate a payment.

## How to build

1. Open Bitkit.xcodeproj in XCode
2. Build

### Network Configuration

The app automatically selects the network based on the build configuration:

- **Debug builds** → Uses **Regtest** network (for local development and testing)
- **Release builds** → Uses **Bitcoin Mainnet** network (for production)

### Building for E2E tests

To produce an E2E build (uses the local Electrum backend by default), pass the `E2E_BUILD` compilation flag:

```bash
xcodebuild -workspace Bitkit.xcodeproj/project.xcworkspace \
  -scheme Bitkit \
  -configuration Debug \
  SWIFT_ACTIVE_COMPILATION_CONDITIONS='$(inherited) E2E_BUILD' \…
