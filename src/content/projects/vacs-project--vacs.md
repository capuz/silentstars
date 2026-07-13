---
repo: "vacs-project/vacs"
name: "vacs"
description: "VATSIM ATC Communication System"
readmeQualityOk: true
url: "https://github.com/vacs-project/vacs"
homepage: "https://vacs.network"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 21]
topics: ["audio", "communication", "vatsim", "webrtc", "vacs"]
stars: 68
forks: 10
openIssues: 18
closedIssues: 149
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-05-30T13:04:03Z"
lastCommitAt: "2026-07-13T06:38:26Z"
lastReleaseAt: "2025-11-09T13:29:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 53
maintainers: ["dependabot[bot]", "IamLuisAUT", "MorpheusXAUT"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d5d67078071597e72533b606622cc4ca65d62dc5681e7c0f908cf32e0928e8/vacs-project/vacs"
discussionCount: 2
---

# vacs - VATSIM ATC Communication System

**vacs** <small>([/vɐks/](https://ipa-reader.com/?text=v%C9%90ks&voice=Brian))</small> is an open-source, cross-platform **Ground-To-Ground Voice Communication System for VATSIM**, meant to provide a seamless coordination experience for virtual air traffic controllers.

We aim to modernize VATSIM controller-to-controller coordination by providing a low-latency and easy-to-use voice communication system.

## Features

- High-quality, low-latency voice communication using [Opus codec](https://opus-codec.org/)
- Peer-to-peer audio streaming using [WebRTC](https://webrtc.org/) (no need for a centralized TeamSpeak/Discord or other voice server)
- Simple authentication using [VATSIM Connect](https://vatsim.dev/services/connect/) (no need to provide your VATSIM credentials)
- Cross-platform desktop client (Windows, Linux, macOS) using [Tauri](https://tauri.app/)
- UI/UX inspired by real-life equivalents
- (Partial) Integration with selected radio clients ([Audio For VATSIM](https://audio.vatsim.net/), [TrackAudio](https://github.com/pierr3/TrackAudio))

## Installation

As a controller, you can either download the latest version of the client for…
