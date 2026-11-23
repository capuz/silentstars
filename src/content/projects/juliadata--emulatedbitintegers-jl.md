---
repo: "JuliaData/EmulatedBitIntegers.jl"
name: "EmulatedBitIntegers.jl"
description: "Arbitrary bit width integers for Julia"
readmeQualityOk: true
url: "https://github.com/JuliaData/EmulatedBitIntegers.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 18
recentReleases: 2
createdAt: "2026-06-09T04:13:33Z"
lastCommitAt: "2026-11-23T09:50:03Z"
lastReleaseAt: "2026-11-23T10:26:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 57
maintainers: ["PatrickHaecker", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05047010bb85c4e3a566e7d7b4485e8c1ebe7e40217788c79fe929b307d08111/JuliaData/EmulatedBitIntegers.jl"
---

# EmulatedBitIntegers

*Providing integers behaving as arbitrary bit-size integers.*

## Overview

`EmulatedBitIntegers.jl` provides integers with N bits where N is not a multiple of 8 (i.e. 1 byte). For sizes that are multiples of 8, use the existing primitive types or `BitIntegers.jl`. This package should only be relevant until [primitive types can be of any bitsize](https://github.com/JuliaLang/julia/issues/45486) as already supported by LLVM. Then, you can hopefully simply switch to `BitIntegers.jl` with native support. In order to facilitate this future transition, `EmulatedBitIntegers.jl` tries to provide types as closely as possible to the primitive types of any bitsize by being themselves primitive types and not using type parameters.
