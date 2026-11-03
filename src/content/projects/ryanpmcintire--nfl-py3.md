---
repo: "ryanpmcintire/nfl_py3"
name: "nfl_py3"
description: "A machine learning project to predict the winner of NFL games"
readmeQualityOk: true
url: "https://github.com/ryanpmcintire/nfl_py3"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["nfl", "r", "python", "machine-learning", "svm", "mlp"]
stars: 16
forks: 2
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2018-09-24T00:25:00Z"
lastCommitAt: "2026-11-03T19:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 66
maintainers: ["ryanpmcintire"]
openGraphImageUrl: "https://opengraph.githubassets.com/73e27f458c5f78003ae20cb5d45531a335b1c002d6228511018a2bef4c4c4b82/ryanpmcintire/nfl_py3"
---

# NFL ATS

NFL ATS is a reproducible research and prediction pipeline for estimating which
side of an NFL point spread will cover. It uses maintained
[nflverse](https://nflverse.nflverse.com/) datasets instead of scraping HTML,
constructs every feature strictly from information available before kickoff,
and evaluates model choices with nested chronological walk-forward tests.

## Current ATS forecast: 2026 Week 9

> **Lines, injuries, depth charts, and model inputs may change before kickoff.** Regenerate and republish this card as the week approaches.

Active model: weak stack (market residual). Its distinct close-graded chronological 2018-2025 evaluation classified **1,153 of 2,196 non-push games correctly (52.50%)**. The 95% range was 50.34%-54.61%. The model's baseline comparison is the separate opener-graded accuracy rule documented in `docs/opener_evaluation.md`.

**Production policy active:** one calibrated probability combines the model, situational evidence and available line movement to choose each side.

**Best Pick of the week (★):** DEN -2.5 in DEN at CAR. The pool scores one Best Pick per regular-season week. This pick was provisionally chosen because it has the…
