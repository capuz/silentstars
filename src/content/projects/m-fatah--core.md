---
repo: "M-Fatah/core"
name: "core"
description: "A C++20 foundation library — explicit allocators, C-like style, compile-time reflection, and no exceptions."
readmeQualityOk: true
url: "https://github.com/M-Fatah/core"
homepage: "https://m-fatah.github.io/"
language: "C++"
languages: ["C++", "Objective-C++"]
languagePcts: [59, 20]
topics: ["cpp", "cpp20", "allocator", "cross-platform", "data-structures", "ecs", "game-development", "game-engine", "library", "memory-management"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-05T01:29:49Z"
lastCommitAt: "2026-08-12T05:13:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 44
maintainers: ["M-Fatah"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f052edc7a1e121c4afffdc9b9adef1d79327952e67fea22702867b861e81d90/M-Fatah/core"
---

# Core

Core is a C-like C++20 foundation library for data-oriented applications. It provides the pieces an app, tool, game engine, compiler, or renderer usually wants close at hand: memory, containers, math, formatting, logging, validation, serialization, ECS, and platform services.

The library favors explicit ownership, visible allocations, plain structs, free functions, and `_init` / `_deinit` lifetimes over hidden runtime behavior.

> Core is still a WIP. Breaking changes are expected.

## Design

- Explicit allocations: containers accept a `memory::Allocator *`.
- Explicit lifetimes: owned resources use visible init/deinit pairs.
- No exceptions: failures are returned or validated at the boundary where they matter.
- C-like C++: plain data, free functions, and simple translation units.
- Platform-first: Windows, Linux, macOS, iOS, and Android backends live inside Core and use native platform APIs and system libraries.

## Modules

| Module | Description |
|---|---|
| `core/defines.h` | Primitive aliases, utility macros, platform/compiler defines |
| `core/memory/` | Heap, arena, pool, temp allocator, virtual-memory-backed allocation |
| `core/containers/` | Array, string,…
