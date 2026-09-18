---
repo: "zzwjlwwdtg/quant-trading-framework"
name: "quant-trading-framework"
description: "Algorithmic trading framework for JP + US equities: daily-K signals, HMM regime detection, Claude LLM decision gate, options wall analysis, paper trading"
readmeQualityOk: true
url: "https://github.com/zzwjlwwdtg/quant-trading-framework"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 7
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-21T09:01:18Z"
lastCommitAt: "2026-09-18T14:03:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["kouzi321"]
openGraphImageUrl: "https://opengraph.githubassets.com/4325c6a20e0d250727f42d92421890b158c2fbb10f5d0f17b989c2523b57f9b8/zzwjlwwdtg/quant-trading-framework"
---

# fsi-skills Trading Agents

**Language**: **English** · [简体中文](https://github.com/zzwjlwwdtg/quant-trading-framework/blob/HEAD/README.zh-CN.md)

Multi-strategy quantitative signals + Codex-first local AI CLI analysis + moomoo paper-trading automation.

Targets leveraged and single-name US equities plus rate-sensitive hedges (**TQQQ / SOXL / DRAM / MULL / GLD / NBIS / SHY / IEI / LITE / CBRS / USO / XLV / NVDA / MSFT / AAPL** + satellite: TSLA / GOOGL / KLAC / AMAT / MU). Daily-candle momentum is the main signal with a 15-min intraday assist, smart-money/options context, Trump Truth Social parsed via CLI, gold macro factors, bond monitoring, and options gamma/GEX/IV/Skew analysis. **Macro layer (v0.4)**: next-45-day event scenario forecasts (Cleveland Fed nowcast + CME FedWatch) with Jinshi-style bond/equity impact labels and concrete asset lists, plus a US bond-rescue policy-toolkit tracker (11 tools × 30Y yield reaction). Actionable decisions flow through `paper_trader` into a moomoo **SIMULATE** account (never live).

## Dashboard Preview

**🌐 Live public snapshot (read-only): https://zzwjlwwdtg.github.io/quant-trading-framework/**

Auto-refreshed every 30 min from local webui…
