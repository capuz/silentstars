---
repo: "arkade-os/ts-sdk"
name: "ts-sdk"
description: "The Arkade SDK is a TypeScript library for building Bitcoin wallets and execute Bitcoin contracts."
readmeQualityOk: true
url: "https://github.com/arkade-os/ts-sdk"
homepage: "https://www.npmjs.com/package/@arkade-os/sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 47
forks: 33
openIssues: 63
closedIssues: 133
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2024-12-24T17:18:04Z"
lastCommitAt: "2026-09-10T08:18:15Z"
lastReleaseAt: "2025-04-14T15:30:02Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 61
maintainers: ["Kukks", "pietro909", "tiero"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/907949098/c14d7456-9843-42e7-8020-ad9b6212b5ce"
---

# Arkade Monorepo

TypeScript packages for the Arkade Bitcoin wallet ecosystem — on-chain/off-chain wallets via the Ark protocol and Arkade Intents asset swaps.

## Packages

| Package | Description |
|---------|-------------|
| [`@arkade-os/sdk`](https://github.com/arkade-os/ts-sdk/blob/HEAD/packages/ts-sdk/) | Bitcoin wallet SDK with Taproot and Ark protocol support |
| [`@arkade-os/boltz-swap`](https://github.com/arkade-os/ts-sdk/blob/HEAD/packages/boltz-swap/) | **Deprecated, unmaintained.** Lightning and chain swaps using Boltz |
| [`@arkade-os/swap`](https://github.com/arkade-os/ts-sdk/blob/HEAD/packages/swap/) | Client-side Arkade Intents asset swaps: market discovery, offers, RFQ, restore |

The [`regtest/`](https://github.com/arkade-os/ts-sdk/blob/HEAD/regtest/) directory is a shared regtest environment, vendored as the
[arkade-regtest](https://github.com/ArkLabsHQ/arkade-regtest) git submodule.

## Prerequisites

- Node.js >= 24.15.0 < 27 (LTS; see `.nvmrc`)
- pnpm >= 10.25.0 < 11

```bash
corepack enable
git submodule update --init
pnpm install
```

## Commands

```bash
pnpm run build            # Build all packages (ts-sdk first, then the plugins)
pnpm test…
