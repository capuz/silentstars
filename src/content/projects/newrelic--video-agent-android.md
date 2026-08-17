---
repo: "newrelic/video-agent-android"
name: "video-agent-android"
description: "New Relic Video Agent for Android"
readmeQualityOk: true
url: "https://github.com/newrelic/video-agent-android"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["nrlabs", "newrelic-plugin", "android", "video", "nrlabs-odp"]
stars: 5
forks: 14
openIssues: 0
closedIssues: 9
watchers: 12
contributors: 42
recentReleases: 0
createdAt: "2018-09-18T09:57:27Z"
lastCommitAt: "2026-08-04T10:39:03Z"
lastReleaseAt: "2025-03-06T11:31:24Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 80
maintainers: ["skatti97", "rajeevkumar-nr", "ametku"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c547b0deb84e303cd3cff48f99d2146c56d3381e6d08ed0fcddd8b406840d24/newrelic/video-agent-android"
---

# New Relic Video Agent for Android

The New Relic Video Agent for Android provides comprehensive video analytics for Android applications using ExoPlayer (Media3). Track video events, monitor playback quality, identify errors, and gain deep insights into user engagement and performance — for both mobile and Android TV.

## Features

- **Automatic Event Detection** — Captures ExoPlayer lifecycle events automatically without manual instrumentation
- **QoE Metrics** — Quality of Experience aggregation for startup time, buffering ratio, bitrate, download throughput, rendition switches, pause time, and playback errors
- **Event Segregation** — Organized event types: `VideoAction`, `VideoAdAction`, `VideoErrorAction`, `VideoCustomAction`
- **IMA Ads Support** — Built-in Google IMA SDK ad tracking via dedicated ad tracker
- **Android TV Support** — Auto-detection of Android TV with optimized harvest cycles
- **Multi-Player Support** — Track multiple simultaneous video players in the same application
- **Easy Integration** — JitPack dependency or manual AAR/source import

## Table of Contents

- [Installation](#installation)
  - [Option 1: JitPack…
