---
repo: "KULeuven-MICAS/stream"
name: "stream"
description: "Multi-core HW accelerator mapping optimization framework for layer-fused ML workloads."
readmeQualityOk: true
url: "https://github.com/KULeuven-MICAS/stream"
homepage: "https://kuleuven-micas.github.io/stream/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 73
forks: 38
openIssues: 2
closedIssues: 28
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2023-01-24T10:17:42Z"
lastCommitAt: "2026-10-20T08:49:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 57
maintainers: ["asyms", "mischirmer"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b0775dc90c7bd96d1ceb21b71f451ac310907aaf50f43da2d9ad222239a9679/KULeuven-MICAS/stream"
---

# 🌊 Stream

**Stream** is a design space exploration (DSE) and constraint-optimization framework for **heterogeneous dataflow accelerators**: accelerator systems built by combining cores that each have their own dataflow and performance model (**AIE** and **TPU-like** are two example core types among others). Scheduling is **layer-fused**, and the **constraint optimization** uses MILP (Mixed-Integer Linear Programming) to decide tensor placement and transfer paths across the cores of such a system. Stream builds on top of [ZigZag](https://zigzag-project.github.io/zigzag/) for per-core cost estimation.

### 📖 [**Explore the Documentation**](https://kuleuven-micas.github.io/stream/)
### 🚀 [**Getting Started Guide**](https://kuleuven-micas.github.io/stream/getting-started/)

---

## ✨ Key Features

✔ **Heterogeneous dataflow cores**: compose an accelerator from cores that each carry their own dataflow and cost model (AIE, TPU-like, pooling, SIMD, and more).

✔ **Layer-fused scheduling** across the whole system of cores.

✔ **Constraint optimization**: a MILP (`AllocationModel`) decides tensor placement and transfer-path routing.

✔ **Pluggable solver backends**: OR-Tools GSCIP…
