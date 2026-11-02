---
repo: "aoi-ihara/Ei-TypeBomb"
name: "Ei-TypeBomb"
description: "An online multiplayer typing game using Next.js, Node.js, and Socket.IO. Players can compete with each other in real time over the internet."
readmeQualityOk: true
url: "https://github.com/aoi-ihara/Ei-TypeBomb"
homepage: "https://ei-typebomb.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["full-stack", "game", "multi-player", "online-game", "typing-game"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-20T08:49:22Z"
lastCommitAt: "2026-11-02T11:35:48Z"
lastReleaseAt: "2026-10-11T11:35:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["aoi-ihara"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1244421688/9ec67214-aa4d-4cd4-b4fc-676ee3711ae9"
discussionCount: 4
---

# Ei-TypeBomb

Ei-TypeBomb is a real-time multiplayer typing game built with Next.js, Node.js, and Socket.IO.

Players join a shared room and pass a virtual bomb by correctly typing the displayed English word. The game is designed around a simple real-time game loop, with the server managing the game state and clients rendering the current state.

## Features

- Real-time multiplayer gameplay
- Room-based game sessions
- Custom word sets
- JSON import / export for word sets
- Password-protected rooms
- Spectator mode
- JWT-based room authentication
- Responsive UI
- Background music and sound effects
- Primary / backup server failover
- Server-side game state management
- Persistent server logging

## Architecture

Ei-TypeBomb consists of a Next.js client and a Node.js server communicating through Socket.IO.

```text
┌─────────────────────┐
│       Next.js       │
│ React / TypeScript  │
└──────────┬──────────┘
           │
       Socket.IO
           │
           ▼
┌─────────────────────┐
│       Node.js       │
│ Express / Socket.IO │
├─────────────────────┤
│ Room Management     │
│ Game State          │
│ Turn Management     │
│ Bomb Timer          │
│ Authentication      │…
