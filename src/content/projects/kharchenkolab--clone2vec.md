---
repo: "kharchenkolab/clone2vec"
name: "clone2vec"
description: "Repository for the clone2vec python package"
readmeQualityOk: true
url: "https://github.com/kharchenkolab/clone2vec"
homepage: "https://clone2vec.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 26
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 2
createdAt: "2024-03-26T16:26:52Z"
lastCommitAt: "2026-11-26T15:22:23Z"
lastReleaseAt: "2026-11-26T08:56:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 45
maintainers: ["serjisa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb8a65c93a8a7bbbbd98d40ded51713aa718e59d5b62295c44f75bd36dc5bc0/kharchenkolab/clone2vec"
---

# clone2vec





clone2vec is a Python package for analysis of lineage tracing coupled with single-cell RNA-Seq.

The main key of the package are clonal embeddings — vector representations of the whole clones
in low dimensional space. These representations is a dropout-robust and cluster-free
way of representation of heterogeneity within clonal behaviour for cell type tree-free hypothesis
generation regarding cells' multipotency.

clone2vec builds representation of clones in exact same way with popular word embedding algorithm — word2vec —
via construction two-layers fully connected neural network (it uses Skip-Gram architecture) that
aims to predict neighbour cells clonal labellings by clonal label of cells. As a result, clones that exist in
similar context in gene expression space will have similar weights in this neural network, and these weights
will be used as embedding for further analysis.
