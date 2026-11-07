---
repo: "iiSalman/trading-dashboard-v2"
name: "trading-dashboard-v2"
description: "Quant trading dashboard — Flask + yfinance + Chart.js. Live SPY/watchlist scoring, GEX, PCR, options premium flow."
readmeQualityOk: true
url: "https://github.com/iiSalman/trading-dashboard-v2"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T15:34:05Z"
lastCommitAt: "2026-11-07T22:51:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e79c35c3e3910e925cc0b278b0d238d4a42bf738672e2336b5f409f9b46e4dc0/iiSalman/trading-dashboard-v2"
---

# Quant Dashboard

Static dashboard that scores a watchlist of tickers using live data from Yahoo Finance.

**Live:** https://iisalman.github.io/trading-dashboard-v2/

## How it works

1. An external HTTP pinger (UptimeRobot / cron-job.org, free) hits `GET https://trading-dashboard-v2.onrender.com/tick` every 5 min.
2. `/tick` on the Render proxy dispatches the `refresh.yml` workflow (rate-limited to once per 4 min) and keeps the dyno warm.
3. The workflow runs `python tools/build_snapshot.py` — calls yfinance, computes PCR / GEX / scores / market-bias via `analyzer.py`, writes `docs/data/snapshot.json`, commits.
4. GitHub Pages serves `docs/` so `index.html` reads the freshly committed snapshot.

Why an external pinger instead of GitHub Actions' built-in cron: scheduled workflows on public free-tier repos get silently throttled — runs are dropped under load, so `*/5 * * * *` ends up firing once every 1-3 hours in practice. The workflow file still has the cron block as a backup, but `/tick` is the primary driver.

Yahoo rate-limits cloud-host IP ranges (Render, Heroku, etc.); GitHub-hosted runners aren't blocked, which is why the data fetch happens inside Actions rather than on…
