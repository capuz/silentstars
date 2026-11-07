---
repo: "wuwamoe/wuma-tracker"
name: "wuma-tracker"
description: "Native companion tool for Wuthering Waves maps"
originalDescription: "명조 맵스 네이티브 보조 툴"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/wuwamoe/wuma-tracker"
homepage: "https://maps.wuwa.moe"
language: "Rust"
languages: ["Rust"]
languagePcts: [54]
stars: 17
forks: 7
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-11-10T12:55:31Z"
lastCommitAt: "2026-11-07T16:11:39Z"
lastReleaseAt: "2025-02-27T11:31:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 57
maintainers: ["devingryu", "gudcks0305"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf1a912b562130095cee85424686f101993213d3913c0468d78b2c922f6358a/wuwamoe/wuma-tracker"
---

# Wuma Tracker (명조 맵스 트래커)

Wuma Tracker is a desktop application that shares in-game player positions for the game **Wuthering Waves** in real time and integrates them with web maps. With this program, you can easily check each other's positions while exploring with friends, or show your own position on a map during live streams and other activities.

Built with Tauri, SvelteKit, and TypeScript.

-----

## 🌟 Key Features

  * **Real-time position tracking**: Reads the player's coordinates (x, y, z) and orientation (pitch, yaw, roll) directly from the game client's memory and detects them in real time.
  * **WebRTC-based position sharing**: Uses WebRTC to share position data with other users peer-to-peer, or sends data to other applications through a local WebSocket server.
  * **Simple connection code**: Generates an 8-character Base36 code so you can easily share a connection with other users.
  * **External server integration**: Connects to a central server (`wss://concourse.wuwa.moe`) to support sharing position data remotely.
  * **Automatic updates**: When a new version is released, the app can check for and install updates from within the app.
  * **Intuitive UI**:…
