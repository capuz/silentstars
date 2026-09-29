---
repo: "IlJuniorlI/TradingBot"
name: "TradingBot"
description: "Python intraday trading bot for Schwab equities and 0DTE ETF options. TradingView screener, 14 plugin strategies, multi-regime adaptive trade management, and a real-time HTTPS dashboard."
readmeQualityOk: true
url: "https://github.com/IlJuniorlI/TradingBot"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 9
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-04-24T22:22:01Z"
lastCommitAt: "2026-09-29T09:53:32Z"
lastReleaseAt: "2026-04-25T15:10:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 74
undervaluedScore: 47
maintainers: ["IlJuniorlI"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7aa6f5a6b14decf1fc3ff44ed1756ef4c04bfe3f7266c8b0c9b08a7f59a4736/IlJuniorlI/TradingBot"
---

# Intraday TradingView + Schwabdev Bot

Version: see [`intraday_tv_schwab_bot/VERSION`](https://github.com/IlJuniorlI/TradingBot/blob/HEAD/intraday_tv_schwab_bot/VERSION) · Changelog: [`CHANGELOG.md`](https://github.com/IlJuniorlI/TradingBot/blob/HEAD/CHANGELOG.md) · License: MIT with Commons Clause — see [`LICENSE`](https://github.com/IlJuniorlI/TradingBot/blob/HEAD/LICENSE)

This README documents the **live config surface that the bot actually loads today** from `intraday_tv_schwab_bot/config.py`, plus the shipped top-level presets under `configs/` and plugin manifests under `intraday_tv_schwab_bot/_strategies/`.

Three important notes up front:

1. **Top-level block tables below show code defaults**. The strategy-by-strategy sections later in this file reflect the shipped top-level `configs/config.<strategy>.yaml` presets and matching manifest defaults that tune each bundled strategy.
2. Strategy params are split between **strategy-specific knobs** and **shared reusable groups** like anti-chase, FVG confluence, and adaptive trade management.
3. **Dashboard zoom on 1080p and lower displays**: the dashboard is laid out for 1440p+. On 1080p (or smaller), set browser zoom to…
