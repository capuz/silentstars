---
repo: "StudentWan/agent-maestro-desktop"
name: "agent-maestro-desktop"
description: "A desktop version agent maestro"
readmeQualityOk: true
url: "https://github.com/StudentWan/agent-maestro-desktop"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-18T02:48:04Z"
lastCommitAt: "2026-11-25T03:14:21Z"
lastReleaseAt: "2026-05-29T06:46:11Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 49
maintainers: ["StudentWan", "leeyee11", "CharlzYin"]
openGraphImageUrl: "https://opengraph.githubassets.com/6540c0c827917f0836803436c9fdbb79b9999737ce0d8cdf378b5b5fda2c304a/StudentWan/agent-maestro-desktop"
---

# Agent Maestro Desktop

## Overview

Agent Maestro Desktop is an open-source local desktop application inspired by [agent-maestro](https://github.com/Joouis/agent-maestro).
It proxies Anthropic API requests and allows you to access Claude Code using a GitHub Copilot token.

Key features:
- Local Claude API proxy with Copilot token authentication
- Claude prompt caching via Copilot's Anthropic Messages API
- Auto-configures proxy settings for Claude Code, VSCode extension, and local CLI
- Multi-model auto-detection and selection (automatically picks the best model after login)
- Intuitive UI with request logs, model switching, and settings panel
- VS Code Codespace auto-bridge: detects locally-open codespaces and tunnels them through the proxy automatically

> **Platform support:** Windows only. macOS and Linux are not supported at this time.

## Installation

> **Requirements:** Windows 10+, Node.js 18+, npm

### Clone the repository
```bash
git clone https://github.com/StudentWan/agent-maestro-desktop.git
cd agent-maestro-desktop
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
