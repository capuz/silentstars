---
repo: "solutionscay/skiff"
name: "skiff"
description: "The multi-agent coding terminal. Run Claude Code, Codex and other agents in parallel on Linux and macOS. They send each other tasks and report back."
readmeQualityOk: true
url: "https://github.com/solutionscay/skiff"
homepage: "https://skiff.solutionscay.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 36]
topics: ["agentic-coding", "ai-agents", "claude-code", "codex", "coding-agents", "desktop-app", "developer-tools", "gemini-cli", "git-worktree", "linux"]
stars: 21
forks: 2
openIssues: 11
closedIssues: 224
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-28T22:08:22Z"
lastCommitAt: "2026-11-17T14:34:43Z"
lastReleaseAt: "2026-10-03T13:56:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["throw99"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1393897946/51be2623-0af0-4114-a69c-74737bf26cf9"
---

Skiff is a terminal app for coding agents, on Linux and macOS. You code with Claude Code,
Codex and other agents in its panes, many at once, across projects and Git worktrees.
Each pane shows what its agent needs: a bell when it asks for approval, a flag when it
finished a turn out of sight. Admiral, the Skiff agent, hands tasks to your other agents
and to project Skippers, and collects their results in a ledger. Any agent can do the
same with the `skiff` command.

## Philosophy

Skiff manages sessions. The apps you already have do everything else. Skiff does not
edit files: it opens them in the editor, diff tool or file manager you set in
Settings › Open with.

Sessions outlive the window. `skiffd`, a daemon, owns every terminal. Close the window
and the agents keep running.

Skiff stays out of your agents' setup. It installs no hooks or plugins. It reads a
session's state from its screen and from the program in front of the terminal. All
settings live in one file, `projects.toml`.

## Install

Download the latest [release](https://github.com/solutionscay/skiff/releases/latest):

- Linux (x86_64): `.deb`, `.rpm` or AppImage
- macOS (Apple Silicon): `.dmg`, signed and notarized…
