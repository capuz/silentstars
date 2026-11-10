---
repo: "hylo-lang/hylo-new"
name: "hylo-new"
description: "The Hylo programming language"
readmeQualityOk: true
url: "https://github.com/hylo-lang/hylo-new"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 91
forks: 16
openIssues: 165
closedIssues: 146
watchers: 4
contributors: 10
recentReleases: 4
createdAt: "2024-10-08T13:17:09Z"
lastCommitAt: "2026-11-10T11:38:02Z"
lastReleaseAt: "2026-09-11T22:13:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["kyouko-taiga", "tothambrus11", "RishabhRD"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de869c01c90ff502bdb8bc7c4162ae14764fc90e5bf9da2836933133b833001/hylo-lang/hylo-new"
---

# The Hylo Language

Hylo is a safe systems programming language leveraging mutable value semantics and generic programming. To learn more, 
visit https://hylo-lang.org/.

## Building Instructions

The Hylo compiler is written in Swift, links against [LLVM 23](https://github.com/hylo-lang/llvm-build), and can be
built using the Swift Package Manager from the Swift 6.3.2 toolchain or later. For detailed setup instructions,
see [Building Instructions](https://hylo-lang.org/docs/contributing/building-the-compiler/) on our website.

## The Hylo Compiler's Runtime Dependencies
`hc` uses `clang` for linking, resolving them from PATH. On macOS, you will need `xcrun` 
on PATH so the compiler can find the SDK.

## Environment Variables

- `HYLO_DEFAULT_CACHE_ROOT`: the directory in which `hc` saves its module cache by default.
