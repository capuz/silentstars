---
repo: "marberts/sps"
name: "sps"
description: "An R package for sequential Poisson sampling"
readmeQualityOk: true
url: "https://github.com/marberts/sps"
homepage: "https://marberts.github.io/sps/"
language: "R"
languages: ["R"]
languagePcts: [99]
topics: ["r", "r-package", "cran", "statistics", "rstats", "official-statistics", "sampling", "survey-sampling"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2021-01-03T04:03:23Z"
lastCommitAt: "2026-08-26T04:15:26Z"
lastReleaseAt: "2026-07-19T13:09:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 62
maintainers: ["marberts"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c2d00f5b24f084b392f0a136ee964be9d163fa05dd406b7ca36a9786d0f14da/marberts/sps"
---

# Sequential Poisson sampling <a href="https://marberts.github.io/sps/"><img src="man/figures/logo.png" align="right" height="139" alt="sps website" /></a>

Sequential Poisson sampling is a variation of Poisson sampling for drawing probability-proportional-to-size samples with a given number of units, and is commonly used for price-index surveys. This package gives functions to draw stratified sequential Poisson samples according to the method by Ohlsson (1998), as well as other order sample designs by Rosén (1997), and generate approximate bootstrap replicate weights according to the generalized bootstrap method by Beaumont and Patak (2012).

## Installation

Get the stable release from CRAN.

``` {.r}
install.packages("sps")
```

The development version can be installed from R-Universe

``` {.r}
install.packages(
  "sps",
  repos = c("https://marberts.r-universe.dev", "https://cloud.r-project.org")
)
```

or directly from GitHub.

``` {.r}
pak::pak("marberts/sps")
```

## Usage

Given a vector of sizes for units in a population (e.g., revenue for sampling businesses) and a desired sample size, a stratified sequential Poisson sample can be drawn with the `sps()` function. 

```…
