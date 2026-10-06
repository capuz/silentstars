---
repo: "bbuugg/dogi"
name: "dogi"
description: "AI-driven R&D and DevOps workbench"
originalDescription: "AI 驱动的研发运维工作台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bbuugg/dogi"
homepage: "https://www.codeemo.cn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-15T11:19:22Z"
lastCommitAt: "2026-10-06T10:41:28Z"
lastReleaseAt: "2026-10-02T15:58:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["bbuugg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82ff9c746dc5df3ba400d48a1d2ec934089a43230fc0d3bcd9fc51fd43303514/bbuugg/dogi"
---

# Dogi — AI-driven Operations Workbench

Electron + React desktop R&D and DevOps tool: consolidates 'connecting to machines → working → recording → calling APIs → letting AI handle it' all in one app. Activity bar on the left, VS Code-style split-screen tabbed groups on the right; built-in terminal / SSH / remote desktop / SFTP / server monitoring / API debugging / notes / scripts / plugin host, and an AI Agent capable of reading/writing files, executing commands, and invoking skills.

## Features

### Terminal and Hosts

- **Local Terminal**: `node-pty`, automatically detects PowerShell / pwsh / CMD / Git Bash / WSL / bash / zsh / fish, can specify default shell
- **SSH**: `ssh2`, password or private key authentication, handshake progress pushed in real-time, automatic reconnection on failure, keepalive, multiple sessions
- **Windows Servers**: direct connection to system built-in OpenSSH; after session is ready, automatically detects host platform (Linux / Windows), AI provides corresponding syntax command hints per platform; per-host terminal encoding (UTF-8 / GBK, switch to GBK when Chinese servers show garbled text)
- **Multi-tab + Split**: `@xterm/xterm` v6 (DOM rendering),…
