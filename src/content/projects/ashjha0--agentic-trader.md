---
repo: "AshJha0/agentic-trader"
name: "agentic-trader"
description: "An agentic AI trading desk for equities and FX. Specialist agents (technical, fundamentals or macro-rates, news, sentiment, alpha) write structured reports; bull and bear researchers debate them; a trader sizes the position around a strategic weight; a three-view risk team argues the size; a portfolio manager decides inside hard limits."
readmeQualityOk: true
url: "https://github.com/AshJha0/agentic-trader"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 18
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-25T20:25:50Z"
lastCommitAt: "2026-11-14T10:30:48Z"
lastReleaseAt: "2026-09-30T09:31:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["AshJha0", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38c4d17fadfa685dde87a90c0c9593a6874621ceaa7a78df873e01d754cbba10/AshJha0/agentic-trader"
---

# AgenticTrader

**AgenticTrader** is a research harness for trading agents under hard governance, with a
rules-based desk for equities and FX measured against simple controls, and a designed but
not yet run test of what a language model adds. The
short version of what it has found: nothing has beaten a simple control, and the project says
so with intervals.

**What it found.**

- **The rules desk does not beat a vol-targeted hold.** On real prices with costs and a cash
  leg, the 15-sleeve holdout portfolio has Sharpe 0.91 against 0.99 for the vol-target control
  (difference -0.08, 95 % interval [-0.46, +0.30]) and 0.86 for buy and hold
  ([v0.11 re-measurement](https://github.com/AshJha0/agentic-trader/blob/HEAD/docs/evaluation/v011_review.md)).
- **The rules were not selected by skill.** The deflated Sharpe of desk minus vol-matched
  control on the design period is 0.009 at the registry's 81 trials
  ([selection statistic](https://github.com/AshJha0/agentic-trader/blob/HEAD/docs/results/round2/selection_stat.md)).
- **A local language model has added nothing measurable so far.** With `qwen2.5:7b-instruct`
  in the analyst seats, the 20-bar IC was 0.046 below the rules desk…
