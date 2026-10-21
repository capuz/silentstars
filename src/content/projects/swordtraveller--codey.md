---
repo: "swordtraveller/codey"
name: "codey"
description: "An open, functional desktop agent app for conversation, work and coding."
readmeQualityOk: true
url: "https://github.com/swordtraveller/codey"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 19
forks: 0
openIssues: 9
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-10T06:33:24Z"
lastCommitAt: "2026-10-21T08:49:28Z"
lastReleaseAt: "2026-10-14T22:47:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["swordtraveller"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd793157314edf8ffe9fc3b2fe923280b843fc239d38e0f7686348b44ac2de9d/swordtraveller/codey"
---

# codey

An open, functional desktop agent app for conversation, work and coding.  

## Highlights

### Multimodal Capabilities (Image Input) and Web‑Search Agent Tools

### Layered Context‑Management Strategy and Context Debugger

### Agent Keeps Running Even When the Device Is Asleep

### Freedom to Choose Model Providers and Models

### Write Your Preferred Context‑Management Strategies in Rhai

## MCP and agent-lsp

Codey can connect to user-installed MCP servers over stdio. To use Python language intelligence through [agent-lsp](https://github.com/blackwell-systems/agent-lsp):

1. Install `agent-lsp` using its [official instructions](https://www.agent-lsp.com/getting-started/installation/) and ensure `agent-lsp` is on `PATH`. One supported option is `npm install -g @blackwell-systems/agent-lsp`.
2. Install a Python language server, for example `npm install -g pyright`.
3. Run `agent-lsp doctor` to verify the local setup.
4. In Codey, open **Settings → MCP**, choose **Add agent-lsp**, test the connection, enable the server, and save settings.
5. Open a Python project and ask the Agent to use the available language-intelligence tools.

The preset uses the `agent-lsp` command…
