---
repo: "ehrlinger/ggRandomForests"
name: "ggRandomForests"
description: "Graphical analysis of random forests with the randomForestSRC, randomForest, varPro and ggplot2 packages."
readmeQualityOk: true
url: "https://github.com/ehrlinger/ggRandomForests"
homepage: "http://ehrlinger.github.io/ggRandomForests"
language: "R"
languages: ["R"]
languagePcts: [98]
stars: 153
forks: 32
openIssues: 1
closedIssues: 44
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2013-01-04T14:47:00Z"
lastCommitAt: "2026-08-28T14:25:54Z"
lastReleaseAt: "2015-12-12T12:50:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 46
maintainers: ["ehrlinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a98d697f2913a37afbaca1735195481cee2b60d6a645e4341aee3e677552e18/ehrlinger/ggRandomForests"
discussionCount: 1
---

# ggRandomForests: Visually Exploring Random Forests

`ggRandomForests` provides `ggplot2`-based diagnostic and exploration plots for random forests. It reads
`rfsrc` fits from [randomForestSRC::rfsrc()](https://cran.r-project.org/package=randomForestSRC), `varpro`
fits from [varPro::varpro()](https://cran.r-project.org/package=varPro), and `rhf` fits from
[randomForestRHF::rhf()](https://cran.r-project.org/package=randomForestRHF), a random-hazard forest for
time-to-event data whose predictor values can change during follow-up. It also supports `randomForest`
fits. Supported minimum versions are randomForestSRC 3.4.0, varPro 3.1.0, and randomForestRHF 2.0.0.
The package keeps the data step apart from the figure step, so you can inspect, save, or reuse the tidy
object on its own.

Listed in the [ggplot2 extensions gallery](https://exts.ggplot2.tidyverse.org/).

## Installation

```r
# CRAN (stable)
install.packages("ggRandomForests")

# Development version from GitHub
# install.packages("remotes")
remotes::install_github("ehrlinger/ggRandomForests")
```

## Quick start

```r
library(randomForestSRC)
library(ggRandomForests)

# 1. Fit a forest (regression)
rf <- rfsrc(medv ~ .,…
