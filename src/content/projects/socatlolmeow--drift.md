---
repo: "socatlolmeow/drift"
name: "drift"
description: "A minimal, reliable music player using Vim keybinds built in Rust. "
readmeQualityOk: true
url: "https://github.com/socatlolmeow/drift"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["music", "music-player", "rust", "vim", "mpv", "terminal", "tui", "tui-rs"]
stars: 108
forks: 10
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 4
recentReleases: 8
createdAt: "2026-10-09T14:03:08Z"
lastCommitAt: "2026-11-16T11:57:30Z"
lastReleaseAt: "2026-11-15T11:28:17Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 37
maintainers: ["socatlolmeow", "dependabot[bot]", "olivr2346"]
openGraphImageUrl: "https://opengraph.githubassets.com/2907d3d6758c546e4326879ad655a498dd747271685c41c50be3312ddd4a6be4/socatlolmeow/drift"
---

# Drift

### A YouTube Music player for your terminal, with Vim keybinds.

Search, queue and play music with no account, no login and no browser.

---

## Table of contents

- [Features](#features)
- [Installation](#installation)
  - [Arch Linux (AUR)](#arch-linux-aur)
  - [Install script](#install-script)
  - [From source](#from-source)
  - [Nix](#nix)
  - [Installing mpv and yt-dlp manually](#installing-mpv-and-yt-dlp-manually)
- [Usage](#usage)
- [Keybinds](#keybinds)
- [Commands](#commands)
- [Lyrics](#lyrics)
- [MPRIS and playerctl](#mpris-and-playerctl)
- [Configuration](#configuration)
  - [Streaming or downloading](#streaming-or-downloading)
  - [Discord rich presence](#discord-rich-presence)
  - [Custom keys](#custom-keys)
  - [Environment variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Vim-style keybinds: `j`/`k`, `gg`/`ge`, counts like `5j`, and `:` for the command line
- Synced lyrics in a side panel or fullscreen, with the current line filled in as it's sung, plus a cover art view with track details and progress
- Queue and playlists. Build a queue, save and reorder…
