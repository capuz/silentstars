---
repo: "BubbleParticles/Planar.jl"
name: "Planar.jl"
description: "Trading bot and backtesting framework written in julia"
readmeQualityOk: true
url: "https://github.com/BubbleParticles/Planar.jl"
homepage: "https://planar.pages.dev"
language: "Julia"
languages: ["Julia"]
languagePcts: [90]
topics: ["bitcoin", "ccxt", "crypto-trading", "cryptocurrency", "finance", "julia", "python", "trading", "tradingbot"]
stars: 8
forks: 4
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2024-11-07T15:33:02Z"
lastCommitAt: "2026-08-12T05:02:04Z"
lastReleaseAt: "2026-06-17T15:43:27Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 81
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a6552f8b045b1d1166ccbed7b932d22aee3ca455960d8fb79478c4eff5d2292f/BubbleParticles/Planar.jl"
fundingLinks: ["KO_FI:https://ko-fi.com/A0A81M3SML"]
discussionCount: 0
---

<br>
  <em>Planar, advanced solutions for demanding practitioners</em>
</div>

<br>
<br>

Planar is a framework designed to help you build your own trading bot. While it is primarily built around the [CCXT](https://github.com/ccxt/ccxt) API, it can be extended to work with any custom exchange, albeit with some effort.

### Customizations
Julia's dispatch mechanism makes it easy to customize any part of the bot without feeling like you are monkey patching code. It allows you to easily implement ad-hoc behavior to solve exchange API inconsistencies (despite CCXT's best efforts at unification). You don't have to wait for upstream to fix some annoying exchange issue, you can fix most things by dispatching a function instead of having to maintain a fork with a patchset. Ad-hoc customizations are non-intrusive.

### Margin and Leverage
Most open-source trading frameworks don't have a fully thought-out system for handling margined positions. Planar employs a type hierarchy that can handle isolated and cross margin trading, with hedged or unhedged positions. (However, only isolated unhedged positions management is currently implemented, PRs welcome).

### Large Datasets
Strategies can…
