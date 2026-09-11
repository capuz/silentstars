---
repo: "solana-program/single-pool"
name: "single-pool"
description: "The SPL Single Pool program and its clients"
readmeQualityOk: true
url: "https://github.com/solana-program/single-pool"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 11
forks: 23
openIssues: 6
closedIssues: 16
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2024-12-06T21:56:17Z"
lastCommitAt: "2026-09-11T08:15:08Z"
lastReleaseAt: "2026-04-18T04:11:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 82
maintainers: ["dependabot[bot]", "joncinque", "lorisleiva"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e7275395b326f7577589626b350dc2c8d3debbc236175f117485725a288c36/solana-program/single-pool"
---

# Single-Validator Stake Pool

Fully permissionless liquid staking.

| Information | Account Address |
| --- | --- |
| Single Pool | `SVSPxpvHdN29nkVg9rPapPNDddN5DipNLRUFhyjFThE` |

## Overview

The Single-Validator Stake Pool is an onchain program that enables liquid staking with zero fees, no counterparty, and 100% capital efficiency. The program defines a canonical pool for every vote account, which can be initialized permissionlessly, and mints tokens in exchange for stake delegated to its designated validator.

The program also allows permissionless harvesting of Jito tips and other MEV rewards, turning liquid sol paid into the stake account into active stake earning rewards, functionally distributing these earnings to all LST holders just like protocol staking rewards.

Users can only deposit and withdraw active stake, but liquid sol deposit is coming in a future update.

## Security Audits

The Single Pool Program has received three external audits:

* Zellic (2024-01-02)
    - Review commit hash [`ef44df9`](https://github.com/solana-program/single-pool/commit/ef44df985e76a697ee9a8aabb3a223610e4cf1dc)
    - Final report…
