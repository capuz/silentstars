---
repo: "Kocoro-lab/Kocoro"
name: "Kocoro"
description: "A Mac-native AI agent with memory, local computer access, browser control, IM channels, and MCP-native integrations. Built on Shannon."
readmeQualityOk: true
url: "https://github.com/Kocoro-lab/Kocoro"
homepage: "https://kocoro.ai"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 403
forks: 129
openIssues: 18
closedIssues: 46
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-23T04:19:19Z"
lastCommitAt: "2026-08-24T04:21:50Z"
lastReleaseAt: "2026-04-02T03:27:13Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 27
maintainers: ["Awakehsh", "waylandzhang", "zhaosuoliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/678ff6a9cddf186630df019e1abf7fe7af46e64bb1c4f0ab0d00df99b2d1f51e/Kocoro-lab/Kocoro"
---

# Kocoro (`kocoro` / `shan`)

**An AI cowork agent that lives on your Mac.**

See the [Kocoro product site](https://kocoro.ai/en/start/) for the current product demo.

Kocoro runs AI agents locally with full computer access — files, apps, browser, terminal, screen — and connects to your team's Slack / LINE / Feishu / Telegram channels via Shannon Cloud. Named agents with their own memory and tools, MCP-native, daemon-driven. The `shan` CLI is the runtime; **Kocoro Desktop** is the recommended way to use it.

> **What's open source here** — This repo is the Kocoro **engine + daemon**: the `shan` runtime that does the actual work (agent loop, local tools, permission engine, channel messaging, MCP, scheduling). It's fully usable on its own via the CLI, TUI, daemon HTTP API, and MCP. **Kocoro Desktop** — the native GUI app shown above — is a separate, closed-source product that runs *on top of* this daemon.

### Get Kocoro

- **[Download Kocoro Desktop (macOS)](https://kocoro.shannon.run/download/mac)** — DMG, the recommended way to use Kocoro
- **CLI only** — `npm install -g @kocoro/kocoro` (build-from-source and other options under [Installation](#installation))

> **Coming from…
