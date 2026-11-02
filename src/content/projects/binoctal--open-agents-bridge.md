---
repo: "binoctal/open-agents-bridge"
name: "open-agents-bridge"
description: "Bridge daemon connecting local coding agents (Claude Code, Codex, Gemini) to OpenAgents cloud orchestration"
readmeQualityOk: true
url: "https://github.com/binoctal/open-agents-bridge"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-02T11:41:33Z"
lastCommitAt: "2026-11-02T15:17:49Z"
lastReleaseAt: "2026-09-22T04:04:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["binoctal"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e04c2dced6ca0ef378b3349c7a07ce0bd6050bf812f34e8db61ef35909cff30/binoctal/open-agents-bridge"
---

# OpenAgents Bridge

[中文](https://github.com/binoctal/open-agents-bridge/blob/HEAD/README.zh-CN.md)

Local Bridge CLI that connects AI coding tools with the OpenAgents cloud platform — orchestrate Claude Code, Codex and Gemini CLI from your browser at [openagents.top](https://openagents.top).

## Features

- Connect AI CLIs: Claude Code, Gemini CLI, Goose, Cline, Codex
- Real-time WebSocket communication
- End-to-end encryption
- Permission request forwarding
- Multi-session management
- **Multi-machine support** — run multiple bridge instances on one machine
- **I/O logging** — record user input and AI responses for debugging
- Cross-platform: Windows, Linux, macOS

## Install

```bash
npm i -g @binoctal/open-agents-bridge
```

### Build from source

```bash
make build
```

### Install to system

```bash
make install
```

## Quick Start

### Pair a machine

```bash
# Interactive pairing
open-agents-bridge pair

# With machine name
open-agents-bridge pair --name work-pc
```

### Start the bridge

```bash
# Start a machine
open-agents-bridge start --machine work-pc

# With debug logging
open-agents-bridge start --machine work-pc --log-level debug
```

### Manage machines

```bash
#…
