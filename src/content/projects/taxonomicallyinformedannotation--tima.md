---
repo: "taxonomicallyinformedannotation/tima"
name: "tima"
description: "https://taxonomicallyinformedannotation.github.io/tima"
readmeQualityOk: true
url: "https://github.com/taxonomicallyinformedannotation/tima"
homepage: "https://taxonomicallyinformedannotation.github.io/tima/"
language: "R"
languages: ["R"]
languagePcts: [96]
topics: ["lc-msms", "metabolite-annotation", "metabolomics", "natural-products", "scoring-system", "taxonomy", "chemotaxonomy", "specialized-metabolome", "r"]
stars: 16
forks: 6
openIssues: 2
closedIssues: 114
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-09-23T16:04:07Z"
lastCommitAt: "2026-07-25T06:01:03Z"
lastReleaseAt: "2022-07-11T10:52:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 75
maintainers: ["Adafede"]
openGraphImageUrl: "https://opengraph.githubassets.com/1028819a624fc70a473e89daef83202bd1a755d960e4d8686b3fa30d6cc1d566/taxonomicallyinformedannotation/tima"
discussionCount: 5
---

# tima <img src="https://raw.githubusercontent.com/taxonomicallyinformedannotation/tima/main/man/figures/logo.svg" align="right" height="139"/>

experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html#experimental)

coverage](https://codecov.io/gh/taxonomicallyinformedannotation/tima/graph/badge.svg)](https://app.codecov.io/gh/taxonomicallyinformedannotation/tima)
badge](https://taxonomicallyinformedannotation.r-universe.dev/tima/badges/version?&color=blue&style=classic.png)](https://taxonomicallyinformedannotation.r-universe.dev/tima)

The initial work is available at <https://doi.org/10.3389/fpls.2019.01329>, with
many improvements made since then. The workflow is illustrated below.

This repository contains everything needed to perform **T**axonomically
**I**nformed **M**etabolite **A**nnotation.

## Requirements

### Minimum Required Files

Here is what you *minimally* need:

- **Feature quantification table** (.csv/.tsv) - Peak areas/heights across
  samples
  ([example](https://github.com/taxonomicallyinformedannotation/tima-example-files/blob/main/example_features.csv))
  - Must contain: feature ID,…
