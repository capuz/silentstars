---
repo: "FJingxian/JanusX"
name: "JanusX"
description: "A high-performance, ALL-in-ONE suite for quantitative genetics that unifies genome-wide association studies (GWAS) and genomic selection (GS). "
readmeQualityOk: true
url: "https://github.com/FJingxian/JanusX"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [55, 45]
topics: ["genomic-selection", "gwas-tools", "gs", "gwas"]
stars: 34
forks: 3
openIssues: 2
closedIssues: 21
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-04T03:31:06Z"
lastCommitAt: "2026-07-24T06:09:09Z"
lastReleaseAt: "2026-03-26T08:04:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["FJingxian", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ae6e8a033c869b89d6ed49e8bbe5568129331836542150a452a8abdaf80fec6/FJingxian/JanusX"
---

# JanusX

[CLI Guide](https://github.com/FJingxian/JanusX/blob/HEAD/doc/JanusXcli.md) | [Core API Guide](https://github.com/FJingxian/JanusX/blob/HEAD/doc/JanusXcore.md) | [Zea Eureka](https://mp.weixin.qq.com/s/jl3h2DPRC21l8QJ0WxzXDA)

 

## Overview

JanusX (Joint Association and Novel Utility for Selection) is a GWAS and genomic selection toolkit that combines:

- Rust-accelerated kernels (PyO3 extension)
- Python analysis modules
- A Rust launcher (`jx`) for runtime/toolchain management and pipeline orchestration

```text
       _                      __   __
      | |                     \ \ / /
      | | __ _ _ __  _   _ ___ \ V /
  _   | |/ _` | '_ \| | | / __| > <
 | |__| | (_| | | | | |_| \__ \/ . \
  \____/ \__,_|_| |_|\__,_|___/_/ \_\ Tools for GWAS and GS
  ---------------------------------------------------------
```

**Main capabilities**:

- GWAS: `LM`, `LMM`, `FastLMM`, `FarmCPU`
- Genomic selection: `GBLUP`, `adBLUP`, `rrBLUP`, `BayesA/B/Cpi`, and ML models (`RF/ET/GBDT/XGB/SVM/ENET`)
- Streaming genotype IO for VCF/HMP/PLINK/TXT/NPY
- Post-analysis workflows: `postgwas`, `postgarfield`, `postbsa`
- Utility workflows: `grm`, `pca`, `gformat`, `gmerge`, `hybrid`,…
