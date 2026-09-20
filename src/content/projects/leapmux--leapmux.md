---
repo: "leapmux/leapmux"
name: "leapmux"
description: "AI Coding Agent Multiplexer"
readmeQualityOk: true
url: "https://github.com/leapmux/leapmux"
homepage: "https://leapmux.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [44, 43]
topics: ["claude-code", "codex", "opencode", "ai-agent", "ai-agent-tools", "ai-agents", "cursor-ai", "multi-agent", "goose", "kilo"]
stars: 113
forks: 9
openIssues: 5
closedIssues: 68
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-02-06T06:07:09Z"
lastCommitAt: "2026-09-20T08:46:44Z"
lastReleaseAt: "2026-09-15T20:58:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["trustin"]
openGraphImageUrl: "https://opengraph.githubassets.com/042863ff74e6ae147994e855801ed239bd2201f5f0bcaf2c6826cbcfbe2f1581/leapmux/leapmux"
---

</div>

# LeapMux

A terminal works fine for one or two coding agents side-by-side. At three or four — one refactoring, one on tests, one chasing a failing build — shell tabs stop helping: you lose track of which one owns which branch, the agents clobber each other's working tree, and a stray tmux crash or dev-box reboot means re-launching each agent with `--resume` and rebuilding the layout by hand.

LeapMux is a workspace for running several coding agents and shell terminals at once, each in a git worktree and branch you pick, tiled or floating, on a local or remote machine. Sessions stay attached across restarts, and Frontend↔Worker traffic is end-to-end encrypted. Runs in the browser or as a native desktop app.

## Supported Agents

<p>
</p>

> **📖 Want to use LeapMux?**
>
> Read the docs and grab a download at **[leapmux.dev](https://leapmux.dev)**. The rest of this README covers building and developing LeapMux from source.

## Table of Contents

- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development](#development)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
-…
