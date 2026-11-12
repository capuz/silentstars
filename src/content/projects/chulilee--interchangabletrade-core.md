---
repo: "Chulilee/InterChangableTrade-Core"
name: "InterChangableTrade-Core"
description: "InterChangableTrade-Core provides the application services that connect the frontend with the Stellar blockchain. It exposes APIs, manages business logic, indexes blockchain events, and integrates with Soroban smart contracts."
readmeQualityOk: true
url: "https://github.com/Chulilee/InterChangableTrade-Core"
homepage: "https://inter-changable-trade-core-p1gs.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["defi", "dex", "drips-wave", "nestjs", "nodejs", "soroban-sdk", "stellar"]
stars: 8
forks: 28
openIssues: 159
closedIssues: 81
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2026-07-14T12:35:35Z"
lastCommitAt: "2026-11-12T05:39:07Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 61
maintainers: ["akargi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b70c4743e5b57ab599beebc0f2d9a1763e92a1a37045ac9a4c03b90290ac3eaf/Chulilee/InterChangableTrade-Core"
---

# InterChangableTrade-Core

> Backend services powering the InterChangableTrade ecosystem on Stellar.

## Overview

InterChangableTrade-Core provides the application services that connect the
frontend with the **Stellar** blockchain. It exposes REST APIs, manages
business logic, indexes blockchain events, and integrates with **Soroban**
smart contracts — trade execution, asset indexing, settlement, dispute
resolution, and analytics for the InterChangableTrade ecosystem.

The project is in **active development**. All chain access currently targets
the Stellar **testnet** (see [Network & Deployment](#network--deployment)).
See the [Roadmap](https://github.com/Chulilee/InterChangableTrade-Core/blob/HEAD/ROADMAP.md) for what is coming next and the
[Changelog](https://github.com/Chulilee/InterChangableTrade-Core/blob/HEAD/CHANGELOG.md) for what has shipped.

## Features

- **REST API** with interactive OpenAPI/Swagger docs
- **Authentication** — JWT plus a Stellar wallet challenge-response flow
  (Ed25519 nonce signing with replay protection)
- **User & wallet management**
- **[Multisig…
