---
repo: "SciML/RecursiveArrayTools.jl"
name: "RecursiveArrayTools.jl"
description: "Tools for easily handling objects like arrays of arrays and deeper nestings in scientific machine learning (SciML) and other applications"
readmeQualityOk: true
url: "https://github.com/SciML/RecursiveArrayTools.jl"
homepage: "https://docs.sciml.ai/RecursiveArrayTools/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["vector", "array", "recursion", "sciml", "scientific-machine-learning"]
stars: 233
forks: 76
openIssues: 36
closedIssues: 108
watchers: 6
contributors: 92
recentReleases: 0
createdAt: "2016-10-30T19:00:21Z"
lastCommitAt: "2026-09-23T08:47:44Z"
lastReleaseAt: "2017-05-23T20:35:11Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 42
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "JoshuaLampert"]
openGraphImageUrl: "https://opengraph.githubassets.com/310494fd9b1630c45a5de3dc18e43f5c6cbf3323bd696dd59363318b35f2e6ff/SciML/RecursiveArrayTools.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# RecursiveArrayTools.jl

RecursiveArrayTools.jl is a set of tools for dealing with recursive arrays like
arrays of arrays.

## Tutorials and Documentation

For information on using the package,
[see the stable documentation](https://docs.sciml.ai/RecursiveArrayTools/stable/). Use the
[in-development documentation](https://docs.sciml.ai/RecursiveArrayTools/dev/) for the version of
the documentation, which contains the unreleased features.

## Example

### VectorOfArray

```julia
using RecursiveArrayTools
a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
vA = VectorOfArray(a)
vB = VectorOfArray(b)

vA .* vB # Now all standard array stuff works!

# you can also create it directly with a vector-like syntax:
c = VA[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
d = VA[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

c .* d
```

### Ragged Arrays

```julia
using RecursiveArrayTools

# VectorOfArray with ragged data uses zero-padded rectangular interpretation
ragged = VectorOfArray([[1, 2], [3, 4, 5]])
size(ragged)     # (3, 2) — max inner length is 3
ragged[3, 1]     # 0      — implicit zero
Array(ragged)    # [1 3; 2 4; 0 5]

# For true ragged structure without zero-padding:
using…
