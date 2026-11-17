---
repo: "p32929/ccheckpoints"
name: "ccheckpoints"
description: "Automatic checkpoint tracker and web dashboard for Claude Code CLI sessions — Cursor-style history and diffs"
readmeQualityOk: true
url: "https://github.com/p32929/ccheckpoints"
homepage: "https://www.npmjs.com/package/ccheckpoints"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 29]
topics: ["checkpoints", "claude-code", "claude-code-cli", "nodejs", "typescript", "ai-coding", "cli", "developer-tools", "diff-viewer", "npm-package"]
stars: 35
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-20T20:27:32Z"
lastCommitAt: "2026-11-17T14:42:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 58
undervaluedScore: 29
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/548acff87c09cf96105481904e7c920d9be29e122e9e1be67f919b15de9e3b4c/p32929/ccheckpoints"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# CCheckpoints

Cursor-style checkpoints for Claude Code CLI. Every message you send to Claude Code is saved as a checkpoint, and a local web dashboard shows your whole session as a timeline, so you can look back at any point and see what changed.

On npm: **[ccheckpoints](https://www.npmjs.com/package/ccheckpoints)**

## Why use it

In a long Claude Code session it is easy to lose track of what you asked and when things changed. Cursor has checkpoints for this; Claude Code CLI does not. CCheckpoints adds them by itself, with no change to how you work, and everything stays on your computer.

## Features

1. **Automatic checkpoints:** every message you send to Claude Code is saved, with the time.
2. **All your sessions:** see when each one started, how long it ran and what happened in it.
3. **Checkpoint timeline:** move through your whole conversation with its full context.
4. **Compare changes:** see what changed between two checkpoints, to find what broke or how your code grew.
5. **One-command setup:** it adds the Claude Code hooks for you and opens the dashboard.
6. **Stays on your computer:** everything is saved in a local SQLite database.

## Quick start

```bash
npm install…
