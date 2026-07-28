---
repo: "pulp-platform/redmule"
name: "redmule"
description: "GEMM and GEMM-Ops accelerator for PULP systems"
readmeQualityOk: true
url: "https://github.com/pulp-platform/redmule"
language: "SystemVerilog"
languages: ["SystemVerilog", "Python"]
languagePcts: [61, 27]
stars: 111
forks: 26
openIssues: 3
closedIssues: 6
watchers: 4
contributors: 18
recentReleases: 2
createdAt: "2022-12-30T09:57:51Z"
lastCommitAt: "2026-07-28T14:51:57Z"
lastReleaseAt: "2026-07-15T19:40:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: ["FrancescoConti", "mbertuletti", "luca24balboni"]
openGraphImageUrl: "https://opengraph.githubassets.com/c275ad9507f431bca10808325d915e10d6a3fa939d3708fe23a1de5eb0c131ea/pulp-platform/redmule"
---

# RedMulE
RedMulE (**Red**uced-Precision Matrix **Mul**tiplication **E**ngine) is an open-source hardware accelerator based on the [HWPE](https://hwpe-doc.readthedocs.io/en/latest/index.html) template. It is designed to accelerate General Matrix-Matrix Operations (GEMM-Ops) on Floating-Point (FP) FP16 and FP8 input matrices. The keyword GEMM-Ops includes all the matrix operations of the kind **Z = (X op1 W) op2 Z**. The operators *op1* and *op2* can be any of those grouped in the following table:

|          Kernel           |  *op1*   |  *op2*  |           Res           |
| ------------------------- | -------- | ------- | ----------------------- |
|           GEMM            |    x     |    +    | *Z = (X x W) + Z*       |
| Maximum Critical Path     |    +     |   max   | *Z = max[(X + W), Z]*   |
| All-Pairs Shortest Paths  |    +     |   min   | *Z = min[(X + W), Z]*   |
| Maximum Reliability Path  |    x     |   max   | *Z = max[(X x W), Z]*   |
| Minimum Reliability Path  |    x     |   max   | *Z = min[(X x W), Z]*   |
| Minimum Spanning Tree     |   max    |   min   | *Z = min[max(X, W), Z]* |
| Maximum Capacity Tree     |   min    |   max   | *Z = max[min(X, W), Z]* |

To…
