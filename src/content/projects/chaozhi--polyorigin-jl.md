---
repo: "chaozhi/PolyOrigin.jl"
name: "PolyOrigin.jl"
description: "A package for haplotype reconstruction in multigenerational diploid and polyploid pedigrees"
readmeQualityOk: true
url: "https://github.com/chaozhi/PolyOrigin.jl"
homepage: "https://chaozhi.github.io/PolyOrigin.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2020-12-07T09:48:09Z"
lastCommitAt: "2026-11-16T11:52:26Z"
lastReleaseAt: "2026-11-12T10:28:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 57
maintainers: ["chaozhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb23500f4ab6e1aa5dccb4b431875ce55c178a1cf0a8e2ab735de6e85b286ba7/chaozhi/PolyOrigin.jl"
discussionCount: 1
---

# PolyOrigin.jl

A package for haplotype reconstruction in multigenerational diploid and polyploid pedigrees.

## Features

- Apply to multi-generation pedigrees, including connected F1 populations
- Apply to SNP array and GBS data
- Account for preferential pairing and quadrivalent formation in polyploid
- Account for allelic bias and over-dispersion in GBS data

## Documentation

- [Stable Documentation](https://chaozhi.github.io/PolyOrigin.jl/stable/)
- [Development Documentation](https://chaozhi.github.io/PolyOrigin.jl/dev/)

## Installation

From the julia (>=v1.12, 64-bit) REPL mode, run

```
julia>]add https://github.com/chaozhi/PolyOrigin.jl
```
where `]` enters Pkg REPL mode.

The above installation will also build PolyOrigin, which might result in a warning message like: 

    To run polyorigin from anywhere in your terminal, add ~/.julia/bin to your PATH

> [!NOTE]
> For using the previous version 1 (PolyOrigin1), run  
> ```
> julia>]add https://github.com/chaozhi/PolyOrigin.jl#v1legacy
> ```
> The command line interface is available at https://github.com/chaozhi/PolyOriginCmd

## Usage

From the julia REPL mode, run
```
julia> using PolyOrigin
julia>…
