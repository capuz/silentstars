---
repo: "doccstat/fastcpd"
name: "fastcpd"
description: "Fast Change Point Detection in R"
url: "https://github.com/doccstat/fastcpd"
homepage: "https://fastcpd.xingchi.li/"
language: "C++"
languages: ["C++", "R"]
languagePcts: [42, 34]
topics: ["change-point-detection", "r", "statistics", "time-series", "custom-function", "gradient-descent", "lasso", "linear-regression", "logistic-regression", "offline"]
stars: 24
forks: 1
openIssues: 2
closedIssues: 12
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-09-20T02:08:33Z"
lastCommitAt: "2026-06-24T06:39:36Z"
lastReleaseAt: "2024-03-19T14:40:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 51
maintainers: ["doccstat"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf5edfc0cfe991f9b8286d5ec3434f141b37a209b622f82ffea9ab4a5c26ca74/doccstat/fastcpd"
---

# Fast Change Point Detection <a href="https://fastcpd.xingchi.li"><img src="man/figures/logo.png" align="right" height="138" /></a>

coverage](https://codecov.io/gh/doccstat/fastcpd/branch/main/graph/badge.svg)](https://app.codecov.io/gh/doccstat/fastcpd?branch=main)
status](https://www.r-pkg.org/badges/version-last-release/fastcpd)](https://cran.r-project.org/package=fastcpd)
version](https://img.shields.io/pypi/pyversions/fastcpd)](https://pypi.org/project/fastcpd/)
package](https://img.shields.io/pypi/v/fastcpd)](https://pypi.org/project/fastcpd/)

## Documentation: [fastcpd.xingchi.li](https://fastcpd.xingchi.li)

### R

``` r
# install.packages("pak")
pak::pak("doccstat/fastcpd")
# or install from CRAN
install.packages("fastcpd")
```

### Python WIP

``` shell
# python -m ensurepip --upgrade
pip install .
# or install from PyPI
pip install fastcpd
```

## Comparison

``` r
set.seed(1)
n <- 10^8
mean_data <- c(rnorm(n / 2, 0, 1), rnorm(n / 2, 50, 1))
run_isolated <- function(expr) {
  callr::r(function(e, n) {
    set.seed(1)
    mean_data <- c(rnorm(n / 2, 0, 1), rnorm(n / 2, 50, 1))
    system.time(eval(e))
  }, args = list(e = substitute(expr), n = n))
}…
