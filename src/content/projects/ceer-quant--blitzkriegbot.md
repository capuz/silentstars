---
repo: "ceer-quant/BlitzkriegBot"
name: "BlitzkriegBot"
description: "A high-frequency quantitative trading system with a 100% Rust core."
originalDescription: "一个 100% Rust 内核的高频量化交易系统。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ceer-quant/BlitzkriegBot"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 10
forks: 2
openIssues: 7
closedIssues: 243
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-14T06:23:20Z"
lastCommitAt: "2026-10-29T21:23:40Z"
lastReleaseAt: "2026-10-26T01:02:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["cutefancer", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1369388416/9c13c750-d553-4db9-b541-5cb6b92c73eb"
discussionCount: 0
---

# BlitzkriegBot

### Turn trading ideas into runnable strategies.

Create strategies with a visual blueprint or Lua, validate them in backtesting and simulation environments, and manage accounts and risk through a panel.

**[Start simulating](#quickstart) · [Create your first strategy](#blueprint) · [View validation scope](https://github.com/ceer-quant/BlitzkriegBot/blob/HEAD/docs/FEATURES.md)**

*From node wiring to Lua strategy packages, make trading logic visible and easy to change.*

Defaults to dry simulation mode, and strategies are installed disabled by default. Live trading involves real financial risk and requires thorough validation and explicit authorization. This project does not constitute investment advice.

## Start from an idea

**Create strategy → Backtest and evaluate → Run in simulation → Go live once validation and authorization conditions are met**

| What you want to do | How to do it in BlitzkriegBot |
| --- | --- |
| Write the idea as rules | In the Blueprint, connect data sources, conditions, and actions; write Lua when you need more flexible logic. |
| Check whether a strategy is worth pursuing | Use the supported replay and backtest entry points to…
