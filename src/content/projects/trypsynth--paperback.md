---
repo: "trypsynth/paperback"
name: "paperback"
description: "An accessible, light-weight, cross-platform ebook and document reader."
readmeQualityOk: true
url: "https://github.com/trypsynth/paperback"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["accessibility", "blind", "cpp", "document", "ebook", "macos", "reader", "windows", "wwxwidgets"]
stars: 127
forks: 42
openIssues: 18
closedIssues: 415
watchers: 10
contributors: 29
recentReleases: 0
createdAt: "2025-05-19T15:47:38Z"
lastCommitAt: "2026-11-04T11:27:37Z"
lastReleaseAt: "2025-11-15T23:35:17Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 99
undervaluedScore: 47
maintainers: ["trypsynth", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cdd471d7303d9acdfde1cde38b49398f84e84e1b19b9d67a212ae23d675b402/trypsynth/paperback"
fundingLinks: ["GITHUB:https://github.com/trypsynth", "CUSTOM:https://paypal.me/tygillespie05"]
discussionCount: 63
---

# Paperback

[Paperback](https://paperback.dev) is an accessible reader for ebooks, documents, and audiobooks, designed for screen reader users first. It runs on Windows, macOS, Linux, iOS, and Android, with all five apps sharing one reading engine written in Rust.

This file is for people who work on Paperback. To use it, see the [user guide](https://github.com/trypsynth/paperback/blob/HEAD/doc/readme.md) or download it from [paperback.dev](https://paperback.dev). To contribute, see [CONTRIBUTING.md](https://github.com/trypsynth/paperback/blob/HEAD/CONTRIBUTING.md).

## Repository layout

| Path | Contents |
|---|---|
| `crates/paperback-core` | The reading engine: the parsers, the document model, navigation, and settings. The mobile apps call it through [UniFFI](https://mozilla.github.io/uniffi-rs/). |
| `crates/paperback` | The desktop app, built on wxWidgets through [wxDragon](https://github.com/AllenDang/wxDragon). |
| `crates/paperback-formats` | Format names and file extensions, shared by the parsers and the packaging code. |
| `crates/pb` | The `pb` command-line converter. |
| `crates/xtask` | Build, release, and translation tasks. |
| `ios/` | The iOS app, written in…
