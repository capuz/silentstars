---
repo: "nlmixr2/nlmixr2est"
name: "nlmixr2est"
description: "nlmixr2 estimation routines"
readmeQualityOk: true
url: "https://github.com/nlmixr2/nlmixr2est"
homepage: "https://nlmixr2.github.io/nlmixr2est/"
language: "R"
languages: ["R", "Rich Text Format"]
languagePcts: [51, 29]
stars: 15
forks: 10
openIssues: 113
closedIssues: 464
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2021-12-10T02:39:27Z"
lastCommitAt: "2026-11-04T13:04:45Z"
lastReleaseAt: "2023-10-10T11:25:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["mattfidler", "billdenney"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec3516c7d527a469da589f50cda1e1260bc7c8d05de2fbf62ff524fee2f7bfee/nlmixr2/nlmixr2est"
discussionCount: 5
---

# nlmixr2est: The core estimation routines for nlmixr2

status](https://www.r-pkg.org/badges/version/nlmixr2est)](https://CRAN.R-project.org/package=nlmixr2est)
downloads](https://cranlogs.r-pkg.org/badges/grand-total/nlmixr2est)](https://cran.r-project.org/package=nlmixr2est)
downloads](https://cranlogs.r-pkg.org/badges/nlmixr2est)](https://cran.r-project.org/package=nlmixr2est)
coverage](https://codecov.io/gh/nlmixr2/nlmixr2est/graph/badge.svg)](https://app.codecov.io/gh/nlmixr2/nlmixr2est)

The goal of nlmixr2est is to provide the nlmixr2 core estimation
routines.

## Installation

You can install the development version of nlmixr2est from
[GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("nlmixr2/rxode2")
remotes::install_github("nlmixr2/nlmixr2data")
remotes::install_github("nlmixr2/lotri")
remotes::install_github("nlmixr2/nlmixr2est")
```

For most people, using nlmixr2 directly would be likely easier.

``` r
library(nlmixr2est)
#> Loading required package: nlmixr2data

## The basic model consists of an ini block that has initial estimates
one.compartment <- function() {
  ini({
    tka <- 0.45; label("Ka")
    tcl <- 1;…
