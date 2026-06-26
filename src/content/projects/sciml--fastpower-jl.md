---
repo: "SciML/FastPower.jl"
name: "FastPower.jl"
description: "A faster approximation to floating point power, at the trade-off of some accuracy"
url: "https://github.com/SciML/FastPower.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 2
closedIssues: 5
watchers: 4
contributors: 36
recentReleases: 1
createdAt: "2024-09-28T08:46:57Z"
lastCommitAt: "2026-06-26T21:31:00Z"
lastReleaseAt: "2026-06-25T01:32:40Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 63
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0184faa89a401ee9fe196ad326c9048352f565e967ee1f14ec903576468f879a/SciML/FastPower.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# FastPower.jl

A faster approximation to floating point power, at the trade-off of some accuracy. While Julia's
built-in floating point `^` tries to achieve ~1ulp accuracy, this version of floating point power
approximation achieves much fewer digits of accuracy (approximately 10 digits of accuracy) while
being much faster. This is developed as a library in order to make the choice to opt-in as a
replacement to `^` very easy but deliberate on the side of the user.

## Installation

```julia
using Pkg
Pkg.add("FastPower")
```

## Using FastPower.jl

Using FastPower.jl is dead simple: instead of `x^y`, do the following:

```julia
using FastPower
FastPower.fastpower(x,y)
```

That's it. That's all there is. 

## FastPower vs FastMath (`@fastmath`)

The name simply derives from the Julia standard of `x_fast` for things that are approximations.
FastPower is simply the the `^_fast` or `pow_fast` function, following the standard conventions
developed from Base. However, this differs from the `pow_fast` you get from Base which is still
a lot more accurate. `FastPower.fastpower` loses about 12 digits of accuracy on Float64, so it's
about 3-4 digits of accuracy. For many applications, such…
