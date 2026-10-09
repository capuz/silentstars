---
repo: "cody-raves/Gonuts"
name: "Gonuts"
description: "A open source data-driven trade automation tool for DonutSMP that adapts as the market moves. It learns real prices, works both sides (sniping cheap listings and bidding the order house no public API shows), and benches markets that stop paying until they turn around. Paper trading, rival intel, Discord control, and a self-hostable hive server."
readmeQualityOk: true
url: "https://github.com/cody-raves/Gonuts"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-20T16:34:18Z"
lastCommitAt: "2026-10-09T18:56:49Z"
lastReleaseAt: "2026-09-23T14:54:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["cody-raves"]
openGraphImageUrl: "https://opengraph.githubassets.com/9072ff6fcccc0cf1baa364287ae3fe80e06b82be6084f8c5bec46c6a35523402/cody-raves/Gonuts"
---

### Trade the DonutSMP auction house on autopilot

GoNuts learns real prices from completed sales, hunts flips on both sides of the
market, and can run the whole play from bidding to reselling. Safety gated, and
off by default.

*Meet your trading bot. It watches the market, bids, buys, and relists, and it lights up when a sale lands.*

---

## Why GoNuts

Most auction tooling reads the current asking prices and guesses. GoNuts does the
opposite: it collects every completed sale, builds its own long-term price
history, and values items from what things **actually sold for**, not what
someone is hoping to get. Then it puts that edge to work, and keeps adapting as
the market moves.

## What it does

|  |  |
|---|---|
| **Prices from real sales** | Recency-weighted percentiles, outlier filtering, a conservative quick-sale value, and manipulation checks that lower confidence instead of trusting a rigged market. |
| **Works both sides** | Ranks resale flips across dozens of markets, and reads and bids the **order house**, a book no public API exposes. |
| **Adapts live** | Benches markets that stop paying (on a rolling window, so they cycle back when they recover) and leans into the…
