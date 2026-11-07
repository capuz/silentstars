---
repo: "joaquinbejar/market-maker-rs"
name: "market-maker-rs"
description: "A Rust library implementing quantitative market making strategies, starting with the Avellaneda-Stoikov model. This library provides the mathematical foundations and domain models necessary for building automated market making systems for financial markets."
readmeQualityOk: true
url: "https://github.com/joaquinbejar/market-maker-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["avellaneda-stoikov", "market-making", "quantitative-finance", "risk-management", "rust", "trading"]
stars: 112
forks: 39
openIssues: 23
closedIssues: 94
watchers: 3
contributors: 1
recentReleases: 4
createdAt: "2025-10-13T16:09:49Z"
lastCommitAt: "2026-11-07T10:37:11Z"
lastReleaseAt: "2026-11-01T19:44:23Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 95
undervaluedScore: 51
maintainers: ["joaquinbejar"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbc199ef6b53f4897bccbd8da251fb7184184fcf67e571846ca9f2b286045cfc/joaquinbejar/market-maker-rs"
---

## Market Making Library

A comprehensive Rust library implementing quantitative market making strategies based on
the Avellaneda-Stoikov model and extensions. This library provides production-ready
components for building automated market making systems for financial markets.

### Overview

Market making is the practice of simultaneously providing buy (bid) and sell (ask) quotes
in a financial market. The market maker profits from the bid-ask spread while providing
liquidity to the market.

#### Key Challenges Addressed

- **Inventory Risk**: Dynamic quote skewing based on position
- **Adverse Selection**: Order flow toxicity detection with VPIN
- **Optimal Pricing**: Stochastic control theory for spread optimization
- **Risk Management**: Circuit breakers, drawdown limits, and position controls
- **Multi-Asset**: Correlation-aware portfolio risk management
- **Options Market Making**: Greeks-aware quoting with delta hedging

### Features

#### Strategy Models

- **Avellaneda-Stoikov**: Classic optimal market making with reservation price
- **GLFT**: Guéant-Lehalle-Fernandez-Tapia optimal quotes with a bounded inventory (exact solution and closed form)
- **Grid Trading**:…
