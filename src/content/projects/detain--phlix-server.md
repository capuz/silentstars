---
repo: "detain/phlix-server"
name: "phlix-server"
description: "Self-hosted media server in PHP 8 / Workerman. HLS+DASH, hardware transcoding, live TV, SyncPlay, plugins. A Plex/Jellyfin alternative."
readmeQualityOk: true
url: "https://github.com/detain/phlix-server"
homepage: "https://phlex.media"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["dlna", "dvr", "emby", "ffmpeg", "hls", "home-theater", "jellyfin", "live-tv", "media-library", "media-server"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T21:26:42Z"
lastCommitAt: "2026-10-29T21:23:41Z"
lastReleaseAt: "2026-05-20T02:00:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["detain"]
openGraphImageUrl: "https://opengraph.githubassets.com/54dd9a92461a95f5570e81a610e1ad85fe3a8e227128e1d8356e2518953eb3a4/detain/phlix-server"
---

# Phlix Media Server

A comprehensive media server platform built with PHP 8.3+, featuring real-time WebSocket communication, HTTP REST APIs, and support for multiple client platforms including Roku, Samsung Tizen, and Windows.

> **Repository moved 2026-05-17:** this codebase migrated from `github.com/detain/phlix` to [`github.com/detain/phlix-server`](https://github.com/detain/phlix-server) as part of the Phase B repo split. Update existing local clones with `git remote set-url origin git@github.com:detain/phlix-server.git`. The old repo is being archived in step B.4b.

## Overview

Phlix Media Server provides a complete media management and streaming solution:

- **Media Library Management**: Organize and browse media collections with automatic scanning
- **User Authentication**: JWT-based auth with refresh tokens
- **Real-time SyncPlay**: Watch content together with friends
- **Live TV Support**: DVR and guide integration
- **DLNA Streaming**: Standard protocol support for compatible devices
- **Transcoding**: On-the-fly media conversion via FFmpeg with automatic quality selection
- **HLS Streaming**: Adaptive bitrate streaming for web clients with multi-quality playlists.…
