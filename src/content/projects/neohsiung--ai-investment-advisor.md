---
repo: "neohsiung/AI-Investment-Advisor"
name: "AI-Investment-Advisor"
description: "AI-powered quantitative investment platform with 7-agent swarm orchestration, fractal debate algorithm, 3-tier LLM routing, and automated eToro trading — built for autonomous portfolio management."
readmeQualityOk: true
url: "https://github.com/neohsiung/AI-Investment-Advisor"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-agents", "clean-architecture", "dspy", "llm", "python", "quantitative-finance", "algorithmic-trading", "automated-trading", "domain-driven-design", "financial-analysis"]
stars: 6
forks: 2
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-11-30T06:39:41Z"
lastCommitAt: "2026-10-31T07:46:17Z"
lastReleaseAt: "2026-09-20T12:18:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 75
maintainers: ["neohsiung", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ce0927fc568f7fe40be75ed8a2f3896db811f664575f3b7ebf4fe952212ff1/neohsiung/AI-Investment-Advisor"
---

# AI Investment Advisor

  &nbsp;
  &nbsp;
  &nbsp;

> [!WARNING]
> **Not investment advice. If you connect a funded broker account, it trades real money.** The software places real orders once it has live broker credentials, and it is provided "AS IS" with no warranty (see [LICENSE](https://github.com/neohsiung/AI-Investment-Advisor/blob/HEAD/LICENSE) and [NOTICE](https://github.com/neohsiung/AI-Investment-Advisor/blob/HEAD/NOTICE)). In this project `TRADING_MODE=paper` is not a simulation: the eToro token has no demo permission, so every broker call fails with `InsufficientPermissions`. The safe brakes are `ai_trading_enabled=false` and `tradable_capital_pct=0`. Read the code before you connect a funded account.

AI Investment Advisor is a self-hosted quantitative investment system. Several LLM agents evaluate each trade idea, deterministic code decides, and orders can go to a live eToro account. It is for developers who want to study this kind of system and accept the financial risk of running it.

Whether it earns a net excess return over SPY has not been shown. Check `/api/v1/net-alpha` and your own database rather than this text.

## What it does

| Area | Method |…
