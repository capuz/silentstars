---
repo: "daintreehq/daintree"
name: "daintree"
description: "A review-first desktop habitat for running AI coding agents in parallel."
readmeQualityOk: true
url: "https://github.com/daintreehq/daintree"
homepage: "https://daintree.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "claude", "codex", "developer-tools", "electron", "git-worktrees"]
stars: 83
forks: 10
openIssues: 35
closedIssues: 7877
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-11-28T04:38:21Z"
lastCommitAt: "2026-11-01T22:59:09Z"
lastReleaseAt: "2026-04-16T13:35:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["gregpriday"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f5985bcccdb03bbc0a426d4a0314b2c74929f762fd320fa7a0ef8b7ead04735/daintreehq/daintree"
discussionCount: 3
---

Run several agents in parallel, each in its own worktree, isolated and observable, with you still in the loop.

## Install

Builds for macOS, Windows, and Linux live at [daintree.org/download](https://daintree.org/download). macOS ships as a signed-and-notarized DMG in `arm64`, `x64`, and universal variants. Linux ships as `AppImage` and `.deb` for x64 and arm64, on glibc 2.34 or newer (Ubuntu 22.04, Debian 12, Fedora 35, RHEL 9 and later), under X11 or Wayland. Windows ships as a per-user `-setup.exe` installer (no admin rights needed) for x64 and arm64, auto-updated in place. An x64-only `.appx` is also built for Microsoft Store submission and is updated through the Store. Homebrew and winget recipes are coming.

## The problem

- **Agent fatigue.** Five terminals, three agents, no clue who's stuck.
- **Worktree sprawl.** Every agent wants its own branch. Managing five at once is its own job.
- **Review is the bottleneck.** Generation is fast. Supervising what came back is what eats the day.

Daintree is the macro-orchestration layer for this workflow. The longer version of the pitch is in [docs/vision.md](https://github.com/daintreehq/daintree/blob/HEAD/docs/vision.md).

##…
