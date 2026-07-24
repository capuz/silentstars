---
repo: "ianalloway/solvent-agent"
name: "solvent-agent"
description: "An AI agent that runs as a profitable, self-funding business: earns via Stripe, fulfils with NVIDIA Nemotron, pays its own vendor bills, never works at a loss."
readmeQualityOk: true
url: "https://github.com/ianalloway/solvent-agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agent", "hackathon", "nemotron", "python", "stripe"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-17T22:41:33Z"
lastCommitAt: "2026-07-24T06:08:10Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["ianalloway", "dependabot[bot]", "ImgBotApp"]
openGraphImageUrl: "https://opengraph.githubassets.com/683b36c55238af9846eaf7a07e97fc55ee69246610d6173638cdf1000afaf20d/ianalloway/solvent-agent"
discussionCount: 1
---

# 🪙 SOLVENT

**An AI agent that runs as a profitable, self-funding business.**

It sells research briefs. It collects payment on Stripe. It spends its own revenue to provision the compute it needs. And it refuses any job that doesn't clear a margin.

[**Quick Start**](#-quick-start) · [**How It Works**](#-how-it-works) · [**Live Demo**](#-the-demo) · [**Make It Real**](#-make-it-real)

</div>

---

## The Big Idea

Most agents can spend money. Almost none can **run as a business.**

SOLVENT closes the full loop:

```
  Client pays Stripe → Agent earns revenue → Agent fulfils the work
  → Agent pays its own vendor bills → P&L booked → balance sheet grows
```

Every job is **profit-gated before it starts**. Unprofitable work is declined without touching Stripe. Vendor payments are screened by a NemoClaw-style policy sandbox. The agent literally cannot spend more than it earns.

---

## 🚀 Quick Start

**Zero dependencies. No API keys. Works right now.**

```bash
git clone https://github.com/ianalloway/solvent-agent.git
cd solvent-agent
python3 run_demo.py
```

The agent will run a full batch of 4 analyst jobs — complete with margin gating, Stripe payment simulation, NVIDIA Nemotron…
