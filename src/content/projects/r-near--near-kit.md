---
repo: "r-near/near-kit"
name: "near-kit"
description: "TypeScript library for interacting with NEAR Protocol - simple, type-safe, and intuitive"
url: "https://github.com/r-near/near-kit"
homepage: "https://kit.near.tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 11
forks: 3
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-13T18:35:33Z"
lastCommitAt: "2026-06-26T23:41:05Z"
lastReleaseAt: "2025-11-26T02:01:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 54
maintainers: ["r-near", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2b773d62900291b863531524c65cabf0a32295e31a973e928b738a0201a9a0d/r-near/near-kit"
---

# near-kit

A simple, intuitive TypeScript library for interacting with NEAR Protocol. Designed to feel like a modern fetch library - easy for beginners, powerful for advanced users.

**[📚 Full Documentation](https://kit.near.tools)**

## Features

- **Simple things should be simple** - One-line commands for common operations
- **Type safety everywhere** - Full TypeScript support with IDE autocomplete
- **Progressive complexity** - Basic API for simple needs, advanced features when required
- **Powerful transaction builder** - Fluent, human-readable API for transactions
- **Wallet-ready** - Full support for [NEAR Connect](https://github.com/azbang/near-connect), drop-in integration

## Installation

```bash
npm install near-kit
# or
bun install near-kit
```

## Quick Start

```typescript
import { Near } from "near-kit"

// Initialize for backend/scripts
const near = new Near({
  network: "testnet",
  privateKey: "ed25519:...",
  defaultSignerId: "alice.testnet",
})

// View methods (read-only, no gas)
const balance = await near.view("example.testnet", "get_balance", {
  account_id: "alice.testnet",
})

// Call methods (requires signature, costs gas)
await near.call(…
