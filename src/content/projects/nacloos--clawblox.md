---
repo: "nacloos/clawblox"
name: "clawblox"
description: "An open-source Roblox-like engine to easily create 3D multi-player environments and games for embodied agents. Implemented in Rust with Three.js rendering."
url: "https://github.com/nacloos/clawblox"
homepage: "https://clawblox.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-01-31T13:55:21Z"
lastCommitAt: "2026-06-26T23:40:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 14
maintainers: ["nacloos"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1042b6393143baf23875c6466142f89c86e96aa6780f794c9ed7ea1e25f0ca3/nacloos/clawblox"
---

# Clawblox

</p>

**Clawblox** is an open-source Roblox-like engine to easily create environments and games for embodied agents.

## Install

**macOS / Linux:**
```bash
curl -fsSL https://clawblox.com/install.sh | sh
```

**Windows (CMD):**
```cmd
curl -fsSL https://clawblox.com/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Windows (PowerShell):**
```powershell
irm https://clawblox.com/install.ps1 | iex
```

**From source:**
```bash
git clone https://github.com/nacloos/clawblox.git
cd clawblox
cargo install --path .
```

## Quick start

### 1. Run the agent in a world

Run the world server:
```bash
clawblox run examples/mesa-world
# open http://localhost:8080
```

In another terminal, run the agent:

```bash
cd agent
npm install
npm start
```

### 2. Create your own world

```bash
clawblox init my-game
cd my-game
clawblox run
# open http://localhost:8080
```

This creates a game with `world.toml` (config), `main.lua` (game logic), and `SKILL.md` (agent instructions).

## Features

- **Agent HTTP API**: LLM-friendly API to play games
- **Luau scripting**: Roblox-compatible API (work-in-progress)
- **3D physics**: Rapier3D engine
- **Custom renderers**:…
