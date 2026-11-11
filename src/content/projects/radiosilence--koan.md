---
repo: "radiosilence/koan"
name: "koan"
description: "Bit-perfect terminal music player — SwiftUI/Ratatui, gapless playback, Subsonic/Navidrome streaming, spectrum analyzer, ReplayGain, lyrics, fb2k format strings. Pure Rust."
readmeQualityOk: true
url: "https://github.com/radiosilence/koan"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 18
forks: 1
openIssues: 45
closedIssues: 517
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T14:54:40Z"
lastCommitAt: "2026-11-11T19:33:50Z"
lastReleaseAt: "2026-03-06T10:40:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 54
maintainers: ["radiosilence", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7fd21cc140b0498c5e92ad8473f4529aa106ee128c1a74c31ae0af65aa3c80/radiosilence/koan"
---

# kōan

A music player and server for your own library, local or on any OpenSubsonic server: a desktop app on macOS and Linux, the same GPUI app on iOS, a SwiftUI app on Apple TV, a Compose app on Android, a terminal UI on macOS (Apple silicon) and Linux, and a server with a web UI, on one Rust core. [koan.rocks](https://koan.rocks)

It's a music player and server, for local collections and remote ones (anything OpenSubsonic). Remote libraries sit behind a fairly aggressive local cache. It handles multi-terabyte libraries with ease and has all the core audio features you'd want, like gapless and bit-perfect output (where the system allows). It's built from 25 years of messing about with music, being annoyed with pretty much everything, and wanting my dream application.

The idea is to be fully compatible with the existing ecosystem while bringing the decent UX and modern ideas that professionally made streaming services have. It started as a little cross-platform CLI and TUI app on a Rust core. Now there's a native desktop app for macOS and Linux (no Electron) that links that core directly, the same app on iPhone, a SwiftUI app for Apple TV, an Android app, and a server. The UX…
