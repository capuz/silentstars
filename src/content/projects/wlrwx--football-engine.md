---
repo: "wlrwx/football-engine"
name: "football-engine"
description: "Sporttery football probability analysis system - Dixon-Coles + Monte Carlo ensemble model, fully automated on GitHub Actions"
originalDescription: "竞彩足球概率分析系统 - Dixon-Coles + Monte Carlo 集成模型，GitHub Actions 全自动运行"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wlrwx/football-engine"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 23
forks: 27
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-11-17T14:35:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 56
maintainers: ["github-actions[bot]", "wlrwx"]
openGraphImageUrl: "https://opengraph.githubassets.com/98be173b969fc6f5274534979e56b9227c5418608006aa72751498b5c62f820f/wlrwx/football-engine"
---

# Sporttery Engine

Sporttery football probability analysis and virtual betting simulation system. It is based on the Dixon-Coles Poisson model and Monte Carlo simulation, uses market-dominated probability fusion, and allocates virtual bets with the Kelly criterion. It runs fully automatically on GitHub Actions at zero server cost. **For data analysis and algorithm learning only. It does not constitute any betting advice. All outputs are virtual bookkeeping.**

## Core Principles (driven by 2026-08 data evidence)

1. **The market is the benchmark**: Across a 426-match ledger, the pure market (vig-removed) Brier score of 0.583 outperforms every model stream (0.646+). So the fusion weight is market-dominated (0.75), and models and third-party sources only make minor adjustments.
2. **Every switch is decided by data**: Each step of the fusion chain is a config switch (`config/prediction.json["fusion"]["post_fusion"]`). Whether each one stays is decided by `scripts/ablation_replay.py`, which runs a paired replay on settled ledgers.
3. **Self-evolution with guardrails**: Any automatic enabling of the calibration layer or LGBM must pass a time-based split and a paired significance test.…
