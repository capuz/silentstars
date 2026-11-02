---
repo: "stscl/infoxtr"
name: "infoxtr"
description: "Information-Theoretic Measures for Revealing Variable Interactions"
readmeQualityOk: true
url: "https://github.com/stscl/infoxtr"
homepage: "https://stscl.github.io/infoxtr/"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["causal-discovery", "causality-analysis", "cpp", "geoinformatics", "informatics", "information-theory", "r", "spatial-analysis", "spatial-statistics", "time-series-analysis"]
stars: 60
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-07T14:53:40Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-10-01T04:21:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 39
maintainers: ["SpatLyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/stscl/infoxtr"
---

# infoxtr

***Information**-Theoretic Measures for Revealing Variable **Interactions***

*infoxtr* is an R package for analyzing variable interactions using information-theoretic measures. Originally tailored for time series, its methods extend seamlessly to spatial cross-sectional data. Powered by a pure C++ engine with a lightweight R interface, the package also exposes its headers for direct integration into other R packages.

> *Refer to the package documentation <https://stscl.github.io/infoxtr/> for more detailed information.*

## Installation

- Install from [CRAN](https://CRAN.R-project.org/package=infoxtr) with:

``` r
install.packages("infoxtr", dependencies = TRUE)
```

- Install binary version from [R-universe](https://stscl.r-universe.dev/infoxtr) with:

``` r
install.packages("infoxtr",
                 repos = c("https://stscl.r-universe.dev",
                           "https://cloud.r-project.org"),
                 dependencies = TRUE)
```

- Install from source code on [GitHub](https://github.com/stscl/infoxtr) with:

``` r
if (!requireNamespace("pak", quietly = TRUE)) {
    install.packages("pak")
}
pak::pak("stscl/infoxtr", dependencies = TRUE)
```

##…
