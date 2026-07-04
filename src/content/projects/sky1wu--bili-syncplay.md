---
repo: "sky1wu/Bili-SyncPlay"
name: "Bili-SyncPlay"
description: "Synchronize Bilibili playback across a room."
url: "https://github.com/sky1wu/Bili-SyncPlay"
homepage: "https://bili.skyarkplay.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 141
forks: 5
openIssues: 0
closedIssues: 44
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T14:09:07Z"
lastCommitAt: "2026-07-04T19:20:15Z"
lastReleaseAt: "2026-03-09T15:26:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 32
maintainers: ["sky1wu"]
openGraphImageUrl: "https://opengraph.githubassets.com/69987e283ac21d5d0a4a3989b0bed85b8635e35794a7ce83a349a737ba497f2f/sky1wu/Bili-SyncPlay"
---

# Bili-SyncPlay

[English](./README.md) | [简体中文](./README.zh-CN.md)

Bili-SyncPlay is a browser extension (Chrome, Edge, Firefox) plus a WebSocket server for synchronized Bilibili watching. Users can create or join a room, share the current video, and keep playback, pause, seek, and playback rate in sync across participants.

It supports the full local workflow:

- load the unpacked extension in Chrome, Edge, or Firefox 121+
- run the local sync server
- create a room and share an invite string
- keep everyone on the same shared video in sync

This repository is a monorepo:

- `extension/`: browser extension (Chrome/Edge/Firefox)
- `server/`: WebSocket room server and admin panel
- `packages/protocol/`: shared protocol types

## At a Glance

- Invite format: `roomCode:joinToken`
- Default local server: `ws://localhost:8787`
- Supported browsers for development: Chrome, Edge, Firefox 121+
- Recommended production server URL: `wss://<your-domain>`

## Quick Start

If you want to use the published extension directly, install it from one of the published stores:

- [Bili-SyncPlay on Chrome Web…
