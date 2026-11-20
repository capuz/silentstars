---
repo: "Ta-Cuda/tacuda"
name: "tacuda"
description: "GPU-accelerated technical analysis: 237 TA-Lib 0.8.3 functions, typed outputs, portfolio batches, CUDA Graphs and incremental streaming. Python, Node.js and .NET."
readmeQualityOk: true
url: "https://github.com/Ta-Cuda/tacuda"
homepage: "https://tacuda.com"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [44, 24]
topics: ["csharp", "cuda", "cuda-graphs", "nodejs", "portfolio", "python", "streaming", "ta-lib", "technical-analysis", "dotnet"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-23T21:49:06Z"
lastCommitAt: "2026-11-20T12:21:43Z"
lastReleaseAt: "2026-11-20T11:39:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 62
maintainers: ["deecalov", "saqibkh"]
openGraphImageUrl: "https://opengraph.githubassets.com/7def1a7fb86e78d4f7ac6579b4500df35a246eeded4d15396604280c4358e20c/Ta-Cuda/tacuda"
---

# 🚀 TACUDA

> **High-Performance CUDA-Accelerated Technical Analysis Library**
>
> **⚡ Up to 15.4x faster pipelines than TA-Lib** | **📊 237 functions from TA-Lib 0.8.3** | **🔧 Host / Device / Batch APIs** | 🌐 [tacuda.com](https://tacuda.com)
>
> Numerical compatibility targets **TA-Lib native/Python 0.8.3**: the strict
> differential corpus covers **237 names, 241 specs and 1928 passing cells**,
> including exact candle signals and warmup behavior. See the
> [compatibility guide](https://github.com/Ta-Cuda/tacuda/blob/HEAD/docs/TA_LIB_COMPATIBILITY.md) for tolerances, typed
> outputs, MA types, numerical changes and performance limits.

**Release 0.9.2** makes host Hilbert results reproducible across libm FMA modes,
adds batched execution across rows and short histories, and corrects rolling
STDDEV, SUM and NaN warm-up. Use matching 0.9.2 natives and bindings.
See the [release notes](https://github.com/Ta-Cuda/tacuda/blob/HEAD/docs/CHANGELOG.md) for numerical and dispatch changes.
