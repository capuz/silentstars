---
repo: "alnitak/flutter_soloud"
name: "flutter_soloud"
description: "Flutter low-level audio plugin using SoLoud C++ library and FFI"
readmeQualityOk: true
url: "https://github.com/alnitak/flutter_soloud"
language: "C"
languages: ["C", "C++"]
languagePcts: [53, 30]
topics: ["audio", "audio-player", "audio-processing", "audio-visualizer", "dart-ffi", "flutter", "flutter-plugin", "miniaudio", "soloud"]
stars: 427
forks: 103
openIssues: 6
closedIssues: 325
watchers: 12
contributors: 40
recentReleases: 0
createdAt: "2023-07-08T17:20:26Z"
lastCommitAt: "2026-11-05T14:05:30Z"
lastReleaseAt: "2025-02-13T20:15:49Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 99
undervaluedScore: 38
maintainers: ["alnitak", "Colton127", "NomiAdam"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be4b49c3a5c8221b8ff01d0871099ab910a702925a0fee09b0b7374436a3362/alnitak/flutter_soloud"
fundingLinks: ["GITHUB:https://github.com/alnitak"]
discussionCount: 23
---

A low-level audio plugin for Flutter.

||Linux|Windows|Android|MacOS|iOS|Web|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|Support|💙|💙|💙|💙|💙|💙|
|Minimum Version|Any|Any|21+|10.15+|13.0+|iOS 16.4+</br>Safari 16.4+</br>Chrome 91+</br>Edge 91+</br>Firefox 89+</br>|

## Overview

A high-performance audio plugin designed primarily for games and immersive applications, providing low latency and advanced features.

## Key Features

- ⚡ Low latency, high performance audio
- ⏱️ Sample-accurate scheduled playback: `playClocked` for sub-millisecond spaced playback regardless of buffer size, and `playScheduled` for score/manifest-style scheduling of whole batches of sounds on the engine's own clock (with optional scheduled stop/fade). Perfect for metronomes, music sequencers, rhythm games and precisely timed audio cues
- 🎮 3D positional audio with Doppler effect
- 🔄 Gapless looping with half-open `[start, end)` loop regions
- 🔄 Stream audio with auto-pause for buffering, support for PCM, MP3, WAV, FLAC, Ogg (Opus, Vorbis, FLAC), AAC (ADTS), AC-3, and E-AC-3 (Note: MP4 and M4A are not supported for streaming)
- 📥 Pull-buffer streaming: the engine requests encoded data on demand (MP3, WAV, FLAC, Ogg…
