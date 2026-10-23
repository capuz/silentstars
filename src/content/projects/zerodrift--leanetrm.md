---
repo: "zerodrift/leanetrm"
name: "leanetrm"
description: "Open Source Commodity Trading Risk Management"
readmeQualityOk: true
url: "https://github.com/zerodrift/leanetrm"
homepage: "https://leanetrm.com"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [35, 26]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-17T19:35:14Z"
lastCommitAt: "2026-10-23T12:05:01Z"
lastReleaseAt: "2026-10-19T13:14:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["zerodrift"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff3f5969bc6825532882641d603191c1fd8fc612220773e19a82723d855c3f28/zerodrift/leanetrm"
discussionCount: 0
---

# LeanETRM

**An open source ETRM for commodity trading, built for traders, risk managers and AI agents.**

LeanETRM books trades, builds curves and calculates P&L and risk on a standard,
unmodified PostgreSQL database. Calculations use exact arithmetic, every curve
price traces back to the observations that built it, and corrections never
overwrite history. It is aimed at shops that need real trade capture and risk
without a seven-figure implementation.

> **Status:** a foundation, not a finished product. Try it as a disposable local
> preview on synthetic data. Nothing here is production-qualified.

For the experimental PPA branch, follow the [PPA tester guide](https://github.com/zerodrift/leanetrm/blob/HEAD/docs/experimental-ppa-testing.md)
for synthetic booking, graphical break-even pricing and settlement previews.

## What works today

- **Trade capture:** futures, plus financial gas and power swaps built from reusable
  fixed and floating sides, with legal entities, counterparties and an immutable
  amendment history
- **Curves:** futures, gas and power forwards, basis and interest rates, built from
  explicitly selected prices, with a diagram showing which inputs built each…
