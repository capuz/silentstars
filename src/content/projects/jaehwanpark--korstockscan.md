---
repo: "JaehwanPark/KORStockScan"
name: "KORStockScan"
description: "🚀 KORStockScan - AI-based KOSPI Quant Automated Trading Sniper KORStockScan utilizes the Kiwoom Securities REST API+ and machine learning (Stacking Ensemble) to scan for blue-chip stocks in the KOSPI, capturing optimal entry points through real-time WebSocket for fully automated trading as a quant trading bot. It is designed with a strong survival capability to withstand market crashes by going beyond simple technical indicators to focus on **'Smart Money Acceleration (Foreign/Institution Accumulation Speed)'** and **'Market State (Regime) Interpretation'**."
originalDescription: "🚀 KORStockScan - AI 기반 코스피 퀀트 자동매매 스나이퍼 KORStockScan은 키움증권 REST API+와 머신러닝(Stacking Ensemble)을 활용하여 코스피(KOSPI) 우량주를 스캐닝하고, 실시간 웹소켓을 통해 최적의 타점을 잡아내어 완전 자동매매를 수행하는 퀀트 트레이딩 봇입니다.  단순한 기술적 지표를 넘어 **'스마트 머니 가속도(외인/기관 매집 속도)'**와 **'시장 상태(Regime) 판독'**을 통해 폭락장에서도 살아남는 강력한 생존력을 목표로 설계되었습니다."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/JaehwanPark/KORStockScan"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["kiwoom", "kiwoom-api", "kiwoom-open-api", "kiwoom-rest-api", "kospi", "krx-client"]
stars: 9
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T11:14:30Z"
lastCommitAt: "2026-07-16T05:59:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["JaehwanPark"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fc0c2350594f365acd6db7cf61e45a8eccc49e341a5ef890a1469ac062e7ff3/JaehwanPark/KORStockScan"
---

# KORStockScan

KORStockScan is a personal research/operating system that automatically observes Korean stock trading, linking intraday judgments and post-trade reviews to prepare execution candidates for the next trading session.

In short, it does three things together. During the trading day, it evaluates scalping candidates by monitoring Kiwoom quotes and account status, and after trading, it compares actual trades with simulation results to calculate what worked well. It then passes only the results to the limited execution candidates for the next trading session, preventing quiet increases in real account changes.

The current reference document for this repository is [Plan Rebase](https://github.com/JaehwanPark/KORStockScan/blob/HEAD/docs/plan-korStockScanPerformanceOptimization.rebase.md). Daily execution items are owned by the [stage2 checklist](https://github.com/JaehwanPark/KORStockScan/blob/HEAD/docs/checklists/README.md), and time-based operational procedures follow the [Time-Based Operations Runbook](https://github.com/JaehwanPark/KORStockScan/blob/HEAD/docs/time-based-operations-runbook.md).

Current document reference date: `2026-07-03 KST`

The clean baseline for…
