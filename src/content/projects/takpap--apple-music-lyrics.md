---
repo: "Takpap/apple-music-lyrics"
name: "apple-music-lyrics"
description: "Native macOS menu bar karaoke lyrics powered by Apple Music's local TTML cache"
readmeQualityOk: true
url: "https://github.com/Takpap/apple-music-lyrics"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["appkit", "apple-music", "karaoke", "lyrics", "macos", "menu-bar", "swift"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-14T18:45:34Z"
lastCommitAt: "2026-07-28T14:59:59Z"
lastReleaseAt: "2026-07-28T15:01:52Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 44
maintainers: ["Takpap"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef7aa83ea01119064173a883586b9451014a2adc76b21fce64cfd2a515d1677c/Takpap/apple-music-lyrics"
---

# Apple Music Lyrics

[English](https://github.com/Takpap/apple-music-lyrics/blob/HEAD/README.md) | [简体中文](https://github.com/Takpap/apple-music-lyrics/blob/HEAD/README.zh-CN.md)

An unofficial macOS menu bar app that displays synchronized lyrics for the
current track in Music.app. It reads Apple Music's existing on-disk cache and
does not contact a third-party lyrics service.

## Demo

https://github.com/user-attachments/assets/0540ded7-f40e-46ad-a44f-2382c24b169a

> [!IMPORTANT]
> This project relies on a private Music.app cache format. It can stop working
> after a macOS update and is not suitable for App Store distribution without
> replacing the data source.

## Features

- Native AppKit menu bar app with no Dock icon
- Word-timed karaoke highlighting from Apple Music TTML
- Smooth 60 fps status bar highlighting between playback samples
- Adaptive status bar width for MacBooks and notched displays
- Long lines scroll inside the status item instead of hiding other menu bar icons
- Always-on-top floating lyrics panel with animated line changes
- Immersive and compact desktop floating-lyrics modes
- Hover controls with window locking, click-through, and Option-key temporary…
