---
repo: "unicitynetwork/state-transition-sdk-js"
name: "state-transition-sdk-js"
description: "An SDK for defining and managing the lifecycle of stateful assets on the Unicity Protocol"
readmeQualityOk: true
url: "https://github.com/unicitynetwork/state-transition-sdk-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 10
forks: 3
openIssues: 17
closedIssues: 46
watchers: 2
contributors: 12
recentReleases: 3
createdAt: "2024-11-11T16:30:16Z"
lastCommitAt: "2026-11-11T11:17:07Z"
lastReleaseAt: "2026-08-27T13:26:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 79
maintainers: ["ristik"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc1e93a5b7cc5ea2eedf9ed62909ecf16a522a9a523404165617fadca8534a6e/unicitynetwork/state-transition-sdk-js"
---

# Unicity State Transition SDK

Build applications that mint, transfer, and verify digital assets on the Unicity Network. This **TypeScript/JavaScript** SDK gives you control over tokens, ownership rules, and payments, with cryptographic verification built in.

Unicity combines private, off-chain token transactions with network-backed protection against double-spending. Token data stays with the parties you share it with, while unicity proofs let recipients verify that assets are spent only once. The network is designed to scale horizontally as demand grows.

- **Create digital assets:** mint tokens with your own types and application data payload.
- **Move value:** transfer tokens and split fungible tokens for payments.
- **Verify locally:** validate token history and unicity proofs against the compact trust base.
- **Build your way:** choose ownership predicates, issuance policies, storage, and delivery channels.
- **Use TypeScript throughout:** work with typed SDK objects for signing, verification, and serialization.

## Installation

Requires Node.js 22 or later for Node.js applications. The SDK is also usable in browser applications.

```bash
npm install…
