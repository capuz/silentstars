---
repo: "grantmcdermott/tinyplot"
name: "tinyplot"
description: "Lightweight extension of the base R graphics system"
url: "https://github.com/grantmcdermott/tinyplot"
homepage: "https://grantmcdermott.com/tinyplot"
language: "R"
languages: ["R"]
languagePcts: [94]
stars: 413
forks: 23
openIssues: 30
closedIssues: 298
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2023-02-21T18:10:55Z"
lastCommitAt: "2026-06-23T19:03:30Z"
lastReleaseAt: "2025-05-23T01:35:33Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 38
maintainers: ["grantmcdermott", "zeileis", "vincentarelbundock"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ac3b7ba9b157fa773359a393e6f9a9eefcfb23ff6695a5966841afbdc9347a2/grantmcdermott/tinyplot"
---

# tinyplot

## What

A lightweight extension of the base R graphics system, with support for
automatic grouping, legends, facets, themes, and various other
enhancements.

The stable version of **tinyplot** is available on
[CRAN](https://CRAN.R-project.org/package=tinyplot).

``` r
install.packages("tinyplot")
```

Or, you can grab the latest development version from
[R-universe](https://grantmcdermott.R-universe.dev/).

``` r
install.packages("tinyplot", repos = "https://grantmcdermott.r-universe.dev")
```

## Why

R users are spoiled for choice when it comes to visualization
frameworks. The options, of course, include **ggplot2** and **lattice**;
say nothing of the bewildering array of extensions built around, on top
of, and in between these amazing packages.[^1]

Given the wealth of options, it is perhaps understandable that even avid
R users can overlook the base R **graphics** system. This is
unfortunate, because base R offers very powerful and flexible plotting
facilities.[^2] The downside of this power and flexibility is that base
R plotting can require a lot of manual tinkering. A case in point is
plotting grouped data with an appropriate legend. Doing so with the
generic…
