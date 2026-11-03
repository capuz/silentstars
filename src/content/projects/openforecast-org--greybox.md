---
repo: "openforecast-org/greybox"
name: "greybox"
description: "Regression model building and forecasting in R and Python"
readmeQualityOk: true
url: "https://github.com/openforecast-org/greybox"
language: "Python"
languages: ["Python", "R"]
languagePcts: [57, 33]
topics: ["forecasting", "model-selection", "model-selection-and-evaluation", "r-package", "regression", "regression-models", "statistics"]
stars: 32
forks: 8
openIssues: 18
closedIssues: 51
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2018-02-13T01:00:26Z"
lastCommitAt: "2026-11-03T12:48:00Z"
lastReleaseAt: "2020-05-20T13:35:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 57
maintainers: ["config-i1", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/edf24560f7a66d66b61e4c23aba2db64d9fc596383443b76f570a8591e0c02e0/openforecast-org/greybox"
---

# greybox

**R**

**Python**

The package _greybox_ contains functions for model building, which is currently done via the model selection and combinations based on information criteria. The resulting model can then be used in analysis and forecasting.

 

There are several groups of functions in the package.

## Installation
[Installation](https://github.com/openforecast-org/greybox/wiki/Installation) wiki explains how the package can be installed in R/Python.

### R Package

The stable version of the package is available on CRAN, so you can install it by running:
```r
install.packages("greybox")
```

A recent, development version, is available via github and can be installed using "remotes" in R. First make sure that you have remotes:
```r
if (!require("remotes")){install.packages("remotes")}
```

and after that run:
```r
remotes::install_github("openforecast-org/greybox")
```

## Python Package

A Python port of greybox is available in the [python](https://github.com/openforecast-org/greybox/tree/master/python) subdirectory. It provides a scikit-learn-style API with support for 26+ distributions and R-style formula syntax.

```bash
pip install greybox
```

## Supported…
