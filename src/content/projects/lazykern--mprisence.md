---
repo: "lazykern/mprisence"
name: "mprisence"
description: "A Discord Rich Presence for MPRIS media players and web players"
readmeQualityOk: true
url: "https://github.com/lazykern/mprisence"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["discord", "mpris", "rich-presence", "discord-rich-presence", "rust"]
stars: 155
forks: 15
openIssues: 5
closedIssues: 63
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2023-06-24T17:36:10Z"
lastCommitAt: "2026-11-04T13:06:30Z"
lastReleaseAt: "2024-07-10T07:36:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 43
maintainers: ["lazykern", "narukoshin", "surgeryp0st"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a2cf1987329e22b08d6d341caa0ef289ce519080481b7999a1e53b0d99f940e/lazykern/mprisence"
---

# mprisence

**Discord Rich Presence for Linux media players**

[Overview](#overview) • [Supported players](#supported-players) • [Quick start](#quick-start) • [Configuration](#configuration) • [Web players](#web-players) • [Development](#development) • [Troubleshooting](#troubleshooting)

Reads MPRIS metadata over D-Bus → renders Discord Rich Presence → syncs with current media.

Works with **VLC, MPV, Rhythmbox, Strawberry, CMUS, MPD, [and more](#supported-players)**. Has a [browser bridge](#web-players) for web players (YouTube Music, SoundCloud, etc.) when browser MPRIS is not enough.

## Overview

### How it works

```text
local player or browser tab
  → MPRIS metadata on D-Bus
  → mprisence
  → Discord Rich Presence
```

Browser bridge path (optional - see [Web players](#web-players)):

```text
supported website
  → browser extension
  → MPRIS bridge (native host)
  → mprisence
  → Discord Rich Presence
```

### Highlights

- No config required for common local-player setups
- Handlebars templates for title, artist, album, player name, status, duration, IDs, and more
- Per-player and per-site overrides for app ID, icon, activity type, streaming policy, and status text
-…
