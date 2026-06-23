---
repo: "imbhargav5/open-recorder"
name: "open-recorder"
description: "37 MB open source ScreenStudio alternative. Tiny, powerful with incredible performance. Native Swift app. "
url: "https://github.com/imbhargav5/open-recorder"
homepage: "https://openrecorder.xyz"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["macos-app", "screen-recording"]
stars: 57
forks: 7
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2026-03-15T06:49:35Z"
lastCommitAt: "2026-06-23T23:29:41Z"
lastReleaseAt: "2026-03-24T10:09:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 36
maintainers: ["imbhargav5"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29ed59650831077497167b928932cfa8686a5c50be1d14584d3b5fb22a17ede/imbhargav5/open-recorder"
---

# Open Recorder

</p>

</p>

Open Recorder is now a macOS-only screen recorder, screenshot tool, and lightweight editor built as a native Swift app backed by a Rust service.

The product uses a small native stack: Swift owns the macOS experience, capture UI, recording controls, screenshot flow, playback, and Finder/privacy integrations. Rust owns durable local service work such as app paths, project metadata, recording registration, screenshot indexing, and export bookkeeping.

## Features

- Record a display, window, or interactive selected area on macOS
- Capture screenshots from displays, windows, or selected areas
- Choose microphone input, system audio, camera capture, cursor visibility, and click recording before capture
- Save recordings under `~/Movies/Open Recorder`
- Save screenshots under `~/Pictures/Open Recorder`
- Automatically create `.openrecorder` project metadata
- Browse projects in the native project library
- Preview recordings with the native AVKit player
- Export recordings through the Rust service
- Open Screen Recording privacy settings from inside the app

## Editor Capabilities

Open Recorder includes a native editor for turning raw captures into…
