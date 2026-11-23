---
repo: "Yuri-Mizuki/YuriQuant"
name: "YuriQuant"
description: "A personal quantitative research system covering the full pipeline: data → factor mining (exhaustive / GP / GFlowNet / RL) → models → portfolio optimization → backtesting → monitoring. Covers A-share daily and intraday data; research-oriented, with no live trading."
originalDescription: "个人量化研究系统：数据 → 因子（exhaustive/GP/GFlowNet/RL 挖掘）→ 模型 → 组合优化 → 回测 → 监控全链路，A 股日频+日内，研究导向不做实盘。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yuri-Mizuki/YuriQuant"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["genetic-algorithm", "gflownet", "quant", "quantitative-finance", "quantum-machine-learning", "stock-market"]
stars: 11
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-14T11:10:47Z"
lastCommitAt: "2026-11-23T10:24:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: ["Yuri-Mizuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/97a607b6bc845e4a3182462ffb7364cfcdd796464c0a33387ed9237a48840ca6/Yuri-Mizuki/YuriQuant"
---

# YuriQuant

**A-share full-market quantitative research and production system.**

From raw market data to a daily actionable ranking list, it covers the complete pipeline: data collection, factor research, model training, portfolio construction, backtesting, risk attribution, production scheduling, and report delivery. The full pipeline can run on a single machine.

The system is designed around three principles: **backtests use no future information, research conclusions can be reproduced out of sample, and strategies can go directly into production.** Research code and production code share the same data layer, factor layer, and backtesting engine. Any strategy that appears in a report can be run in daily production with the same code.

---

## 1. Core Strategies

### 1.1 yqcore Finalized Strategy

Three configurations of the same signal family. They differ in position concentration and the execution layer. Backtest window: 2019-01 to 2026-09. Initial capital: 1,000,000 yuan.
