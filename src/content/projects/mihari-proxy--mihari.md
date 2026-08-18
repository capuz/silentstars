---
repo: "mihari-proxy/mihari"
name: "mihari"
description: "Mihari — a new, independent local manager for mihomo, with a daemon-owned control plane shared by CLI, TUI, and browser panels"
readmeQualityOk: true
url: "https://github.com/mihari-proxy/mihari"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 12
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-06T09:23:20Z"
lastCommitAt: "2026-08-18T04:08:03Z"
lastReleaseAt: "2026-08-13T05:52:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 59
maintainers: ["LeeShunEE"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f023b0fd71f320f0751d389db65f2fe225b3a419d90be8ca8b4395cb4307192/mihari-proxy/mihari"
---

# Mihari

[English](https://github.com/mihari-proxy/mihari/blob/HEAD/README.md) · [简体中文](https://github.com/mihari-proxy/mihari/blob/HEAD/README.zh-CN.md)

Mihari is a new, independent local manager for [mihomo](https://github.com/MetaCubeX/mihomo). It targets Windows, Linux, and macOS equally and is designed around a single daemon-owned control plane shared by the CLI, TUI, and browser panels.

## What is this?

**TLDR**: Mihari is a terminal manager for mihomo — the same family of tools as mihomo GUIs like Clash Party and Sparkle, but it runs in the terminal and is hosted by a daemon in the background, so the CLI, TUI, and browser panels share one control plane.

Specifically:

- **Subscription management**: add, refresh, and switch subscription profiles, with offline switching and independent refresh intervals
- **Core management**: install, update, and restart the mihomo core
- **Service supervision**: run in the background as an OS service, with crash auto-restart
- **System proxy / TUN**: enable system proxy or TUN mode in one click
- **Web panels**: one-click install and open of the zashboard / MetaCubeXD panels
- **Connections & rules**: live view of connections, proxy…
