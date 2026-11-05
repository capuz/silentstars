---
repo: "nmelo/initech"
name: "initech"
description: "An runtime for agents who collaborate with each other from one terminal. Optimized for steerability."
readmeQualityOk: true
url: "https://github.com/nmelo/initech"
homepage: "https://initech.sh/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["beads", "claude-code", "multiplexer", "tmux", "tui", "ai-agents"]
stars: 32
forks: 3
openIssues: 0
closedIssues: 21
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-15T19:17:04Z"
lastCommitAt: "2026-11-05T00:21:42Z"
lastReleaseAt: "2026-03-25T17:18:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 51
maintainers: ["nmelo"]
openGraphImageUrl: "https://opengraph.githubassets.com/928382db3b64c6be440e48d041703ea47985a0bec28a82b10dfca819e1026427/nmelo/initech"
fundingLinks: ["GITHUB:https://github.com/nmelo"]
discussionCount: 3
---

**initech** is an agent runtime for directing teams of AI coding agents. Each agent gets its own PTY-backed pane, reliable IPC messaging, and bead-aware state tracking — all in one TUI. Works with Claude Code, Codex, Amp, or any CLI.

## Why

Running multiple Claude Code agents in tmux breaks in three specific ways:

- **Messages drop silently.** `tmux send-keys` has no delivery guarantee. When a completion report from eng to super drops, the dispatch chain stalls. initech's IPC socket confirms delivery or returns an explicit error.
- **Agent state is invisible.** A hung agent and a productive one look identical in tmux. initech shows every agent's activity state simultaneously — active, idle, stalled, or idle-with-work-waiting.
- **Work is invisible to the runtime.** tmux doesn't know what beads exist or who's working on what. initech parses Claude's session logs for bead events and surfaces them as typed notifications: green toast when an agent finishes, yellow when it stalls, red when it's error-looping.

## Quick Start

```bash
# Install
brew tap nmelo/tap && brew install initech

# Bootstrap a new project
mkdir myproject && cd myproject
initech init

# Launch
initech
```…
