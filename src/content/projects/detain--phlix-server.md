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
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T21:26:42Z"
lastCommitAt: "2026-11-04T08:05:35Z"
lastReleaseAt: "2026-05-20T02:00:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["detain"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bc7f414ee9cee72756889c7fc73bee2ae5249c55ec3af3942d2de30f414c613/detain/phlix-server"
---

# Phlix Media Server

Phlix is your own streaming service for the media you already own: it organizes your movies, shows, music, books and photos and plays them on every TV, phone and computer in the house — with watch parties for friends, kid-safe profiles, and cast-to-TV, all on hardware you control.

Under the hood it is a comprehensive media server platform built with PHP 8.3+, featuring real-time WebSocket communication, HTTP REST APIs, and support for multiple client platforms including Roku, Samsung Tizen, and Windows.

## Overview

Phlix Media Server provides a complete media management and streaming solution:

- **Media Library Management**: Organize and browse media collections with automatic scanning
- **User Authentication**: JWT-based auth with refresh tokens
- **Real-time SyncPlay**: Watch content together with friends
- **Live TV Support**: DVR and guide integration
- **Cast to TV**: Chromecast, AirPlay, Roku and DLNA renderers — per-protocol device discovery plus
  full transport control (play/pause/seek/stop), each gated by `CastingEnabledMiddleware` on its
  `casting.<protocol>.enabled` switch; triage in [A cast device is not found](#a-cast-device-is-not-found)
-…
