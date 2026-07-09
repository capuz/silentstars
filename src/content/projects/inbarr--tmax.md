---
repo: "InbarR/tmax"
name: "tmax"
description: "Cross-platform multi-terminal app with tiling layouts, floating panels, and a keyboard-driven workflow"
readmeQualityOk: true
url: "https://github.com/InbarR/tmax"
homepage: "https://inbarr.github.io/tmax/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent", "ai", "ai-agents", "coding", "developer-tools", "electron", "react", "terminal", "tiling-window-manager", "typescript"]
stars: 58
forks: 24
openIssues: 0
closedIssues: 61
watchers: 1
contributors: 28
recentReleases: 0
createdAt: "2026-02-14T20:36:19Z"
lastCommitAt: "2026-07-09T20:45:36Z"
lastReleaseAt: "2026-03-13T12:42:21Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 43
maintainers: ["github-actions[bot]", "yoziv"]
openGraphImageUrl: "https://opengraph.githubassets.com/29569e835c35706379f6c17b0244ee870846c19e4620fc85912cdd7a7b91df11/InbarR/tmax"
---

</p>

<h1 align="center">tmax</h1>

</p>

Built with Electron, React, TypeScript, xterm.js, and node-pty.

    

## Features

**Multiple Terminals in One View**
- Tiling layout with horizontal/vertical splits (binary tree, like tmux)
- Floating panels that can be dragged, resized, and maximized; floating panes show a `[FLOAT]` pill in the title bar
- Float / restore button in every pane title bar (or `Ctrl+Shift+U`)
- Equalize all panes to the same size with one shortcut
- Status indicators per pane (green = active, grey = idle, red = error)
- Focused pane highlighted with green-tinted title bar
- Status bar terminal count is clickable - opens a popover listing every terminal with its title, mode, and AI session status; click a row to focus it
- Floating "jump to bottom" button appears when you scroll up in any pane; click to snap back to the live tail

**Workspaces**
- A tab is a workspace - each one keeps its own panes, layout, and color tint
- Drag workspace tabs to reorder; the order persists across restarts
- Switch workspaces from the workspace tab bar; per-workspace state is saved across restarts
- Multi-select panes (Ctrl+click / Cmd+click on a pane title bar) to act on…
