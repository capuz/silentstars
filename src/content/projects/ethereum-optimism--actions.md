---
repo: "ethereum-optimism/actions"
name: "actions"
description: "DeFi Actions SDK for the OP Stack"
readmeQualityOk: true
url: "https://github.com/ethereum-optimism/actions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 32
forks: 28
openIssues: 89
closedIssues: 160
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-07-18T23:30:10Z"
lastCommitAt: "2026-10-29T21:23:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 64
maintainers: ["its-everdred", "oplabs-renovate[bot]", "falcorocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a3f69d2ac3244cb2e97b3d9d256c767f3b66fc95c30265e46af485cabdf539/ethereum-optimism/actions"
---

# Actions SDK

[Actions SDK](https://actions.optimism.io) and [demo app](https://actions.optimism.io/earn) by [Optimism](https://optimism.io).

## Adding Actions to your app

- [Quickstart](https://docs.optimism.io/app-developers/quickstarts/actions)
- [Integrating Wallets](https://docs.optimism.io/app-developers/reference/actions/integrating-wallets)
- [Wallet Functions](https://docs.optimism.io/app-developers/reference/actions/wallet-definitions)
- [Lend Functions](https://docs.optimism.io/app-developers/reference/actions/lend-documentation)

## Structure

This monorepo contains the following packages:

- [`packages/sdk`](https://github.com/ethereum-optimism/actions/blob/HEAD/packages/sdk) - The core Actions SDK - A Typescript library of lightweight abstractions for building onchain.

- [`packages/demo/frontend`](https://github.com/ethereum-optimism/actions/blob/HEAD/packages/demo/frontend) - A React+vite splash page + [demo](https://actions.optimism.io/earn) app displaying supported wallets and DeFi protocols.

- [`packages/demo/backend`](https://github.com/ethereum-optimism/actions/blob/HEAD/packages/demo/backend) - A hono service demonstrating the Actions SDK in a backend…
