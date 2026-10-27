---
repo: "solana-foundation/mosaic"
name: "mosaic"
description: "TypeScript SDK, CLI, and dashboard for creating and managing Token-2022 tokens on Solana"
readmeQualityOk: true
url: "https://github.com/solana-foundation/mosaic"
homepage: "https://mosaic-eta-rust.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 24
forks: 19
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 12
recentReleases: 2
createdAt: "2025-07-28T19:08:28Z"
lastCommitAt: "2026-10-27T12:39:24Z"
lastReleaseAt: "2026-09-01T12:50:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 65
maintainers: ["eldarik", "dependabot[bot]", "GuiBibeau"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/solana-foundation/mosaic"
---

# Mosaic

A comprehensive TypeScript monorepo for managing Token-2022 tokens with extensions on Solana, specifically designed for different token templates for Stablecoins, RWAs, and Arcade Token. It includes built in advanced access control features such as integration with sRFC-37.

> **Status — sRFC-37 / Token ACL:** The Token ACL program (`TACLkU6CiCdkQN2MjoyDkVg2yAH9zkxiHDsiztQ52TP`) and its companion ABL gating program (`GATEzzqxhJnsWF6vHRsgtixxSB8PaQdcqGEVTEHWiULz`) are deployed on both devnet and mainnet-beta. An audit has been completed and feedback addressed. The sRFC-37 standard itself is not yet finalized and the on-chain interface may still change. See the [sRFC-37 discussion](https://github.com/solana-foundation/SRFCs/discussions/2) for current status.

## Why Mosaic?

Most implementations of standard token types follow similar patterns and usages of Token Extensions. This repo provides issuers and tokenization engines best practices for integrating and using Token Extensions. Additionally apps can use the SDK to easily abstract away complexities related to working with Token Extensions.

## Quickstart

### Prerequisites

- Node.js 20+
- pnpm 10+
- Solana CLI

###…
