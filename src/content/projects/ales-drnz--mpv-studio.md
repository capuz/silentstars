---
repo: "ales-drnz/mpv_studio"
name: "mpv_studio"
description: "MPV Studio is the standalone reference client for the mpv_audio_kit engine: a cross-platform audio player with a full DSP rack, real-time visualizers, Jellyfin, Plex and Samba streaming, and a built-in mpv command console."
readmeQualityOk: true
url: "https://github.com/ales-drnz/mpv_studio"
language: "Dart"
languages: ["Dart"]
languagePcts: [97]
topics: ["libmpv", "mpv", "jellyfin", "plex", "samba", "streaming"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T20:31:46Z"
lastCommitAt: "2026-11-15T11:17:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["ales-drnz"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3a290a8aadec172b6e841115667fcbe9d1dd1de510eec7f11354da1eff8f3f/ales-drnz/mpv_studio"
---

# MPV Studio

#### Cross-platform audio player built on mpv_audio_kit.

**[Try it in your browser](https://ales-drnz.github.io/mpv_studio/)**: the full app, with libmpv running as WebAssembly. Best in Chrome or Edge.

---

## Platforms

| Platform  | Minimum | Architectures |
| :--- | :--- | :--- |
| **Android** | 7.0 (SDK 24) | arm64-v8a, armeabi-v7a, x86_64 |
| **iOS** | 15.6 | arm64, x86_64 |
| **macOS** | 12.0 | arm64, x86_64 |
| **Windows**| 10 | arm64, x86_64 |
| **Linux** | glibc 2.31 (Ubuntu 20.04, Debian 11) | aarch64, x86_64 |
| **Web** | Chrome or Edge 137 (WebAssembly) | wasm32 |

In the browser a few things are not available:

- **Samba**: a web page cannot open an SMB connection.
- **`http://` addresses**: the HTTPS page blocks them as mixed content (only the machine itself is allowed: `localhost`, `127.0.0.1`, `::1`). Use the server's `https://` address.
- **Add folder**: pick or drop the files instead.

---

## Contents

- [Guide](#guide)
  - [1. Playback](#1-playback)
  - [2. Queue](#2-queue)
  - [3. Stream](#3-stream)
  - [4. Effects](#4-effects)
  - [5. Engine](#5-engine)
  - [6. Settings](#6-settings)
  - [7. Console](#7-console)
  - [8. Desktop and…
