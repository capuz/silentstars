---
repo: "zcash/wallet"
name: "wallet"
description: "Repo for replacing the zcashd wallet"
url: "https://github.com/zcash/wallet"
homepage: "https://zcash.github.io/wallet/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 32
forks: 39
openIssues: 138
closedIssues: 120
watchers: 8
contributors: 28
recentReleases: 0
createdAt: "2024-09-26T15:36:04Z"
lastCommitAt: "2026-06-24T00:04:26Z"
lastReleaseAt: "2025-12-15T18:10:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 64
maintainers: ["nullcopy", "nuttycom", "schell"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d81b69d57ea4c6840ecfac378f7592c20bee145581532739f5cdfb7b3d0feb/zcash/wallet"
---

# Zallet wallet

Zallet is a full-node Zcash wallet written in Rust. It is being built as a replacement for
the [`zcashd`](https://github.com/zcash/zcash) wallet.

## Security Warnings

These crates are under development and have not been fully reviewed.

Zallet is not designed to be used as a Rust library; we give no guarantees about
any such usage.

## Current phase: Alpha release

Zallet is currently in alpha. What this means is:

- Breaking changes may occur at any time, requiring you to delete and recreate your Zallet
  wallet.
- Many JSON-RPC methods that will be ported from `zcashd` have not yet been implemented.
- We will be rapidly making changes as we release new alpha versions.

We encourage everyone to test out Zallet during the alpha period and provide feedback,
either by [opening issues on GitHub](https://github.com/zcash/wallet/issues/new) or
contacting us in the `#wallet-dev` channel of the
[Zcash R&D Discord](https://discord.gg/xpzPR53xtU).

## Usage

See the [user guide](https://zcash.github.io/wallet/) for information on how to set up a Zallet wallet.

## Reproducible Builds

Zallet leverages [StageX](https://codeberg.org/stagex/stagex/) to provied a 
full…
