---
repo: "intent-hq/intent"
name: "intent"
description: "Monorepo for the Intent platform — tracks intentd, cloudlands-fe, and ios as submodules; docs, CI, and release orchestration"
readmeQualityOk: true
url: "https://github.com/intent-hq/intent"
homepage: "https://intentapp.dev"
language: "JavaScript"
languages: ["JavaScript", "Python", "Shell"]
languagePcts: [35, 32, 30]
topics: ["agent-orchestration", "ai-agents", "developer-tools", "monorepo"]
stars: 367
forks: 36
openIssues: 60
closedIssues: 2057
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-17T13:26:42Z"
lastCommitAt: "2026-10-29T14:01:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 28
maintainers: ["intent-hq-ci", "panghy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ebb82f4a822cf68bd1082e7aff194f42c334b7b5b7edaa7ad7f7561cc48c9b7/intent-hq/intent"
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
