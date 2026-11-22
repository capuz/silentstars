---
repo: "sayuks/quartabs"
name: "quartabs"
description: "Dynamically generate tabset panels in Quarto HTML documents"
readmeQualityOk: true
url: "https://github.com/sayuks/quartabs"
homepage: "https://sayuks.github.io/quartabs/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["quarto", "r", "r-package", "rstats", "rstats-package"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-16T06:33:10Z"
lastCommitAt: "2026-11-22T02:13:44Z"
lastReleaseAt: "2025-03-31T07:09:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["sayuks"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe846d0061e71c31c1523f4ef48cc013511603c969530fb84ff0ade52e1cb0d/sayuks/quartabs"
---

# quartabs

coverage](https://codecov.io/gh/sayuks/quartabs/graph/badge.svg)](https://app.codecov.io/gh/sayuks/quartabs)

The `quartabs` is an R package that dynamically generates [Tabset
Panels](https://quarto.org/docs/output-formats/html-basics.html#tabsets)
in Quarto HTML documents.

## Installation

You can install `quartabs` from CRAN:

``` r
install.packages("quartabs")
```

You can install the development version of `quartabs` from
[GitHub](https://github.com/) with:

``` r
# install.packages("pak")
pak::pak("sayuks/quartabs")
```

## Examples

`render_tabset()` takes a data frame as input and outputs the markdown
that generates the
[tabset](https://quarto.org/docs/output-formats/html-basics.html#tabsets)
to stdout (console).

**In the actual .qmd file, specify the chunk option `results: asis`.**

``` r
library(quartabs)

data.frame(
  tab = c("A", "B"),
  value = c("Tab content for A", "Tab content for B")
) |>
  render_tabset(tab, value)
#> ::: {.panel-tabset}
#> 
#> # A
#> 
#> Tab content for A
#> 
#> # B
#> 
#> Tab content for B
#> 
#> :::
```

See [Get
started](https://sayuks.github.io/quartabs/vignettes/get_started.html)
for details.
