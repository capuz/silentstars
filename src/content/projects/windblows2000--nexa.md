---
repo: "Windblows2000/Nexa"
name: "Nexa"
description: "a powerful, rust-based CLI Linux tool for your media needs."
readmeQualityOk: true
url: "https://github.com/Windblows2000/Nexa"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "mpris", "rust", "linux", "terminal", "waybar"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-12-18T20:04:22Z"
lastCommitAt: "2026-10-24T08:20:15Z"
lastReleaseAt: "2026-08-27T08:13:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 63
maintainers: ["Windblows2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e3591dc2620865af44a0028462466c2d5dcdccfb8d8ccc428574142c64ebe5f/Windblows2000/Nexa"
---

### Nexa
---------------------------------------------

### Description

A modern media controller written in Rust. Nexa works with any MPRIS-compatible media player (Spotify, MPV, Firefox, Chromium, etc.). This project was born out of the desire for a "better" media controller. Especially in window managers where your only option is [Playerctl](https://github.com/altdesktop/playerctl).

## Features
- **Blazingly fast** — Daemon + CLI design for maximum speed.
- **Event-driven** — Subscribes to daemon signals instead of polling for metadata updates.
- **Real-time progress** — Efficient local ticker provides smooth, accurate playback progress.
- **Integrated album art caching** — A single command exposes a stable local path to album art / thumbnails.
- **Structured output** — Supports JSON (default), TOML, and template-based text output via `--format`.

## Examples
  ```bash
  nexa follow --toml #Prints out metadata in TOML
  nexa command volume --set 0.60 #Sets audio to 60%
  nexa command play-pause #Play/Pause the media
  nexa metadata # Prints out metadata in JSON
  nexa metadata --format '{artist} - {title}' #Playerctl-like output
  nexad #Starts the daemon.
  ```

## CLI…
