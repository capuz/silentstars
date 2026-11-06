---
repo: "mtxmiller/LyrPlay"
name: "LyrPlay"
description: "Squeezebox player for iOS with native FLAC support and Material web interface integration"
readmeQualityOk: true
url: "https://github.com/mtxmiller/LyrPlay"
language: "Swift"
languages: ["Swift"]
languagePcts: [90]
topics: ["audio", "flac", "ios", "lms", "music-player", "squeezebox", "streaming", "swift", "swiftui"]
stars: 45
forks: 6
openIssues: 6
closedIssues: 73
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2025-07-25T19:19:01Z"
lastCommitAt: "2026-11-06T11:23:07Z"
lastReleaseAt: "2026-10-28T22:17:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 58
maintainers: ["mtxmiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/c431ea74ecce95d2a0dd9bf7916efaa386f77c5f4d6f1557eb7cd027ed5e3204/mtxmiller/LyrPlay"
fundingLinks: ["GITHUB:https://github.com/mtxmiller"]
---

# LyrPlay

A Squeezebox player that turns your iPhone, iPad or Apple TV into a high-quality network audio player for Lyrion Media Server (LMS).

---

## Features

- **Gapless Playback** - True gapless transitions between tracks using BASS push streams
- **Native FLAC / Opus Support** - High-quality lossless or efficiently compressed audio streaming with native decoding
- **Material Web Interface** - Embedded Material skin for full LMS control
- **Background Audio** - Continuous playback with lock screen integration and position recovery
- **Keep Playing Offline** *(1.7.9)* - Saves the next songs in your queue on the phone and plays them from there, so music keeps going through dead spots and the server picks up where you are. Settings → Offline: Off, On Wi-Fi or Always, with Download Ahead up to 120 minutes. Library music only, not radio
- **Rides Out Network Drops** *(1.7.9)* - A short drop no longer restarts the song; on a slow link the stream rebuffers instead of chopping, and saved-song downloads wait while the stream catches up
- **Interruption Handling** - Smart pause/resume for phone calls and other app interruptions
- **Server Discovery** - Automatic LMS server detection…
