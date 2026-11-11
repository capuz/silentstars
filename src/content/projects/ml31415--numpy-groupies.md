---
repo: "ml31415/numpy-groupies"
name: "numpy-groupies"
description: "Optimised tools for group-indexing operations: aggregated sum and more"
readmeQualityOk: true
url: "https://github.com/ml31415/numpy-groupies"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["numpy", "python", "groupby", "numba"]
stars: 212
forks: 23
openIssues: 0
closedIssues: 67
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2013-05-31T18:38:56Z"
lastCommitAt: "2026-11-11T11:20:26Z"
lastReleaseAt: "2023-09-22T15:34:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["ml31415", "antonsoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2bf2f09b5947cd0aa8e0c02212b3216abafcfa7410c54a2dea446dc4baf34f1/ml31415/numpy-groupies"
---

# numpy-groupies

**Fast group-by aggregation on plain NumPy arrays.**
Give it values and a group label for each value, get back one result per group — sum, mean, std, median, min/max, argmax, cumulative sums, custom functions and more. No DataFrame required, with an optional [Numba](https://numba.pydata.org/) backend for speed.

```python
import numpy as np
import numpy_groupies as npg

group_idx = np.array([3, 0, 0, 1, 0, 3, 5, 5, 0, 4])
a = np.array([13.2, 3.5, 3.5, -8.2, 3.0, 13.4, 99.2, -7.1, 0.0, 53.7])

npg.aggregate(group_idx, a, func="sum", fill_value=0)
# array([10. , -8.2,  0. , 26.6, 53.7, 92.1])
#  group:  0     1    2     3     4     5
```

Group 2 never occurs in `group_idx`, so its slot is filled with `fill_value`.

**Contents:**
[Why numpy-groupies?](#why-numpy-groupies) ·
[Installation](#installation) ·
[Quickstart](#quickstart) ·
[Input forms](#input-forms) ·
[Functions](#functions) ·
[Helper tools](#helper-tools) ·
[Implementations](#implementations) ·
[Performance](#performance) ·
[Development](#development)

## Why numpy-groupies?

- **Fast.** With Numba installed, `aggregate` is the fastest group-by aggregation for plain NumPy arrays. See…
