---
repo: "eu-digital-identity-wallet/eudi-lib-ios-wallet-kit"
name: "eudi-lib-ios-wallet-kit"
description: "This repository contains the EUDI Wallet Kit library for iOS. The library is a part of the EUDI Wallet Reference Implementation project."
readmeQualityOk: true
url: "https://github.com/eu-digital-identity-wallet/eudi-lib-ios-wallet-kit"
homepage: "https://eu-digital-identity-wallet.github.io/eudi-lib-ios-wallet-kit/documentation/eudiwalletkit/"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["openid4vp", "walllet", "18013-5"]
stars: 43
forks: 45
openIssues: 4
closedIssues: 156
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2023-10-22T20:48:51Z"
lastCommitAt: "2026-10-29T10:37:17Z"
lastReleaseAt: "2024-02-08T14:51:40Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 66
maintainers: ["phisakel", "tdocouto-cb"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b1120d4a49c36a88ae539d9c706319d3ee71046f175be22fced7efb46d2f99d/eu-digital-identity-wallet/eudi-lib-ios-wallet-kit"
---

# EUDI Wallet Kit library for iOS

**Important!** Before you proceed, please read
the [EUDI Wallet Reference Implementation project description](https://github.com/eu-digital-identity-wallet/.github/blob/main/profile/reference-implementation.md)

----

# EUDI ISO iOS Wallet Kit library

## Overview

This repository contains the EUDI Wallet Kit library for iOS. The library is a part
of the EUDI Wallet Reference Implementation project.

This library acts as a coordinator by orchestrating the various components that are
required to implement the EUDI Wallet functionality. On top of that, it provides a simplified API
that can be used by the application to implement the EUDI Wallet functionality.

```mermaid
graph TD;
    A[eudi-lib-ios-wallet-kit]
    B[eudi-lib-ios-wallet-storage] -->  |Wallet Storage|A 
    C[eudi-lib-ios-iso18013-data-transfer] --> |Transfer Manager|A 
    D[eudi-lib-ios-openid4vci-swift] --> |OpenId4Vci Manager|A 
    E[eudi-lib-ios-siop-openid4vp-swift] --> |OpenId4Vp Manager|A 
    F[eudi-lib-ios-iso18013-security] --> |Mdoc Security|C 
    G[eudi-lib-ios-iso18013-data-model] --> |Mdoc Data Model|C 
    H[eudi-lib-ios-presentation-exchange-swift] --> E 
```

The…
