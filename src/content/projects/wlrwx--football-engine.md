---
repo: "wlrwx/football-engine"
name: "football-engine"
description: "Sports Lottery Football Probability Analysis System - Dixon-Coles + Monte Carlo Integrated Model, Fully Automated Running on GitHub Actions"
originalDescription: "竞彩足球概率分析系统 - Dixon-Coles + Monte Carlo 集成模型，GitHub Actions 全自动运行"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wlrwx/football-engine"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
stars: 14
forks: 13
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-09-19T01:38:19Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c11d2a87ffa979524e82466992311550b8e521c08afcb15a2bf78269b8b2cdb/wlrwx/football-engine"
---

# Sporttery Engine

Sports lottery football probability analysis and virtual betting simulation system. Based on Dixon-Coles Poisson model + Monte Carlo simulation, market probability-led fusion, Kelly criterion for virtual betting allocation, fully automated running on GitHub Actions, zero server costs. **For data analysis and algorithm learning only, does not constitute any betting advice, all outputs are virtual accounting.**

## Core Philosophy (2026-08 Data-Driven Evidence)

1. **Market as Benchmark**: 426-game ledger evidence, pure market (removed margin) Brier 0.583 outperforms any model flow (0.646+) → fusion weight market-led (0.75), model/third-party only fine-tuning
2. **All switches decided by data**: Every step of the fusion chain is a config switch (`config/prediction.json["fusion"]["post_fusion"]`), decided by `scripts/ablation_replay.py` paired replay against settled ledgers
3. **Self-Evolution with Guardrails**: Any automatic enablement of calibration layer/LGBM must pass time-series split + paired significance testing, automatic disable on degradation—see `docs/UPGRADE2_20260829.md` for details

## Architecture

```
Daily loop: fetch data → fused prediction…
