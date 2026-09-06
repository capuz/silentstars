---
repo: "MannLabs/alphapepttools"
name: "alphapepttools"
description: "Search- and quantification-engine agnostic biological interpretation of proteomics data"
readmeQualityOk: true
url: "https://github.com/MannLabs/alphapepttools"
homepage: "https://mannlabs.github.io/alphapepttools/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["proteomics", "anndata", "proteomics-data-analysis", "scverse"]
stars: 28
forks: 4
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 10
recentReleases: 1
createdAt: "2024-12-09T15:22:55Z"
lastCommitAt: "2026-09-06T08:03:29Z"
lastReleaseAt: "2026-09-04T07:11:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 64
maintainers: ["vbrennsteiner", "lucas-diedrich", "mschwoer"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1e9acd6d4e9466dba3e39b54e7baddccc7121c8b923d31fc3d246ee45dfd01a/MannLabs/alphapepttools"
---

# alphapepttools

[badge-tests]: https://img.shields.io/github/actions/workflow/status/MannLabs/alphapepttools/test.yaml?branch=main
[badge-docs]: https://github.com/MannLabs/alphapepttools/actions/workflows/docs.yaml/badge.svg

Search- and quantification-engine agnostic downstream processing of proteomics data

## `alphapepttools` was made to make your life in proteomics easier!

Functionalities are intended to be as close to pure python as possible, avoiding closed end-to-end implementations, which is reflected in several design choices:

1. AnnData is used in favor of a custom data class to enable interoperability with any other tool from the Scverse.
2. matplotlib _Axes_ and _Figure_ instances are used for visualization, giving the user full autonomy to layer on custom visualizations with searborn, matplotlib, or any other compatible visualization package.
3. Statistical and preprocessing functions are standalone and set with strong defaults, meaning that any function can be used outside of the `alphapepttools` context.

### Design choices of `alphapepttools`:

- **Data handling**: `AnnData` was chosen as a data container for two main reasons:
    1. For presenting a…
