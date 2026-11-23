---
repo: "bcallaway11/qte"
name: "qte"
description: "R qte package https://bcallaway11.github.io/qte"
readmeQualityOk: true
url: "https://github.com/bcallaway11/qte"
language: "R"
languages: ["R", "TeX"]
languagePcts: [71, 29]
stars: 13
forks: 10
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2014-05-08T18:36:09Z"
lastCommitAt: "2026-11-23T13:27:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 69
maintainers: ["bcallaway11"]
openGraphImageUrl: "https://opengraph.githubassets.com/8897b08d9d0c99b6284585ba90bb9a192c1ed16fb0c04c9ee0135180bcbd8e5c/bcallaway11/qte"
---

# qte — Quantile Treatment Effects in R <img src="https://raw.githubusercontent.com/bcallaway11/qte/HEAD/man/figures/logo.png" align="right" height="139" alt="" />

status](https://www.r-pkg.org/badges/version/qte.png)](https://CRAN.R-project.org/package=qte)

## Overview

The `qte` package provides methods for estimating Quantile Treatment
Effects (QTE) and Quantile Treatment Effects on the Treated (QTT) in R.
Where the average treatment effect summarizes the impact of a policy by
a single number, the QTE describes how treatment effects vary across the
outcome distribution — useful whenever the policy’s impact is
heterogeneous or when distributional consequences (e.g., for inequality)
are of interest.

**Cross-sectional estimators** (no panel data required):

- `unc_qte()` — QTE/QTT under unconfoundedness (IPW, outcome regression,
  or doubly robust); covers random assignment as a special case

**Panel and repeated cross-section estimators** (staggered treatment
adoption supported for all):
