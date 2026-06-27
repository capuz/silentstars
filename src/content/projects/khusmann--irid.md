---
repo: "khusmann/irid"
name: "irid"
description: "A component-based reactive UI framework for Shiny that binds reactive values directly to DOM attributes, enabling fine-grained updates without re-rendering or 'update*Input' callbacks."
url: "https://github.com/khusmann/irid"
homepage: "http://irid.kylehusmann.com/"
language: "R"
languages: ["R"]
languagePcts: [84]
stars: 22
forks: 2
openIssues: 7
closedIssues: 9
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-03-27T00:11:31Z"
lastCommitAt: "2026-06-27T00:48:08Z"
lastReleaseAt: "2026-05-13T04:54:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["khusmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a9bd99abdc6acf967ad5b63826ec9f68a191daaf864f9a39f85d97907ad4275/khusmann/irid"
---

# irid <a href="https://irid.kylehusmann.com"><img src="man/figures/logo.png" align="right" height="138" /></a>

coverage](https://codecov.io/gh/khusmann/irid/graph/badge.svg)](https://app.codecov.io/gh/khusmann/irid)

If you’ve ever fought `updateSliderInput`, wrestled
`freezeReactiveValue`, or watched `renderUI` destroy your DOM on every
change — irid is for you.

irid lets you bind a `reactiveVal` directly to any DOM attribute. One
reactive changes, one attribute updates. No `ui`/`server` split. No
fragile input IDs to wire together. Just component functions with
reactive state and DOM in the same scope.

``` r
library(irid)
library(bslib)

OldFaithful <- function() {
  bins <- reactiveVal(30L)

  page_fluid(
    card(
      card_body(
        tags$label(\() paste0("Number of bins: ", bins())),
        tags$input(
          type = "range", min = "1", max = "50",
          value = reactiveProxy(get = bins, set = \(v) bins(as.integer(v)))
        ),
        PlotOutput(\() {
          x <- faithful$waiting
          b <- seq(min(x), max(x), length.out = bins() + 1)
          hist(
            x, breaks = b,
            xlab = "Waiting time to next eruption (in mins)",…
