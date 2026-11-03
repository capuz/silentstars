---
repo: "mxrsv/spacevibe-deck"
name: "spacevibe-deck"
description: "SpaceVibe Deck — a minimal macOS terminal for AI agent CLIs"
readmeQualityOk: true
url: "https://github.com/mxrsv/spacevibe-deck"
homepage: "https://deck.spacevibe.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai-agents", "claude-code", "macos", "preact", "pty", "rust", "tauri", "terminal", "typescript", "xterm-js"]
stars: 41
forks: 9
openIssues: 32
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-02T15:34:13Z"
lastCommitAt: "2026-11-03T10:50:15Z"
lastReleaseAt: "2026-08-04T18:01:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 81
undervaluedScore: 34
maintainers: ["mxrsv"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7edef4d874a7d93c32accb40fe353bf09d42ec92667e7a344a79b4b46648ae8/mxrsv/spacevibe-deck"
---

An attention-first desktop terminal that runs CLI agents side by side, shows supported
  agents' latest words and attention state, and returns you to the pane that needs you.

> **Windows:** the installer is x64 and unsigned, so Microsoft SmartScreen will warn on
> first install. Windows has shipped without a real-hardware runtime verification pass.

## The attention loop

|            |                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Launch** | Choose a folder on the [start screen](https://github.com/mxrsv/spacevibe-deck/blob/HEAD/src/open-board/board-composer.tsx), or drop one from Finder or Explorer, then press Run on an agent card.                           |
| **Watch**  | Read working, asked, and failed states in the Agent Rail. Claude Code, Codex, and OpenCode also expose their latest words. |
| **Jump**   | Select the project or pane that needs intervention instead of hunting through terminal tabs.                           |
| **Resume** | Reopen the last…
