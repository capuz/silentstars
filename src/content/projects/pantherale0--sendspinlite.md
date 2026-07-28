---
repo: "pantherale0/sendspinlite"
name: "sendspinlite"
description: "A lite sendspin client for Android"
readmeQualityOk: true
url: "https://github.com/pantherale0/sendspinlite"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [89]
stars: 7
forks: 0
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-03T20:57:58Z"
lastCommitAt: "2026-07-28T14:55:49Z"
lastReleaseAt: "2026-03-04T12:02:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["pantherale0", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/15474f583463f2749e9113574912025309a22116d617334647af777135b5641f/pantherale0/sendspinlite"
---

# Sendspin Android Player

A basic Android client for [Sendspin](https://github.com/sendspin) that provides synchronized network audio playback. It connects to a Sendspin-compatible server (e.g., Home Assistant) over WebSocket, receives timestamped PCM audio frames, performs clock synchronization and jitter buffering, and plays audio in tight sync with other devices.

This project is specially designed for low memory devices and a local network connection only. Connections via cellular will not be supported. The client is designed to offer only a Sendspin player.

## Features

### Core Playback
- **Synchronized audio playback across network devices**
  - Server-client clock alignment with drift estimation and real-time correction
  - Timestamp-based playout with adjustable real-time offset for fine-tuning sync
  - RTT-based network latency measurement
  - Adaptive jitter buffering with late-frame detection and dropping
  - Startup and restart catch-up logic to prevent buffer deadlock

### Audio Codec Support
- **PCM playback**
  - Support for 16-bit, 24-bit, and 32-bit PCM output
  - Configurable sample rates and channel counts

### Discovery & Connection
- **Automatic server…
