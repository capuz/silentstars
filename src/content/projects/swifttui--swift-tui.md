---
repo: "SwiftTUI/swift-tui"
name: "swift-tui"
description: "SwiftUI semantics, drawn in terminal cells. — Terminal + Web + native desktop & mobile app support"
url: "https://github.com/SwiftTUI/swift-tui"
homepage: "https://SwiftTUI.sh"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["swift", "swiftui", "tui"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T21:49:22Z"
lastCommitAt: "2026-06-27T00:34:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["adam-zethraeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/aab0fc457d77586f0d1f1d391ee349365b66e857e2b9cb4b22f0972042a9d829/SwiftTUI/swift-tui"
---

# SwiftTUI

**SwiftUI semantics, drawn in terminal cells.**

![Swift 6.3](https://img.shields.io/badge/Swift-6.3-F05138?logo=swift&logoColor=white)
![Platforms](https://img.shields.io/badge/platforms-macOS%20%C2%B7%20Linux%20%C2%B7%20iOS%20%C2%B7%20WASI%20%C2%B7%20Android-1E90FF)
![Status](https://img.shields.io/badge/status-0.1.0%20pre--release-DAA520)
![License](https://img.shields.io/badge/license-MIT-3DA639)

> Run the live demo and read the API reference at **<https://swifttui.sh>**.

Author your `App` once with the SwiftUI shapes you already know — `View`,
`Scene`, `@State`, `@FocusState`, `VStack`, `ProgressView`, custom `Layout`.
Ship that same view tree five ways: a terminal executable, a static WASI bundle,
a localhost WebHost, a native SwiftUI surface, or a native Android surface. There
is no rewrite per target — and both browser paths paint to the DOM with a real
accessibility tree, not a terminal emulator.

No global constraint solver, no virtual DOM, no `curses`. Every view is lowered
through a strict, inspectable pipeline — resolve → measure → place → semantics →
draw → raster → commit — so layout is deterministic and every frame is
snapshot-testable.

## Why…
