---
repo: "raro42/mac-stats"
name: "mac-stats"
description: "Menu-bar system monitor for Apple Silicon (optional local AI agent). Rust + Tauri. No cloud telemetry."
readmeQualityOk: true
url: "https://github.com/raro42/mac-stats"
homepage: "https://github.com/raro42/mac-stats/blob/main/docs/GETTING_STARTED.md"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["ai-agent", "apple-silicon", "discord-bot", "llm", "local-ai", "macos", "mcp", "menu-bar", "ollama", "rust"]
stars: 18
forks: 5
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-17T23:15:17Z"
lastCommitAt: "2026-10-25T22:10:40Z"
lastReleaseAt: "2026-02-19T17:40:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 60
maintainers: ["raro42"]
openGraphImageUrl: "https://opengraph.githubassets.com/d06e7bf8ef4f1c31511947f6eb07ba6c773cafe0ecf93eeea2a24331936f26c4/raro42/mac-stats"
discussionCount: 0
---

# mac-stats

**Your Mac already knows how busy it is. Now you can too — from the menu bar.**

Apple Silicon only. Optional local AI agent when you want company (off by default, stays on your machine).

> **Apple Silicon only** (arm64). Intel Macs are not supported by the published DMG / Homebrew cask.
>
> Day-to-day **development and testing** (agents, harness, many scripts) often runs on **Linux**. That is a contributor/host fact, not a second product target. The shipped menu-bar app remains macOS Apple Silicon.

**Free MIT · local-first · no cloud telemetry.** Core glanceable metrics in the menu bar; optional Ollama / Discord agent when you want it — off by default.

Two products in one binary — pick your path:

| | **Just the monitor** | **Monitor + AI agent** |
|--|----------------------|-------------------------|
| What you get | Menu-bar **CPU + SSD** (and °C when known), glass window, themes, process list, website monitors, **Disk Cleanup** | Everything left + local Ollama chat, Discord bot, schedules, Agent Ops |
| Needs | macOS on Apple Silicon | + [Ollama](https://ollama.com) + a model |
| Config | Zero — AI is **off by default** | Set `aiAgentEnabled: true` or use…
