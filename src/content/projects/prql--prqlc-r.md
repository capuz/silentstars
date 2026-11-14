---
repo: "PRQL/prqlc-r"
name: "prqlc-r"
description: "R Bindings for prqlc"
readmeQualityOk: true
url: "https://github.com/PRQL/prqlc-r"
homepage: "https://prql.github.io/prqlc-r/"
language: "R"
languages: ["R"]
languagePcts: [79]
topics: ["r", "sql", "prql", "rust"]
stars: 60
forks: 3
openIssues: 7
closedIssues: 47
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2022-10-23T09:26:20Z"
lastCommitAt: "2026-11-14T10:43:34Z"
lastReleaseAt: "2023-09-30T15:30:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: ["eitsupi", "dependabot[bot]", "jeroen"]
openGraphImageUrl: "https://opengraph.githubassets.com/192d85386dedb06de864b0b509f5b9d81d12815e4f19848d897f75702322623b/PRQL/prqlc-r"
---

# prqlr <img src="https://raw.githubusercontent.com/PRQL/prqlc-r/HEAD/man/figures/logo.png" align="right" width="150"/>

badge](https://prql.r-universe.dev/badges/prqlr)](https://prql.r-universe.dev)
status](https://www.r-pkg.org/badges/version/prqlr)](https://CRAN.R-project.org/package=prqlr)
status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcommunity.r-multiverse.org%2Fapi%2Fpackages%2Fprqlr&query=%24.Version&label=r-multiverse)](https://community.r-multiverse.org/prqlr)

R bindings for [the `prqlc` Rust library](https://github.com/prql/prql),
powered by [`savvy`](https://github.com/yutannihilation/savvy).

This version supports PRQL 0.13.14.

## Installation

Requires R 4.2.0 or later.

This latest release version of this package can be installed from CRAN
or [R-multiverse](https://r-multiverse.org). If available, a binary
package will be installed.

``` r
# Install from CRAN
install.packages("prqlr")
```

``` r
# Install from the R-multiverse Community Repository
install.packages("prqlr", repos = "https://community.r-multiverse.org")
```

Development version of this package can be installed from PRQL’s
[R-universe](https://prql.r-universe.dev/prqlr)…
