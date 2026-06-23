---
repo: "JuliaArrays/HybridArrays.jl"
name: "HybridArrays.jl"
description: "Arrays with both statically and dynamically sized axes in Julia"
url: "https://github.com/JuliaArrays/HybridArrays.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["arrays", "julia"]
stars: 60
forks: 5
openIssues: 8
closedIssues: 14
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2019-09-13T10:25:28Z"
lastCommitAt: "2026-06-23T06:42:35Z"
lastReleaseAt: "2020-07-21T18:12:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 25
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bbf34a980350db227abdd6c50a4fcb7a379550847bc7076fc7d3528ced523ad/JuliaArrays/HybridArrays.jl"
---

| Status | Coverage |
| :----: | :----: |
| [![CI](https://github.com/mateuszbaran/HybridArrays.jl/workflows/CI/badge.svg)](https://github.com/mateuszbaran/HybridArrays.jl/actions?query=workflow%3ACI+branch%3Amaster) | [ ![codecov.io](http://codecov.io/github/mateuszbaran/HybridArrays.jl/coverage.svg?branch=master)](http://codecov.io/github/mateuszbaran/HybridArrays.jl?branch=master) |

# HybridArrays.jl

Arrays with both statically and dynamically sized axes in Julia. This is a convenient replacement for the commonly used `Arrays`s of `SArray`s which are fast but not easy to mutate. `HybridArray` makes this easier: any `AbstractArray` can be wrapped in a structure that specifies which axes are statically sized. Based on this information code for `getindex`, `setindex!` and broadcasting is (or should soon be, not all cases have been optimized yet) as efficient as for `Arrays`s of `SArray`s while mutation of single elements is possible, as well as other operations on the wrapped array.

Views are statically sized where possible for fast and convenient mutation of `HybridArray`s.

Example:

```julia
julia> using HybridArrays, StaticArrays

julia> A =…
