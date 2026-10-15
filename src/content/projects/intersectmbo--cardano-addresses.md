---
repo: "IntersectMBO/cardano-addresses"
name: "cardano-addresses"
description: "Addresses and mnemonic manipulation & derivations"
readmeQualityOk: true
url: "https://github.com/IntersectMBO/cardano-addresses"
homepage: "https://intersectmbo.github.io/cardano-addresses"
language: "Haskell"
languages: ["Haskell", "C"]
languagePcts: [76, 22]
topics: ["cardano", "address", "mnemonic", "hierarchical-deterministic-wallets"]
stars: 162
forks: 53
openIssues: 3
closedIssues: 83
watchers: 33
contributors: 37
recentReleases: 0
createdAt: "2020-02-21T09:04:23Z"
lastCommitAt: "2026-10-15T08:31:43Z"
lastReleaseAt: "2021-09-14T08:01:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 46
maintainers: ["paweljakubas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9aef42a888f7c4a12cdf8f031b0ea8578e89a5046d1e0784d029c8327aaf506/IntersectMBO/cardano-addresses"
---

## Overview

This module provides mnemonic (backup phrase) creation, and conversion of a
mnemonic to seed for wallet restoration, and address derivation functionalities.

## Feature overview

`cardano-addresses` ships a Haskell library and a `cardano-address` CLI that cover
the whole lifecycle of Cardano wallet keys and addresses — from a human-readable
recovery phrase to a spendable on-chain address.

| Capability | What it provides |
|---|---|
| **Recovery phrases** | Generate BIP-0039 mnemonics of any multiple of 3 words (9–24) in English, Italian, French, Spanish, Japanese or Korean, and turn them back into keys. |
| **Key derivation** | Convert a recovery phrase into an extended root private key for the `Shelley`, `Shared`, `Byron` or `Icarus` styles, then derive child keys along CIP-1852 / CIP-1854 / CIP-1855 paths such as `1852H/1815H/0H/0/0` (hardened indexes accept the legacy `H` or the standard `'` suffix). |
| **Key handling** | Produce extended and non-extended signing/verification keys, extract the signing key or chain code, hash public keys (`--cip-0105`), inspect keys, and compute `cardano-wallet`-compatible wallet IDs. |
| **Address construction** | Build payment,…
