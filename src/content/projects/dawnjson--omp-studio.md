---
repo: "DawnJson/omp-studio"
name: "omp-studio"
description: "Desktop app for oh-my-pi (omp) on Windows and macOS. Runs the official omp and shares logins, settings and sessions with the terminal version."
readmeQualityOk: true
url: "https://github.com/DawnJson/omp-studio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agent", "coding-agent", "desktop-app", "electron", "macos", "oh-my-pi", "omp", "windows"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-25T04:52:44Z"
lastCommitAt: "2026-11-03T19:04:16Z"
lastReleaseAt: "2026-10-26T04:37:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 51
maintainers: ["DawnJson"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf0933f2385007df77e9aa7fad549bf7a46275ba81108f97a6461f9cb5a0d657/DawnJson/omp-studio"
---

## Why omp-studio

- **It is the real omp.** Each task runs interactive omp in a pseudo-terminal, and the window draws what omp sends over the TSP protocol (the protocol Tern uses). Subagents, the todo board, approvals, questions, `/btw` and slash commands behave as they do in the terminal, not as a reimplementation on top of RPC.
- **Nothing to migrate.** Logins, settings and sessions stay in `~/.omp`. Sessions you started in a terminal show up in the sidebar, and settings you change in the app apply to the terminal omp too.
- **Desktop workflow around the agent.** Tasks grouped by project, a review panel with per-line staging and generated commit messages, a branch menu, worktrees, a built-in terminal, a file panel, tray mode and notifications.
- **Built for Windows first.** No WSL needed. omp child processes run in a Windows Job Object, so they don't outlive the app, even if it crashes. macOS (Apple silicon) and Linux (x64 AppImage) are supported too.

Prefer to stay in a terminal? [Tern](https://stencil.so/tern), Stencil's own terminal, also renders omp natively. omp-studio is for people who want a desktop app around omp.

## Download

| Windows (x64) | macOS (Apple silicon) |…
