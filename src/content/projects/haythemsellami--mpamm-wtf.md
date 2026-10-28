---
repo: "haythemsellami/mpamm.wtf"
name: "mpamm.wtf"
description: "A real-time dashboard for proprietary AMMs on Monad."
readmeQualityOk: true
url: "https://github.com/haythemsellami/mpamm.wtf"
homepage: "https://mpamm.wtf/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["dex", "monad", "pamm", "propamm"]
stars: 8
forks: 9
openIssues: 9
closedIssues: 10
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-30T06:28:01Z"
lastCommitAt: "2026-10-28T09:56:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 64
maintainers: ["haythemsellami", "thogard785"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1ff5892f442208463e161b0466a71ac782e21e6c6b2526256f36f5d19d5df11/haythemsellami/mpamm.wtf"
---

# propAMM · Monad — execution monitor

**Live at [mpamm.wtf](https://mpamm.wtf).**

A real-time dashboard for **propAMMs on Monad mainnet** — venues where a market maker (or the oracle it anchors to) sets the price. Every venue is a **composable adapter**: one file + one registry line lists a protocol, and volume, fills, markouts, quote-update gas and the UI all follow. Every pair is benchmarked against its **own CEX reference**, routed per base asset and **converted into the pair's own terms** (live stable cross + wrapped/native basis, never a $1 peg). Four views: live execution quality (with an optional standard-DEX baseline band), filled volume + quote-update gas burn, swap markouts, and a markout leaderboard.

```
┌──────────────┐   Multicall3 eth_call (quotes)   ┌──────────────┐   REST + WS    ┌─────────────┐
│ Monad RPC    │──  getLogs tail (fills) ────────▶│   server/    │───────────────▶│    web/     │
│ CEX WS feeds │──  reference books + crosses ───▶│ DataSource   │  /api  /stream │ React tabs  │
│ (per asset)  │──  wrapped/native basis ────────▶│              │                │             │
└──────────────┘                                  └──────────────┘…
