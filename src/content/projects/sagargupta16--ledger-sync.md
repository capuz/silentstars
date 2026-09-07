---
repo: "Sagargupta16/ledger-sync"
name: "ledger-sync"
description: "Personal finance dashboard -- turn messy Excel bank statements into 23 pages of beautiful analytics. Self-hosted, multi-currency, zero subscriptions."
readmeQualityOk: true
url: "https://github.com/Sagargupta16/ledger-sync"
homepage: "https://sagargupta.online/ledger-sync/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [68, 32]
topics: ["dashboard", "fastapi", "finance", "python", "react", "sqlite", "tailwindcss", "typescript", "analytics", "banking"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-09T14:48:47Z"
lastCommitAt: "2026-09-07T08:34:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 62
maintainers: ["Sagargupta16", "renovate[bot]", "imgbot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9862c5d2e85a478f860798991cec8e33af33ca3858221a3e9d87bb93c1c9a3c0/Sagargupta16/ledger-sync"
discussionCount: 0
---

# Ledger Sync

Self-hosted personal finance workspace for importing bank statements, reconciling a ledger, exploring analytics, and asking an AI assistant questions about your own data.

## Why

Ledger Sync is built for people who want useful personal finance analysis without handing over direct bank access or paying a recurring subscription. It supports Indian fiscal years and tax planning, multi-currency display, transaction organization, investments, goals, recurring commitments, and FIRE planning.

- [Open the hosted app](https://sagargupta.online/ledger-sync/)
- [Explore demo data](https://sagargupta.online/ledger-sync/demo)
- [Read the deployment guide](https://github.com/Sagargupta16/ledger-sync/blob/HEAD/docs/DEPLOYMENT.md)

## Highlights

### Import and reconciliation

- Accepts `.xlsx`, `.xls`, and `.csv` statements.
- Parses files in the browser with SheetJS.
- Sends validated JSON rows to the API instead of uploading the source file.
- Uses deterministic SHA-256 transaction IDs plus occurrence counters so repeated imports remain idempotent without collapsing legitimate duplicate rows.
- Soft-deletes rows no longer present in the latest import and refreshes analytics…
