---
repo: "PricePepel/polymarket-tracker"
name: "polymarket-tracker"
description: "Auto-tracks the top 50 Polymarket CRYPTO traders' bets on BTC up/down 5m markets. Updates every 15 min via GitHub Actions; sync into Obsidian via the Obsidian Git plugin."
readmeQualityOk: true
url: "https://github.com/PricePepel/polymarket-tracker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T19:23:22Z"
lastCommitAt: "2026-09-06T08:03:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bc5e1e3e0fff67a32547683c096e339a44d6ce754571c57ec40a300a14486b7e/PricePepel/polymarket-tracker"
---

# Polymarket BTC 5m Tracker

Logs the top 50 Polymarket CRYPTO traders' bets on **BTC up/down 5m** markets, every 15 minutes.

Two ways it can run:

1. **Cloud (GitHub Actions)** — runs every 15 min on GitHub's infrastructure, even when your computer is off. Commits new trades to `data/btc-5m/YYYY-MM-DD.md` in this repo. **This is the default.**
2. **Local (Windows Task Scheduler)** — optional. Runs the same script on your machine and writes via the Obsidian Local REST API directly into your vault. Useful as a fallback or for instant refresh.

## How the data reaches Obsidian

The cloud commits markdown files to this repo. To see them in Obsidian, install the [**Obsidian Git**](https://github.com/Vinzent03/obsidian-git) plugin and either:

- **Recommended**: in Obsidian Git settings, set the repo URL to this repo and check it out into a folder of your vault (e.g. `Polymarket-Tracker/`). Enable "Pull on startup" and "Auto-pull every N minutes".
- Or `git clone` this repo into a folder inside your vault manually.

Either way, when GitHub Actions commits new entries, your vault syncs them down on the next pull.

## Output format

Each scan adds a section like this to today's file:…
