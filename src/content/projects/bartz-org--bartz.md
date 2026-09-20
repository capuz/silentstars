---
repo: "bartz-org/bartz"
name: "bartz"
description: "Super-fast BART (Bayesian Additive Regression Trees) in Python"
readmeQualityOk: true
url: "https://github.com/bartz-org/bartz"
homepage: "https://bartz-org.github.io/bartz/docs"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 100
forks: 6
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-02-19T05:47:04Z"
lastCommitAt: "2026-09-20T08:46:16Z"
lastReleaseAt: "2026-07-24T17:04:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 51
maintainers: ["Gattocrucco"]
openGraphImageUrl: "https://opengraph.githubassets.com/db2601dc19f999839cfba62ff944a1303bd7e56cf9ffaf010e754720a646e82e/bartz-org/bartz"
---

# BART vectoriZed

An implementation of Bayesian Additive Regression Trees (BART) in JAX.

If you don't know what BART is, but know XGBoost, consider BART as a sort of Bayesian XGBoost. bartz makes BART run fast enough to be used in place of XGBoost/lightgbm/etc. even on large datasets.

BART is a nonparametric Bayesian regression technique. Given training predictors $X$ and responses $y$, BART finds a function to predict $y$ given $X$. The result of the inference is a sample of possible functions, representing the uncertainty over the determination of the function.

This Python module provides an implementation of BART that runs on GPU, to process large datasets faster. It is also good on CPU. Most other implementations of BART are for R, and run on CPU only.

On CPU, bartz runs at the speed of dbarts (the fastest implementation I know of) if n > 20,000, but using 1/20 of the memory. On GPU, the speed premium depends on sample size; it is convenient over CPU only for n > 10,000. The maximum speedup is currently 200x, on an Nvidia A100 and with at least 2,000,000 observations.

[This Colab…
