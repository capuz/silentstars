---
repo: "eu-digital-identity-wallet/eudi-srv-pid-issuer"
name: "eudi-srv-pid-issuer"
description: "A micro-service acting like PID/mDL Issuer according to OpenID4VCI"
url: "https://github.com/eu-digital-identity-wallet/eudi-srv-pid-issuer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["keycloak", "kotlin", "openid4vci", "sd-jwt-vc", "springboot3", "mdl"]
stars: 34
forks: 21
openIssues: 0
closedIssues: 164
watchers: 14
contributors: 44
recentReleases: 0
createdAt: "2023-11-14T15:19:59Z"
lastCommitAt: "2026-07-03T12:39:13Z"
lastReleaseAt: "2025-02-13T11:49:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["dzarras", "atsant", "babisRoutis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4e57da2903cc4c1ad5440d499d2333574e038d43179869d1bf7535dff84d1cd/eu-digital-identity-wallet/eudi-srv-pid-issuer"
---

# PID Issuer

**Important!** Before you proceed, please read
the [EUDI Wallet Reference Implementation project description](https://github.com/eu-digital-identity-wallet/.github/blob/main/profile/reference-implementation.md)

* [Overview](#overview)
* [OpenId4VCI coverage](#openid4vci-coverage)
* [How to use docker](#how-to-use-docker)
* [Configuration](#configuration)
* [Endpoints](#endpoints)
* [Protected Resource Metadata](#protected-resource-metadata)
* [How to contribute](#how-to-contribute)
* [License](#license)

## Overview

An implementation of a credential issuing service, according to [OpenId4VCI - v1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html),
aiming for compliance with:

* [Specification of Wallet Unit Attestations (WUA) used in issuance of PID and Attestations](https://github.com/eu-digital-identity-wallet/eudi-doc-standards-and-technical-specifications/blob/main/docs/technical-specifications/ts3-wallet-unit-attestation.md)
* [ETSI TS 119 472-3 V1.1.1](https://www.etsi.org/deliver/etsi_ts/119400_119499/11947203/01.01.01_60/ts_11947203v010101p.pdf)

The service provides generic support for `mso_mdoc` and `SD-JWT-VC` formats using PID,…
