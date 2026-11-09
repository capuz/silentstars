---
repo: "aowang-ai/jev-trade"
name: "jev-trade"
description: "Live Jev trader on Hyperliquid"
readmeQualityOk: true
url: "https://github.com/aowang-ai/jev-trade"
homepage: "https://jev-trade.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["hyperliquid", "jev", "quantitative-finance", "typesafe"]
stars: 227
forks: 45
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-17T16:33:05Z"
lastCommitAt: "2026-11-09T00:54:02Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 18
maintainers: ["aowang-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/926e1c73093ee55aeef77b34757e440d7707a23847ef9ae78c42683aa37a21a8/aowang-ai/jev-trade"
---

# Jev Trade

I built a trading bot with Jev. Jev reads the Hyperliquid book every tick and answers buy, sell, or hold. The bot sends the order. Five coins, five wallets, real fills.

**[Watch the live desk](https://www.jev-trade.com/)**

Jev makes the call. Hold is one of its answers, so a tick can end with no order. Position, balance, and PnL come from Hyperliquid.

Based on [jev-trader](https://github.com/jarrodwatts/jev-trader) by Jarrod Watts (MIT). Venue is Hyperliquid, not Monad / Kuru.

## What you are looking at

- Five isolated sleeves: BTC, ETH, SOL, DOGE, BNB. Each has its own wallet and its own Jev call.
- The left pane is the live book as candles. Green and red marks are fills. The entry line is the open position.
- The right pane is the latest Jev call and the tape of every tick.
- The table is Positions and Trades, the same split a futures desk uses.

A live key on testnet or mainnet sends real orders. Start with a dry run.

## How a tick works

1. The bot reads the book.
2. Jev picks long or short, then open, close, or hold.
3. An entry is a post-only Alo quote one tick inside the touch, so it sits on the maker side until a taker hits it.
4. An exit is an Ioc that…
