---
repo: "FJingxian/JanusX"
name: "JanusX"
description: "A high-performance, ALL-in-ONE suite for quantitative genetics that unifies genome-wide association studies (GWAS) and genomic selection (GS). "
readmeQualityOk: true
url: "https://github.com/FJingxian/JanusX"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [64, 36]
topics: ["genomic-selection", "gwas-tools", "gs", "gwas"]
stars: 41
forks: 7
openIssues: 1
closedIssues: 25
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-04T03:31:06Z"
lastCommitAt: "2026-11-20T12:23:16Z"
lastReleaseAt: "2026-03-26T08:04:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["FJingxian"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6cc506d3457298806ab7dca5df56365f2d415ec4e12d1b2d5d4aec375240670/FJingxian/JanusX"
---

# JanusX

[CLI Guide](https://github.com/FJingxian/JanusX/blob/HEAD/doc/JanusXcli.md) | [Core API Guide](https://github.com/FJingxian/JanusX/blob/HEAD/doc/JanusXcore.md) | [v2.0.1 Release](https://github.com/FJingxian/JanusX/blob/HEAD/doc/release/v2.0.1.md)

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
