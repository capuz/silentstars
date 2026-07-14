---
repo: "synesenom/ran"
name: "ran"
description: "Library for generating various random variables"
readmeQualityOk: true
url: "https://github.com/synesenom/ran"
homepage: "https://synesenom.github.io/ran/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [78, 20]
topics: ["random", "statistics", "mcmc", "test", "distribution", "javascript"]
stars: 15
forks: 5
openIssues: 13
closedIssues: 401
watchers: 3
contributors: 4
recentReleases: 6
createdAt: "2017-07-05T06:25:29Z"
lastCommitAt: "2026-07-14T05:54:34Z"
lastReleaseAt: "2026-07-09T19:49:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 80
maintainers: ["claude", "synesenom", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78075fc6d2bb76feea1576346e3bd21c3ba34ac88584c30aef70ae26fcc12221/synesenom/ran"
---

# ranjs
*rán · 然 — "so; correct"*

A comprehensive JavaScript library for probability distributions, random variate generation, and statistical analysis.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [npm](#npm)
  - [CDN (browser)](#cdn-browser)
- [Usage](#usage)
  - [ESM — single distribution import](#esm--single-distribution-import)
  - [CommonJS / full bundle](#commonjs--full-bundle)
  - [Reproducible sampling](#reproducible-sampling)
  - [Model comparison](#model-comparison)
  - [Parameter estimation](#parameter-estimation)
- [API Overview](#api-overview)
- [Distribution API](#distribution-api)
  - [State serialisation](#state-serialisation)
- [Process API](#process-api)
- [MC API](#mc-api)
- [Return values and errors](#return-values-and-errors)
- [Numerical precision](#numerical-precision)
  - [Test reference values](#test-reference-values)
- [Documentation](#documentation)
- [License](#license)

## Features

- **144 probability distributions** — continuous and discrete, each with PDF/PMF, CDF, quantile (`q`), hazard, survival, log-likelihood (`lnL`), AIC/BIC, goodness-of-fit testing, and MLE fitting (`fit`)
- **Statistical measures** —…
