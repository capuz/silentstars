---
repo: "vacs-project/vacs"
name: "vacs"
description: "VATSIM ATC Communication System"
readmeQualityOk: true
url: "https://github.com/vacs-project/vacs"
homepage: "https://vacs.network"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 20]
topics: ["audio", "communication", "vatsim", "webrtc", "vacs"]
stars: 68
forks: 10
openIssues: 9
closedIssues: 161
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-05-30T13:04:03Z"
lastCommitAt: "2026-08-09T04:45:39Z"
lastReleaseAt: "2025-11-09T13:29:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 54
maintainers: ["dependabot[bot]", "MorpheusXAUT", "IamLuisAUT"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfb1c7fa45af45b225ec6479fdb506cf254572907148a8ff06c349b918089be7/vacs-project/vacs"
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
