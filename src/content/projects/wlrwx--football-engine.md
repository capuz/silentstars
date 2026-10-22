---
repo: "wlrwx/football-engine"
name: "football-engine"
description: "Sporttery Football Probability Analysis System - Dixon-Coles + Monte Carlo integrated model, fully automated on GitHub Actions"
originalDescription: "竞彩足球概率分析系统 - Dixon-Coles + Monte Carlo 集成模型，GitHub Actions 全自动运行"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wlrwx/football-engine"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 17
forks: 20
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-10-22T08:51:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]", "wlrwx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c933c3191b05f2900eb6c64c33612c660fc5574c69fd09ee1fb12ad478b9b697/wlrwx/football-engine"
---

# Sporttery Engine

Probability analysis and virtual betting simulation system for Sporttery football. Based on the Dixon-Coles Poisson model and Monte Carlo simulation, with market probabilities dominating the fusion, Kelly criterion for virtual bet allocation, and fully automated operation on GitHub Actions at zero server cost. **For data analysis and algorithm learning only. Does not constitute any betting advice. All outputs are virtual bookkeeping.**

## Core Principles (driven by 2026-08 data evidence)

1. **The market is the benchmark**: On 426 settled ledger matches, the pure market (vig-removed) Brier score of 0.583 outperforms every model stream (0.646+). Therefore the fusion weight is market-dominant (0.75), and models and third-party sources only make minor adjustments.
2. **Every switch is decided by data**: Each step of the fusion chain is a config switch (`config/prediction.json["fusion"]["post_fusion"]`). Whether each one stays is decided by `scripts/ablation_replay.py`, which runs paired replays on settled ledgers.
3. **Self-evolution with guardrails**: Any automatic enabling of the calibration layer or LGBM must pass a time-based split and a paired significance…
