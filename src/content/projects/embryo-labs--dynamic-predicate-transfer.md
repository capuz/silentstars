---
repo: "embryo-labs/dynamic-predicate-transfer"
name: "dynamic-predicate-transfer"
description: "[VLDB'26] This repository provides a DuckDB implementation of RPT+, following a Yannakakis-style execution framework."
readmeQualityOk: true
url: "https://github.com/embryo-labs/dynamic-predicate-transfer"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["dynamic-execution", "robust-predicate-transfer", "yannakakis-algorithm"]
stars: 22
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-07-25T09:54:52Z"
lastCommitAt: "2026-11-23T10:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 34
maintainers: ["YimingQiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8319556d69c62abb9b413401a205ee2c1f8db7709b1450408b3439ae05b1940/embryo-labs/dynamic-predicate-transfer"
---

# Dynamic Predicate Transfer

This repository contains the implementation of **Dynamic Predicate Transfer (RPT+)**, now available as a loadable extension for DuckDB v2.0.0. The extension preserves the three improvements over Robust Predicate Transfer (RPT) described in the paper.

- An **asymmetric filter transfer plan** to reduce redundant Bloom Filter (BF) construction.
- A **cascade filter mechanism** that combines min-max and Bloom filters for hierarchical filtering efficiency.
- A **dynamic pipeline strategy** that adapts filter creation and transfer based on runtime selectivity.

> **Robust Predicate Transfer with Dynamic Execution** (PVLDB 2026) · Yiming Qiao, Peter Boncz, Huanchen Zhang. [Paper](https://yimingqiao.github.io/files/rpt_plus.pdf) · [Citation](https://github.com/embryo-labs/dynamic-predicate-transfer/blob/HEAD/CITATION.cff)

## Build

Clone the repository with its DuckDB submodule, build the extension, and start the shell.

```bash
git clone --recurse-submodules https://github.com/embryo-labs/dynamic-predicate-transfer.git
cd dynamic-predicate-transfer
make release
./build/release/duckdb -unsigned
```
