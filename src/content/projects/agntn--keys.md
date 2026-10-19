---
repo: "agntn/keys"
name: "keys"
description: "A TypeScript library for interacting with various blockchains."
readmeQualityOk: true
url: "https://github.com/agntn/keys"
homepage: "https://keys.agntn.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["bitcoin", "blockchain", "crypto", "ethereum", "typescript", "wallet"]
stars: 5
forks: 0
openIssues: 13
closedIssues: 79
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-04-12T13:58:01Z"
lastCommitAt: "2026-10-19T09:14:09Z"
lastReleaseAt: "2025-04-13T17:54:14Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 96
undervaluedScore: 83
maintainers: ["aeitwoen", "oritwoen", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/965140028/4810e12d-6741-438e-8040-b87d4f38c6da"
---

# @agntn/keys

🔑 Keys, addresses and signatures from Bitcoin to the XRP Ledger, from a mnemonic or from nothing at all. Bitcoin gets its five address types, Solana gets ed25519, your agent gets them as MCP tools, and none of it should ever meet real money.

> [!WARNING]
> **@agntn/keys is experimental.** The public API and the tool surfaces can still move before the first stable release. Pin exact versions if you build on it now.

> [!CAUTION]
> **Not audited.** This code has never had a security audit. Do not use it in production, with real funds or with sensitive data. It is meant for agents, puzzles and local experiments only. It comes as is, without warranty of any kind, and the authors are not liable for any loss, as the MIT license states. Anything that matters wants an audited library.

## Why?

Every chain has its own wallet library and its own idea of what a key is. One wants a Buffer, one wants a Uint8Array, one has a KeyPair class and a second one for testnet. Then a mnemonic shows up from a puzzle instead of a wallet app and all of them answer "invalid checksum" and stop talking to you. So this is one `Blockchain` interface over noble curves, the same…
