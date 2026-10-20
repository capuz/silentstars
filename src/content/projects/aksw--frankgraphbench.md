---
repo: "AKSW/frankgraphbench"
name: "frankgraphbench"
description: "The FranKGraphBench is a Framework to allow KG Aware RSs to be benchmarked in a reproducible and easy to implement manner. It was first created on Google Summer of Code 2023 for Data Integration between DBpedia and some standard RS datasets in a reproducible framework."
readmeQualityOk: true
url: "https://github.com/AKSW/frankgraphbench"
homepage: "https://frankgraphbench.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["recommender-system", "benchmark", "knowledge-graph"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 28
recentReleases: 2
createdAt: "2023-05-27T22:45:34Z"
lastCommitAt: "2026-10-20T08:49:39Z"
lastReleaseAt: "2026-10-18T20:25:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 81
maintainers: ["paulorvdc"]
openGraphImageUrl: "https://opengraph.githubassets.com/11d30bcc915adbef3605939de4955aa3d4893b23738f5e619b5c2424e895689a/AKSW/frankgraphbench"
---

# FranKGraphBench: Reproducible Benchmarking for Knowledge Graph-based Recommendation

FranKGraphBench is a framework for reproducible benchmarking of Knowledge Graph-based recommender systems.
It was first created on Google Summer of Code 2023 for Data Integration between DBpedia and some standard RS datasets in a reproducible framework and was accepted at the Resource Track from the 35th ACM International Conference on Information and Knowledge Management in Rome, Italy from the 7th to 11th November 2026.

Check the [docs](https://frankgraphbench.readthedocs.io/en/latest/index.html) for more information.

* For more info, check the [project proposal](https://github.com/AlvaroJoseLopes/GSoC-2023) and the project progress with weekly (as possible) [updates](https://github.com/AKSW/frankgraphbench/wiki).

# Data Integration

## pip

We recommend using a python 3.11 virtual environment:

```shell
pip install frankgraphbench
```

Install the full dataset using bash scripts located at `datasets/`:

```shell
cd datasets
bash ml-100k.sh # Downloaded at `datasets/ml-100k` folder
bash ml-1m.sh   # Downloaded at `datasets/ml-1m` folder
```

## Source

Install from the repository root using…
