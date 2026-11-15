---
repo: "kgcrom/cluefin"
name: "cluefin"
description: "Your financial investment assistant"
originalDescription: "Your financial investment assistant"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/kgcrom/cluefin"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [79, 20]
stars: 131
forks: 29
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2025-07-12T05:16:36Z"
lastCommitAt: "2026-11-15T11:21:42Z"
lastReleaseAt: "2026-10-25T15:24:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 46
maintainers: ["kgcrom", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d09bfbf75951492046f054bff9d8b5e368b48a05259ab79cc9ef1b7261bd14/kgcrom/cluefin"
---

# Cluefin

A research toolkit for independently investigating Korean stocks.

> This project is provided for educational and research purposes only. It does not constitute financial advice and does not guarantee any results.

## Why it was made

To properly examine a single stock, you have to collect and reconcile data from separate sources: prices from brokerage APIs, financials and disclosures from DART, interest rates and the economy from the Bank of Korea, and US customers and competitors from SEC. Cluefin brings these sources together in one client. On top of it, an AI agent can gather data and write verifiable judgments (reference price, stop-loss, invalidation conditions), and those judgments can later be checked against actual prices.

## What it includes

| Category | Name | What it does |
|------|------|---------|
| App | [cluefin-openapi-cli](https://github.com/kgcrom/cluefin/blob/HEAD/apps/cluefin-openapi-cli/) | JSON CLI for AI agents. Calls KIS, Kiwoom, DART, SEC, and ECOS; screens all stocks using a local cache (DuckDB); collects stock review data; records and tracks judgments (`review`) |
| App |…
