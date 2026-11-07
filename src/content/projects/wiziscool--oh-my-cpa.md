---
repo: "WizisCool/oh-my-cpa"
name: "oh-my-cpa"
description: "Self-hosted control plane & usage observability console for CLIProxyAPI (CPA) — AI providers, client keys, streaming telemetry, and model cost snapshots."
readmeQualityOk: true
url: "https://github.com/WizisCool/oh-my-cpa"
homepage: "https://omc-demo.junze.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [46, 45]
topics: ["ai-gateway", "cliproxyapi", "cpa", "dashboard", "golang", "llm", "observability", "proxy", "react", "self-hosted"]
stars: 337
forks: 34
openIssues: 3
closedIssues: 95
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-09-12T10:27:41Z"
lastCommitAt: "2026-11-07T10:35:07Z"
lastReleaseAt: "2026-10-10T18:53:14Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 32
maintainers: ["WizisCool", "dillonzq", "yangjuncode"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1367189462/d6ecaa8e-cd7e-4001-a315-f1351f4e04d9"
---

### Manage APIs and OAuth in one place, visualize requests, cost and usage

MCP · Visualization · Management

**[Live Demo](https://omc-demo.junze.dev)** ·
[Install](#install) ·
[Features](#features) ·
[Agents and MCP](#agents-and-mcp) ·
[Documentation](#documentation) ·
[简体中文](https://github.com/WizisCool/oh-my-cpa/blob/HEAD/README.zh-CN.md)

[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) (CPA) is an API gateway: it
adapts protocols, holds credentials and proxies requests. **Oh My CPA** (OMC) is a web
console for it. OMC manages the gateway's providers, credentials and configuration, and
records the usage and cost of every request. It is a single Go
binary with the React console embedded and a local SQLite database, runs offline, and
signs in with CPA's management key.

> [!TIP]
> **[Try the Live Demo](https://omc-demo.junze.dev)**

## Screenshots

## Install

### Install with an agent

Paste the following into Claude Code, Codex, Cursor or another coding agent. The agent
inspects the machine, picks the matching method and installs it:

```text
Install Oh My CPA for me by following
https://raw.githubusercontent.com/WizisCool/oh-my-cpa/main/docs/install-for-agents.md…
