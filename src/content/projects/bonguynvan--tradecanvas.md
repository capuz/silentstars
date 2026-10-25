---
repo: "bonguynvan/tradecanvas"
name: "tradecanvas"
description: "Trading charts for the web, drawn with Canvas 2D or WebGL: 134 indicators, 69 drawing tools, 18 chart types, live exchange feeds, orders on the chart, replay and backtesting, touch-ready on phones. Zero dependencies. TypeScript, React, Vue, Svelte."
readmeQualityOk: true
url: "https://github.com/bonguynvan/tradecanvas"
homepage: "https://tradecanvas.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["backtesting", "candlestick-chart", "canvas", "charting-library", "crypto", "drawing-tools", "financial-charts", "fintech", "indicators", "react"]
stars: 28
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-04-08T17:26:04Z"
lastCommitAt: "2026-10-25T02:47:51Z"
lastReleaseAt: "2026-10-05T05:02:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["bonguynvan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/df034750b1b12cf8b2784d7a2fabe3a517fa6e4e6dba2ebbf86745b9f9f6f4d1/bonguynvan/tradecanvas"
fundingLinks: ["GITHUB:https://github.com/bonguynvan"]
discussionCount: 2
---

**A complete trading chart for the web.** Candlesticks to Renko, 134 indicators, 69 drawing tools, live feeds and orders on the chart, on Canvas 2D or WebGL, with no third-party dependencies. Use the full `ChartWidget`, or build your own interface on the headless `Chart`, in TypeScript, React, Vue or Svelte.

## Highlights

- **18 chart types, 134 indicators, 69 drawing tools**, indicators on indicators, alerts on lines, undo and redo.
- **Trading on the chart**: positions with live P&L, orders and stops you drag, a paper broker or your own.
- **Live data** from Binance, Bybit, Coinbase and Kraken, or your own feed in about twenty lines.
- **Fast**: a million bars panned at 60 fps with WebGL; a live tick in about a microsecond.
- **A workspace**: grids of charts, layouts, bar replay, backtesting.
- **Yours to shape**: themes, four looks, 132 switches, plugins; 30 languages; phones and apps.

## Quick start

```bash
npm install @tradecanvas/chart
```

```typescript
import { ChartWidget } from '@tradecanvas/chart/widget'
import { BinanceAdapter } from '@tradecanvas/chart'

new ChartWidget(document.getElementById('chart')!, {
  symbol: 'BTCUSDT',
  timeframe: '5m',
  theme: 'dark',…
