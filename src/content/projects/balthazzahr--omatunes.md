---
repo: "Balthazzahr/omatunes"
name: "omatunes"
description: "A lightweight, local-only offline music player built in Rust. Designed specifically for seamless integration with Hyprland and the Omarchy configuration, it delivers fast, minimal, and resource-efficient audio playback directly from your local library without any external dependencies."
readmeQualityOk: true
url: "https://github.com/Balthazzahr/omatunes"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 37
forks: 5
openIssues: 3
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-14T05:11:27Z"
lastCommitAt: "2026-07-13T06:38:15Z"
lastReleaseAt: "2026-07-04T03:43:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 45
maintainers: ["Balthazzahr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e5c24cfe7f08a0e8a45712a261790fbc2e7f7ff445a4f399ed0e000b8d2f7d/Balthazzahr/omatunes"
---

</p>

# omaTUNES

omaTUNES is a native Wayland music player and library manager built in Rust for Hyprland and Omarchy systems. omaTUNES is built to be as lightweight as possible while matching Omarchy's opinionated UI style — it picks up your system theme automatically, so your player always matches the rest of your desktop. omaTUNES is 100% offline, has wide support for most popular music codecs, and is designed to manage very large libraries with robust playlist and library management tools.

`omatunes` is a customized fork of [sheep-farm/lavanda](https://github.com/sheep-farm/lavanda) by [Balthazzahr](https://github.com/Balthazzahr).

</p>

---

## Key Features

- **Wide Format Support.** MP3, FLAC, OGG, Opus, WAV, AAC, M4A, AIFF — all decoded natively through [Symphonia](https://github.com/pdeljanov/Symphonia), no plugins or codecs to hunt down.
- **Fully Offline & Private.** No telemetry, no accounts, no internet requirement to play a song. Your play counts, likes, and playlists live in one plain JSON file on disk, fully yours.
- **Smart Playlists.** Build iTunes-style rule-based playlists — mix criteria like artist, genre, play count, liked status, or "last played within 2…
