---
repo: "ZCodium-project/ZCodium"
name: "ZCodium"
description: "ZCodium，Independent audit fork of ZCode (ZCode → ZCodium). All monitoring and telemetry removed; upstream commits reviewed one by one. ZCode 的独立审计分支（ZCode → ZCodium）：已移除监控与遥测，上游改动逐提交审阅。"
readmeQualityOk: true
url: "https://github.com/ZCodium-project/ZCodium"
homepage: "https://zcodium-project.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai-agents", "vibe-coding", "zcod", "zcode", "zcode-desktop", "zcodium"]
stars: 237
forks: 15
openIssues: 1
closedIssues: 29
watchers: 0
contributors: 8
recentReleases: 8
createdAt: "2026-09-23T21:53:06Z"
lastCommitAt: "2026-10-22T08:52:22Z"
lastReleaseAt: "2026-10-14T13:16:27Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 34
maintainers: ["SudoUserReal", "yachen4ever", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/743d392ae109dd1e892a0bd00f375010ed9d3692d786a4a230c4a3f73bf9aeb6/ZCodium-project/ZCodium"
---

# ZCodium

> This repository is forked from [zai-org/ZCode](https://github.com/zai-org/ZCode), open-sourced by Zhipu on September 21, 2026. The name follows the same pattern as Chrome → Chromium and VS Code → VSCodium: **ZCode → ZCodium**. Everything here is backed by code and reproducible checks.

## Features

ZCodium keeps the product itself — an AI coding workspace for desktop, browser and terminal — and rebuilds it from the public source with monitoring and telemetry removed and vendor services off by default.

- **One Agent, three interfaces**: the Electron desktop app, the browser workspace and the `zcodium` terminal TUI share the same Agent runtime and sessions; you can also connect to a remote host over SSH, or drive the same desktop agent from your phone's browser.
- **Plans, edits, runs, verifies**: file changes arrive as diffs, terminal commands carry their context, the agent checks its own work by running commands and tests, and a built-in browser plugin drives a real browser for web tasks.
- **Asks before it touches your project**: every edit, command and tool call can require approval — allow once, always in this project, or full access.
- **Multi-agent collaboration…
