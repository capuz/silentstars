---
repo: "jolars/basin"
name: "basin"
description: "A unified interface to numerical optimization in Rust, from problem formulation to solution."
readmeQualityOk: true
url: "https://github.com/jolars/basin"
homepage: "https://basin.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["minimization", "nonlinear-optimization", "numerical-optimization", "numerics", "solvers", "optimization"]
stars: 125
forks: 5
openIssues: 0
closedIssues: 15
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-30T13:04:29Z"
lastCommitAt: "2026-10-23T09:32:08Z"
lastReleaseAt: "2026-06-02T13:16:36Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 33
maintainers: ["jolars", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1225608935/4a10578f-704e-4a6e-8ae4-1221a454ae53"
fundingLinks: ["GITHUB:https://github.com/jolars"]
discussionCount: 1
---

# Basin <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jolars/basin/main/images/logo-dark.png" /><img src="https://raw.githubusercontent.com/jolars/basin/main/images/logo.png" align="right" width="189" alt="basin logo" /></picture>

Basin is a numerical optimization library for Rust. Solve problems with or
without derivatives, fit models with nonlinear least squares, and handle
bounds and other constraints with algorithms suited to your problem. Basin
also provides a solver for bracketed scalar equations.

Define the function you want to minimize, choose a solver, and supply a
starting point. Use plain Rust vectors or your choice of nalgebra, ndarray, or
faer. Basin runs natively and in the browser, with no BLAS/LAPACK or threads
required by the default build. Its design is inspired by [argmin].

Narrative documentation lives at [basin.rs/docs]; the rustdoc reference is at
[docs.rs/basin]. There is also an in-browser [solver visualizer] and a
[benchmarks site] comparing Basin against competing crates and across backends
and solvers.

To port an existing Argmin project, see [Migrating from…
