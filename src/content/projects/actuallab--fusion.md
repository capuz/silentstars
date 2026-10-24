---
repo: "ActualLab/Fusion"
name: "Fusion"
description: "Build real-time Blazor and MAUI apps while writing just 0.1% of the usual real-time update code. Handle 10× more API requests with the ActualLab.Rpc protocol—or 1000× more with Fusion’s transparent and perfectly coherent caching."
readmeQualityOk: true
url: "https://github.com/ActualLab/Fusion"
homepage: "https://fusion.actuallab.net/"
language: "C#"
languages: ["C#"]
languagePcts: [84]
topics: ["blazor", "blazor-webassembly", "caching", "grpc", "grpc-client", "maui", "maui-blazor", "reactive", "reactiveui", "rpc"]
stars: 179
forks: 23
openIssues: 5
closedIssues: 17
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2023-12-15T00:22:16Z"
lastCommitAt: "2026-10-24T08:09:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["alexyakunin", "TimurbekDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d6b17a3f42c04ad556a1b442ed97f8e37950abd943f9f616241a128cf4b099c/ActualLab/Fusion"
---

# 👾 Fusion: The missing layer for real-time apps

## Overview

`ActualLab.Fusion` acts as **method-call middleware**, transparently enriching every call to Fusion-enhanced services with caching, dependency tracking, invalidation, RPC, and more — with almost no changes to application code.

You can think of Fusion as `make` or `msbuild`, but operating on functions and their outputs instead of source files and build artifacts. Like MSBuild, Fusion uses lazy computation:
- When something changes, dependent results are immediately marked as inconsistent &ndash; and this signal propagates all the way to remote clients
- Recomputation only happens when you actually request the result

Fusion solves a set of infamously hard problems with a 🦄 single abstraction:

| Problem                         | Fusion's Answer                                                                                                                                                                  | So you don't need...                                                                                           |…
