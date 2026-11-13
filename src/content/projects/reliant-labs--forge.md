---
repo: "reliant-labs/forge"
name: "forge"
description: "Go + React framework and CLI that builds, runs and ships static sites, SPAs, web/mobile apps and Go APIs (Connect RPC, protobuf, SQL migrations, generated ORM/handlers/hooks/tests), with linters for agent-written code. Deploys to hosted infra, Kubernetes, Docker Compose or host processes. Also an MCP server."
readmeQualityOk: true
url: "https://github.com/reliant-labs/forge"
homepage: "https://reliantlabs.io/products/forge"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["ai-agents", "claude-code", "cli", "code-generation", "connect-rpc", "cursor", "deployment", "developer-tools", "framework", "go"]
stars: 10
forks: 2
openIssues: 14
closedIssues: 85
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-12T21:19:37Z"
lastCommitAt: "2026-11-13T11:15:21Z"
lastReleaseAt: "2026-10-30T17:56:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["reliant-01"]
openGraphImageUrl: "https://opengraph.githubassets.com/2637f211efa0f7d02e12536697e5b3dfa331011e8ed9e279e1c3f2a81c8c9ef8/reliant-labs/forge"
---

# Forge

**Forge is an opinionated, open-source Go + React framework and deploy platform
that ships the production system — dev environments, tests, secrets, multiple
environments, releases, observability and hosting — from the first commit, built
for AI agents to work in.**

The Go framework for AI-generated code, with an MCP server that deploys your app:

```bash
# Deploy a Vite or Next.js static app without an account (live URL + 72-hour claim link)
npx -y @reliantlabs/forge@latest env deploy prod --claimable

# Use from your agent: an MCP server to deploy your app (Claude Code; Cursor, Codex and Gemini below)
claude mcp add forge -- npx -y @reliantlabs/forge mcp

# Not sure where to start? forge start prints the one next command for this directory
forge start
```

Install `forge`, and the other ways to run it: [Install](#install).

  ·
  ·
  ·
  ·

Most teams build that system in year two, under deadline, on top of a codebase
that wasn't shaped for it. With Forge the first commit already has it, wired
into files you own and can change.

**Try it in the browser first: [the live demo](https://demo.reliantlabs.io/forge/demo?section=built).**

## Quick start

```bash
# Install…
