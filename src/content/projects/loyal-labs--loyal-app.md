---
repo: "loyal-labs/loyal-app"
name: "loyal-app"
description: "Loyal — open-source Solana wallet. Smart-account guardrails for AI agents, private transfers and yield on private assets."
url: "https://github.com/loyal-labs/loyal-app"
homepage: "https://askloyal.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["loyal", "open-source", "oss", "security", "solana", "telegram", "web3", "agent-wallet"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2025-10-18T23:52:48Z"
lastCommitAt: "2026-06-25T06:40:09Z"
lastReleaseAt: "2026-06-04T12:05:57Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 69
maintainers: ["vladzima", "candyflipline", "cosmicsymmetry"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1079028589/a7a193a0-adc3-4b15-b70d-ab190bee2f42"
---

# Loyal App

Loyal App is a monorepo for Telegram-native Solana products.
It combines on-chain Anchor programs, a Telegram mini-app, an internal admin dashboard,
the Loyal web frontend, shared packages/SDKs, and worker services.

## Monorepo Structure

| Directory | What it contains | Start here |
| --- | --- | --- |
| [`app/`](./app) | Next.js Telegram mini-app and API routes | [`app/README.md`](./app/README.md) |
| [`frontend/`](./frontend) | Next.js Loyal web frontend | [`frontend/README.md`](./frontend/README.md) |
| [`admin/`](./admin) | Internal Next.js admin dashboard | [`admin/README.md`](./admin/README.md) |
| [`programs/`](./programs) | Anchor smart contracts (`telegram-verification`, `telegram-private-transfer`) | [`programs/`](./programs) |
| [`tests/`](./tests) | Anchor integration tests | [`tests/`](./tests) |
| [`packages/`](./packages) | Shared workspace libraries (`db-core`, `db-adapter-neon`, `llm-core`, `llm-server`, `shared`) | [`packages/`](./packages) |
| [`sdk/`](./sdk) | Publishable SDKs for deposits and private transfers | [`sdk/private-transactions/README.md`](./sdk/private-transactions/README.md) |
| [`workers/`](./workers) | Background workers and…
