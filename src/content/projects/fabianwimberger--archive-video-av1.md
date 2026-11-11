---
repo: "fabianwimberger/archive-video-av1"
name: "archive-video-av1"
description: "Web UI for AV1 video conversion with PGO-optimized FFmpeg. Real-time progress, batch processing."
readmeQualityOk: true
url: "https://github.com/fabianwimberger/archive-video-av1"
language: "Python"
languages: ["Python"]
languagePcts: [61]
topics: ["av1", "docker", "ffmpeg", "opus", "svt-av1", "video-converter", "video-encoding", "self-hosted"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-13T15:43:56Z"
lastCommitAt: "2026-11-11T19:45:04Z"
lastReleaseAt: "2026-07-31T16:20:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["fabianwimberger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0621ec0ff6bb5a9ca5a1228504094e0543e9e2dc24d471b90b0b8afbdb227ba1/fabianwimberger/archive-video-av1"
---

# Video Conversion Service

A self-hosted, web-based video conversion service running in Docker. Converts video files to AV1 (via SVT-AV1) with real-time progress tracking, batch processing, and a browser UI.

## Background

AV1 saves 30-50% on file size versus H.264, but encoding is slow and most tools are CLI-only. This runs SVT-AV1 behind a browser UI so batch jobs can be queued, watched, and retried without shell access. Presets cover live-action, animated, and grainy sources.

| Desktop | Mobile |
|---------|--------|
| <img src="assets/screenshot-desktop.png" alt="Desktop web UI" width="720"> | <img src="assets/screenshot-mobile.png" alt="Mobile web UI" width="260"> |

## Features

- **Responsive web UI** with file browsing, queue controls, history filters, and real-time progress via WebSocket
- **AV1 encoding** using SVT-AV1 with FFmpeg (the pre-built image is a generic, portable build; source builds can enable PGO and `-march=native`)
- **Batch processing** with sequential job queue
- **Distributed processing** with opt-in LAN peer discovery and remote job delegation
- **Persistent** — conversion history, custom presets, and queue state survive restarts
- **Conversion…
