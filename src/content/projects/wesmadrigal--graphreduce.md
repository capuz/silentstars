---
repo: "wesmadrigal/GraphReduce"
name: "GraphReduce"
description: "Abstractions for feature engineering on large graphs of tabular data."
readmeQualityOk: true
url: "https://github.com/wesmadrigal/GraphReduce"
homepage: "https://wesmadrigal.github.io/GraphReduce/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 27
forks: 6
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2022-05-07T20:56:30Z"
lastCommitAt: "2026-08-28T14:35:31Z"
lastReleaseAt: "2026-08-28T14:36:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 50
maintainers: ["wesmadrigal"]
openGraphImageUrl: "https://opengraph.githubassets.com/057a8243a2b2a9f09b15d994a9b0ff48cb7dcf9f5348efb04235297472725808/wesmadrigal/GraphReduce"
---

# GraphReduce

## Description
GraphReduce is a relational feature engineering system for serious tabular
ML and AI workloads. It encodes relational algebra directly into a graph of
tables, keys, and time boundaries so you can build model-ready datasets from
many sources without hand-rolling fragile join logic for every project.

The core thesis is direct: heterogeneous tabular data does not yet have a
universal semantic representation like text or vision, so the strongest
practical path today is a hybrid stack:
relational algebra + robust feature synthesis + strong downstream models
(GBDT/CatBoost/XGBoost and tabular foundation models). GraphReduce is built
to make that stack production-real, not notebook-fragile.

Compute backends supported: `pandas`, `dask`, `duckdb`, `spark`, `daft`, AWS Athena, Redshift, Snowflake, postgresql, MySQL
Compute backends coming soon: `ray`

## Why GraphReduce
GraphReduce is built for the hardest part of predictive AI in enterprises:
turning many relational tables into leakage-safe, parent-grain training data
that actually survives production constraints. It provides production-grade
abstractions for multi-table feature engineering at scale:

*…
