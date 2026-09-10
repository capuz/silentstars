---
repo: "rjwalters/claude-monitor"
name: "claude-monitor"
description: "macOS menu bar widget to monitor Claude AI usage"
readmeQualityOk: true
url: "https://github.com/rjwalters/claude-monitor"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 22
forks: 2
openIssues: 2
closedIssues: 69
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-09T18:13:33Z"
lastCommitAt: "2026-09-10T08:20:59Z"
lastReleaseAt: "2026-02-13T20:09:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 53
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0e93cc42ff722f1dc83186b49848429924defd6b251e0334c6377093584149a/rjwalters/claude-monitor"
---

# Claude Monitor

Monitor your Claude AI usage with a macOS menu-bar widget. Polls the Anthropic
API with long-lived OAuth tokens (one or many) and surfaces quota, reset times,
and usage trends without leaving your menu bar.

## Why?

Anthropic doesn't expose a documented public API for checking consumer
subscription usage (Pro/Max). The web dashboard at
https://claude.ai/settings/usage shows your limits but has no programmatic
equivalent.

Claude Monitor calls the same internal endpoints that Claude Code uses, using
OAuth tokens you provide, and renders the data locally on your Mac.

## Features

- **Live usage % in the menu bar** (Stats-app style), color-coded — orange at
  90%, red above 95%.
- **Summary table popover.** All accounts at a glance: session %, weekly %,
  reset times, data freshness, token health, and a one-click chart launcher
  per row.
- **Headroom score** (0–100). A single number — `100 − max(session %,
  weekly %)` — answering "which account should I be using". Default sort.
- **Click any column header to sort.** Account, Headroom, percents, reset
  times, freshness, token status. Chevron marks the active column; click
  again to flip direction. Rows without…
