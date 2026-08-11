---
repo: "nrps9909/twstock-predictor"
name: "twstock-predictor"
description: "Open-source 台股量化分析：20 因子評分、Chronos/XGBoost 預測、FastAPI、Next.js 與風險控制"
readmeQualityOk: true
url: "https://github.com/nrps9909/twstock-predictor"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["fastapi", "finmind", "machine-learning", "nextjs", "quantitative-finance", "risk-management", "taiwan-stock-market", "time-series-forecasting"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-26T04:45:12Z"
lastCommitAt: "2026-08-11T04:45:56Z"
lastReleaseAt: "2026-08-11T04:47:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 12
maintainers: ["nrps9909"]
openGraphImageUrl: "https://opengraph.githubassets.com/24cf0b635664f49b1b0985f92582114d07eedc7f2ad3519158150ea941869340/nrps9909/twstock-predictor"
---

# 📈 twstock-predictor — 台股 AI 量化分析系統

> 用 20 個因子幫你看清每支股票的「體質」，再用 AI 幫你寫出一份看得懂的分析報告。

---

## 這個系統在做什麼？

想像你有一個全天候的股票分析助手：

1. **每天自動掃描** 80+ 支台股，從法人買賣、技術指標、國際市場到新聞情緒，一口氣看完
2. **用 20 個面向幫股票打分數**（0-100 分），而且會根據現在是多頭、空頭還是盤整，自動調整各面向的重要性
3. **AI 寫分析報告**，告訴你「為什麼」給這個分數，可能的風險和機會在哪裡
4. **風控自動把關**，設停損、控倉位，避免單一股票賠太多

**一句話版本：** 數據收集 → 20 因子打分 → AI 寫報告 → 風控把關 → 推播警報

---

## 系統如何運作？

```
  你輸入一支股票（如 2330 台積電）
              │
              ▼
  ┌─ Phase 1: 收集資料（同時進行，約 5 秒）─────────────┐
  │  • 股價走勢（FinMind API）                          │
  │  • 三大法人買賣（證交所 T86）                        │
  │  • 月營收數據（FinMind 營收 API）                    │
  │  • 國際市場（費城半導體、台積電ADR、ASML）            │
  │  • 總經指標（VIX恐慌指數、美國公債、銅價）            │
  │  • 新聞 & 社群情緒（鉅亨網、PTT 等）                 │
  │  • 基本面（本益比、股價淨值比、殖利率）               │
  └──────────────────────────────────────────────────┘
              │
              ▼
  ┌─ Phase 2: 分析特徵 ─────────────────────────────┐
  │  • 計算 20 個評分因子（全部用公式，不靠 AI 猜）     │
  │  • HMM 判斷現在是多頭/空頭/盤整                    │
  │  • ML 模型預測（LSTM + XGBoost 集成）              │
  │  • AI 從新聞中萃取情緒分數                         │
  └──────────────────────────────────────────────────┘
              │…
