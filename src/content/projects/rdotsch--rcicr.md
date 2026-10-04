---
repo: "rdotsch/rcicr"
name: "rcicr"
description: "Reverse correlation image classification using R"
readmeQualityOk: true
url: "https://github.com/rdotsch/rcicr"
language: "R"
languages: ["R"]
languagePcts: [98]
stars: 9
forks: 13
openIssues: 20
closedIssues: 169
watchers: 6
contributors: 7
recentReleases: 9
createdAt: "2016-06-23T13:10:56Z"
lastCommitAt: "2026-10-04T10:01:22Z"
lastReleaseAt: "2026-09-27T09:03:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 88
maintainers: ["rdotsch", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/292427ae125b70c568486566ecaa7eae3f16712b3a17e5781484705651c644bf/rdotsch/rcicr"
---

# rcicr <img src="man/figures/logo.png" align="right" width="120" alt="" />

`rcicr` implements **reverse correlation image classification**, a psychophysics technique for visualizing mental representations, for example of faces. It generates noise-based stimuli for two-image forced-choice (2IFC) tasks. From participants' responses it then computes "classification images", which show the visual features that drove their choices.

## Installation

Install the current release from CRAN:

``` r
install.packages('rcicr')
```

Install from GitHub to reproduce an analysis with a specific release, or to try the unreleased development version:

``` r
install.packages('remotes')

# A specific release, by tag
remotes::install_github('rdotsch/rcicr@vX.Y.Z')

# The development version at the tip of main. Record its commit SHA.
remotes::install_github('rdotsch/rcicr')

# Reinstall that exact development snapshot later
remotes::install_github('rdotsch/rcicr@<commit-sha>')
```

Every release is tagged; the [releases page](https://github.com/rdotsch/rcicr/releases) lists them. Record the version you ran in your analysis script, and install that tag when you come back to the analysis. For an…
