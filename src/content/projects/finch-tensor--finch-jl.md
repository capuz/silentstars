---
repo: "finch-tensor/Finch.jl"
name: "Finch.jl"
description: "Sparse and Structured Tensor Compiler"
readmeQualityOk: true
url: "https://github.com/finch-tensor/Finch.jl"
homepage: "https://finch-tensor.github.io/Finch.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["arrays", "dsl", "julia", "tensors", "sparse", "compiler", "graphs", "linear-algebra", "finch", "looplets"]
stars: 247
forks: 31
openIssues: 13
closedIssues: 304
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2021-08-05T17:39:32Z"
lastCommitAt: "2026-11-07T22:50:52Z"
lastReleaseAt: "2023-05-08T21:36:41Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 42
maintainers: ["willow-ahrens", "AdrianGushin", "kylebd99"]
openGraphImageUrl: "https://opengraph.githubassets.com/17fb1fa8972784d8de7cace76dc4a4be84bf58e748d20590c8aa2a6bbbe31b1f/finch-tensor/Finch.jl"
---

# Finch.jl

Finch is a Julia-to-Julia compiler for sparse or structured multidimensional arrays. Finch empowers users to write loop-based array programs which are transformed behind-the-scenes into fast sparse code.

## Why Finch.jl?

Finch was built to make sparse and structured array programming easier and more efficient.  Finch.jl leverages compiler technology to automatically generate customized, fused sparse kernels for each specific
use case. This allows users to write readable sparse array programs without worrying about the performance of the generated code. Finch can automatically generate efficient implementations even for unique problems that lack existing library solutions.

# Documentation

Check out our [documentation website](https://finch-tensor.github.io/Finch.jl/stable)! Please file an issue if you feel the docs are unclear on anything!

# Installation

At the [Julia](https://julialang.org/downloads/) REPL, install the latest stable version by running:

```julia
julia> using Pkg;
       Pkg.add("Finch");

```

## Quickstart

```julia
julia> using Finch

# Create a sparse tensor

julia> A = Tensor(CSCFormat(), [1 0 0; 0 2 0; 0 0 3])
3×3 Tensor{DenseLevel{Int64,…
