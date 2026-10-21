---
repo: "Adyen/agent-marketplace"
name: "agent-marketplace"
description: "agent-marketplace is a command-line tool that installs shared AI agent resources into the AI coding tools you use"
readmeQualityOk: true
url: "https://github.com/Adyen/agent-marketplace"
homepage: "https://agent-marketplace.io"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["agent-framework", "agent-skills", "agentic-workflow", "agents"]
stars: 14
forks: 0
openIssues: 54
closedIssues: 91
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-24T13:34:20Z"
lastCommitAt: "2026-10-21T19:55:26Z"
lastReleaseAt: "2026-09-23T07:21:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 53
maintainers: ["ncode", "nataliabeliaeva", "AlexanderGrooff"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f6c077df7aa2a9384fa05952c159692397da650b7d066b044e8cc5e474a10ba/Adyen/agent-marketplace"
---

# agent-marketplace

`agent-marketplace` is a command-line tool that installs shared AI agent
resources into the AI coding tools you use. A resource is a skill, command,
subagent, hook, or MCP server. The tool reads resources from registries (Git
repositories or local folders) and from hosted Marketplaces, then writes each
one in the native layout of every harness you target: Factory Droid, Claude
Code, Cursor, Windsurf, Gemini CLI, Devin CLI, Codex, and OpenCode.

It ships as a single Go binary for macOS and Linux with no runtime
dependencies.

**Documentation: [agent-marketplace.io/docs](https://agent-marketplace.io/docs/)**

## Install

Download the binary for your platform from the
[latest release](https://github.com/Adyen/agent-marketplace/releases/latest),
make it executable, and put it on your `PATH`:

```bash
chmod +x agent-marketplace-*-darwin-arm64
mv agent-marketplace-*-darwin-arm64 /usr/local/bin/agent-marketplace
agent-marketplace --version
```

The [install guide](https://agent-marketplace.io/docs/install) covers the other
platforms, installing without administrator rights, `go install`, and building
from source.

## Quick start

```bash
agent-marketplace init…
