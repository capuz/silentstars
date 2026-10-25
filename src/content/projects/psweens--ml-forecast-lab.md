---
repo: "psweens/ml-forecast-lab"
name: "ml-forecast-lab"
description: "Multi-model ML forecasting for Home Assistant — benchmark, promote, and publish calibrated forecasts as HA sensors. Pi 5 ready."
readmeQualityOk: true
url: "https://github.com/psweens/ml-forecast-lab"
homepage: "https://www.buymeacoffee.com/psweens"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["benchmark", "catboost", "conformal-prediction", "demand-forecasting", "energy-forecasting", "forecasting", "home-assistant", "home-assistant-addon", "iot", "machine-learning"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T13:53:13Z"
lastCommitAt: "2026-10-25T08:40:23Z"
lastReleaseAt: "2026-03-30T10:54:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 48
maintainers: ["claude", "psweens"]
openGraphImageUrl: "https://opengraph.githubassets.com/b103ed969dad44d6c5a783d36ea18dc0c6cab34244b1ecf6f82635bd008c929a/psweens/ml-forecast-lab"
---

# ML Forecast Lab

**Multi-model machine learning forecasting for Home Assistant.**

Train, benchmark, and deploy time-series models for any HA sensor — with academic-standard evaluation built in.

---

## What this repository is

A Home Assistant app for HA power users who want to forecast a sensor — not data scientists who want a fresh framework. Plug in any sensor, the app benchmarks 32 model backends on your data, picks the winner, retrains it on schedule, and publishes forecasts back to HA with calibrated 80% bands. Designed for the Pi 5 sweet spot: 8 GB RAM, no GPU, ARM64.

The intended mindset is **benchmark once, run forever**. After the first benchmark you click Promote, and the app takes care of retraining + publishing — re-benchmark only when your sensor's behaviour drifts or you want to try newer architectures.

If you're browsing on GitHub, the install button below is the fastest path. The per-app [README](https://github.com/psweens/ml-forecast-lab/blob/HEAD/ml-forecast-lab/README.md) and [DOCS](https://github.com/psweens/ml-forecast-lab/blob/HEAD/ml-forecast-lab/DOCS.md) render on HA's **Info** and **Documentation** tabs once installed.

## Why this exists

Modern…
