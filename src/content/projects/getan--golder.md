---
repo: "getan/golder"
name: "golder"
description: "Open-source Go AI coding agent for desktop and terminal: native GUI, split-pane workspace, browser and desktop tools, configurable approvals and sandboxing."
readmeQualityOk: true
url: "https://github.com/getan/golder"
homepage: "https://golder-cli.pages.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai", "ai-agent", "cli", "coding-agent", "developer-tools", "golang", "llm", "terminal", "tui", "agent"]
stars: 25
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T14:42:26Z"
lastCommitAt: "2026-11-15T11:23:09Z"
lastReleaseAt: "2026-10-07T14:38:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["getan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1392968913/085480db-f5da-454f-88e6-a5712443dbdd"
discussionCount: 0
---

# golder

**English** | [简体中文](https://github.com/getan/golder/blob/HEAD/README.zh-CN.md) | [Website](https://golder-cli.pages.dev/en/)

Golder is an open-source AI coding agent in Go, available as a native desktop app, an Android app and a terminal/CLI. It can inspect a codebase, edit files, run commands and tests, and work with a browser while you follow the conversation and approve sensitive actions.

Choose the interface that fits your work: **Golder GUI** for a graphical project and session workspace; **Golder Android** for a native mobile workspace with on-device tools and GitHub Actions APK builds; **`golder workspace`** for agent, shell and browser panes in a terminal; or the TUI, REPL and headless CLI for your own multiplexer, scripts and CI. The desktop and Android apps and the CLI are separate clients built on shared Agent capabilities.

Approvals, credential redaction and OS sandboxing provide configurable safeguards; their availability and behavior depend on the tool, permission mode and platform.

### Desktop GUI

### Android app

The native Android client uses Kotlin and Jetpack Compose, and runs the shared Go Agent in-process over JNI. Projects, file and Git tools,…
