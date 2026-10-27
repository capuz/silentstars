---
repo: "haziqj/INLAvaan"
name: "INLAvaan"
description: "An R package for Bayesian structural equation modeling using INLA"
readmeQualityOk: true
url: "https://github.com/haziqj/INLAvaan"
homepage: "https://inlavaan.haziqj.ml/"
language: "R"
languages: ["R"]
languagePcts: [98]
topics: ["bayesian-inference", "factor-analysis", "inla", "psychometrics", "statistical-modeling", "structural-equation-modeling", "bayesian-statistics", "growth-curve-models", "latent-variables", "path-analysis"]
stars: 14
forks: 2
openIssues: 8
closedIssues: 18
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2024-01-23T00:39:35Z"
lastCommitAt: "2026-10-27T09:12:12Z"
lastReleaseAt: "2026-10-26T10:05:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 73
maintainers: ["haziqj"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ab189502d31400229713b1b8d63ab18e3e09fe058bddeefd3c1a43068fa824/haziqj/INLAvaan"
discussionCount: 0
---

# INLAvaan <a href="https://inlavaan.haziqj.ml"><img src="man/figures/logo.png" align="right" height="139" alt="INLAvaan website" /></a>

experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html#experimental)
coverage](https://codecov.io/gh/haziqj/INLAvaan/branch/main/graph/badge.svg)](https://app.codecov.io/gh/haziqj/INLAvaan?branch=main)
Downloads](http://cranlogs.r-pkg.org/badges/grand-total/INLAvaan)](https://cran.r-project.org/package=INLAvaan)

> Efficient approximate Bayesian inference for Structural Equation
> Models.

While Markov Chain Monte Carlo (MCMC) methods remain the gold standard
for exact Bayesian inference, they can be prohibitively slow for
iterative model development. `{INLAvaan}` offers a rapid alternative for
Bayesian results at (or near) the speed of frequentist estimators. It
achieves this through a custom, ground-up implementation of the
[Integrated Nested Laplace Approximation
(INLA)](https://www.r-inla.org), engineered specifically for the
[lavaan](https://lavaan.ugent.be) modelling framework.

## A familiar interface

`{INLAvaan}` is designed to fit seamlessly into your existing…
