---
repo: "xinbetween/flowlight"
name: "flowlight"
description: "Native macOS network monitor: every app's traffic to every domain, plus AI agent oversight with per-agent allowlists and tool/MCP server attribution. Free, open source (GPL-3.0), no telemetry."
readmeQualityOk: true
url: "https://github.com/xinbetween/flowlight"
homepage: "http://flowlight.xinbetween.com/"
language: "Swift"
languages: ["Swift", "HTML"]
languagePcts: [61, 35]
topics: ["ai-agents", "ai-security", "claude-code", "data-exfiltration", "dns", "llm", "macos", "menubar-app", "network-monitor", "network-monitoring"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-22T05:47:45Z"
lastCommitAt: "2026-10-29T05:50:27Z"
lastReleaseAt: "2026-09-23T08:28:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["blessdyb"]
openGraphImageUrl: "https://opengraph.githubassets.com/22ffdea8e746f83f052f9ba84db1778360def55dc412cf1b57c3a70216ce10fb/xinbetween/flowlight"
---

# Flowlight

**Application-aware network monitoring for macOS, with focused visibility into AI agents.**

A native macOS network monitor that attributes observed traffic to applications and destinations.
It highlights AI agent activity such as sensitive protocols, unfamiliar destinations, and large
uploads, with local history and explainable alerts.

[**Download for macOS**](https://github.com/xinbetween/flowlight/releases/latest/download/Flowlight.dmg) ·
[Website](https://flowlight.xinbetween.com) ·
[Build from source](#build-from-source) ·
[How it works](#how-it-works)

---

## Why Flowlight

Your Mac now runs software that makes its own decisions. Coding agents read your files, run shell commands
and call tools, and any of those tools can open a socket. Activity Monitor shows *how much* traffic there
is. A firewall asks you to allow *each* connection. Neither answers the question that matters now:

> **What are my agents talking to, besides their model provider?**

Flowlight answers that for observed application traffic, then provides additional context for recognized AI agents.

## Features

### Applications × destinations × protocols
- **Per-app attribution** for observed TCP…
