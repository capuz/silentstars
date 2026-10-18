---
repo: "fire-la/firela-bot"
name: "firela-bot"
description: "billclaw — the self-hostable collection module (statements in, ledger out) + pa advisor shell. Runs on Cloudflare Workers free tier."
readmeQualityOk: true
url: "https://github.com/fire-la/firela-bot"
homepage: "https://docs.firela.io/quickstart"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["beancount", "cloudflare-workers", "personal-finance", "privacy", "self-hosted"]
stars: 268
forks: 10
openIssues: 3
closedIssues: 31
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2026-02-05T00:09:00Z"
lastCommitAt: "2026-10-18T08:16:34Z"
lastReleaseAt: "2026-02-11T02:13:12Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 32
maintainers: ["toykity", "xBinKai", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd04b36996b63a8af7082ab0ffc517291a01f6899e2cd78c3e784287d12079b9/fire-la/firela-bot"
---

# firela-bot 🤖

A minimalist, self-hosted AI financial advisor for FIRE planning.

## Overview

firela-bot is the **BOT** component of [FIREla](https://firela.io) — it reads your lifetime ledger data to build your financial profile and deliver personalized FIRE (Financial Independence, Retire Early) insights.

FIREla consists of two independent parts that work together:

| | BOT | APP |
|---|---|---|
| What | firela-bot | [firela-app](https://github.com/fire-la/firela-app) |
| | bot - AI advisor for FIRE planning | Beancount lifetime ledger |
| | BillClaw - Automated billing ingestion | Zero tracking · Full privacy |

### Key Features

- **AI Financial Advisor**: Personalized FIRE planning based on your actual spending and income
- **Automated Billing Ingestion**: Import transactions from Plaid, Gmail, and GoCardless
- **Self-Hosted & Private**: Deploy to Cloudflare Workers (free tier) — your data stays yours
- **Lifetime Ledger Integration**: Reads from your Beancount ledger for accurate financial analysis
- **Flexible Export**: Beancount, Ledger, or CSV output formats

## Deployment

Deploy to Cloudflare Workers with one click:

Free tier: 100K requests/day, 10ms CPU time —…
