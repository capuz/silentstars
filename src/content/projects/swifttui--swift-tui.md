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
stars: 26
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T21:49:22Z"
lastCommitAt: "2026-08-15T04:05:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["adam-zethraeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/180ac718de2081a04e161559e62ce7af5f1aa0087b1d63a4c8dbf30fedd1985d/SwiftTUI/swift-tui"
---

# SwiftTUI

**SwiftUI semantics, drawn in terminal cells.**

> Run the live demo and read the API reference at **<https://swifttui.sh>**.

SwiftTUI borrows the declarative model SwiftUI has proven at platform scale
(the interface is a function of state) and aims it at terminal cells. Declare
views with `View`, `Scene`, `@State`, `@FocusState`, `VStack`, `ProgressView`,
and custom `Layout` types; the framework owns layout, focus, redraw, and the
terminal itself. Terminal first, not terminal only: the same view tree also
ships as a static WASI bundle, a localhost WebHost, a native SwiftUI surface,
or a native Android surface, with no rewrite per target. Both browser paths
paint to the DOM with a real accessibility tree, not a terminal emulator.
That tree is a one-way semantic presentation preview: assistive-origin focus,
activation, adjustment, and editing are not routed back into SwiftTUI in 0.9.

SwiftTUI uses no global constraint solver, no virtual DOM, and no `curses`.
Every view is lowered through a strict, inspectable pipeline (resolve →
measure → place → semantics → draw → raster → commit), so layout is
deterministic and every frame is snapshot-testable.

## Pre-release

>…
