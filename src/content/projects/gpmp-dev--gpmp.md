---
repo: "gpmp-dev/gpmp"
name: "gpmp"
description: "GPmp: the Gaussian process micro package"
readmeQualityOk: true
url: "https://github.com/gpmp-dev/gpmp"
homepage: "https://gpmp-dev.github.io/gpmp/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["computer-experiments", "gaussian-processes", "kriging", "matern-kernel", "nuts", "reml", "smc"]
stars: 6
forks: 8
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-11T18:05:17Z"
lastCommitAt: "2026-07-05T20:59:52Z"
lastReleaseAt: "2025-03-24T10:40:06Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 61
undervaluedScore: 61
maintainers: ["gpmp-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a9134150c2054c8e5adb1f3bc36f4cf02bb027bac48de1e10be0fb723c9487e/gpmp-dev/gpmp"
---

</div>

# GPmp: Gaussian Process micro package

[Website and documentation](https://gpmp-dev.github.io/gpmp/)
| [Examples](https://gpmp-dev.github.io/gpmp/examples/index.html)
| [API reference](https://gpmp-dev.github.io/gpmp/gpmp.html)
| [PyPI](https://pypi.org/project/gpmp/)
| [gpmp-contrib](https://github.com/gpmp-dev/gpmp-contrib)

GPmp provides building blocks for Gaussian-process (GP) interpolation and
regression, also called kriging: mean functions, covariance functions,
covariance-parameter selection, diagnostics, conditional simulation, and
posterior sampling of covariance parameters.

The package is meant for GP-based algorithms and research software. Its API is
small and explicit: users provide the mean and covariance functions, choose or
define selection criteria, inspect diagnostics, and keep numerical backend
objects visible through `gpmp.num`. The backend can be either NumPy or PyTorch.

## When to use GPmp

Use `gpmp` when you need an explicit GP core for kriging, parameter selection,
diagnostics, posterior sampling, conditional simulation, plotting, data
utilities, or integration inside another algorithm.

Use `gpmp-contrib` when you want complete…
