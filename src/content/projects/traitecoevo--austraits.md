---
repo: "traitecoevo/austraits"
name: "austraits"
description: "R package for accessing the AusTraits Plant database and working with traits.build databases"
readmeQualityOk: true
url: "https://github.com/traitecoevo/austraits"
homepage: "https://traitecoevo.github.io/austraits/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["plants", "traits", "database", "australia"]
stars: 24
forks: 5
openIssues: 3
closedIssues: 95
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2021-04-27T01:17:27Z"
lastCommitAt: "2026-11-14T21:48:30Z"
lastReleaseAt: "2025-06-13T01:51:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 40
maintainers: ["dfalster"]
openGraphImageUrl: "https://opengraph.githubassets.com/734af1e6b7a2c689a27d782c1e13d023dbe48a6c7a953e3753f65ef0efe704c5/traitecoevo/austraits"
discussionCount: 4
---

# austraits <img src="https://raw.githubusercontent.com/traitecoevo/austraits/HEAD/man/figures/austraits_hex.png" align="right" alt="" width="120" />

coverage](https://codecov.io/gh/traitecoevo/austraits/branch/master/graph/badge.svg)](https://app.codecov.io/gh/traitecoevo/austraits?branch=master)

`austraits` is the R interface to [AusTraits](https://austraits.org/),
the Australian plant trait database. It loads releases of AusTraits by
version number (`load_austraits()`, `get_versions()`,
`get_version_latest()`) and maps trait data over Australia
(`plot_locations()`).

The functions to **access, explore and wrangle data** (joining tables,
filtering records, combining databases and visualising data) come from
[`traits.use`](https://github.com/traitecoevo/traits.use), which works
on any [traits.build](https://github.com/traitecoevo/traits.build)
relational database. `austraits` re-exports all of them, so
`library(austraits)` is all you need, and code written for earlier
versions of `austraits` keeps working. See the [traits.use
documentation](https://traitecoevo.github.io/traits.use/) for the
generic functions.

### Installation

This package is not on CRAN yet and is still under…
