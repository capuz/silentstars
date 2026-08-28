---
repo: "neilkichler/cuinterval"
name: "cuinterval"
description: "CUDA Interval Arithmetic Library"
readmeQualityOk: true
url: "https://github.com/neilkichler/cuinterval"
homepage: "https://neilkichler.github.io/cuinterval/"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["cuda", "interval-arithmetic"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2024-02-28T15:25:02Z"
lastCommitAt: "2026-08-28T12:23:07Z"
lastReleaseAt: "2026-08-18T12:10:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 74
maintainers: ["neilkichler"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda28b0d88e0b57b13d58f17b812dec8dd657e959a3777dac1c9f43cf8d837b6/neilkichler/cuinterval"
---

<h1 align='center'>CuInterval

</h1>

CuInterval is a CUDA [interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic) library. It includes all fundamental and set-based interval operations of the [IEEE Standard for Interval Arithmetic](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7140721).
Other flavors, including decorations are not supported. 
## Supported Operations

The following operations are implemented as CUDA kernels. All operations are outward-rounded, given the limitations of the precision of the underlying [CUDA operation](https://docs.nvidia.com/cuda/cuda-programming-guide/05-appendices/mathematical-functions.html#cuda-c-mathematical-standard-library-functions). The tightest interval is always a subset
of the computed interval. The lower and upper bounds of most 64-bit floating-point operations are at most 3 [ulps](https://en.wikipedia.org/wiki/Unit_in_the_last_place) away from the lower and upper bounds of the tightest 64-bit floating-point interval.
The error for a particular operation is given below. For more details, check out the [documentation](https://neilkichler.github.io/cuinterval/)!

<details>
<summary>Basic Operations</summary>

|…
