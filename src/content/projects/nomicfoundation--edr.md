---
repo: "NomicFoundation/edr"
name: "edr"
description: "An Ethereum development runtime implementation that can be reused to build new developer tools."
readmeQualityOk: true
url: "https://github.com/NomicFoundation/edr"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [66, 28]
stars: 108
forks: 45
openIssues: 186
closedIssues: 479
watchers: 4
contributors: 320
recentReleases: 0
createdAt: "2021-08-05T20:27:41Z"
lastCommitAt: "2026-09-03T08:03:38Z"
lastReleaseAt: "2024-09-25T12:45:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 47
maintainers: ["renovate[bot]", "Wodann", "anaPerezGhiglia"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a82e4c652b6fdca61af5f2fc8e5d4fdae23ea62728a50223a21ae2ce9f7742/NomicFoundation/edr"
---

# EDR - Ethereum Development Runtime

**EDR**, or **Ethereum Development Runtime** in full, is a library for creating developer tooling on top of the Ethereum Virtual Machine (EVM), such as an EVM debugger or state inspector.

EDR finds its origins in Hardhat Network but incorporates the lessons we have learned over the years to provide high-performance building blocks for EVM tooling. EDR is written in Rust and provides bindings for the Node API (TypeScript), making it accessible to JavaScript and TypeScript developers.

## Features

- **High-performance EVM execution** thanks to [REVM](https://github.com/bluealloy/revm/)
- **Multi-chain protocol support** with built-in providers for Ethereum L1 and OP Stack chains, and an extensible chain type system for custom chains.
- **Full Ethereum JSON-RPC provider** implementation with support for forking remote JSON-RPC endpoints, locally simulated chains, and configurable mining modes (auto-mine, interval, and mempool ordering).
- **`console.log` support** for Solidity with source-mapped logging and argument decoding.
- **Solidity stack traces** with source-mapped error reporting for reverts, panics, custom errors, and out-of-gas…
