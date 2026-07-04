---
repo: "depwire/depwire"
name: "depwire"
description: "The missing context layer for AI-assisted refactoring"
url: "https://github.com/depwire/depwire"
homepage: "https://depwire.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ai-coding-assistant", "arc-diagram", "cli", "code-analysis", "dead-code", "dependency-graph", "developer-tools", "go", "javascript", "mcp"]
stars: 53
forks: 6
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-02-25T11:43:30Z"
lastCommitAt: "2026-07-04T06:12:33Z"
lastReleaseAt: "2026-04-13T22:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 46
maintainers: ["atef-ataya"]
openGraphImageUrl: "https://opengraph.githubassets.com/f119c137e1e03a44931061efd6b5a038b407fd32e5247a87a7bfae95c2e5d339/depwire/depwire"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/", "KO_FI:https://ko-fi.com/", "CUSTOM:https://depwire.dev"]
discussionCount: 2
---

# Depwire

> Give your AI coding agent a map of your codebase.

Depwire builds a deterministic dependency graph of your codebase and exposes it through 23 MCP tools — so AI agents navigate instead of explore.

---

## The Problem

AI coding agents re-explore your codebase from scratch every session. They burn tokens grepping and reading files just to rediscover structure they saw yesterday, then make changes without seeing what depends on the code they touch. The fix is a map: a precomputed graph of every symbol and every dependency, served to the agent on demand.

---

## Install

### CLI + MCP Server

```bash
npm install -g depwire-cli
```

### VSCode Extension

Search "Depwire" in the VSCode Extensions panel, or:

```
ext install depwire.depwire-vscode
```

Or install directly from the marketplace: [https://marketplace.visualstudio.com/items?itemName=depwire.depwire-vscode](https://marketplace.visualstudio.com/items?itemName=depwire.depwire-vscode)

### Cloud App

[app.depwire.dev](https://app.depwire.dev) — connect a GitHub repo and get a hosted MCP endpoint in about 60 seconds.

---

## Quick Start

### Claude Desktop / Cursor / any MCP client

```json
{
  "mcpServers": {…
