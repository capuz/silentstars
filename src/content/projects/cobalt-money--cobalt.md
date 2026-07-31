---
repo: "Cobalt-Money/Cobalt"
name: "Cobalt"
description: "Building blocks for your money"
readmeQualityOk: true
url: "https://github.com/Cobalt-Money/Cobalt"
homepage: "https://cobaltpf.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 17
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T00:18:15Z"
lastCommitAt: "2026-07-31T06:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["Sriketk", "dependabot[bot]", "replicas-connector[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fd58d130e1cc2a930be4ae5cf5042b52e347ce4edc61ea2a52f7801c3c5a58c/Cobalt-Money/Cobalt"
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
