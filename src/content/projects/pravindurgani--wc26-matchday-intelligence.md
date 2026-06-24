---
repo: "pravindurgani/wc26-matchday-intelligence"
name: "wc26-matchday-intelligence"
description: "FIFA World Cup 2026 prediction — matchday intelligence layer (auto-updating live preview)"
url: "https://github.com/pravindurgani/wc26-matchday-intelligence"
homepage: "https://wc26-matchday-intelligence.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["cloudflare-workers", "dashboard", "data-science", "football", "github-actions", "monte-carlo", "prediction", "vercel", "world-cup"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-10T22:59:02Z"
lastCommitAt: "2026-06-24T00:24:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/25b120fea5c52ecf7fab072d57a66dbb8a4d3d750e813e3eca0bafea4f6a929a/pravindurgani/wc26-matchday-intelligence"
---

# FIFA World Cup 2026 — AI Prediction Dashboard (v3)

End-to-end probabilistic simulator for the 2026 World Cup. Survived three rounds
of independent expert review. Production-ready: light/dark theme, 5-seed
simulation ranges (p05/p95), calibration audit, walk-forward backtests,
sensitivity analysis, travel fatigue, injury layer, live-mode foundation,
pre-launch validation script.

**Live dashboard**: deploy with `vercel deploy` or push to GitHub Pages from `dashboard/`.

## What's in the box

| Layer | What it does |
|---|---|
| `scripts/01_prepare_data.py` | Ingest 49k international matches, normalize team names, compute Elo |
| `scripts/02_goal_model.py` | Train two XGBoost Poisson regressors (home/away goals) |
| `scripts/03_simulate.py` | Monte Carlo sim — Annex C bracket, NB+Dixon-Coles, travel, injuries, live mode |
| `scripts/04_evaluate.py` | Calibration + holdout backtest |
| `scripts/05_sensitivity.py` | 27-scenario sensitivity audit |
| `scripts/06_ablation.py` | Elo-only vs goal-model lift |
| `scripts/07_walk_forward.py` | Walk-forward backtest on WC 2010/14/18/22 |
| `scripts/08_travel_impact.py` | Diff travel-on vs travel-off, output travel_impact.json |
|…
