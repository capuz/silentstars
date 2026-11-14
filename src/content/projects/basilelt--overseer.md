---
repo: "basilelt/overseer"
name: "overseer"
description: "Run and supervise your AI coding agents side by side, locally or on a server over SSH"
readmeQualityOk: true
url: "https://github.com/basilelt/overseer"
homepage: "https://basilelt.github.io/overseer/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [44, 41]
topics: ["agent-orchestration", "ai-agents", "ai-coding", "claude-code", "code-review", "codex", "coding-agents", "developer-tools", "gemini-cli", "git-worktree"]
stars: 9
forks: 2
openIssues: 2
closedIssues: 60
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-11-05T02:00:04Z"
lastCommitAt: "2026-11-14T10:48:29Z"
lastReleaseAt: "2026-11-05T11:15:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["basilelt"]
openGraphImageUrl: "https://opengraph.githubassets.com/919fd5bd70d9f66a3a2e9a8b75aa12f7ada060f299a12c5918cd2ec898423a13/basilelt/overseer"
---

on this machine or on a server over SSH, with their terminals, tasks and reviews in one place.

Overseer is a desktop app (Linux, macOS, Windows), a phone and tablet app (Android, iOS) and a small
daemon. It works with Claude Code, Codex, Gemini CLI, Antigravity, opencode, Amp, Copilot CLI, Cursor
Agent and Mistral Vibe. Each agent session is a **line**: one agent, in one worktree, on one machine, for
one owner. The daemon owns the terminals, so closing the app, losing Wi-Fi or putting the laptop
to sleep stops nothing; open the app again and every session is where you left it.

New here? Install the app, open it, and take the tour: it shows each part of the window in about
a minute. You can replay it any time from Settings → Help.

## Features

### Every agent in one window

Workspaces group sessions by project. Inside a workspace, subjects sort its sessions further: a
subject covers a sub-folder or a git submodule (submodules show up on their own), sessions running
there join it, and you can drag any session onto one or start a new one in it, at the workspace
root if your agents read their instructions there. Each session opens in a tab with its live terminal, and
the side panel…
