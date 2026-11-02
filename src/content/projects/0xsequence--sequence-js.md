---
repo: "0xsequence/sequence.js"
name: "sequence.js"
description: "Sequence: modular web3 development platform and account abstraction stack for Ethereum chains"
readmeQualityOk: true
url: "https://github.com/0xsequence/sequence.js"
homepage: "https://docs.sequence.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 318
forks: 69
openIssues: 13
closedIssues: 34
watchers: 21
contributors: 42
recentReleases: 3
createdAt: "2020-02-27T16:16:01Z"
lastCommitAt: "2026-11-02T13:38:17Z"
lastReleaseAt: "2026-10-14T11:53:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 35
maintainers: ["taylanpince", "tolgahan-arikan", "0xsequence-changesets-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d40c906624702d473071963d824736542d1dd5c16b1624bbb96c456d0b417fd/0xsequence/sequence.js"
---

## sequence.js v3 core libraries and SDK

**NOTE: please see [v2](https://github.com/0xsequence/sequence.js/tree/v2) branch for sequence.js 2.x.x**

---

Sequence v3 core libraries and [wallet-contracts-v3](https://github.com/0xsequence/wallet-contracts-v3) SDK.

## Packages

- `@0xsequence/wallet-primitives`: stateless low-level utilities specifically for interacting directly with sequence wallet's smart contracts
- `@0xsequence/wallet-core`: higher level utilities for creating and using sequence wallets
- `@0xsequence/wallet-wdk`: all-in-one wallet development kit for building a sequence wallet product

## Development

### Getting Started

1. Install dependencies:
   `pnpm install`

2. Build all packages:
   `pnpm build`

### Development Workflow

- Run development mode across all packages:
  `pnpm dev`

- Run tests:
  `pnpm test`

  > **Note:** Tests require [anvil](https://github.com/foundry-rs/foundry/tree/master/crates/anvil) and [forge](https://github.com/foundry-rs/foundry) to be installed. You can run a local anvil instance using `pnpm run test:anvil`.

- Linting and formatting is enforced via git hooks

## License

Apache-2.0
