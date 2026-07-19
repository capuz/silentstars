---
repo: "GMOD/JBrowseR"
name: "JBrowseR"
description: "R interface to the JBrowse 2 Linear Genome View."
readmeQualityOk: true
url: "https://github.com/GMOD/JBrowseR"
homepage: "https://gmod.github.io/JBrowseR/"
language: "R"
languages: ["R", "JavaScript"]
languagePcts: [79, 21]
topics: ["r", "shiny", "reactjs", "genomics", "rmarkdown", "visualization"]
stars: 40
forks: 3
openIssues: 15
closedIssues: 16
watchers: 9
contributors: 31
recentReleases: 0
createdAt: "2020-12-14T17:48:17Z"
lastCommitAt: "2026-07-19T04:25:12Z"
lastReleaseAt: "2023-12-20T18:06:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["cmdcolin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/321427995/27098980-bd4d-11eb-9017-25cefe1f2ba2"
---

# JBrowseR <img src='man/figures/logo.png' align="right" height="136" />

status](https://www.r-pkg.org/badges/version/JBrowseR)](https://CRAN.R-project.org/package=JBrowseR)
Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/GMOD/JBrowseR/blob/main/examples/JBrowseR_colab.ipynb)

JBrowseR provides an R interface to the [JBrowse
2](https://jbrowse.org/jb2/) genome browser. It renders the interactive,
GPU-accelerated JBrowse 2 linear genome view as an
[htmlwidget](https://www.htmlwidgets.org/), so you can embed a full
genome browser in an **R Markdown** document, a **Shiny** app, or
straight from the **R console**.

The API is declarative: you describe the browser with plain values, and
helper constructors build the config. There are no JSON strings to
assemble and nothing imperative to wire up.

``` r
library(JBrowseR)

# an entire human genome browser in one line — assembly, reference name
# aliases, cytobands, and gene-name search all included
JBrowseR("hg38", location = "BRCA1")
```

## Installation

Released version from [CRAN](https://CRAN.R-project.org):

``` r
install.packages("JBrowseR")
```

Development version from…
