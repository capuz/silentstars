---
repo: "radiosilence/koan"
name: "koan"
description: "Bit-perfect terminal music player — SwiftUI/Ratatui, gapless playback, Subsonic/Navidrome streaming, spectrum analyzer, ReplayGain, lyrics, fb2k format strings. Pure Rust."
readmeQualityOk: true
url: "https://github.com/radiosilence/koan"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 6
forks: 0
openIssues: 40
closedIssues: 173
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T14:54:40Z"
lastCommitAt: "2026-10-06T10:42:19Z"
lastReleaseAt: "2026-03-06T10:40:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 56
maintainers: ["radiosilence"]
openGraphImageUrl: "https://opengraph.githubassets.com/de02b5257c06ffda48ba9a359bf975e1f4c5f797942fff73eae17c0a1c2e46b7/radiosilence/koan"
---

# kōan

A music player and server for your own library, local or on any OpenSubsonic server: native SwiftUI apps on macOS and iOS, a terminal UI on macOS and Linux, and a server with a web UI, on one Rust core. [koan.rocks](https://koan.rocks)

It's a music player and server, for local collections and remote ones (anything OpenSubsonic). Remote libraries sit behind a fairly aggressive local cache. It handles multi-terabyte libraries with ease and has all the core audio features you'd want, like gapless and bit-perfect output (where the system allows). It's built from 25 years of messing about with music, being annoyed with pretty much everything, and wanting my dream application.

The idea is to be fully compatible with the existing ecosystem while bringing the decent UX and modern ideas that professionally made streaming services have. It started as a little cross-platform CLI and TUI app on a Rust core. Now there's a native SwiftUI macOS app (no Electron) that links that core directly, an iOS app, a server, and an Apple TV app on TestFlight. The UX takes what I like about Apple Music and fb2k and fixes the things I thought were dumb. The point is to do the basics properly before…
