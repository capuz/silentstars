---
repo: "QuantumKitHub/WignerSymbols.jl"
name: "WignerSymbols.jl"
description: "A Julia package for computing Wigner symbols and related quantities"
readmeQualityOk: true
url: "https://github.com/QuantumKitHub/WignerSymbols.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 60
forks: 13
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2017-08-08T14:56:53Z"
lastCommitAt: "2026-10-29T12:25:40Z"
lastReleaseAt: "2021-06-16T08:27:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 31
maintainers: ["lkdvos", "KristofferC"]
openGraphImageUrl: "https://opengraph.githubassets.com/a54e593b68db2c7d3c483f12e9efa9ba2d3b0aab65dbfe257fbad4fd84895f27/QuantumKitHub/WignerSymbols.jl"
---

# WignerSymbols

Compute Wigner's 3j and 6j symbols, and related quantities such as Clebsch-Gordan
coefficients and Racah's symbols.

## What's new in v2

WignerSymbols.jl was updated to version 2.0 on June 16th, 2021. This is the first major
update in several years. The most important change is that WignerSymbols.jl is now
completely thread safe, i.e. you can request Wigner symbols from different threads
simultaneously. The computation of the Wigner symbols is not in itself multithreaded (this
may be added in the future).

WignerSymbols.jl does no longer store the Wigner 3j and 6j symbols in a `Dict` cache, but
rather in an `LRU` cache from [LRUCache.jl](https://github.com/JuliaCollections/
LRUCache.jl). Hence, it no longer stores all Wigner symbols ever computed, but only the
most recent ones, and it that sense this is a (softly) breaking release. By default, it
stores the $10^6$ most recent ones, which is probably equivalent to storing all of them in
most use cases. This number can be changed via the interface
```julia
WignerSymbols.set_buffer3j_size!(; maxsize = ...)
WignerSymbols.set_buffer6j_size!(; maxsize = ...)
```
Thus note that there are separate cache buffers for 3j…
