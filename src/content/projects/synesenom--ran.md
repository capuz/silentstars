---
repo: "synesenom/ran"
name: "ran"
description: "Library for generating various random variables"
readmeQualityOk: true
url: "https://github.com/synesenom/ran"
homepage: "https://synesenom.github.io/ran/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["random", "statistics", "mcmc", "test", "distribution", "javascript"]
stars: 15
forks: 5
openIssues: 17
closedIssues: 437
watchers: 3
contributors: 4
recentReleases: 6
createdAt: "2017-07-05T06:25:29Z"
lastCommitAt: "2026-07-18T05:46:05Z"
lastReleaseAt: "2026-07-09T19:49:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 80
maintainers: ["claude", "synesenom"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a506350ab58a9c62e7e0cd49e715aa36cf6dc96e373f7dd752b2e7d4f76bc5e/synesenom/ran"
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
  - [Choosing a sampler](#choosing-a-sampler)
- [Return values and errors](#return-values-and-errors)
- [Numerical precision](#numerical-precision)
  - [Test reference values](#test-reference-values)
- [Documentation](#documentation)
- [License](#license)

## Features

- **144 probability distributions** — continuous and discrete, each with PDF/PMF, CDF, quantile (`q`), hazard, survival, log-likelihood (`lnL`), AIC/BIC, goodness-of-fit testing, and MLE…
