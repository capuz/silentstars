---
repo: "xch-dev/chia-wallet-sdk"
name: "chia-wallet-sdk"
description: "High-performance Rust SDK for developing Chia wallet applications."
readmeQualityOk: true
url: "https://github.com/xch-dev/chia-wallet-sdk"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["chia", "chia-blockchain", "chialisp"]
stars: 27
forks: 23
openIssues: 7
closedIssues: 7
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2023-10-31T17:52:04Z"
lastCommitAt: "2026-11-09T00:52:49Z"
lastReleaseAt: "2024-05-21T05:35:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 62
maintainers: ["Rigidity", "dependabot[bot]", "Yakuhito"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c4e22c5402b25fd75e377d66e7cf3ad4e2852977b9c68dbf529d3ac2f653cc4/xch-dev/chia-wallet-sdk"
---

# Chia Wallet SDK

A high-performance Rust SDK for building applications that interact with coins on the [Chia blockchain](https://chia.net), with bindings for Node.js, WebAssembly, and Python.

The Wallet SDK handles the low-level details of Chia's coin set model so you can focus on your application: constructing and parsing puzzles, building spend bundles, calculating required signatures, talking to full nodes, and testing everything against a simulator.

> [!NOTE]
> This is a library, _not_ a prebuilt wallet. If you're looking for a ready-to-use wallet, check out [Sage](https://github.com/xch-dev/sage), a light wallet built on top of the Wallet SDK that also exposes an RPC interface.

## Features

- **Puzzle drivers** for standard primitives, including CATs, NFTs, DIDs, singletons, vaults (MIPS), DataLayer stores, clawbacks, options, and streamed assets
- **Offers** - create, inspect, and take Chia offer files
- **Action system** for describing high-level operations (sends, issuance, minting, etc) and letting the SDK assemble the spends
- **Signing** - compute the BLS and secp signatures required by a set of coin spends
- **Networking** - connect to full node peers over the…
