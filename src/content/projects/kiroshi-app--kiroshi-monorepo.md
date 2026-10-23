---
repo: "kiroshi-app/kiroshi-monorepo"
name: "kiroshi-monorepo"
description: "Desktop app for Claude Code: a roster of bots, each with its own model, working directory and persistent conversation"
readmeQualityOk: true
url: "https://github.com/kiroshi-app/kiroshi-monorepo"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 33]
topics: ["ai-agent", "claude-code", "desktop", "react", "rust", "tauri", "typescript"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T15:09:46Z"
lastCommitAt: "2026-10-23T09:29:48Z"
lastReleaseAt: "2026-08-25T19:24:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["shoto290"]
openGraphImageUrl: "https://opengraph.githubassets.com/57547097c1cc896c241c2ae49bb4ca7a35973d3e8c45d32426778b2f3ee78b2d/kiroshi-app/kiroshi-monorepo"
---

# Kiroshi

Kiroshi is a desktop app for Claude Code: a roster of bots you name, dress and brief — each with its own model, working directory and instructions — grouped into spaces and talking in conversations that are stored locally and come back on the next launch.

A conversation seats as many bots as you name in it, and every bot named in one message runs in the same wave, so one can be working while you read another. Every turn is answered by the Claude Code executable Kiroshi ships beside its agent sidecar.

## What a bot carries

**Its space.** A bot belongs to a space, and a space carries a plugin of its own — `about-this-space` and whatever the bots wrote there — read by every bot of that space. A second plugin, `me`, holds what the bots know about you and is read by every bot in the app.

**Its skills.** Each bot owns a plugin directory: an agent file at `agents/agent.md` for what it always knows, and `skills/<name>/SKILL.md` files for what a task calls for. A bot writes there itself, each write is a git commit in that directory, and you read and undo them in its History. On top of that, every session is given the bundled `kiroshi` plugin, whose `learn` and `routines`…
