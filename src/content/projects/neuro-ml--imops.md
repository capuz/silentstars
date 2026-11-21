---
repo: "neuro-ml/imops"
name: "imops"
description: "Efficient parallelizable algorithms for multidimensional arrays to speed up your data pipelines"
readmeQualityOk: true
url: "https://github.com/neuro-ml/imops"
homepage: "https://neuro-ml.github.io/imops/"
language: "Python"
languages: ["Python", "Cython"]
languagePcts: [67, 21]
topics: ["image-processing", "parallel-computing", "python"]
stars: 24
forks: 1
openIssues: 13
closedIssues: 12
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2022-08-10T13:44:10Z"
lastCommitAt: "2026-11-21T13:32:37Z"
lastReleaseAt: "2023-03-14T11:42:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 48
maintainers: ["AnihilatorGun"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee56ad3615141419ed0eb6543559b6d6e38f935d21f30c32f5f30dd7e83bc748/neuro-ml/imops"
---

# Imops

Efficient parallelizable algorithms for multidimensional arrays to speed up your data pipelines.
- [Documentation](https://neuro-ml.github.io/imops/)
- [Benchmarks](https://neuro-ml.github.io/imops/benchmarks/)

# Install

```shell
pip install imops  # default install with Cython backend
```

Wheels pick the kernels for the CPU at import: x86-64-v3 (AVX2) where the CPU has it, x86-64-v2 elsewhere.
To build for your own CPU only, use `-march=native`:

```shell
IMOPS_NATIVE=1 pip install --no-binary imops imops
```
