---
repo: "kirill-markin/expense-budget-tracker"
name: "expense-budget-tracker"
description: "Self-hosted open-source personal finance expense and budget tracker with balances, transfers, and multi-currency reporting on Postgres."
readmeQualityOk: true
url: "https://github.com/kirill-markin/expense-budget-tracker"
homepage: "https://expense-budget-tracker.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["budget-tracker", "expense-tracker", "multi-currency", "open-source", "personal-finance", "postgresql", "self-hosted"]
stars: 26
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-20T20:29:07Z"
lastCommitAt: "2026-08-12T05:14:11Z"
lastReleaseAt: "2026-07-24T12:56:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["kirill-markin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f31bd4a927dae8397cb8e560b07f9dd81fea204dd9676185f048e5b908c8a581/kirill-markin/expense-budget-tracker"
---

# Expense Budget Tracker

Self-hosted open-source expense and budget tracker with balances, transfers, and multi-currency reporting on Postgres.

**Live demo:** [expense-budget-tracker.com](https://expense-budget-tracker.com/)

## Features

- **Fully open-source** — all code is available, deploy on your own servers with full control over your data
- **SQL Query API** — generate an API key, give it to your LLM agent, and let it query, analyze, and manage your financial data via HTTP. Minimal, flat table structure designed to be hard to misuse — ideal for AI agents
- **Budget and transaction UI** — built-in interface for budgeting, browsing transactions, and tracking balances across accounts and currencies

## Quick start

```bash
git clone https://github.com/kirill-markin/expense-budget-tracker.git
cd expense-budget-tracker
open -a Docker   # start Docker if not running (macOS)
make up          # start Postgres, run migrations, start web + worker
```

Open `http://localhost:3000`.

## Usage with AI agents

Start at `GET https://api.expense-budget-tracker.com/v1/`. The discovery response tells agents to ask for the user's email first, and the same email OTP flow covers both signup…
