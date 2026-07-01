---
repo: "apicalshark/mikuinvidious"
name: "mikuinvidious"
description: "Alternative frontend of bilibili"
url: "https://github.com/apicalshark/mikuinvidious"
homepage: "https://mikuinv.apicalshark.dedyn.io/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [46, 35]
topics: ["alternative-frontend", "bilibili", "bilibili-live", "alternative-frontends", "python3", "quart", "granian", "self-hosted", "video-streaming"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-26T05:41:31Z"
lastCommitAt: "2026-07-01T07:06:23Z"
lastReleaseAt: "2026-01-09T12:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["apicalshark", "dependabot[bot]", "KTachibanaM"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9eba271ebf0ed6facbf451ed58f6816bd01a2739dd0f04852e13c7fc6b4a6a1/apicalshark/mikuinvidious"
discussionCount: 1
---

# MikuInvidious

A free as in freedom frontend for Bilibili.

This is an opinionated fork of [0xacab.org/johnxina/mikuinvidious](https://0xacab.org/johnxina/mikuinvidious) plus AI slop.

## Application Features

- **Media Playback**: Support for DASH/FLV, danmaku, and multi-part videos.
- **Listen Mode**: Bandwidth-saving audio-only interface for any video.
- **Live Streaming**: Stable proxying with heartbeats and real-time SSE chat.
- **Content Discovery**: Proxied articles (cv/opus) and global search with filters.
- **Privacy**: No-account browsing, IP masking via media proxying, and zero tracking.

## Quick Start (Docker)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/apicalshark/mikuinvidious
   cd mikuinvidious
   ```

2. **Run with Docker Compose:**

   ```bash
   cp Caddyfile.example Caddyfile
   docker compose up -d
   ```

The application will be available at `http://localhost:8000`.

### Local Installation (Without Docker)

For users who want to run the application manually, see the [local installation guide](doc/setup.md). This project uses `uv` for dependency management.

## Tech Stack

- **Backend**: Python 3.14+, Quart (ASGI)
- **Server**:…
