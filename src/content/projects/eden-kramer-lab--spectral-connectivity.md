---
repo: "Eden-Kramer-Lab/spectral_connectivity"
name: "spectral_connectivity"
description: "Frequency domain estimation and functional and directed connectivity analysis tools for electrophysiological data"
readmeQualityOk: true
url: "https://github.com/Eden-Kramer-Lab/spectral_connectivity"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["neuroscience", "frequency-domain", "electrophysiology", "brain-connectivity", "multitaper", "coherence", "connectivity-measures", "python", "canonical-coherence", "phase-lag-index"]
stars: 137
forks: 50
openIssues: 3
closedIssues: 41
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2017-09-21T18:13:46Z"
lastCommitAt: "2026-11-27T16:28:21Z"
lastReleaseAt: "2022-09-15T00:43:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 47
maintainers: ["edeno", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7bfa69285b81286bb442d3617dc84382257bad8f5052333cc1791b12059a7ee/Eden-Kramer-Lab/spectral_connectivity"
---

# spectral_connectivity

[**Installation**](#installation)
| [**Tutorials**](#tutorials)
| [**Usage Example**](#usage-example)
| [**Documentation**](#documentation)
| [**GPU Acceleration**](#gpu-acceleration)
| [**Developer Installation**](#developer-installation)
| [**Contributing**](#contributing)
| [**License**](#license)
| [**Citation**](#citation)

> **Warning**
>
> **Upgrading from 2.x? Two changes alter almost every directed or power result
> without raising an error.**
>
> + **Directed measures changed direction.** `result[..., i, j]` from the
>   `Connectivity` methods of the spectral Granger family, directed transfer
>   function, directed coherence, (generalized) partial directed coherence, and
>   direct directed transfer function is now `i -> j` (2.x returned `j -> i`).
>   For pairwise and subset spectral Granger prediction,
>   `multitaper_connectivity(...).sel(source="a", target="b")` is now `a -> b`
>   (2.x returned `b -> a`). Swap the indices in code written for 2.x and
>   recompute stored results; `phase_slope_index`, `group_delay`, and `delay`
>   were already source first.
