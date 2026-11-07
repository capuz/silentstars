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
openIssues: 4
closedIssues: 18
watchers: 5
contributors: 23
recentReleases: 2
createdAt: "2023-12-15T00:22:16Z"
lastCommitAt: "2026-11-07T10:36:27Z"
lastReleaseAt: "2026-11-07T05:11:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 46
maintainers: ["alexyakunin", "TimurbekDev", "dajiaohuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cca306560f2e7a05e3401fe4d0ec19181b8f0340e02a2bb9260e9f056475d9a/ActualLab/Fusion"
---

# 👾 Fusion: The missing layer for real-time apps

## Overview

`ActualLab.Fusion` acts as **method-call middleware**, transparently enriching every call to Fusion-enhanced services with caching, dependency tracking, invalidation, RPC, and more — with almost no changes to application code.

You can think of Fusion as `make` or `msbuild`, but operating on functions and their outputs instead of source files and build artifacts. Like MSBuild, Fusion uses lazy computation:
- When something changes, dependent results are immediately marked as inconsistent &ndash; and this signal propagates all the way to remote clients
- Recomputation only happens when you actually request the result

Fusion solves a set of infamously hard problems with a 🦄 single abstraction:

| Problem                         | Fusion's Answer                                                                                                                                                                  | So you don't need...                                                                                           |…
