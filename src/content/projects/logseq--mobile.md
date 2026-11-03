---
repo: "logseq/mobile"
name: "mobile"
description: "Logseq mobile v2"
readmeQualityOk: true
url: "https://github.com/logseq/mobile"
language: "OCaml"
languages: ["OCaml", "Swift"]
languagePcts: [61, 22]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-08-14T08:26:59Z"
lastCommitAt: "2026-11-03T11:15:13Z"
lastReleaseAt: "2026-10-25T13:17:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 46
maintainers: ["tiensonqin"]
openGraphImageUrl: "https://opengraph.githubassets.com/8addb5ec98650c389cf1e0a2633e6d5ecabbb44f303fc11bea27ee2a583131ad/logseq/mobile"
---

# Logseq

Logseq is a native SwiftUI app for iOS and a Kotlin/Jetpack Compose
app for Android. Both clients share an OCaml application model and core, backed by
the OCaml DataScript library and the lui reactive UI layer.

iOS and Android share the app version in `version.xcconfig`. Android builds,
the iOS build scripts, and the TestFlight lane embed the mobile repository's
current Git commit as the settings revision.

PDF assets open full-screen in narrow windows and beside the main editor in
wide windows, with a control to switch modes. The viewer uses PDFKit on iOS/iPadOS
and AndroidX PDF Viewer on Android. Highlights are stored as Logseq `Pdf-annotation`
blocks in the graph and use the normal offline persistence and sync queue; the
original PDF stays unchanged.

Shared core sources live in `shared/src/logseq/core`, with executable entry points
in `shared/src/logseq/entry`. The `shared/native` directory contains Dune configuration and
native platform bridges; generated OCaml stays under `_build`. Core tests live
in `shared/test/logseq`, one alcotest suite per core module. The core test gate also builds the seed and live-sync executables.

Natural-language dates use chrono-node's…
