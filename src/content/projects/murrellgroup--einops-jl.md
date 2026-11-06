---
repo: "MurrellGroup/Einops.jl"
name: "Einops.jl"
description: "Declarative and readable tensor operations in Julia"
readmeQualityOk: true
url: "https://github.com/MurrellGroup/Einops.jl"
homepage: "https://murrellgroup.github.io/Einops.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["einops", "tensor-operations"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-05-07T17:30:22Z"
lastCommitAt: "2026-11-06T13:19:50Z"
lastReleaseAt: "2025-08-11T11:01:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 52
maintainers: ["AntonOresten", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c057d34b1182a14b71d724d5fcb268a341bb5774c85c944314bdfe3cafcf09c9/MurrellGroup/Einops.jl"
---

Einops.jl brings the readable and concise tensor operations of [einops](https://einops.rocks) to Julia, expanding to primitives like `reshape`, `permutedims`, and `repeat`, while avoiding double-wrappers when possible using [Rewrap.jl](https://github.com/MurrellGroup/Rewrap.jl) and remaining type stable.

## Quickstart

```julia
using Pkg
Pkg.add("Einops")
using Einops

x = rand(2, 3, 4)
y = @rearrange(x, "a b c -> (a b) c")
```

## Einops vs Base primitives

The snippets below show identical transformations expressed first with a single Einops expression and then with "hand-rolled" Julia primitives. Notice how Einops collapses multiple e.g. `reshape` / `permutedims` / `dropdims` / `repeat` calls into a single, declarative statement, while still expanding to such primitives under the hood and avoiding double-wrappers and no-ops.

Flatten first two dimensions

```julia
@rearrange(x, "a b c -> (a b) c")
```

```julia
reshape(x, :, size(x, 3))
```

Permute first two dimensions

```julia
@rearrange(x, "a b c -> b a c")
```

```julia
permutedims(x, (2, 1, 3))
```

Permute and flatten

```julia
@rearrange(x, "a b -> (b a)")
```

```julia
vec(permutedims(x))
```

Remove first dimension…
