---
repo: "pcaversaccio/safe-tx-hashes-util-qubes"
name: "safe-tx-hashes-util-qubes"
description: "A Qubes OS Salt configuration for building a minimal, reproducible template VM providing the `safe-tx-hashes-util` and Foundry toolchain."
readmeQualityOk: true
url: "https://github.com/pcaversaccio/safe-tx-hashes-util-qubes"
homepage: "https://github.com/pcaversaccio/safe-tx-hashes-util"
language: "Salt"
languages: ["Salt", "Scheme"]
languagePcts: [55, 45]
topics: ["fedora-43", "qubes-os", "safe-multisig", "safe-transaction-hash", "salt", "saltstack"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T16:30:03Z"
lastCommitAt: "2026-10-23T12:05:15Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 32
maintainers: ["pcaversaccio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4194e2f6b9a13294d374d2b3c67b45efda9ff2fe46073f1cd1dc1f4eae1ae7c/pcaversaccio/safe-tx-hashes-util-qubes"
fundingLinks: ["CUSTOM:https://etherscan.io/address/0xe9Fa0c8B5d7F79DeC36D3F448B1Ac4cEdedE4e69"]
discussionCount: 0
---

# Qubes OS Environment for Safe Multisig Transaction Hashes 

A [Qubes OS](https://www.qubes-os.org) [Salt](https://doc.qubes-os.org/en/latest/user/advanced-topics/salt.html) configuration for building a minimal, reproducible _template VM_ providing the [`safe-tx-hashes-util`](https://github.com/pcaversaccio/safe-tx-hashes-util) and [Foundry](https://github.com/foundry-rs/foundry) toolchain.

> [!IMPORTANT]
> This repository has been tested exclusively on [Qubes OS](https://www.qubes-os.org) [`4.3`](https://doc.qubes-os.org/en/latest/developer/releases/4_3/release-notes.html).

- [Installation (`dom0`)](#installation-dom0)
- [What This Setup Provides](#what-this-setup-provides)
- [Trust Assumptions](#trust-assumptions)
  - [1. The `fedora-44-minimal` Template](#1-the-fedora-44-minimal-template)
  - [2. This Salt Configuration](#2-this-salt-configuration)
  - [3. The `safe-tx-hashes-util` Script](#3-the-safe-tx-hashes-util-script)
  - [Summary Table](#summary-table)
- [Firefox (Optional)](#firefox-optional)

## Installation ([`dom0`](https://doc.qubes-os.org/en/latest/user/reference/glossary.html#term-dom0))

Because the [Qubes OS](https://www.qubes-os.org) administrative domain…
