---
repo: "intent-hq/intent"
name: "intent"
description: "Monorepo for the Intent platform — tracks intentd, cloudlands-fe, and ios as submodules; docs, CI, and release orchestration"
readmeQualityOk: true
url: "https://github.com/intent-hq/intent"
homepage: "https://intentapp.dev"
language: "Python"
languages: ["Python", "JavaScript", "Shell"]
languagePcts: [35, 33, 29]
topics: ["agent-orchestration", "ai-agents", "developer-tools", "monorepo"]
stars: 351
forks: 31
openIssues: 134
closedIssues: 1962
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-17T13:26:42Z"
lastCommitAt: "2026-10-21T23:30:19Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 28
maintainers: ["intent-hq-ci", "panghy", "Wattenberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/40a7d03a6a45feeb11d8872f4ae3e0e3911e73b75306299f084074ff9f387345/intent-hq/intent"
discussionCount: 3
---

# Intent

**Intent** is a desktop application for coordinating coding agents at scale.
Manage workspaces, notes, tasks, coding agents, git, and terminals in one place.
The app bundles and manages its Rust backend daemon (`intentd`) for you.

## Install

**[Download the latest packaged app from intentapp.dev](https://intentapp.dev).**
This is the recommended way to use Intent; no separate `intentd` installation
is needed.

For all other versions, visit the
[cloudlands-releases release page](https://github.com/intent-hq/cloudlands-releases/releases).

## Standalone daemon (advanced)

Install `intentd` separately only if you want to run and manage the daemon
independently of the desktop app, such as on a remote host.

Installing `intentd` installs the **sitter** — a small self-updating shim,
itself named `intentd`, that downloads the latest real daemon from the public
[intent-hq/intentd-releases](https://github.com/intent-hq/intentd-releases)
mirror (falling back to the
[intentd repo's own releases](https://github.com/intent-hq/intentd/releases)),
forwards all CLI
arguments to it, and respawns it if it crashes.
Update checks run only for `intentd serve` (at startup and every 12–24…
