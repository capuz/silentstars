---
repo: "NygenAnalytics/scarf"
name: "scarf"
description: "Memory-efficient single-cell analysis in Python. Stream RNA, ATAC, CITE-seq and multi-omics from local or remote Zarr stores, from laptop to atlas scale, with reusable fingerprinted results."
readmeQualityOk: true
url: "https://github.com/NygenAnalytics/scarf"
homepage: "http://scarf.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["object-storage", "provenance-tracking", "scalable-computing", "scrna-seq-analysis", "single-cell", "single-cell-multiomics", "single-cell-omics"]
stars: 119
forks: 16
openIssues: 2
closedIssues: 64
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2020-05-07T17:03:52Z"
lastCommitAt: "2026-08-03T06:45:06Z"
lastReleaseAt: "2021-07-09T02:47:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 29
maintainers: ["parashardhapola"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4670a910e9139a0bb0ea4221bf41185b8a3fa6715a3c23b3992ae21a5f1b6dd/NygenAnalytics/scarf"
discussionCount: 14
---

# Scarf

Scarf is a Python framework for analysing single-cell RNA, ATAC, protein, and multi-omic data, from a few thousand cells to tens of millions.

| Problem                                                                        | How Scarf solves it                                                                                                          | What you get                                                                                     |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Your **dataset is larger than RAM**                                            | Out-of-core algorithms , and neighbour search streams from cell-major and gene-major layouts, inside a memory budget you set | No subsampling, so rare populations survive, [benchmarked to 10M cells](https://github.com/NygenAnalytics/scarf/blob/HEAD/profiling/BENCHMARKS.md) |
| The **data is stored remotely** and requires downloading…
