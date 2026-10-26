---
repo: "fastcluster/fastcluster"
name: "fastcluster"
description: "Fast hierarchical clustering routines for R and Python."
readmeQualityOk: true
url: "https://github.com/fastcluster/fastcluster"
homepage: "http://danifold.net/fastcluster.html"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [71, 28]
stars: 166
forks: 38
openIssues: 2
closedIssues: 25
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2015-07-16T13:31:56Z"
lastCommitAt: "2026-10-26T18:06:33Z"
lastReleaseAt: "2019-12-31T14:46:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 38
maintainers: ["dmuellner", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5db5efbb8cea77e22bf6b14f53b1ea75a0a4049c38d701d294a7853f352ccc1/fastcluster/fastcluster"
---

# *fastcluster*: Fast hierarchical clustering routines for R and Python

The fastcluster package is a C++ library for hierarchical, agglomerative
clustering. It efficiently implements the seven most widely used clustering
schemes: single, complete, average, weighted/McQuitty, Ward, centroid and
median linkage. The library has interfaces to two languages: R and Python.

The Python module is designed to replace the functions
```
linkage, single, complete, average, weighted, centroid, median, ward
```
in the module [`scipy.cluster.hierarchy`][] with the same functionality but
faster algorithms. Moreover, the function `linkage_vector` provides
memory-efficient clustering for vector data.

The R package is meant to replace [`hclust`][] in the [`stats`][] package
and the [`flashClust`][] package.

[`linkage`]: https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html
[`scipy.cluster.hierarchy`]: https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html
[`hclust`]: https://stat.ethz.ch/R-manual/R-patched/library/stats/html/hclust.html
[`stats`]: https://stat.ethz.ch/R-manual/R-patched/library/stats/html/00Index.html…
