---
repo: "cartridge-gg/controller"
name: "controller"
description: "A self custodial embedded account to seamlessly play onchain games"
url: "https://github.com/cartridge-gg/controller"
homepage: "https://x.cartridge.gg/signup"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 80
forks: 49
openIssues: 1
closedIssues: 117
watchers: 6
contributors: 39
recentReleases: 0
createdAt: "2022-03-27T00:54:06Z"
lastCommitAt: "2026-06-24T00:20:59Z"
lastReleaseAt: "2025-09-12T01:25:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 57
maintainers: ["broody", "rsodre", "tarrencev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/474502009/92654480-0c8d-437e-b1d5-4ccd7ee719c1"
---

# Controller

Controller is a gaming specific smart contract wallet that enables seamless
player onboarding and game interactions.

It supports transaction signing using Passkeys and Session Tokens.

## Project structure

The project consists of several packages in the `packages` directory:

- **[keychain](packages/keychain)** - Sandboxed iframe hosted at
  https://x.cartridge.gg/ that fills the same role as an injected wallet like
  MetaMask or Rabby: holds keys, signs transactions, and prompts user for approval.
  Also displays account state (balances, activities, achievements).
- **[controller](packages/controller)** - Main SDK implementing the account
  interfaces required by [starknet.js](https://github.com/0xs34n/starknet.js).
  Ships two provider modes:
  - **ControllerProvider** (web apps) - Full-featured web wallet communicating with an
    embedded keychain iframe. Supports sessions as well as per-transaction approval.
  - **SessionProvider** (native apps) - Creates ephemeral session keys with pre-configured
    policies so transactions can execute without per-call approval.
- **[connector](packages/connector)** - Thin adapter that wraps providers
  as…
