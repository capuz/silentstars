---
repo: "nomadkaraoke/karaoke-gen"
name: "karaoke-gen"
description: "Generate karaoke videos, by downloading audio and lyrics, separating instrumentals, synchronising lyrics using transcription models, rendering CDG and uploading videos to YouTube / Dropbox / Google Drive"
readmeQualityOk: true
url: "https://github.com/nomadkaraoke/karaoke-gen"
homepage: "https://gen.nomadkaraoke.com"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [70, 22]
topics: ["karaoke", "karaoke-maker", "lyrics", "music", "video"]
stars: 147
forks: 52
openIssues: 11
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-10-05T05:24:39Z"
lastCommitAt: "2026-07-05T06:33:20Z"
lastReleaseAt: "2023-12-18T01:01:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 90
undervaluedScore: 45
maintainers: ["beveradb"]
openGraphImageUrl: "https://opengraph.githubassets.com/867f4849daaeb36775ebd277efd614ab26a6a5a1d1d3bfab0a0603e9f859d8a6/nomadkaraoke/karaoke-gen"
---

# Karaoke Generator 🎶 🎥 🚀

Generate professional karaoke videos with instrumental audio and synchronized lyrics. Available as a **local CLI** (`karaoke-gen`) or **cloud-based CLI** (`karaoke-gen-remote`) that offloads processing to Google Cloud.

## ✨ Two Ways to Generate Karaoke

### 1. Local CLI (`karaoke-gen`)
Run all processing locally on your machine. Requires GPU for optimal audio separation performance.

```bash
karaoke-gen "ABBA" "Waterloo"
```

### 2. Remote CLI (`karaoke-gen-remote`) 
Offload all processing to a cloud backend. No GPU required - just authenticate and submit jobs.

```bash
karaoke-gen-remote ./song.flac "ABBA" "Waterloo"
```

Both CLIs produce identical outputs: 4K karaoke videos, CDG+MP3 packages, audio stems, and more.

---

## 🎯 Features

### Core Pipeline
- **Audio Separation**: AI-powered vocal/instrumental separation using MDX and Demucs models
- **Lyrics Transcription**: Word-level timestamps via AudioShake API
- **Lyrics Correction**: Match transcription against online lyrics (Genius, Spotify, Musixmatch)
- **Human Review**: Interactive UI for correcting lyrics before final render
- **Video Rendering**: High-quality 4K karaoke videos with…
