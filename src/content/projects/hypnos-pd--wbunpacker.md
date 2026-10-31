---
repo: "Hypnos-PD/wbunpacker"
name: "wbunpacker"
description: "Shadowverse: Worlds Beyond resource unpacker"
readmeQualityOk: true
url: "https://github.com/Hypnos-PD/wbunpacker"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-15T15:49:44Z"
lastCommitAt: "2026-10-31T09:52:49Z"
lastReleaseAt: "2026-08-08T08:58:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 39
maintainers: ["Hypnos-PD"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ef53a23d1e169d775924a7156509db46b29303a5f9afb81d1abcdbc6d12550/Hypnos-PD/wbunpacker"
---

# wbunpacker (wbu)

[中文版](https://github.com/Hypnos-PD/wbunpacker/blob/HEAD/docs/README.zh-CN.md)

Asset extraction and unpacking tool for **Shadowverse: Worlds Beyond** — downloads, decrypts, parses, and exports game assets from the CDN.

## Features

- **Manifest** — Download and parse resource manifests; diff two versions to track asset changes
- **Asset** — Concurrent download, XOR decryption, and blob-storage deduplication of Unity AssetBundles
- **Master Data** — Export 173 MasterMemory tables to JSON; generate derived data (cards, packs, emblems, etc.)
- **Audio** — Extract Wwise WEM from AKPK containers, decode to WAV (vgmstream) and transcode to MP3 (ffmpeg); extract card and leader-skin voices
- **Texture** — Extract card art (848×1024), card backs / sleeves (764×1024), pack icons, card frames, crests, emblems, stamps, and home-illustration pictures; render full card images from layers
- **Spine Animations** — Extract HomeIllustration and LeaderSkin Spine skeletons, atlases, and textures
- **MetaDB** — Decrypt the client `meta.db` (SQLite3MC) via dynamic DLL loading

## Requirements

- **Rust** nightly (edition 2024)
-…
