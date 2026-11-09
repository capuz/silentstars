---
repo: "pgen0x/azimuth"
name: "azimuth"
description: "Azimuth — multi-venue concentrated-liquidity LP bot. Automated pool screening, entry and exit for Meteora DLMM on Solana and Uniswap v3/v4 on Robinhood Chain."
readmeQualityOk: true
url: "https://github.com/pgen0x/azimuth"
language: "Python"
languages: ["Python", "JavaScript", "Go"]
languagePcts: [52, 24, 20]
topics: ["dlmm", "golang", "liquidity-management", "meteora", "meteora-dlmm", "python", "solana", "trading-bot", "ai-agent", "defi"]
stars: 15
forks: 5
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-01T03:28:24Z"
lastCommitAt: "2026-11-09T04:34:01Z"
lastReleaseAt: "2026-07-09T02:19:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 48
maintainers: ["pgen0x", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a2071d4b93152efdb0c1ec6b13a243d60e8e3c58765803bc2e73322fc8b8e2c/pgen0x/azimuth"
fundingLinks: ["GITHUB:https://github.com/pgen0x"]
discussionCount: 1
---

# Azimuth — Concentrated-Liquidity Pool Signal Daemon for AI Agents

**Azimuth** is a Go daemon that watches concentrated-liquidity pools across two
venues — **Meteora DLMM** (Dynamic Liquidity Market Maker) on **Solana** and
**Uniswap v3/v4** on **Robinhood Chain** — screens them through quality gates,
and hands an **AI trading agent** (built on
[Hermes](https://github.com/NousResearch/hermes)) a batch of vetted candidates
to pick from and deploy — instead of you babysitting a screener or grabbing the
first mediocre pool a dumb cron finds.

Each venue gets its own exit monitor. Solana is the mature path (screening,
entry and automated exits); the Robinhood Chain side screens and signals, and
its exit loop ships disabled until you deploy there yourself.

> ⚠️ **This trades real funds.** DYOR. NFA. Use at your own risk — see
> [Disclaimer](#disclaimer).

---

## Table of Contents

- [Why this exists](#why-this-exists)
- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [What gets screened](#what-gets-screened)
- [Configuration](#configuration)
- [Operator tooling](#operator-tooling)
- [Repo layout](#repo-layout)
- [Example…
