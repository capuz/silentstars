---
repo: "wilkox/ggfittext"
name: "ggfittext"
description: "🔠 ggplot2 geoms to fit text into boxes"
url: "https://github.com/wilkox/ggfittext"
homepage: "https://wilkox.org/ggfittext/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r", "ggplot2"]
stars: 309
forks: 18
openIssues: 30
closedIssues: 35
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2017-03-02T00:07:59Z"
lastCommitAt: "2026-07-03T12:40:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 66
undervaluedScore: 20
maintainers: ["wilkox"]
openGraphImageUrl: "https://opengraph.githubassets.com/760b6d4c711ccd2212260e834048ba37df14c5d85efdd2e3aaf836b38e0d43f6/wilkox/ggfittext"
---

experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html#experimental)

# ggfittext

ggfittext is a ggplot2 extension for fitting text into boxes.

## Installation

Install the release version of ggfittext from CRAN:

``` r
install.packages("ggfittext")
```

If you want the development version, install it from GitHub:

``` r
devtools::install_github("wilkox/ggfittext")
```

## Fitting text inside a box

Sometimes you want to draw some text in a ggplot2 plot so that it fits
inside a defined area. You can do this by manually fiddling with the
font size, but this is tedious and un-reproducible. ggfittext provides a
geom called `geom_fit_text()` that automatically resizes text to fit
inside a box. It works like this:

``` r
ggplot(animals, aes(x = type, y = flies, label = animal)) +
  geom_tile(fill = "white", colour = "black") +
  geom_fit_text()
```

As with `geom_text()`, the position of the text is set by the `x` and
`y` aesthetics. `geom_fit_text()` tries to infer the width and height of
the box in which the text is allowed to fit, and shrinks down any text
that is too big.

## Reflowing text

Another way to…
