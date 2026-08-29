---
repo: "rafaelromao/sandman"
name: "sandman"
description: "AFK coding agents orchestration in isolated sandboxes."
readmeQualityOk: true
url: "https://github.com/rafaelromao/sandman"
homepage: "https://sandman.run/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["agentic-coding", "agentic-workflow"]
stars: 6
forks: 1
openIssues: 14
closedIssues: 1279
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-08T20:07:33Z"
lastCommitAt: "2026-08-29T17:27:21Z"
lastReleaseAt: "2026-07-29T19:42:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 63
maintainers: ["rafaelromao"]
openGraphImageUrl: "https://opengraph.githubassets.com/44e9e2a676b306bf6f5318d9cd27b6f89abbfc81441be8082ae3926288f2b1ee/rafaelromao/sandman"
discussionCount: 0
---

# Sandman

Sleep while your agents code.

AFK coding agents orchestration in isolated sandboxes.

## Install

```bash
go install github.com/rafaelromao/sandman/cmd/sandman@v1.0.0-rc.1
```

If Go is not installed, download a prebuilt binary from the
[latest release](https://github.com/rafaelromao/sandman/releases).
For a verified install with automatic platform detection:

```bash
curl -fsSL https://raw.githubusercontent.com/rafaelromao/sandman/main/scripts/install.sh | sh -s -- --include-prerelease
```

## Quick Start

```bash
# Prerequisites: Git, gh and OpenCode properly configured

# 1. Initialize a project
cd my-repo && sandman init

# 2. Run the review daemon (optional)
sandman review

# 3. Open the browser portal (optional)
sandman portal

# 4. Implement your GitHub issues AFK
sandman run 42 43
```

## Overview

Sandman manages the lifecycle of automated coding workflows:

- Fetches GitHub issues via the `gh` CLI
- Renders prompt templates for AI coding agents
- Creates isolated sandboxes (git worktrees or containers)
- Orchestrates parallel agent execution with dependency-aware scheduling
- Logs structured events for observability
- Serves a local portal for watching…
