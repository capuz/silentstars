---
repo: "radiosilence/koan"
name: "koan"
description: "Bit-perfect terminal music player — SwiftUI/Ratatui, gapless playback, Subsonic/Navidrome streaming, spectrum analyzer, ReplayGain, lyrics, fb2k format strings. Pure Rust."
readmeQualityOk: true
url: "https://github.com/radiosilence/koan"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
stars: 15
forks: 1
openIssues: 36
closedIssues: 357
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T14:54:40Z"
lastCommitAt: "2026-10-31T09:54:04Z"
lastReleaseAt: "2026-03-06T10:40:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 54
maintainers: ["radiosilence", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1d44af574e0836de0e97c49ecaa86c9ae24e41c0bb6e55c0b842b14b1dcf893/radiosilence/koan"
---

# kōan

A music player and server for your own library, local or on any OpenSubsonic server: native SwiftUI apps on macOS, iOS and Apple TV, a Compose app on Android, a terminal UI on macOS (Apple silicon) and Linux, and a server with a web UI, on one Rust core. [koan.rocks](https://koan.rocks)

It's a music player and server, for local collections and remote ones (anything OpenSubsonic). Remote libraries sit behind a fairly aggressive local cache. It handles multi-terabyte libraries with ease and has all the core audio features you'd want, like gapless and bit-perfect output (where the system allows). It's built from 25 years of messing about with music, being annoyed with pretty much everything, and wanting my dream application.

The idea is to be fully compatible with the existing ecosystem while bringing the decent UX and modern ideas that professionally made streaming services have. It started as a little cross-platform CLI and TUI app on a Rust core. Now there's a native SwiftUI macOS app (no Electron) that links that core directly, an iOS app, a server, and an Apple TV app on TestFlight. The UX takes what I like about Apple Music and fb2k and fixes the things I thought were…
