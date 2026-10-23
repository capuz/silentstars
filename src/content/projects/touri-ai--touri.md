---
repo: "touri-ai/touri"
name: "touri"
description: "touri: open-source desktop app for AI agent bots (Codex, Claude, OpenCode) with isolated VMs, browser and computer use."
readmeQualityOk: true
url: "https://github.com/touri-ai/touri"
homepage: "https://touri.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agents", "claude", "codex", "desktop-app", "macos", "opencode", "tauri"]
stars: 87
forks: 12
openIssues: 39
closedIssues: 395
watchers: 0
contributors: 11
recentReleases: 3
createdAt: "2026-10-15T13:13:07Z"
lastCommitAt: "2026-10-23T12:04:33Z"
lastReleaseAt: "2026-10-18T15:22:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["Thiago-Mota-Santos", "leninworld", "aazminu"]
openGraphImageUrl: "https://opengraph.githubassets.com/9548f2f3cdd7f08b989c11777f4201505d459672e7bc1a870e868612022c1798/touri-ai/touri"
---

# touri desktop

touri is a local-first desktop app for macOS, Linux and Windows for running persistent AI teammates ("bots") on your own
Codex, Claude Code or OpenCode CLI. Everything runs on your computer: your conversations, memory, routines
and secrets never leave the machine unless you explicitly configure a remote.

Built with Tauri v2 (Rust shell), a Bun sidecar and a React UI.

## Features

- Persistent bots with their own instructions, memory, skills and full branching chat history.
- Codex and Claude Code runtimes, with approval modes (`on-request`, `workspace-write`, `full`).
- Routines: cron-scheduled bot runs with overlap and catch-up control.
- Projects: connect a local repo, run supervised processes (databases, servers) and preview them in-app.
- Agent browser with human take-over, and opt-in computer use with a visible indicator and kill switch.
- MCP gateway with per-thread tokens and approval prompts.
- Bot machines: Apple `container` on macOS; rootless Podman or Docker containers on Linux.
- Importer for data exported by an earlier setup (see below).
- API models with your own key, model discovery and a connection test in Settings.

### Your own API key

Open…
