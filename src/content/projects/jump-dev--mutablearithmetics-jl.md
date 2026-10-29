---
repo: "jump-dev/MutableArithmetics.jl"
name: "MutableArithmetics.jl"
description: "Interface for arithmetics on mutable types in Julia"
readmeQualityOk: true
url: "https://github.com/jump-dev/MutableArithmetics.jl"
homepage: "https://jump.dev/MutableArithmetics.jl/"
language: "TeX"
languages: ["TeX", "Julia"]
languagePcts: [60, 37]
stars: 55
forks: 15
openIssues: 15
closedIssues: 98
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2019-07-31T12:06:14Z"
lastCommitAt: "2026-10-29T14:07:05Z"
lastReleaseAt: "2020-02-28T11:06:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 53
maintainers: ["blegat", "odow", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ee51d9dcd13f5a46eef54fc32619e0a81baee28984e79f4db4bac589774b7fb/jump-dev/MutableArithmetics.jl"
---

# MutableArithmetics.jl

**MutableArithmetics** (MA for short) is a [Julia](http://julialang.org) package
which allows:
 * for mutable types to implement mutable arithmetics
 * for algorithms that could exploit mutable arithmetics to exploit them while
   still being completely generic.

While in some cases, similar features have been included in packages
idiosyncratically, the goal of MutableArithmetics is to provide a generic
interface to allow anyone to make use of mutability when desired.

The package allows a type to declare itself mutable through the `MA.mutability`
trait. Then the user can use the `MA.operate!!` function to write generic code
that works for arbitrary type while exploiting mutability of the type
if possible. More precisely:
 * The `MA.operate!!(op::Function, x, args...)` redirects to `op(x, args...)`
   if `x` is not mutable or if the result of the operation cannot be stored in
   `x`. Otherwise, it redirects to `MA.operate!(op, x, args...)`.
 * `MA.operate!(op::Function, x, args...)` stores the result of the operation in
   `x`. It is a `MethodError` if `x` is not mutable or if the result of the
   operation cannot be stored in `x`.

So from a generic code…
