---
repo: "Lore-Hex/QuillUI"
name: "QuillUI"
description: "SwiftUI compatibility experiments for Linux, QuillData, QuillKit, and Enchanted/Quill Chat porting"
url: "https://github.com/Lore-Hex/QuillUI"
language: "Swift"
languages: ["Swift"]
languagePcts: [75]
stars: 18
forks: 0
openIssues: 35
closedIssues: 81
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-08T13:29:49Z"
lastCommitAt: "2026-06-24T00:19:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/75744bdcbfa8ca6f3ce977465f47d08617613ef284cce9eaaef5203ee2515676/Lore-Hex/QuillUI"
---

# QuillUI

QuillUI is an open-source compatibility layer for Apple Swift app source on
Linux desktops.

The public goal is **Apple Swift app compatibility with macOS-quality Linux
rendering**: rebuild SwiftUI/AppKit/SwiftData-shaped source for Linux, preserve
the app's familiar interaction model, and map platform services explicitly.
QuillUI is not an Apple platform clone, emulator, binary compatibility layer, or
replacement for Apple's frameworks on Apple platforms.

## Start Here

- **Porting a new upstream app to Linux? Read this first:** [docs/porting-upstream-apps.md](docs/porting-upstream-apps.md) — the field guide for *converting* real Apple/iOS app source (Enchanted, WireGuard, NetNewsWire, Ice Cubes, …): the iOS platform-pin myth, vendor-vs-reimpl strategy, the shim recipe, the Linux `FoundationNetworking` split, the qt-native build trap, and wiring real vendored types into the live app.
- **Reimplementing AppKit on Qt — architecture & hard-won lessons:** [docs/appkit-reimplementation.md](docs/appkit-reimplementation.md) is the orientation doc for running real macOS/AppKit apps on Linux: the strategy (reimplement the framework, apps are conformance tests; source-recompile…
