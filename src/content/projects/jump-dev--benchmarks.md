---
repo: "jump-dev/benchmarks"
name: "benchmarks"
description: "A repository for long-term benchmarking of JuMP performance"
readmeQualityOk: true
url: "https://github.com/jump-dev/benchmarks"
homepage: "https://jump.dev/benchmarks/"
language: "Julia"
languages: ["Julia"]
languagePcts: [89]
stars: 21
forks: 0
openIssues: 2
closedIssues: 0
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2022-05-05T23:34:56Z"
lastCommitAt: "2026-11-01T10:44:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 36
maintainers: ["odow"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b0ce820c7a1844aa142b342da44d5cbb55107e49d184f4e1cc196604a5bf82f/jump-dev/benchmarks"
---

# JuMP benchmarks

This repository contains benchmarks for JuMP-dev.

Visualizations are available at [jump.dev/benchmarks](https://jump.dev/benchmarks).

## Adding new benchmarks

This repository is open for contributions! There are two types of benchmarks we
track:

 * `/src/latency` contains end-to-end scripts. We run these from the command
   line, so they include compilation latency. Add new benchmarks here that
   matter to end-users.
 * `/src/micro` contains a collection of micro-benchmarks, organized by package.
   Each benchmark is a function beginning with `benchmark_`, and tests a small,
   self-contained feature of the package.

## Running the benchmark script

Run the benchmarks using `scripts/benchmarks.jl`:
```
julia --project=. scripts/benchmarks.jl --tune
julia --project=. scripts/benchmarks.jl --run
julia --project=. scripts/benchmarks.jl --publish
```

## Dashboard improvements

The visualizations at [jump.dev/benchmarks](https://jump.dev/benchmarks) are
preliminary. If you're interested in front-end web development and have
suggestions for how we could improve things, please get in touch.

## Hardware

These benchmarks run on a 2022 Apple Mac Mini with 16GB of…
