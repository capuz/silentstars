---
repo: "JuliaApproximation/ContinuumArrays.jl"
name: "ContinuumArrays.jl"
description: "A package for representing quasi arrays with continuous indices"
url: "https://github.com/JuliaApproximation/ContinuumArrays.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 31
forks: 6
openIssues: 27
closedIssues: 19
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2018-10-15T12:53:10Z"
lastCommitAt: "2026-06-24T00:23:38Z"
lastReleaseAt: "2020-08-18T16:09:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 34
maintainers: ["dlfivefifty", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8390bdad96c34aedb403b0013ac31943dde2247d1e4bce2fab7f6c883095c8c/JuliaApproximation/ContinuumArrays.jl"
---

# ContinuumArrays.jl
A package for representing quasi arrays with continuous dimensions

A quasi array as implemented in [QuasiArrays.jl](https://github.com/JuliaApproximation/QuasiArrays.jl) is a 
generalization of an array that allows non-integer indexing via general axes. This package adds support for
infinite-dimensional axes, including continuous intervals. Thus it plays the same role as [InfiniteArrays.jl](https://github.com/JuliaArrays/InfiniteArrays.jl) does for standard arrays but now for quasi arrays. 

A simple example is the identity function on the interval `0..1`. This can be created using `Inclusion(d)`,
which returns `x` if `x in d` is true, otherwise throws an error:
```julia
julia> using ContinuumArrays, IntervalSets

julia> x = Inclusion(0..1.0)
Inclusion(0.0..1.0)

julia> size(x) # uncountable (aleph-1)
(ℵ₁,)

julia> axes(x) # axis is itself
(Inclusion(0.0..1.0),)

julia> x[0.1] # returns the input
0.1

julia> x[1.1] # throws an error
ERROR: BoundsError: attempt to access Inclusion(0.0..1.0)
  at index [1.1]
Stacktrace:
 [1] throw_boundserror(::Inclusion{Float64,Interval{:closed,:closed,Float64}}, ::Tuple{Float64}) at ./abstractarray.jl:538
 [2] checkbounds at…
