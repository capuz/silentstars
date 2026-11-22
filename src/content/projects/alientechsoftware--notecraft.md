---
repo: "AlienTechSoftware/notecraft"
name: "notecraft"
description: "Note taking and organization; an open-source, clean-room reimplementation of Microsoft OneNote, rebuilt in pure Rust"
readmeQualityOk: true
url: "https://github.com/AlienTechSoftware/notecraft"
homepage: "https://notecraft.cloud/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["artcraft", "notecraft", "productivity", "vibecoding", "onenote", "note", "notes", "office", "python", "rust"]
stars: 214
forks: 26
openIssues: 39
closedIssues: 162
watchers: 1
contributors: 14
recentReleases: 10
createdAt: "2026-10-17T18:30:53Z"
lastCommitAt: "2026-11-22T01:56:12Z"
lastReleaseAt: "2026-11-13T15:00:23Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 96
undervaluedScore: 33
maintainers: ["alientechsw", "leifrossau", "mameen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1423627652/658ab523-7e56-4207-8db3-80712a50897d"
fundingLinks: ["GITHUB:https://github.com/AlienTechSoftware"]
discussionCount: 0
---

NoteCraft is an open-source, clean-room recreation of the OneNote notebook experience. It keeps notebooks, sections, pages, pictures and attachments as ordinary folders and files on your device. You can choose how to sync and back them up, using tools you already trust, without a NoteCraft server or account.

## A tour

Optional local dictation is available with `cargo build -p notecraft --features voice`.
Use your own whisper-cli/model, review the transcript, then Insert with normal Undo
and autosave. See [dictation setup and limits](https://github.com/AlienTechSoftware/notecraft/blob/HEAD/docs/how-to/dictate.md).
The feature is disabled by default. Hardware/model and Windows/macOS voice acceptance
remain unverified.

Every picture below is NoteCraft itself, drawn off screen by its own test harness
(`cargo xtask screenshots`), not a mock-up.
