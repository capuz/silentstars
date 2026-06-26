---
repo: "SciML/MuladdMacro.jl"
name: "MuladdMacro.jl"
description: "This package contains a macro for converting expressions to use muladd calls and fused-multiply-add (FMA) operations for high-performance in the SciML scientific machine learning ecosystem"
url: "https://github.com/SciML/MuladdMacro.jl"
homepage: "https://docs.sciml.ai/MuladdMacro/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["muladd", "fma", "sciml", "scientific-machine-learning", "julia", "julia-language", "julialang"]
stars: 49
forks: 8
openIssues: 0
closedIssues: 9
watchers: 5
contributors: 41
recentReleases: 1
createdAt: "2017-07-31T09:51:01Z"
lastCommitAt: "2026-06-26T21:31:42Z"
lastReleaseAt: "2026-06-25T01:35:33Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 45
maintainers: ["ChrisRackauckas-Claude", "ChrisRackauckas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c437b532cebc616ca5ac21ac62e62e6f9f43725cfa3605562ce744b6ec1690/SciML/MuladdMacro.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# MuladdMacro.jl

This package provides the `@muladd` macro. It automatically converts expressions
with multiplications and additions or subtractions to calls with `muladd` which then fuse via
FMA when it would increase the performance of the code. The `@muladd` macro
can be placed on code blocks and it will automatically find the appropriate
expressions and nest muladd expressions when necessary. In mixed expressions, summands without multiplication
will be grouped together and evaluated first, but otherwise the order of evaluation of multiplications and additions is not changed.

## Tutorials and Documentation

For information on using the package,
[see the stable documentation](https://docs.sciml.ai/MuladdMacro/stable/). Use the
[in-development documentation](https://docs.sciml.ai/MuladdMacro/dev/) for the version of
the documentation, which contains the unreleased features.

## Examples

```julia-repl
julia> using MuladdMacro

julia> @macroexpand(@muladd k3 = f(t + c3 * dt, @. uprev + dt * (a031 * k1 + a032 * k2)))
:(k3 = f((muladd)(c3, dt, t), (muladd).(dt, (muladd).(a032, k2, (*).(a031, k1)), uprev)))

julia> @macroexpand(@muladd integrator.EEst =…
