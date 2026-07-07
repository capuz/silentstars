---
repo: "ODSkyler/saavn-dl"
name: "saavn-dl"
description: "Simple frontend for downloading songs & albums from JioSaavn."
readmeQualityOk: true
url: "https://github.com/ODSkyler/saavn-dl"
homepage: "https://saavn-dl.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["jiosaavn", "jiosaavn-downloader", "music", "saavn", "saavn-downloader"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-13T10:06:05Z"
lastCommitAt: "2026-07-07T06:37:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 36
maintainers: ["ODSkyler"]
openGraphImageUrl: "https://opengraph.githubassets.com/1696829c4db1921c8e0af317ac908986da812a89795f50d1e714fdbe0dc6d271/ODSkyler/saavn-dl"
---

# saavn-dl

A modern JioSaavn songs & albums downloader and with ffmpeg powered metadata embedding.

Built with React, Vite and TypeScript.  
Designed with a premium glassmorphism-inspired UI.

---
## Preview

### Home

### Track

### Search

### Album search

### Album

### Download Menu

---

## Features

- 🔗 Paste any JioSaavn song/album URL or just search by track/album name
- 🎵 Built-in audio preview player
- 🎚️ Quality selector upto 320 kbps
- ⬇️ Download tracks & albums with embedded metadata
- ⚡ Direct download fallback if ffmpeg fails

---

## Stack

- React 18
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- CryptoJS
- ffmpeg.wasm

---

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Download Modes

| Mode | Description |
|------|-------------|
| ⚡ Fast | Direct download without metadata embedding |
| ✨ Enhanced | Downloads audio and embeds metadata using ffmpeg.wasm |
| 💿 Individual Files (Album) | Downloads all track as individual files |
| 📁 Zip File (Album) | Downloads all track and stores them in a zip folder |

---

## Search API

Search requests are powered by…
