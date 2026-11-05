---
repo: "BioJulia/SingleCellProjections.jl"
name: "SingleCellProjections.jl"
description: "Analysis of Single Cell Expression data in Julia"
readmeQualityOk: true
url: "https://github.com/BioJulia/SingleCellProjections.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 25
forks: 4
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2023-01-15T08:22:38Z"
lastCommitAt: "2026-11-05T08:04:10Z"
lastReleaseAt: "2023-08-17T05:36:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["rasmushenningsson"]
openGraphImageUrl: "https://opengraph.githubassets.com/c62e5b00070a899c4b37ad36d7c21689c5293fdb3261c148ea9278d9a5cb0aa8/BioJulia/SingleCellProjections.jl"
---

# SingleCellProjections.jl

&emsp;
&emsp;

Please note SingleCellProjections v0.5 has completely changed the public interface, with major improvements. Refer to the [tutorial](https://biojulia.dev/SingleCellProjections.jl/dev/tutorial/) for how to use the new interface.

SingleCellProjections.jl is an easy to use and powerful package for analysis of Single Cell Expression data in Julia.
It is faster and uses less memory than existing solutions since the data is internally represented as expressions of sparse and low rank matrices, instead of storing huge dense matrices.
In particular, it efficiently performs PCA (Principal Component Analysis), a natural starting point for downstream analysis, and supports both standard workflows and projections onto a base data set.

## Installation
Install SingleCellProjections.jl by running the following commands in Julia:

```julia
using Pkg
Pkg.add("SingleCellProjections")
```

## Threading
SingleCellProjections.jl relies heavily on threading. Please make sure to [enable threading in Julia](https://docs.julialang.org/en/v1/manual/multi-threading/) to dramatically improve computation speed.

## Tutorial
Here is a…
