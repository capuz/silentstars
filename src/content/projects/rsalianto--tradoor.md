---
repo: "rsalianto/tradoor"
name: "tradoor"
description: "Open-source crypto trading terminal in the browser: TradingView-style charts, TPO market profile, footprint, liquidations and order flow from Binance, Bybit, OKX, Bitget and Hyperliquid, with a trading journal and paper trading. Built with Rust, WebAssembly and WebGL2."
readmeQualityOk: true
url: "https://github.com/rsalianto/tradoor"
homepage: "https://tradoorterminal.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [52, 43]
topics: ["binance", "bybit", "candlestick-chart", "crypto-trading", "cryptocurrency", "footprint-chart", "hyperliquid", "liquidations", "market-profile", "order-flow"]
stars: 163
forks: 36
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 10
createdAt: "2026-10-24T06:03:43Z"
lastCommitAt: "2026-11-13T18:36:22Z"
lastReleaseAt: "2026-11-05T15:47:46Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 29
maintainers: ["rsalianto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431869627/39ef6200-c96d-4427-a9df-a8606d4b3c0f"
discussionCount: 2
---

TradingView-style charts, ExoCharts-style market profiles and a DOM in a workspace you lay out yourself, drawn by a Rust engine in WebAssembly and fed live from the exchanges.

**⚡ Light and fast.** The chart engine is Rust in a Web Worker, drawing with WebGL2 on an OffscreenCanvas, so the page thread never touches a candle. A minute chart with months behind it costs what one opened today does.

**📊 Order flow and market profile.** A DOM and a tape on fourteen exchanges, TPO profiles by session, footprints with bid and ask at every price, value areas, and a Values panel that reads a market at a glance.

**🔥 Live from the source.** Fourteen exchanges, streamed straight to the browser: trades fold into the forming bar, order books fill the DOM, liquidations land from eleven exchanges, and net taker flow is counted per venue.

**📓 Journal and training.** Every position you draw becomes a trade that price settles, and a paper account trades Binance's perpetuals at their live prices, from the chart or the DOM.

## Features

Every screenshot is the live site, or for the journal and training a local one with sample trades.

### Many charts, one workspace

Up to 20 charts on screen,…
