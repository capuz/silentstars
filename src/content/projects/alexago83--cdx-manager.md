---
repo: "AlexAgo83/cdx-manager"
name: "cdx-manager"
description: "Terminal session manager for Codex, Claude, Antigravity, and Ollama accounts."
readmeQualityOk: true
url: "https://github.com/AlexAgo83/cdx-manager"
homepage: "https://github.com/AlexAgo83/cdx-manager#readme"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["account-manager", "ai-tools", "antigravity", "claude", "claude-code", "cli", "codex", "codex-cli", "developer-tools", "npm"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-16T00:33:28Z"
lastCommitAt: "2026-10-29T21:25:06Z"
lastReleaseAt: "2026-04-19T14:43:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["AlexAgo83", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed5c9d47bad37ad908fad0dce91cf9808bd7ce15352d1e2b2e5d44f694adfa8/AlexAgo83/cdx-manager"
---

# CDX Manager

**The right AI coding account, when you need it.** CDX Manager keeps your Codex and Claude accounts in separate profiles, shows which ones have quota, and helps you pick the next usable session from your terminal.

When one account hits a limit mid-task, you should not have to guess which login still works or rebuild your context from memory. CDX shows the available accounts and can prepare a transcript-backed handoff to another session.

## Get started in a minute

Install with npm (Node.js 18+ and Python 3.9+):

```bash
npm install -g cdx-manager
cdx add codex work
cdx add claude personal
cdx status
cdx next
cdx work
```

`cdx next` recommends a session and prints the launch command; `cdx work` opens your isolated `work` profile. CDX also supports Antigravity and local Ollama sessions. Prefer pipx or uv? See [installation and setup](https://github.com/AlexAgo83/cdx-manager/blob/HEAD/docs/getting-started.md).

## What you can do

| Need | CDX command | Detail |
| --- | --- | --- |
| See quota and choose an account | `cdx status`, `cdx next` | [Quota-aware routing](https://github.com/AlexAgo83/cdx-manager/blob/HEAD/docs/features.md#quota-aware-routing) |
| Keep…
