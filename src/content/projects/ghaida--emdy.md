---
repo: "ghaida/emdy"
name: "emdy"
description: "Open source markdown reader for macOS."
readmeQualityOk: true
url: "https://github.com/ghaida/emdy"
homepage: "https://emdyapp.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 8
forks: 2
openIssues: 9
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T17:56:22Z"
lastCommitAt: "2026-10-23T19:46:16Z"
lastReleaseAt: "2026-04-11T21:02:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 56
maintainers: ["ghaida", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a5e8fef3df055026dea16e0eb219fe18c75967c20979c1e7217080e5503dff/ghaida/emdy"
---

# Emdy

A minimal open source Markdown reader for macOS.

Emdy renders Markdown files as clean, formatted documents. No editing, no plugins, no clutter. Open a file or folder and read.

## Features

- **GitHub Flavored Markdown** with syntax-highlighted code blocks
- **Mermaid diagrams** drawn in the active color theme, with copy as PNG
- **Directory browser** sidebar for navigating .md files in a folder
- **Command palette** (Cmd+F) to search across file names and content
- **Canvas minimap** for quick document navigation
- **Zoom** (Cmd+/Cmd-) maintains optimal line length for readability
- **Font switcher** between Sans, Serif, and Mono (IBM Plex family)
- **Five color themes** (Warm, Cool, Neutral, Fresh, Neon), each with Light, Dark, and System appearance
- **Copy RTF**, export as PDF, print
- **Live reload** when files change on disk

## Read-only

Emdy is a reader, not an editor. There is no Markdown editing on purpose.

## Build from source

```bash
git clone https://github.com/ghaida/emdy.git
cd emdy/electron
npm install
npm start          # dev with HMR
npm run make       # build DMG
npm run bump       # interactive version bump
```

### Tech stack

Electron Forge +…
