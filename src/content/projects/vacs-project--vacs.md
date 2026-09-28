---
repo: "vacs-project/vacs"
name: "vacs"
description: "VATSIM ATC Communication System"
readmeQualityOk: true
url: "https://github.com/vacs-project/vacs"
homepage: "https://vacs.network"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [69, 30]
topics: ["audio", "communication", "vatsim", "webrtc", "vacs"]
stars: 69
forks: 11
openIssues: 12
closedIssues: 166
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-05-30T13:04:03Z"
lastCommitAt: "2026-09-28T10:06:03Z"
lastReleaseAt: "2025-11-09T13:29:23Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 98
undervaluedScore: 53
maintainers: ["dependabot[bot]", "MorpheusXAUT", "vacs-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14925f772ff604ec4ecef605bf16fb1325c7a7ef99353c7d526ae478b5054591/vacs-project/vacs"
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
