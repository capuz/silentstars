---
repo: "waskosky/codex-cli-farm"
name: "codex-cli-farm"
description: "A tmux session management system specifically for Codex CLI instances"
url: "https://github.com/waskosky/codex-cli-farm"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 32
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-09-15T20:12:50Z"
lastCommitAt: "2026-06-28T02:03:26Z"
lastReleaseAt: "2026-05-18T08:33:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 36
maintainers: ["waskosky"]
openGraphImageUrl: "https://opengraph.githubassets.com/e454c5bebac27a7de71976e5f4fcf7b838882dec9ffaaad6bfc5968c10d232e9/waskosky/codex-cli-farm"
---

# Codex CLI Farm

A tmux session manager for running and restoring multiple Codex CLI instances, with Claude and Gemini wrappers, logging, and monitoring built in.

## Features

- **Automated session management**: Long-lived tmux session that persists across reboots
- **Centralized logging**: Each Codex pane logs to individual files with timestamps
- **Unified monitoring**: Watch all Codex instances from a single consolidated view
- **Fast navigation**: Optional "board" session for quick switching between instances
- **Snapshot/restore**: Save a manifest of windows and restore them later
- **Status updates**: Tracks RUN/READY/ERR in tmux metadata and notifies when a window becomes READY
- **Memory warnings**: Flag tmux windows whose pane process trees exceed a chosen RSS threshold
- **Autosave/autorestore (optional)**: Systemd user services to persist sessions across logins
- **Prompt loopers**: Run one prompt or a prompt sequence repeatedly with retries, completion gates, git safety checks, logs, presets, and tmux visibility. See [Agent Looper Reference](docs/looper.md) for every parameter and default.
- **Tool wrappers**: `claude-*` and `gemini-*` commands use the same tmux…
