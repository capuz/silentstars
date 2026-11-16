---
repo: "dickoa/samplyr"
name: "samplyr"
description: "A Tidy Grammar for Survey Sampling"
readmeQualityOk: true
url: "https://github.com/dickoa/samplyr"
homepage: "https://dickoa.gitlab.io/samplyr/index.html"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r", "sampling", "survey"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-25T18:18:36Z"
lastCommitAt: "2026-11-16T11:52:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 41
maintainers: ["dickoa"]
openGraphImageUrl: "https://opengraph.githubassets.com/d07d346d4103787e264b01c7e099b7b783705a2da1ab7a2899e554e50da0618a/dickoa/samplyr"
---

# samplyr <img src="https://raw.githubusercontent.com/dickoa/samplyr/HEAD/man/figures/samplyr_hex.gif" align="right" width="140" alt="samplyr hex sticker, animating a sampling design being built up one verb at a time" />

status](https://www.r-pkg.org/badges/version/samplyr)](https://CRAN.R-project.org/package=samplyr)
coverage](https://codecov.io/gl/dickoa/samplyr/branch/main/graph/badge.svg)](https://app.codecov.io/gl/dickoa/samplyr?branch=main)

A tidy grammar for survey sampling in R. `samplyr` provides a minimal
set of composable verbs for stratified, clustered, multi-stage, and
multi-phase sampling designs with PPS methods, sample coordination, and
panel rotation.

## Ecosystem positioning

`samplyr` sits in the middle of a three-layer workflow:

- Use `svyplan` for planning (`n`, precision, power, allocation,
  budget).
- Use `samplyr` to specify designs, draw samples, and carry design
  metadata through fieldwork.
- Use `survey`/`srvyr` after data collection for estimation and
  inference.

These packages are complementary, not competing. Handoffs are explicit
(for example, `svyplan` outputs can feed `draw(n = ...)`, and `samplyr`
outputs convert via `as_svydesign()`,…
