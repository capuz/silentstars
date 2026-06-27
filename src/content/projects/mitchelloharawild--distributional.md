---
repo: "mitchelloharawild/distributional"
name: "distributional"
description: "Vectorised distributions for R"
url: "https://github.com/mitchelloharawild/distributional"
homepage: "https://pkg.mitchelloharawild.com/distributional"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["probability-distribution", "r", "statistics", "vctrs"]
stars: 113
forks: 20
openIssues: 39
closedIssues: 92
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2019-10-01T00:07:06Z"
lastCommitAt: "2026-06-27T06:23:52Z"
lastReleaseAt: "2026-03-17T08:27:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 35
maintainers: ["mitchelloharawild"]
openGraphImageUrl: "https://opengraph.githubassets.com/be03cd1d16710f9326bc09a3ab16bf94f8f9e527b6e8742037562d2c0800e7f9/mitchelloharawild/distributional"
---

# distributional

stable](https://img.shields.io/badge/lifecycle-stable-brightgreen.svg)](https://lifecycle.r-lib.org/articles/stages.html#stable)

status](https://www.r-pkg.org/badges/version/distributional)](https://CRAN.R-project.org/package=distributional)

The distributional package allows distributions to be used in a
vectorised context. It provides methods which are minimal wrappers to
the standard d, p, q, and r distribution functions which are applied to
each distribution in the vector. Additional distributional statistics
can be computed, including the `mean()`, `median()`, `variance()`, and
intervals with `hilo()`.

The distributional nature of a model’s predictions is often understated,
with default output of prediction methods usually only producing point
predictions. Some R packages (such as
[forecast](https://CRAN.R-project.org/package=forecast)) further
emphasise uncertainty by producing point forecasts and intervals by
default, however the user’s ability to interact with them is limited.
This package vectorises distributions and provides methods for working
with them, making distributions compatible with prediction outputs of
modelling functions. These vectorised…
