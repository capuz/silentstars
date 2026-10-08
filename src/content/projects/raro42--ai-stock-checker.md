---
repo: "raro42/ai-stock-checker"
name: "ai-stock-checker"
description: "Local Docker paper-trading desk that refuses to lie: fee-aware fills, anti-churn gates, optional AI — honest marks, not dashboard theater."
readmeQualityOk: true
url: "https://github.com/raro42/ai-stock-checker"
homepage: "https://github.com/raro42/ai-stock-checker/releases"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["cryptocurrency-analyisis", "cryptocurrency-analyser", "cryptocurrency-tracker-app", "docker", "fastapi", "paper-trading-simulator", "python", "stock-market", "stock-market-analysis", "stock-market-simulator"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-25T19:10:46Z"
lastCommitAt: "2026-10-08T10:52:22Z"
lastReleaseAt: "2026-08-29T16:07:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 68
maintainers: ["raro42"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1312245118/9a46b981-8f09-4633-913c-a844aa73e7fa"
fundingLinks: ["GITHUB:https://github.com/raro42"]
---

# AI Stock Checker

**We scan stocks, a short ETF and metal list, and crypto on your machine, paper-trade them with realistic fees and anti-churn rules, and show the book in a browser desk — so friends can test strategies honestly before risking real money.**

Friends’ live paper desk: **[https://stock.zeitfenster.de/desk](https://stock.zeitfenster.de/desk)**

Docker-first scanning, fee-aware paper fills, optional Ollama AI, and a quiet editorial UI — not dashboard theater.

---

## Why this exists

Most “AI trading” repos ship vibes: purple glow, fake Sharpe, hourly churn that dies to fees.

This one is the opposite:

- **Fees are real** — paper default matches **Revolut Standard–Metal** (0.25%/side · €1 min); Ops can switch Ultra (0.12%) or spot-like 0.1%
- **Forecasts are banned** until walk-forward beats SPY — charts show *what happened*, not fortune-telling
- **Paper desk first** — browse the book in your browser before you ever trust a loop
- **Docker-only runtime** — no “works on my laptop” dependency soup

If that sounds boring: good. Boring compounds.

---

## The desk

Seven screens. One chrome. Local D3 — no CDN roulette.

| Screen | Job |
|--------|-----|
|…
