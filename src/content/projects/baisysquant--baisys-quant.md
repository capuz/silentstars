---
repo: "baisysquant/BAISYS_QUANT"
name: "BAISYS_QUANT"
description: "The Baishiliang Quantitative Review System adopts a 6-gate rule engine for progressive evaluation (51 rules covering data quality screening → macro environment injection → multi-factor resonance scoring → volatility/divergence risk filtering → capital flow price modification → position linkage adjustment), MACD 7-dimensional pipeline scoring (trend/golden cross/momentum/slope/divergence/volume-price/form), ATR volatility position management (Kelly + profit-loss ratio + volatility correction), multi-cycle industry capital flow analysis, chip distribution analysis, TA-Lib 25+ types of candlestick pattern recognition, and automatically completes a full market A-share review daily. It helps investors review trends, capture opportunities, and transforms complex market fluctuations into quantifiable decision-making bases, anchoring certainty in the ever-changing A-share market and practicing investment art with rules to follow. The product is continuously iterated and updated, with detailed records available in the WIKI."
originalDescription: "百思量化复盘系统，采用6门控规则引擎递进评估（51条规则，覆盖数据质量筛查→宏观环境注入→多因子共振评分→波动率/背离风险过滤→资金流量价修饰→仓位联动调整），MACD 7维管线评分（趋势/金叉/动能/斜率/背离/量价/形态），ATR波动率仓位管理（Kelly+盈亏比+波动率修正），多周期行业资金流分析、筹码分布分析、TA-Lib 25+种K线形态识别，每日自动完成全市场A股复盘。帮助投资者复盘走势、捕捉机会，将复杂的市场波动转化为可量化的决策依据,在万象变幻的A股市场中，锚定确定性，做好有章可循的投资艺术。产品持续迭代更新，详细记录详见WIKI。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/baisysquant/BAISYS_QUANT"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 23
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-11-15T23:24:59Z"
lastCommitAt: "2026-07-05T20:50:29Z"
lastReleaseAt: "2026-07-04T15:43:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 54
maintainers: ["baisysquant"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd7a9df1ad05fb77f2eb446d1def96a047d6109b6e94159b3faf743a5361795d/baisysquant/BAISYS_QUANT"
---

<br/><br/>
  <b>Baishiliang Quantitative</b>
  <br/><br/>
  <b>In the realm of quantification, understand the myriad of markets</b>
  <br/>
</p>
   </br> 
        </br> 
</p>
<br />

## 📖 Project Introduction

Baishiliang is a full-link quantitative system for A-shares, covering **data synchronization → signal pre-calculation → strategy backtesting → daily analysis report** throughout the entire process. The system is divided into two main stages:

### Stage A — Backtesting Calibration

Through Walk-Forward rolling window optimization + Grid Search, it automatically optimizes 6 core strategy parameters (ATR stop-loss multiple, Kelly position ratio, basic position liquidity veto ratio, Bollinger narrow ratio, golden cross decay days) for daily operation.

### Stage B — Daily Analysis Pipeline

A 13-step pipeline synchronizes K-line data incrementally from the database → calculates technical indicators → multi-gate scoring → generates structured Excel reports → synchronizes results to PostgreSQL.

### Design Features

- **Single Parameter MACD Pipeline** — Abandoning redundant dual cycles, focusing on (12,26,9) single parameter + ATR volatility normalization, with configurable…
