---
repo: "argonprotocol/mainchain"
name: "mainchain"
description: "Argon is a stable crypto asset, protected from inflation, designed to recover from death spirals, and powered by Bitcoin. "
readmeQualityOk: true
url: "https://github.com/argonprotocol/mainchain"
homepage: "https://argon.network"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 11
forks: 3
openIssues: 20
closedIssues: 77
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-08-13T21:33:54Z"
lastCommitAt: "2026-11-02T15:18:38Z"
lastReleaseAt: "2024-10-07T19:40:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 74
maintainers: ["blakebyrnes", "calebjclark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5e38b1590dc11c42f6cf5493d6e20252af6fd51924cc70a693cb7a0b6b2a679/argonprotocol/mainchain"
discussionCount: 1
---

# Argon

An inflation-proof stablecoin backed by [Bitcoin](https://bitcoin.org) and the
[Ulixee](https://ulixee.org) data network. The Argon is designed as a transactional currency that
can scale to micropayments as low as 1 millionth of a dollar. It is built on the Polkadot
[Substrate](https://substrate.dev) framework.

## Overview

The Argon mainchain is the stabilization layer of the Argon network. Argon stabilizes the value of
the Argon by removing excess currency from supply when the price of argon falls below target (ie,
less is desired by the market) and minting new supply when price is above target (ie, more is in
demand than exists).

Minting can be done through two mechanisms. The first is via mining for the Argon, where miners are
given permission to mint new Argons when the price is above target. The second is through a "Liquid
Locking" offering for Bitcoins, where Bitcoins are able to mint liquidity equal to their Bitcoin's
market value by committing to locking their Bitcoins and an equivalent amount of Argons for a year.

The Bitcoin "locks" transform into "options" that allow a holder to profit from the volatility of
both the Bitcoin price and the Argon price. To…
