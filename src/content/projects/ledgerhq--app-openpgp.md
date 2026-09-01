---
repo: "LedgerHQ/app-openpgp"
name: "app-openpgp"
description: "OpenPGP Card Application "
readmeQualityOk: true
url: "https://github.com/LedgerHQ/app-openpgp"
homepage: "https://ledgerhq.github.io/app-openpgp/"
language: "C"
languages: ["C", "Python"]
languagePcts: [51, 32]
stars: 146
forks: 27
openIssues: 0
closedIssues: 90
watchers: 19
contributors: 60
recentReleases: 0
createdAt: "2017-03-21T14:21:34Z"
lastCommitAt: "2026-09-01T08:48:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 46
maintainers: ["cedelavergne-ledger", "agrojean-ledger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/451c0ead5b43638ae9b3865a32f3fbb519abc4753df4e77c9f641db5a14144b7/LedgerHQ/app-openpgp"
---

# GnuPG application

GnuPG application for Ledger devices

This application implements "The OpenPGP smartcard" specification revision 3.3.
This specification is available in *doc* directory and at <https://www.gnupg.org/ftp/specs/>.

The application supports:

- RSA with key up to 4096 bits
- ECDSA with secp256R1 and secp256K1
- EDDSA with Ed25519 curve
- ECDH with secp256R1, secp256K1 and curve25519 curves

> [!CAUTION]
> **⚠️ Data loss on App or OS update.**
>
> All keys and metadata stored on the device are wiped whenever the App is reinstalled,
> which happens during any App update and during any OS update.
> A backup/restore script is provided, but it is **not trivial to use and does not work in every scenario**.
> See [Known limitations](#known-limitations) before you generate keys you cannot afford to lose.

## Table of Contents

- [Installation and Usage](#installation-and-usage)
- [Add-on](#add-on)
  - [Key slot](#key-slot)
  - [Seeded key generation](#seeded-key-generation)
  - [On screen reset](#on-screen-reset)
- [Quick start guide](#quick-start-guide)
- [Compilation and load](#compilation-and-load)
- [Tests](#tests)
- [Documentation](#documentation)
- [Continuous…
