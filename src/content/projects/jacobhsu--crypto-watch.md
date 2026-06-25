---
repo: "JacobHsu/crypto-watch"
name: "crypto-watch"
description: "View multiple TradingView charts all in one screen."
url: "https://github.com/JacobHsu/crypto-watch"
homepage: "https://jacobhsu.github.io/crypto-watch/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [69, 27]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-18T11:43:01Z"
lastCommitAt: "2026-06-25T01:36:58Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 63
maintainers: ["actions-user", "JacobHsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6c0e61721459c8a496aff89608c844016448c76328d8b6580e841f446566393/JacobHsu/crypto-watch"
---

# Crypto Watch - 加密貨幣監控儀表板

一個類似 cryptowatch.net 的實時加密貨幣監控網站，使用 TradingView Advanced Real-Time Chart 技術。

## 功能特色

- **實時圖表**: 使用 TradingView 的專業圖表技術
- **多頁面設計**: 主頁面 + 各幣種深度分析 + 特殊分析模式
- **多幣種監控**: BTC, ETH, XRP, SOL + RWA 資產 (SLVX, USOX, EWJX, EWYX)
- **多時間框架**: 1小時、4小時、日線圖表
- **四欄指標配置**: 每個時間框架顯示四組不同技術指標
- **自動截圖**: 每週一台灣時間 8:00 自動生成圖表截圖
- **響應式設計**: 適配各種螢幕尺寸
- **深色主題**: 專業的交易介面風格

## 頁面說明

### 主頁面 (`index.html`)
- **說明**: 綜合多幣種監控，四欄 × 三個時間框架
- **訪問**: https://jacobhsu.github.io/crypto-watch/

### 幣種深度分析頁面

每個幣種頁面使用 `crypto-base.js` 自動偵測符號，提供 1h/4h/1d × 4 欄指標組合：

| 頁面 | 交易對 | 交易所 |
|------|--------|--------|
| `btc.html` | BTCUSDT | Binance |
| `eth.html` | ETHUSDT | Binance |
| `sol.html` | SOLUSDT | Binance |
| `xrp.html` | XRPUSDT | Binance |

**訪問**: https://jacobhsu.github.io/crypto-watch/btc
(eth / sol / xrp 同理)

### 山寨幣通用頁面 (`altcoin.html`)
- **說明**: 通用山寨幣分析，透過 `?s=` 參數切換幣種，未定義的幣種自動組成 `BINANCE:XUSDT`
- **預設支援**: SOL, XRP, BNB, DOGE, ADA, SUI, PEPE, WLD 等（未列出的幣種自動 fallback）
- **交易所**: Binance (現貨)
- **訪問**: https://jacobhsu.github.io/crypto-watch/altcoin?s=WLD

#### 鍵盤快捷鍵（在任意幣種頁面按下）

> 所有快捷鍵均以新分頁開啟，不離開當前頁面。

| 快捷鍵 | 動作 | 時間框架 | 欄數 |
|--------|------|---------|------|
| 無…
