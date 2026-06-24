---
repo: "gpmp-dev/gpmp"
name: "gpmp"
description: "GPmp: the Gaussian process micro package"
url: "https://github.com/gpmp-dev/gpmp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 8
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-11T18:05:17Z"
lastCommitAt: "2026-06-24T06:32:07Z"
lastReleaseAt: "2025-03-24T10:40:06Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 60
undervaluedScore: 47
maintainers: ["gpmp-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3ea3c6ed14185dd18f658d4ea1c8f224831a4e2a9b843d84a91a37f8ab702a1/gpmp-dev/gpmp"
---

# GPmp: the Gaussian Process micro package

GPmp is a lightweight toolkit for Gaussian process (GP) modeling. It
provides essential components for GP-based algorithms, with emphasis on
performance, customization, and transparent parameter selection
(ML/REML/REMAP), diagnostics, and posterior sampling (MH/NUTS/SMC).
Compared with larger GP frameworks, GPmp favors explicit control of
modeling choices and robust behavior in practical workflows. On several
benchmark settings, this can translate into stronger predictive
performance (e.g., Q2/R2), while keeping the implementation compact.

## Features

- **GP interpolation & regression:** supports zero, parameterized, and
  linear-predictor means (including intrinsic kriging).
- **Parameter selection:** ML, REML, REMAP, or user-defined criteria.
- **Posterior parameter sampling:** Metropolis-Hastings (MH), NUTS, and SMC.
- **Validation & diagnostics:** fast leave-one-out predictions and model
  diagnosis tools.
- **Data handling utilities:** random splits, k-fold/repeated CV, and batching.
- **Conditional simulation:** generate conditional sample paths.

It is up to the user to write the mean and covariance functions for
setting a GP…
