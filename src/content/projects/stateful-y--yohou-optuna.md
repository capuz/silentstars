---
repo: "stateful-y/yohou-optuna"
name: "yohou-optuna"
description: "An Optuna integration for hyperparameter tuning in Yohou"
readmeQualityOk: true
url: "https://github.com/stateful-y/yohou-optuna"
homepage: "https://yohou-optuna.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-16T07:04:18Z"
lastCommitAt: "2026-11-04T13:05:15Z"
lastReleaseAt: "2026-08-17T09:38:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 71
maintainers: ["stateful-y-renovate[bot]", "gtauzin", "stateful-y-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dcf19ec8e5cb77f3f04fd3e24a2a31acb9e6e0f54f77bf49f52a4b94c59718a/stateful-y/yohou-optuna"
discussionCount: 0
---

## What is Yohou-Optuna?

**Yohou-Optuna** brings [Optuna](https://optuna.org/)'s hyperparameter optimization to [Yohou](https://github.com/stateful-y/yohou), providing a Yohou-compatible search class for time series forecasting.

This integration replaces grid and random search with adaptive sampling (TPE, CMA-ES, and more) while keeping Yohou's forecasting API intact. After fitting, `OptunaSearchCV` behaves like a Yohou forecaster, so you can call `predict`, `observe`, and `observe_predict` directly.

It integrates with Optuna's distributions, samplers, and storages, and wraps them for sklearn-style cloning and serialization.

## What are the features of Yohou-Optuna?

- **Adaptive optimization**: Run Optuna studies over Yohou forecasters with TPE, CMA-ES, and other samplers to find better configurations in fewer trials.
- **Forecaster-native API**: `OptunaSearchCV` is a forecaster after fitting, so you can call `predict`, `observe`, `observe_predict`, and interval methods.
- **Clone-safe wrappers**: `Sampler`, `Storage`, `Callback`, and `Pruner` wrappers ensure Optuna objects survive sklearn cloning and serialization.
- **Fold-level pruning**: Pass a `Pruner` to stop a trial…
