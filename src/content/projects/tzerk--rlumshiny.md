---
repo: "tzerk/RLumShiny"
name: "RLumShiny"
description: "A collection of shiny applications for the R package Luminescence."
readmeQualityOk: true
url: "https://github.com/tzerk/RLumShiny"
language: "R"
languages: ["R"]
languagePcts: [90]
topics: ["luminescence", "luminescence-dating", "shiny-applications", "jscolor", "shiny", "r", "tooltip", "bootstrap"]
stars: 8
forks: 6
openIssues: 1
closedIssues: 28
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2015-03-13T15:34:03Z"
lastCommitAt: "2026-07-25T06:02:04Z"
lastReleaseAt: "2026-01-20T17:18:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 65
maintainers: ["mcol", "RLumSK"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9fee5bbfe203ea5f10a7ecf742ba18aa698e3c9590b2559cc60b358a41cf060/tzerk/RLumShiny"
---

# RLumShiny <a href='https://tzerk.github.io/RLumShiny/'><img src='man/figures/logo.png' align="right" height="138.5" /></a>

DOI](https://img.shields.io/badge/doi-10.32614/CRAN.package.RLumShiny-blue.svg)](https://doi.org/10.32614/CRAN.package.RLumShiny)

> Visit the
> <a href="https://tzerk.github.io/RLumShiny/" target="_blank">project
> page</a>!

# Overview

A collection of `shiny` applications for the R package `Luminescence`.
These mainly, but not exclusively, include applications for plotting
chronometric data from e.g. luminescence or radiocarbon dating. It
further provides access to twitter bootstraps tooltip and pop over
functionality and contains the [jscolor.js
library](https://jscolor.com/) with a custom `shiny` output binding.

## Installation

To install the stable version from CRAN, simply run the following from
an R console:

``` r
install.packages("RLumShiny")
```

To install the latest development builds directly from GitHub, run

``` r
if (!require("devtools"))
  install.packages("devtools")
devtools::install_github("tzerk/RLumShiny@master")
```

## Applications

The RLumShiny package provides a single function from which all apps can
be started: `app_RLum()`.…
