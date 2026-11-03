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
stars: 18
forks: 25
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-11-03T19:05:14Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 59
maintainers: ["wlrwx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e09e2a79335a2c2fd7581d79efb6c45da60a0ed9336b3267771fc4f10b99d72/wlrwx/football-engine"
---

# Sporttery Engine

A probability analysis and virtual betting simulation system for Sporttery football. It is based on the Dixon-Coles Poisson model plus Monte Carlo simulation, with market probabilities dominating the fusion, Kelly criterion for virtual stake allocation, and fully automatic operation on GitHub Actions at zero server cost. **For data analysis and algorithm learning only. It does not constitute any betting advice; all outputs are virtual bookkeeping.**

## Core Principles (driven by 2026-08 data evidence)

1. **The market is the benchmark**: Based on 426 ledger matches, the pure market (vig-removed) Brier score of 0.583 outperforms any model stream (0.646+). The fusion weight is therefore market-dominant (0.75), with models and third-party sources only fine-tuning.
2. **Every switch is decided by data**: Each step of the fusion chain is a config switch (`config/prediction.json["fusion"]["post_fusion"]`). Whether each stays is decided by paired replay of settled ledgers via `scripts/ablation_replay.py`.
3. **Self-evolution with guardrails**: Any automatic enabling of the calibration layer or LGBM must pass a time-based split plus a paired significance test. It is…
