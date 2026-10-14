---
repo: "r-xla/anvl"
name: "anvl"
description: "Accelerated array computing and code transformations for R"
readmeQualityOk: true
url: "https://github.com/r-xla/anvl"
homepage: "https://r-xla.github.io/anvl/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["array-computing", "autodiff", "gpu-acceleration", "r", "xla"]
stars: 80
forks: 5
openIssues: 43
closedIssues: 199
watchers: 1
contributors: 9
recentReleases: 3
createdAt: "2025-08-20T15:20:24Z"
lastCommitAt: "2026-10-14T08:57:32Z"
lastReleaseAt: "2026-09-30T08:44:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["sebffischer", "louisaslett", "h-a-graham"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc7e61122c3c82d2e8dcf34f0a6482921e9e68064a5cb0cacaa37d20d8625f55/r-xla/anvl"
---

# anvl <img src="man/figures/logo.png" align="right" width = "120" />

Package website: [release](https://r-xla.github.io/anvl/) \|
[dev](https://r-xla.github.io/anvl/dev/)

status](https://www.r-pkg.org/badges/version/anvl)](https://CRAN.R-project.org/package=anvl)

Accelerated array computing and code transformations for R, allowing you
to run numerical programs at the speed of light. The package supports
just-in-time (JIT) compilation for very fast execution and reverse-mode
automatic differentiation. Programs can run on CPU and NVIDIA GPU.

## Installation

``` r
install.packages("anvl", repos = c("https://r-xla.r-universe.dev", getOption("repos")))
```

Afterwards, install the additional dependencies:

``` r
anvl::install_anvl()
```

See the [installation
guide](https://r-xla.github.io/anvl/articles/installation.html) for more
details, including prebuilt Docker images.

## Why anvl

{anvl} makes numerical R code run fast on CPUs and GPUs, and computes
gradients of your functions automatically. It aspires to be for R what
JAX is for Python.

There are three core ideas:

- **Compilation.** {anvl} converts R functions into an optimized program
  via XLA – the same compiler that…
