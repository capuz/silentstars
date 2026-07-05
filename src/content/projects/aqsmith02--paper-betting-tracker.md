---
repo: "aqsmith02/paper-betting-tracker"
name: "paper-betting-tracker"
description: "Python-based pipeline that fetches live sports betting odds from The Odds API, evaluates edges using two statistical strategies, updates datasets multiple times per hour, and records post-game outcomes for performance analysis."
readmeQualityOk: true
url: "https://github.com/aqsmith02/paper-betting-tracker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-13T06:23:50Z"
lastCommitAt: "2026-07-05T20:59:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 69
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ae94568540546e1c5ba222bf739f0b8079401fb9bd08e31663f09e0050284703/aqsmith02/paper-betting-tracker"
---

# Paper Betting Tracker

This project is an automated system for tracking and evaluating “paper” sports bets—bets that are recorded for analysis but do not involve real money. Using Python scripts and CSV files, the system fetches live odds from The-Odds-API, identifies potentially profitable bets using two strategies, and logs outcomes for downstream analysis.

Currently, the system considers only moneyline (head-to-head) bets and simulates placements exclusively on North Carolina sportsbooks, while evaluating all sports leagues supported by The-Odds-API. Data collection for the reported results began on October 11, 2025. This project is inspired by the following paper by Khaunitz, Zhong, and Kreiner: https://arxiv.org/vc/arxiv/papers/1710/1710.02824v1.pdf.

## Betting Strategies

### Fair Average Odds
Calculates the vig-free (true) probability for an outcome from every bookmaker, then averages these probabilities to determine a consensus fair payout. Identifies betting opportunities where the best available odds offer higher payouts than this fair average suggests the outcome is worth.

### Modified Z-Score
Combines the fair average approach with statistical outlier detection.…
