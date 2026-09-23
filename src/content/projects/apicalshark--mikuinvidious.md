---
repo: "apicalshark/mikuinvidious"
name: "mikuinvidious"
description: "Alternative frontend of bilibili"
readmeQualityOk: true
url: "https://github.com/apicalshark/mikuinvidious"
homepage: "https://mikuinv.apicalshark.dedyn.io/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [57, 26]
topics: ["alternative-frontend", "bilibili", "bilibili-live", "alternative-frontends", "python3", "quart", "granian", "self-hosted", "video-streaming"]
stars: 12
forks: 1
openIssues: 3
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-26T05:41:31Z"
lastCommitAt: "2026-09-23T08:46:10Z"
lastReleaseAt: "2026-01-09T12:42:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["apicalshark", "dependabot[bot]", "KTachibanaM"]
openGraphImageUrl: "https://opengraph.githubassets.com/093d2b41bc711e4c1268e5c89d04f867812775a5d04511dbecfaa4f8d902afd7/apicalshark/mikuinvidious"
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

For users who want to run the application manually, see the [local installation guide](https://github.com/apicalshark/mikuinvidious/blob/HEAD/doc/setup.md). This project uses `uv` for dependency management.

## Tech Stack

-…
