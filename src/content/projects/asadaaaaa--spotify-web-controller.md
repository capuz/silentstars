---
repo: "Asadaaaaa/Spotify-Web-Controller"
name: "Spotify-Web-Controller"
description: "A web controller for Spotify Desktop powered by a Spicetify extension."
readmeQualityOk: true
url: "https://github.com/Asadaaaaa/Spotify-Web-Controller"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T09:27:53Z"
lastCommitAt: "2026-07-06T07:04:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 59
maintainers: ["Asadaaaaa", "ahlamls"]
openGraphImageUrl: "https://opengraph.githubassets.com/09d9450a128d2b7e8b489ed6870f5641b620ced07f3b70909eef2c2086c65351/Asadaaaaa/Spotify-Web-Controller"
---

# Spotify Web Controller

A local web controller for Spotify Desktop powered by a Spicetify extension. Control playback, queue, search, and view lyrics on any device in your local network.

## Features

- **Remote Playback:** Control play, pause, skip, volume, shuffle, repeat, and seek.
- **Search & Queue:** Search Spotify tracks and manage the play queue (with drag-and-drop).
- **Lyrics:** Synced lyrics view with cached lookup.
- **Responsive Design:** Premium mobile-friendly UI.

## Requirements

- Node.js (v18+)
- Spotify Desktop
- [Spicetify](https://spicetify.app/) installed and configured

## Getting Started

1. **Install dependencies:**
   ```bash
   cd web-controller
   npm install
   ```

2. **Run the controller:**
   From the project root:
   ```bash
   node index.js
   ```
   *This automatically registers the extension with Spicetify and starts the local server.*

3. **Access the Web UI:**
   Open `http://localhost:8080` on your desktop, or use the local network IP printed in the console to open it from your phone.

## Troubleshooting

- **Spotify shows offline:** Ensure Spotify Desktop is running and you have run the start command (`node index.js`) which applies the…
