---
repo: "nextcloud/whiteboard"
name: "whiteboard"
description: "Create & collaborate on an infinite canvas!"
readmeQualityOk: true
url: "https://github.com/nextcloud/whiteboard"
homepage: "https://apps.nextcloud.com/apps/whiteboard"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [51, 31]
topics: ["nextcloud", "nextcloud-app", "whiteboard"]
stars: 214
forks: 39
openIssues: 139
closedIssues: 208
watchers: 8
contributors: 263
recentReleases: 0
createdAt: "2024-04-17T07:24:42Z"
lastCommitAt: "2026-09-19T02:47:57Z"
lastReleaseAt: "2025-06-23T09:11:58Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 40
maintainers: ["dependabot[bot]", "github-actions[bot]", "nextcloud-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/761fbec2ce2b703d847905cf2c079e543d419758de740980287bd50c0aedda0d/nextcloud/whiteboard"
---

# Nextcloud Whiteboard

The official whiteboard app for Nextcloud. Create and share whiteboards with real-time collaboration.

## Features

- 🎨 Drawing shapes, writing text, connecting elements
- 📝 Real-time collaboration with semi-offline support
- 💾 Client-first architecture with local storage
- 🔄 Automatic sync between local and server storage
- 🌐 Works semi-offline - changes saved locally and synced when online (websocker server configured successfully)
- 💪 Built on [Excalidraw](https://github.com/excalidraw/excalidraw)

## Architecture

Nextcloud Whiteboard uses a **client-first architecture** that prioritizes browser-based functionality:

- **Browser-First**: All whiteboard functionality works directly in the browser
- **Local Storage**: Changes are immediately saved to browser storage (IndexedDB)
- **Real-time Collaboration**: WebSocket server handles live collaboration sessions
- **Simplified Connectivity**: Only browsers need to connect to the websocket server
- **Reduced Dependencies**: Websocket server is only needed for real-time collaboration, not basic functionality

## Installation & Setup

### WebSocket Server for Real-time Collaboration

The websocket server…
