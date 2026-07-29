---
repo: "SwiftTUI/swift-tui"
name: "swift-tui"
description: "SwiftUI semantics, drawn in terminal cells. — Terminal + Web + macOS/iOS native + Android"
readmeQualityOk: true
url: "https://github.com/SwiftTUI/swift-tui"
homepage: "https://SwiftTUI.sh"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["swift", "swiftui", "tui"]
stars: 23
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T21:49:22Z"
lastCommitAt: "2026-07-29T06:12:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["adam-zethraeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/30e7462c6215e710b832d5938da8d82bc7cd7e8bb4446fbaa2d2c17a3984662e/SwiftTUI/swift-tui"
---

# SwiftTUI

**SwiftUI semantics, drawn in terminal cells.**

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

## Pre-release

> [!IMPORTANT]
> SwiftTUI is actively being developed and is currently both _pre-release_ and _pre-SemVer-1.0.0_.  
> I strongly caution against using SwiftTUI for anything mission critical at the moment, but bug reports and contributions are warmly welcomed!
>
> Current state: **_pre-release_**
> * The framework has not yet been publicised because…
