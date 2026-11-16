---
repo: "NoName-Audio/player"
name: "player"
description: "Local-first music player with native playback, smart playlists, Soulseek search, and LAN sync."
readmeQualityOk: true
url: "https://github.com/NoName-Audio/player"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [48, 33]
topics: ["android", "desktop-app", "local-first", "music-player", "native-audio", "p2p", "soulseek", "tauri", "vue"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-29T20:36:11Z"
lastCommitAt: "2026-11-16T11:50:46Z"
lastReleaseAt: "2026-07-30T00:49:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 44
maintainers: ["verncat", "Nahida4479"]
openGraphImageUrl: "https://opengraph.githubassets.com/568e84cf914b9e3080a121c44c542b68d894deccc8530ec3f6b136b9d766f4f1/NoName-Audio/player"
---

# Player
  <img
    align="right"
    width="300"
    src="https://raw.githubusercontent.com/NoName-Audio/player/HEAD/public/zippi-sprites/zippi-introduce.webp"
    alt="Zippi"
  />

  Vue 3, TypeScript, Tauri 2, and Rust.</P>

It is designed for people who keep a real music library on **disk** and want **fast local playback**, **metadata editing**, **playlists**, cross-device **sync on a local network**, and a native-feeling app on both desktop and Android.

This project is not a cloud streaming service! The filesystem is the source of truth, the app database is a fast local index, and sync is optimized for peer-to-peer usage inside your own network.

## Download

  &nbsp;
  &nbsp;
  &nbsp;

## Overview

Player focuses on a few core jobs:

- Index a local music library and keep it in sync with the filesystem.
  Repeated scans preserve track IDs and only count newly discovered files as additions; unchanged audio and CUE albums are skipped.
- Play audio through a native Rust backend with low-latency controls.
- Browse by artist and album, and store and edit metadata, likes, history, and playlists.
- Build smart playlists from filter rules.
- Discover your other devices on the LAN,…
