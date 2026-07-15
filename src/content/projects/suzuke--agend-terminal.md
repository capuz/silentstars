---
repo: "suzuke/agend-terminal"
name: "agend-terminal"
description: "Rust-based Agent Process Manager — PTY multiplexer optimized for AI CLI agents"
readmeQualityOk: true
url: "https://github.com/suzuke/agend-terminal"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 14
forks: 3
openIssues: 11
closedIssues: 693
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-10T03:28:13Z"
lastCommitAt: "2026-07-15T05:53:23Z"
lastReleaseAt: "2026-06-12T05:46:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["suzuke", "cheerc"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef6eb659a74209a8855a17f1eb1d1c83748a63115dfb209005bd06e37322638b/suzuke/agend-terminal"
---

[繁體中文](https://github.com/suzuke/agend-terminal/blob/HEAD/README.zh-TW.md)

# AgEnD Terminal

Orchestrate AI coding agents — not just run them.

Declare your entire AI dev team in one `fleet.yaml`. AgEnD Terminal launches each agent as a long-lived PTY process with its own git worktree, wires up inter-agent communication via built-in MCP tools, and keeps everything running with auto-respawn and context handover.

## Features

- **Fleet-as-code** — One YAML file declares every agent's backend, role, working directory, and team membership. `agend-terminal start` brings the whole fleet up.
- **5 backends** — Claude Code, Codex, Kiro, OpenCode, and Antigravity CLI. Swap backends by changing one field.
- **Built-in agent coordination** — Agents delegate tasks, query each other, and broadcast updates through 29 MCP tools. No glue code.
- **Automatic git worktree isolation** — Each agent works in its own worktree. No merge conflicts between agents, no accidental cross-contamination.
- **Crash recovery with context handover** — Agents auto-respawn and resume their conversation. Exponential backoff, health monitoring, and hung detection built in.
- **Remote control** — Drive the fleet…
