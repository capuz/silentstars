---
repo: "dreamide/dream"
name: "dream"
description: "Frontier IDE built for AI coding."
readmeQualityOk: true
url: "https://github.com/dreamide/dream"
homepage: "https://dreamide.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 24]
topics: ["agentic-ai", "agents", "ai", "claude-code", "codex", "coding", "ide", "openai", "vibe-coding"]
stars: 37
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-05-11T05:12:25Z"
lastCommitAt: "2026-07-25T06:00:54Z"
lastReleaseAt: "2026-07-22T22:35:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 36
maintainers: ["mikecao"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d6b9f8e64230bbf6619872c3c28d16bd8e503528730b0c88017a1335289b83a/dreamide/dream"
---

# Dream

Dream is a desktop IDE for working with multiple AI coding agents.

## Features

- Multi-project workspace with project tabs
- View multiple chats at once
- Git status, branch, commit, push, and PR workflows
- File explorer, diff rendering, and editor launch integration
- Integrated terminal
- Built-in browser preview panel

## Requirements
At least one supported agent CLI:
- Codex
- Claude Code
- OpenCode
- Cursor Agent

## Download

### macOS
- [ARM64](https://files.dreamide.app/latest/Dream-mac-arm64.dmg)
- [x64](https://files.dreamide.app/latest/Dream-mac-x64.dmg)

### Windows
- [x64](https://files.dreamide.app/latest/Dream-windows-x64.exe)

### Linux
- [DEB x64](https://files.dreamide.app/latest/Dream-linux-x64.deb)
- [RPM x64](https://files.dreamide.app/latest/Dream-linux-x64.rpm)
- [AppImage x64](https://files.dreamide.app/latest/Dream-linux-x64.AppImage)

## Installation

Install dependencies:

```sh
pnpm install
```

## Development

```sh
pnpm dev
```

## Build

Create a production build:

```sh
pnpm build
```

Run the Electron app against the production build:

```sh
pnpm start
```

## Packaging

Build the renderer and package the Electron app:

```sh
pnpm…
