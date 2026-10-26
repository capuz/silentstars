---
repo: "LylLLII/mx-stocks-monitor"
name: "mx-stocks-monitor"
description: "Eastmoney Miaoxiang Stock Screening: Intraday Cumulative Watchlist (self-contained + built-in authorization)"
originalDescription: "东方财富妙想选股：盘中持续累计观察池（自包含+自带授权）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LylLLII/mx-stocks-monitor"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [68, 32]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T11:25:10Z"
lastCommitAt: "2026-10-26T03:02:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/912d925f9de79570a37b1c57503832b4d7cb65194108932ee43ba57f4c18fef5/LylLLII/mx-stocks-monitor"
---

# Miaoxiang Stock Screener · Intraday Cumulative Watchlist

Using Eastmoney's Miaoxiang to screen stocks, qualifying A-shares are **continuously added to the same watchlist during trading hours**, deduplicated by stock code. If the same stock is hit multiple times, its "selection count" accumulates and the scan timestamp of each hit is recorded, making it easy to review its intraday movement pattern.

## Current screening criteria (A-shares)
- Excluded: Beijing Stock Exchange (BSE) / STAR Market (688) / ChiNext (300) / ST stocks / delisted stocks
- Excluded risk events: new-rule limit-up cap risk, shareholder reduction plan within the past three months, lock-up expiry within the next three months, regulatory letter or regulatory work letter within the past three months
- Price-volume and technicals: price change 3%–5%, volume ratio > 1.5, turnover rate 5%–10%, total market cap 5–20 billion yuan (50–200 亿), at least one limit-up in the past 20 trading days
- Fundamentals: excludes stocks whose net profit in the latest reporting period is negative, excludes stocks with a debt-to-asset ratio above 70%

> In addition to the conditions in the Miaoxiang QUERY, the script also performs a…
