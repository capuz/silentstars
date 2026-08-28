---
repo: "drizopoulos/JMbayes2"
name: "JMbayes2"
description: "Extended Joint Models for Longitudinal and Survival Data"
readmeQualityOk: true
url: "https://github.com/drizopoulos/JMbayes2"
homepage: "https://drizopoulos.github.io/JMbayes2/"
language: "R"
languages: ["R", "C++"]
languagePcts: [66, 31]
topics: ["mixed-models", "longitudinal-analysis", "survival-models", "multi-state", "competing-risks", "prediction-model", "personalized-medicine", "precision-medicine"]
stars: 103
forks: 27
openIssues: 1
closedIssues: 139
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2019-09-11T19:37:54Z"
lastCommitAt: "2026-08-28T14:37:34Z"
lastReleaseAt: "2024-05-30T09:00:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["drizopoulos", "pedromafonso"]
openGraphImageUrl: "https://opengraph.githubassets.com/94b4c3646712bc071ed84fd83ffb631f5f20fcb1e1bbcbcc3c49a9bdd6626f3e/drizopoulos/JMbayes2"
---

# JMbayes2: Extended Joint Models for Longitudinal and Time-to-Event Data <img src="man/figures/logo.png" align="right" alt="" width="160" />

The package **JMbayes2** fits joint models for longitudinal and
time-to-event data. It can accommodate multiple longitudinal outcomes of
different type (e.g., continuous, dichotomous, ordinal, counts), and
assuming different distributions, i.e., Gaussian, Student’s-t, Gamma,
Beta, unit Lindley, censored Normal, Binomial, Poisson, Negative
Binomial, and Beta-Binomial. For the event time process, right, left and
interval censored data can be handled, while competing risks, multi-state 
and recurrent-event processes are also covered.

**JMbayes2** fits joint models using Markov chain Monte Carlo algorithms
implemented in C++. Besides the main modeling function, the package also
provides a number of functions to summarize and visualize the results.

## Installation

**JMbayes2** can be installed from [CRAN](https://cran.r-project.org/):

``` r
install.packages("JMbayes2")
```

The development version can be installed from GitHub:

``` r
# install.packages("remotes")
remotes::install_github("drizopoulos/jmbayes2")
```

## Minimal Example

To fit…
