---
repo: "DeclareDesign/estimatr"
name: "estimatr"
description: "estimatr: Fast Estimators for Design-Based Inference"
readmeQualityOk: true
url: "https://github.com/DeclareDesign/estimatr"
homepage: "https://declaredesign.org/r/estimatr"
language: "R"
languages: ["R"]
languagePcts: [92]
stars: 135
forks: 22
openIssues: 8
closedIssues: 196
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2017-03-24T05:25:49Z"
lastCommitAt: "2026-10-29T14:07:02Z"
lastReleaseAt: "2020-12-05T15:09:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 47
maintainers: ["acoppock"]
openGraphImageUrl: "https://opengraph.githubassets.com/5135877ec12b2563079c6d69df3b77751637baf09a522f09182324fb2ccad0ce/DeclareDesign/estimatr"
---

estimatr: Fast Estimators for Design-Based Inference
================

You can also see the ways you can [get regression tables out of estimatr](https://declaredesign.org/r/estimatr/articles/regression-tables.html) using `texreg` and `modelsummary`. Fast estimators also enable fast simulation of research designs to learn about their properties (see [DeclareDesign](https://declaredesign.org)).

## Installing estimatr

To install the latest stable release of **estimatr**, please ensure that you are running version 3.6 or later of R and run the following code:

``` r
install.packages("estimatr")
```

The development version, 2.0.1.9000, installs from GitHub:

```r
# install.packages("remotes")
remotes::install_github("DeclareDesign/estimatr")
```

## In the development version

Three changes since 2.0.1 on CRAN. `NEWS.md` has the detail.

- **`se_type = "stata_nested"`** reproduces Stata's `xtreg, fe` and `reghdfe` when a fixed effect is nested in the cluster variable, as unit effects clustered by unit are. Stata counts K in its clustered small-sample factor two ways: `regress` with dummies and `areg` count every absorbed level, and `se_type = "stata"` still does, while `xtreg` and…
