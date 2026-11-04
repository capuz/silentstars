---
repo: "LylLLII/mx-stocks-monitor"
name: "mx-stocks-monitor"
description: "Eastmoney Miaoxiang stock screening: continuous intraday cumulative watchlist (self-contained, with built-in authorization)"
originalDescription: "东方财富妙想选股：盘中持续累计观察池（自包含+自带授权）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LylLLII/mx-stocks-monitor"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [70, 30]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T11:25:10Z"
lastCommitAt: "2026-11-04T02:57:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/89f2d2272194923ca04fb8fb902b7dc1bfd4d739be6e96d48a4d380b53f1d7b5/LylLLII/mx-stocks-monitor"
---

# Miaoxiang Stock Screening · Intraday Cumulative Watchlist

Use Eastmoney's "Miaoxiang" stock screener to **continuously add qualifying A-shares to the same watchlist during trading hours**, deduplicated by stock code. When the same stock is hit multiple times, its "selection count" is incremented and the scan timestamp of each hit is recorded, making it easier to review the stock's intraday movement pattern.

## Current screening criteria (A-shares)
- Excluded: Beijing Stock Exchange / STAR Market (688) / ChiNext (300) / ST stocks / delisted stocks
- Excluded risk events: risk of new-rule price-cap designation, share reduction plans within the past three months, lock-up expirations within the next three months, regulatory letters or regulatory work letters within the past three months
- Price-volume and technicals: price change of 3%–5%, volume ratio > 1.5, turnover rate of 5%–10%, total market capitalization of CNY 5–20 billion (50–200 亿), and a limit-up within the past 20 trading days
- Fundamentals: excludes stocks whose latest reporting period net profit is negative, and stocks with a debt-to-asset ratio above 70%

> In addition to the conditions in the Miaoxiang QUERY, the…
