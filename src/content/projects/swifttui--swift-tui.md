---
repo: "SwiftTUI/swift-tui"
name: "swift-tui"
description: "SwiftUI semantics, drawn in terminal cells — macOS/Linux/Windows/WASI"
readmeQualityOk: true
url: "https://github.com/SwiftTUI/swift-tui"
homepage: "https://SwiftTUI.sh"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["swift", "swiftui", "tui", "linux", "macos", "wasi", "windows"]
stars: 52
forks: 3
openIssues: 1
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 6
createdAt: "2026-06-07T21:49:22Z"
lastCommitAt: "2026-08-23T04:08:51Z"
lastReleaseAt: "2026-08-23T02:14:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["adam-zethraeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/8067d9b2b63eaab398281e2e518de1d5aeeef045bf30c730554df334c670557c/SwiftTUI/swift-tui"
---

# SwiftTUI

**SwiftUI semantics, drawn in terminal cells.**

> Run the live demo and read the API reference at **<https://swifttui.sh>**.

SwiftTUI borrows the take model SwiftUI has proven at scale — that interface is a function of state — and aims it at terminal cells. Declare
views with `View`, `Scene`, `@State`, `@FocusState`, `VStack`, `ProgressView`,
and custom `Layout` types; the framework owns layout, focus, redraw, and the
terminal itself. Terminal first, not terminal only: the same view tree also
ships as a static WASI bundle, a localhost WebHost, a native SwiftUI surface,
or a native Android surface, with no rewrite per target. Both browser paths
paint to the DOM with a real accessibility tree, not a terminal emulator.

SwiftTUI uses no global constraint solver, no virtual DOM, and no `curses`.
Every view is lowered through a strict, inspectable pipeline (resolve →
measure → place → semantics → draw → raster → commit), so layout is
deterministic and every frame is snapshot-testable.

## Project State

> [!IMPORTANT]
> SwiftTUI is being developed and is pre-SemVer `1.0.0`.  

The API has now stabilized but there may still be breaking changes made
before `1.0.0`. These…
