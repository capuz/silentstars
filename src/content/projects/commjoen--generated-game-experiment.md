---
repo: "commjoen/generated-game-experiment"
name: "generated-game-experiment"
description: "Private experiment to create a game with cursor"
readmeQualityOk: true
url: "https://github.com/commjoen/generated-game-experiment"
homepage: "https://commjoen.github.io/generated-game-experiment/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["ai", "cursor", "free", "game", "llm", "platformer-2d-game", "typescript"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 46
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-09T08:18:23Z"
lastCommitAt: "2026-08-04T06:11:00Z"
lastReleaseAt: "2025-08-15T20:08:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 77
maintainers: ["commjoen", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f3f4668bdc91d4f7cba032611abe673bf787b07a319f88fc854173667822425/commjoen/generated-game-experiment"
discussionCount: 1
---

# generated-game-experiment

## Overview

A browser-based, side-scrolling platformer game built with TypeScript, Vite, and Docker. Features procedural levels, collectibles, power-ups, a settings modal, and robust multiplayer support. Containerized with nginx for easy deployment to Render and GitHub Pages.

## 🎮 Play the Game

## Features

- **Procedural Levels**: Each run generates a new level with platforms, spikes, moving platforms, and boxes.
- **Collectibles & Power-Ups**: Coins (score), hearts (lives), double jump (feather), and grow (mushroom, up to 3x size per life).
- **Responsive UI**: Onscreen controls for mobile/Tesla, Tesla Mode toggle, and a settings modal for backgrounds, speed, FPS, multiplayer, WebRTC transport preference, and player name.
- **Multiplayer**: Toggle on/off in Settings. Real-time sync of player state (position, name, score) via WebSocket with optional WebRTC data-channel acceleration for movement updates.
- **Leaderboard**: Real-time, deduplicated leaderboard (top 5) in multiplayer, with crown and gold color for the leader.
- **Robust Sync**: Player names and scores are always updated from the server. Collectibles are registered only once per level.…
