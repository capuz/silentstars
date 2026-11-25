---
repo: "Distribution-Matching/TruncatedDistributions.jl"
name: "TruncatedDistributions.jl"
description: "Support for univariate and multivariate truncated distributions in Julia"
readmeQualityOk: true
url: "https://github.com/Distribution-Matching/TruncatedDistributions.jl"
homepage: "https://distribution-matching.github.io/TruncatedDistributions.jl/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 8
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-08-27T08:06:21Z"
lastCommitAt: "2026-11-25T03:18:19Z"
lastReleaseAt: "2026-06-21T11:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 68
undervaluedScore: 49
maintainers: ["yoninazarathy"]
openGraphImageUrl: "https://opengraph.githubassets.com/27880225290ec08839bcbb06338635a3935f6001846ddd2b86172d6da8ca6031/Distribution-Matching/TruncatedDistributions.jl"
---

# TruncatedDistributions.jl

A Julia package for truncated distributions, providing functionality beyond
what is in [Distributions.jl](https://github.com/JuliaStats/Distributions.jl)
(whose `truncated` already covers basic univariate truncation).

Its main functionality is the **box-truncated multivariate normal** and,
since 0.5.0, the **box-truncated multivariate Student-t**: distribution
objects that expose the usual `mean`, `cov`, `pdf`, `rand`,
plus arbitrary raw moments via the recursive moment formula of
[Kan and Robotti (2017)](https://doi.org/10.1080/10618600.2017.1322092)
(and its Student-t analogue, after
[Galarza et al. (2021)](https://doi.org/10.1007/s00184-020-00802-1)),
run with recursion states shared between the faces of the box.
On top of that sits an optional moment-matching parameter-fitting layer.
The type hierarchy (`TruncatedMvDistribution{D, R, S}`) is generic in the
underlying distribution `D`, the truncation region `R`, and the cached
state `S`, so the package is designed to grow to other multivariate
families and other region types.
