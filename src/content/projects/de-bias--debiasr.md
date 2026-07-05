---
repo: "de-bias/debiasR"
name: "debiasR"
description: "Bias adjustment for mobile-phone-derived mobility data"
readmeQualityOk: true
url: "https://github.com/de-bias/debiasR"
homepage: "https://de-bias.github.io/debiasR/"
language: "R"
languages: ["R"]
languagePcts: [78]
topics: ["cdr-data", "digital-trace-data", "gps-data", "gps-location", "human-mobility", "migration", "mobile-app", "r-package-development"]
stars: 7
forks: 1
openIssues: 7
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T10:09:18Z"
lastCommitAt: "2026-07-05T20:59:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["fcorowe", "carmen-cabrera", "allcontributors[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/632e22fc8eb8d37795a2de55327ef36ba95bf7f4e297f277114d0f83af88f5fc/de-bias/debiasR"
---

## Overview

`debiasR` is an R package for assessing and correcting population
representation bias in digital trace data. The package is part of the
[DEBIAS project](https://de-bias.github.io/debias/) and links to the
wider [DEBIAS GitHub organisation](https://github.com/de-bias). It is
designed to work with spatio-temporally aggregated data that provide
population counts by location and flows between locations.

The package workflow supports assessment of coverage and
representativeness bias in population counts, adjustment of biased
origin-destination (OD) flows and validation of adjusted flows against benchmark data.
Mobile-phone-derived mobility data are used to illustrate the package
functions in these vignettes, but the same logic can apply to other
digital trace sources with comparable spatial and temporal aggregation
and a validation target. Examples include trade of goods, Internet
traffic, supply chains and other location-to-location flows.

## Installation

Install the development version of `debiasR` from GitHub:

```r
pak::pak("de-bias/debiasR")
```

Alternatively, install with `remotes` instead:

```r
remotes::install_github("de-bias/debiasR")
```

Install the…
