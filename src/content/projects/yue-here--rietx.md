---
repo: "yue-here/rietx"
name: "rietx"
description: "Rietveld refinement for the Holocene"
readmeQualityOk: true
url: "https://github.com/yue-here/rietx"
homepage: "https://rietx.org"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 23
forks: 2
openIssues: 191
closedIssues: 236
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-07-23T09:40:46Z"
lastCommitAt: "2026-11-19T05:04:46Z"
lastReleaseAt: "2026-10-12T14:53:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["yue-here", "mustachefeeling"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a6343f856cd6255f2fc71e53c37e27abe8dc181e49356a8226eaa3ef014143a/yue-here/rietx"
---

# rietx

**`rietx`** is an open-source Rietveld refinement and pattern analysis Python module with a streamlined API designed for those who want to drive refinements from code.

## Installation

```sh
pip install rietx            # Python >= 3.11; numpy/scipy core, compiled kernels, matplotlib figures
```

## Example refinement

Condensed from [`examples/nac_11bm.py`](https://github.com/yue-here/rietx/blob/main/examples/nac_11bm.py),
which fits APS 11-BM synchrotron data on Na₂Ca₃Al₂F₁₄ with a CaF₂ impurity.
