---
repo: "MavonEngine/Core"
name: "Core"
description: "A multi / single player typescript threejs game engine for browser based games"
readmeQualityOk: true
url: "https://github.com/MavonEngine/Core"
homepage: "https://mavonengine.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["game-development", "game-engine", "nodejs", "threejs", "typescript"]
stars: 42
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-20T19:39:12Z"
lastCommitAt: "2026-11-08T14:14:08Z"
lastReleaseAt: "2026-10-27T19:19:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 25
maintainers: ["mattvb91"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b5b812778722ceba4d3349748aecef9364ca6be2d3f3a8b5c0c74d7294362f/MavonEngine/Core"
---

# MavonEngine — Three.js Game Engine for Browser Games

MavonEngine is an open-source Three.js game engine built for single player or real-time multiplayer. It combines
rendering, physics, networking, animation, and debugging into a single cohesive TypeScript package
— so you're not assembling a stack, you're building a game.

> **Early WIP** — things will change. For documentation visit [mavonengine.com](https://mavonengine.com).

## Get Started
```bash
npx @mavonengine/cli create my-game
```

This downloads the multiplayer template, installs it, starts the game server and opens the game in
your browser, with a live dashboard of the server in the terminal.

Everything runs on one port: the game server serves the client (with hot reload in dev) and the
game socket next to its own API.

| URL | Description |
| --- | --- |
| http://localhost:8050/ | Client game |
| http://localhost:8050/#debug | Debug mode: debug UI and the server's physics colliders |
| http://localhost:8050/api/game/health | Server health endpoint |

Press `.` in the game to open the level editor.

The multiplayer template includes the authoritative server setup, networking boilerplate, and a
working client/server…
