---
repo: "Gyu-bot/my_ledge"
name: "my_ledge"
description: "Personal finance dashboard using BankSalad export financial my-data"
originalDescription: "뱅크샐러드 내보내기 금융 마이데이터를 이용한 개인 재무 대시보드"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/Gyu-bot/my_ledge"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [65, 33]
stars: 6
forks: 2
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T02:22:37Z"
lastCommitAt: "2026-10-23T09:33:14Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 33
maintainers: ["Gyu-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/77267bd619885b766ea7e9ef11d7ddb24d01cd5e5669e811ff62e8fa75fc50d3/Gyu-bot/my_ledge"
---

# my_ledge

A personal finance dashboard that uses BankSalad Excel exports as its data source.
Transaction history accumulates through incremental import, and asset, investment, and loan snapshots are managed as time series.
Read-only analysis is provided through the API and canonical views, and external agents such as Hermes, Codex, Claude, and OpenClaw use the readonly DB together with the API.

## Current scope

- Backend: FastAPI, SQLAlchemy async, Alembic, PostgreSQL
- Frontend: Vite, React, TypeScript, Tailwind, TanStack Query
- Data source: BankSalad `.xlsx`
- Core features:
  - Excel upload and incremental import
  - BankSalad customer info, financial, insurance, investment, and loan snapshot import
  - Transaction view, edit, delete, and restore
  - Data management reset: transactions only, or transactions plus snapshots
  - Loan repayment transaction mapping
  - Installment ledger, transaction linking, and remaining installment forecast
  - Asset liquidity and cash equivalents, loan monthly payment and repayment method metadata enrichment
  - Fixed and variable costs, essential and discretionary spending, recurring payment classification
  - Category-based automatic…
