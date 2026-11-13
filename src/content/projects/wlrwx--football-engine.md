---
repo: "wlrwx/football-engine"
name: "football-engine"
description: "Sporttery football probability analysis system - Dixon-Coles + Monte Carlo integrated model, fully automated on GitHub Actions"
originalDescription: "竞彩足球概率分析系统 - Dixon-Coles + Monte Carlo 集成模型，GitHub Actions 全自动运行"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wlrwx/football-engine"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 22
forks: 27
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-11-13T18:35:17Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 56
maintainers: ["github-actions[bot]", "wlrwx"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dcf1b66107be2ecf5e79c10ae6eab699a62d47155780e9e4ec1deac1acb1199/wlrwx/football-engine"
---

# Sporttery Engine

A probability analysis and virtual betting simulation system for Sporttery football. It is based on the Dixon-Coles Poisson model and Monte Carlo simulation, uses market-dominated probability fusion, allocates virtual bets with the Kelly criterion, and runs fully automatically on GitHub Actions at zero server cost. **For data analysis and algorithm learning only. It does not constitute any betting advice; all outputs are virtual bookkeeping.**

## Core Principles (driven by 2026-08 empirical data)

1. **The market is the benchmark**: Across 426 matches in the ledger, the pure market (vig-removed) Brier score of 0.583 beats every model stream (0.646+). The fusion weight is therefore market-dominated (0.75), and models and third-party sources only make minor adjustments.
2. **Every switch is decided by data**: each step of the fusion chain is a config switch (`config/prediction.json["fusion"]["post_fusion"]`). `scripts/ablation_replay.py` decides whether each one stays or goes, by paired replay over settled ledgers.
3. **Self-evolution with guardrails**: any automatic enabling of the calibration layer or LGBM must pass a time-based split and a paired significance…
