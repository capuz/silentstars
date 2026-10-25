---
repo: "RogoLabs/CVEForecast"
name: "CVEForecast"
description: "CVE Forecast"
readmeQualityOk: true
url: "https://github.com/RogoLabs/CVEForecast"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 6
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-07-02T22:39:29Z"
lastCommitAt: "2026-10-25T02:46:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 84
maintainers: ["jgamblin", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/23dee3765fb4bcc1437b0b8c6c9a34a9d1e88899f85c515a95989510cf256eed/RogoLabs/CVEForecast"
---

# CVE Forecast

Predictive analytics platform for CVE (Common Vulnerabilities and Exposures) publications using machine learning and statistical models. Updated daily with automated accuracy tracking.

**Live Dashboard:** [cveforecast.org](https://cveforecast.org)

## Features

- **16 Forecasting Models** — Statistical (Prophet, ARIMA, TBATS), ML (XGBoost, LightGBM, CatBoost), and naive baselines that are ranked alongside everything else
- **Daily Automated Updates** — GitHub Actions pipeline generates fresh forecasts at midnight UTC
- **120+ CNA Forecasts** — Individual predictions for CVE Numbering Authorities with per-organization model selection
- **Rolling-Origin Validation** — Every model scored from 24 forecast origins and ranked by MASE against a naive benchmark
- **Calibrated Prediction Intervals** — Conformal 80%/95% bands with published empirical coverage
- **Monthly Self-Tuning** — Automated hyperparameter optimization on the 1st of each month
- **Forecast Tracking** — Historical snapshots track prediction evolution and accuracy over time
- **Accessible Dashboard** — WCAG AA compliant with dark mode, responsive design, and keyboard navigation

## Quick Start

###…
