---
repo: "mli3w/world-vs-model"
name: "world-vs-model"
description: "Can a model beat the betting market? Two transparent models vs the crowd across 240 Polymarket World Cup 2026 markets, scored publicly. Research/education only — not gambling."
url: "https://github.com/mli3w/world-vs-model"
homepage: "https://mli3w.github.io/world-vs-model/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["data-viz", "elo", "forecasting", "monte-carlo", "polymarket", "prediction-market", "world-cup", "world-cup-2026"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T09:27:17Z"
lastCommitAt: "2026-06-28T06:56:45Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 50
maintainers: ["mli3w", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/af3da2f2de90753c246f223f940245b5268401b6b324724d39fa2f5f823dc328/mli3w/world-vs-model"
---

# World vs Model · World Cup 2026

### 🔴 Live: **[mli3w.github.io/world-vs-model](https://mli3w.github.io/world-vs-model/)**

**Can a model beat the betting market?** This is a public, research-and-education experiment that
pits two transparent models against the crowd across all ~240 Polymarket World Cup 2026 markets, and
keeps a falsifiable, out-of-sample scorecard.

- **Market (the "world")** — live [Polymarket](https://polymarket.com/sports/world-cup) prices,
  de-vigged so each round sums to its real number of slots (32 advance, 8 QF, 4 SF, 2 final, 1 win).
- **Zero-knowledge model** — knows *no* football: it only re-shapes the market's own prices with a
  favorite–longshot correction. The honest baseline.
- **Informed model (Elo)** — an independent simulation of the verified bracket on real
  [World Football Elo](https://www.eloratings.net/2026_World_Cup) ratings (plus a host bonus, a
  knockout shrink, rating uncertainty and a Dixon–Coles goals model) — **not** derived from the market.

Every disagreement is timestamped and scored **against the market** as results come in. The whole point
is the receipts, not a tip.

> ⚠️ **Research & education only — not financial advice,…
