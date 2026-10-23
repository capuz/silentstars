---
repo: "malciller/dio-domains"
name: "dio-domains"
description: "High-frequency OCaml 5 multicore trading engine. Strategies are authored and extended through a scripting configuration backed by registered actions. One OCaml domain per asset, lock-free order execution, and a capital-survival oracle sizing positions from historical drawdown. Runs on Kraken, Hyperliquid, Lighter, Interactive Brokers, and Alpaca."
readmeQualityOk: true
url: "https://github.com/malciller/dio-domains"
homepage: "https://diophantsolutions.com/dio/"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [98]
topics: ["ocaml", "ocaml5", "trading-engine", "algorithmic-trading", "alpaca", "hyperliquid", "interactive-brokers", "kraken", "ladder-trading", "lighter"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2025-10-22T16:43:16Z"
lastCommitAt: "2026-10-23T12:04:54Z"
lastReleaseAt: "2026-09-14T10:47:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 88
maintainers: ["malciller"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b2746da9c94806d414398bf114caf541928efad32df75cf329bddf7b91e5ed/malciller/dio-domains"
discussionCount: 1
---

# dio-domains

dio is an OCaml 5 trading engine built for high-frequency trading. Strategies
are authored and extended through a scripting configuration. The engine loads a
strategy, validates it, and runs it over a library of registered actions. The
bundled strategy is Jacobs Ladder, a grid that buys dips and sells into
reversals. It runs against Kraken, Hyperliquid, Lighter, Interactive Brokers,
and Alpaca.

Each traded asset runs in its own OCaml domain. Order intents go through a
lock-free executor, and market data arrives on lock-free ring buffers. A
capital-survival oracle sizes each position from the asset's all-time drawdown
history. A terminal dashboard connects to the running engine over a Unix domain
socket, with latency and log views and an alert popup for warnings and errors.

> dio trades real money and ships without warranty. Test on a testnet before
> risking capital.

## Quick start

The [deployment guide](https://diophantsolutions.com/dio/DEPLOYMENT/) has the
full walkthrough. Create a working directory, pull the image, extract the
starter files, then fill in `config.json` and `.env`.

The image contains the example config, env template, and compose file:

```sh…
