---
repo: "UR91K/seula"
name: "seula"
description: "Desktop app for organising your Ableton Live projects. Scans your sets into a searchable library with tags, collections, to-do lists, and plugin + sample tracking."
readmeQualityOk: true
url: "https://github.com/UR91K/seula"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["ableton-live", "audio-tools", "database", "daw", "file-management", "music-software", "project-management", "rust", "sample-management", "vst-plugins"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2023-08-31T07:42:29Z"
lastCommitAt: "2026-10-12T11:13:49Z"
lastReleaseAt: "2026-10-12T11:16:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 73
maintainers: ["UR91K"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0132d0164055a3a5a7585c5219f409be654d312f5abb003ec469d47bdc210a6/UR91K/seula"
---

# Seula

An Ableton Live project manager. Seula scans your `.als` files, pulls out their metadata
into a local SQLite database, and lets you search, tag and organise them.

Seula is made of three parts:

- **A background service** that runs in the system tray. It owns the database, watches
  your project folders and serves a local HTTP API.
- **A desktop app**, opened from the tray or a shortcut. It is in development; see
  [docs/architecture/frontend.md](https://github.com/UR91K/seula/blob/HEAD/docs/architecture/frontend.md).
- **A command-line client**, a small program on your `PATH`, for terminals, scripts and
  AI agents. It talks to the same background service.

The service is the only part that touches your data. The app and the command-line
client both go through it, so you can open, close or call them whenever you like.

Windows-first: macOS and Linux support is planned, paths exist but are currently
untested.

## What it does

- **Parses Ableton Live sets fast.** A single-pass parser runs at about 160–270 MB/s. A
  cold scan of 3,570 projects takes about 90 s, and a warm rescan about 4 s.
- **Extracts per project:** tempo, key and scale, time signature, length, Live…
