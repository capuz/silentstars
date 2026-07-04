---
repo: "ilahuerta-IA/tradingsystem"
name: "tradingsystem"
description: "Modular backtesting framework for algorithmic trading using Backtrader. Features a 4-phase state machine strategy, JPY pair P&L correction (ERIS logic), and professional reporting. Educational resource for learning systematic trading."
readmeQualityOk: true
url: "https://github.com/ilahuerta-IA/tradingsystem"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["algorithmic-trading", "backtesting", "backtrader", "financial-analysis", "forex", "python", "quantitative-finance", "risk-management", "trading-strategies"]
stars: 13
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T09:51:28Z"
lastCommitAt: "2026-07-04T23:14:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["ilahuerta-IA"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b1f2648c7e67159f45b6cce2865e763445de932ba51f7ef5706eaf37414ff5/ilahuerta-IA/tradingsystem"
---

# 🚀 Modular Algorithmic Trading System

> **Production-grade backtesting & live trading framework.**  
> Designed for multi-strategy portfolios with proper risk management.

This repository implements a **clean, scalable architecture** for backtesting and live trading. It features centralized configuration, multi-asset support, and professional reporting.

**Current Version:** v0.3.0  
**Strategies:** Sunset Ogle (4-phase breakout) + KOI (Engulfing + EMA momentum)  
**Live Trading:** MT5 integration with multi-symbol monitoring

---

## 📂 Project Structure

```text
TradingSystem/
├── config/
│   ├── settings.py              # ⚙️ Central configuration for all strategies
│   ├── bot_settings.py          # 🤖 Live trading settings (broker, timezone)
│   └── credentials/             # 🔐 MT5 login credentials
├── lib/
│   ├── commission.py            # 💰 Forex commission with JPY P&L correction
│   └── filters.py               # 🎯 Reusable filter functions (time, ATR, angle, SL pips)
├── strategies/
│   ├── sunset_ogle.py           # 🌅 4-Phase State Machine strategy
│   └── koi_strategy.py          # 🐟 Engulfing + 5 EMAs + CCI strategy
├── live/
│   ├── connector.py…
