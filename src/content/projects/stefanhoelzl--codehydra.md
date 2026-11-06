---
repo: "stefanhoelzl/codehydra"
name: "codehydra"
description: "Multi-Workspace IDE for Parallel AI Agent Development"
readmeQualityOk: true
url: "https://github.com/stefanhoelzl/codehydra"
homepage: "https://codehydra.stho.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "ai", "ide", "opencode", "vscode", "worktrees", "claude-code"]
stars: 20
forks: 3
openIssues: 5
closedIssues: 12
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-12-02T19:56:36Z"
lastCommitAt: "2026-11-06T11:23:47Z"
lastReleaseAt: "2026-01-21T05:41:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["stefanhoelzl", "mrh1997"]
openGraphImageUrl: "https://opengraph.githubassets.com/0837f1bcc9ff59b455d9e5c4c7753be173261235ccb0e0b71034fb8f07ff4078/stefanhoelzl/codehydra"
---

---

Run multiple AI coding assistants simultaneously in isolated git worktrees
with real-time status monitoring.

## Requirements

- **Git**
- A **Claude Code** or **OpenCode** account

## Installation

```bash
# Using Node.js
npx codehydra@latest

# Using Python
uvx --refresh codehydra
```

Or download directly from [GitHub Releases](https://github.com/stefanhoelzl/codehydra/releases).

## Features

- **Parallel Workspaces** - Run Claude Code or OpenCode in several workspaces at once
- **Git Worktrees** - Each workspace is a worktree with its own branch, not a separate clone
- **Built-in Agents** - Claude Code and OpenCode ship with CodeHydra; choose one
  globally or per workspace
- **Real-time Status** - Monitor agent status across all workspaces, mirrored on the app badge
- **Keyboard Driven** - Alt+X shortcut mode for fast workspace navigation
- **VS Code Powered** - A full VSCodium editor per workspace, with your extensions,
  themes and settings
- **Agent-Driven Editor** - Agents can run any VS Code command, including ones your
  installed extensions register: open files, run tasks, drive the UI
- **Cross-platform** - Linux, macOS, and Windows

Also included: hibernation,…
