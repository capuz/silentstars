---
repo: "Cobalt-Money/Cobalt"
name: "Cobalt"
description: "Building blocks for your money"
url: "https://github.com/Cobalt-Money/Cobalt"
homepage: "https://cobaltpf.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T00:18:15Z"
lastCommitAt: "2026-06-29T07:22:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["Sriketk"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b203131161f29445f919dea3031e642ee1032ab6a40c379dbdd6ae0682d254e/Cobalt-Money/Cobalt"
---

<h1 align="center"><b>Cobalt</b></h1>
    Open-source AI personal finance management.
    <br />
    <br />
    ·
    ·
  </p>
</p>

## About

Cobalt connects your financial accounts — manually or through Plaid and SnapTrade — and uses AI to analyze, budget, and track spending. **Money transfers and spending are not possible from inside Cobalt.** The hosted product at [cobaltpf.com](https://cobaltpf.com) is the only supported deployment.

## Features

- **Account aggregation** — Plaid (US banks, credit cards, loans) + SnapTrade (brokerage) + manual entry
- **AI assistant** — natural-language Q&A over your finances, zero data retention via [Vercel AI Gateway](https://vercel.com/docs/ai-gateway/privacy)
- **Transactions & budgets** — categorize, tag, search, export
- **Net worth tracking** — daily snapshots across all accounts
- **CSV import** — bring history from Mint, YNAB, Monarch
- **Subscriptions** — recurring transaction detection
- **Real-time sync** — Rocicorp Zero replication, optimistic UI
- **Raycast extension** — query Cobalt from your launcher

## Architecture

- Monorepo (Turborepo + Bun)
- React 19 + TanStack Start (web)
- Hono + Nitro (server)
- Rocicorp Zero (sync)…
