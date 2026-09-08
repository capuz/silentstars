---
repo: "FerroxLabs/tvcontrol"
name: "tvcontrol"
description: "TVControl by Ferrox Labs — TradingView MCP System. AI remote control for TradingView Desktop. 88 MCP tools driving symbols, indicators, Pine, snapshots, sweeps, replay, and live chart vision. All local, zero cloud calls."
readmeQualityOk: true
url: "https://github.com/FerroxLabs/tvcontrol"
homepage: "https://github.com/FerroxLabs/tvcontrol#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-trading", "automation", "cdp", "claude", "mcp", "model-context-protocol", "pine-script", "trading", "tradingview"]
stars: 39
forks: 13
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-04-25T06:29:53Z"
lastCommitAt: "2026-09-08T08:16:27Z"
lastReleaseAt: "2026-09-08T01:02:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 51
maintainers: ["TheRealSeanDonahoe", "FerroxLabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f058e1d34195aacff908475a1e2f30f2d8db989edcac12d21dd052523b87d5/FerroxLabs/tvcontrol"
---

</p>

# TVControl

### TradingView MCP System · by [Ferrox Labs](https://github.com/ferroxlabs)

> **Tell your AI what you want from your TradingView chart. Watch it happen on screen.**

TVControl turns your TradingView Desktop into something you can talk to. You type a sentence (*"summarise this chart"*, *"sweep this strategy across SPY, QQQ and IWM on 5m and 15m"*, *"step through last March bar by bar and call out the breakout"*) and the AI reads, clicks, types, compiles and screenshots inside the actual TradingView app on your machine. No copy-paste and no TVControl-operated cloud backend. TradingView Desktop and explicitly selected public-API helpers still communicate with TradingView as documented.

It works because every Chromium app, TradingView Desktop included, ships with a built-in debugging interface (the same one Chrome uses to debug itself). TVControl speaks that interface on your behalf, exposing **113 chart-control and diagnostic tools** to any agent that speaks the Model Context Protocol. It is client-neutral: anything that can launch an MCP server over stdio works, and it is in daily use across several. Pair-program in Pine Script. Optimize parameter grids.…
