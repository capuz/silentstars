---
repo: "AnGabrio/missingHE"
name: "missingHE"
description: "Health economic evaluations from individual level data with missing values using a set of pre-defined Bayesian models written in BUGS. A series of parametric models are available to jointly model partially-observed effectiveness and cost outcomes under both ignorable and nonignroable missing data mechanism assumptions"
readmeQualityOk: true
url: "https://github.com/AnGabrio/missingHE"
homepage: "https://angabrio.github.io/missingHE/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["missing-data", "health-economic-evaluation", "jags", "cost-effectiveness-analysis", "individual-level-data", "sensitivity-analysis", "parametric-modelling"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-07-19T11:19:54Z"
lastCommitAt: "2026-11-14T10:45:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 82
maintainers: ["AnGabrio"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e3dcd7a026029712c858e2771054a6313b4fe5cda4d738fcf0e708737dd1913/AnGabrio/missingHE"
---

missingHE: Missing Cost Effectiveness Models
================

Status](http://www.r-pkg.org/badges/version/missingHE)](https://cran.r-project.org/package=missingHE/)
Check](https://github.com/AnGabrio/missingHE/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/AnGabrio/missingHE/actions/workflows/R-CMD-check.yaml)
(\>=2)](https://img.shields.io/badge/License-GPL%20%28%3E%3D%202%29-blue.svg)](https://choosealicense.com/licenses/gpl-2.0/)
coverage](https://codecov.io/gh/AnGabrio/missingHE/graph/badge.svg)](https://app.codecov.io/gh/AnGabrio/missingHE)

> Fit Bayesian Missing Cost Effectiveness Models in R.

:rocket: This is the **development version** of the `R` package
`missingHE` (currently on version 1.6.3). The stable version is now
release 1.6.2, on [CRAN](https://CRAN.R-project.org/package=missingHE).

## Contents

- [Overview](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Further details](#further-details)

## Overview

Given a individual-level partially-observed cost-effectiveness outcome
data in the form of a dataframe, fits different types of Bayesian models
to handle missing effect and/or cost values under different assumptions…
