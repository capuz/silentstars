---
repo: "zpratt/lousy-agents"
name: "lousy-agents"
description: "Bootstrap projects with pre-configured instructions, tests, and linters that guide AI coding agents to produce reliable code"
readmeQualityOk: true
url: "https://github.com/zpratt/lousy-agents"
homepage: "https://docs.modzed.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "cli", "typescript", "scaffolding", "lint", "mcp-server", "npm-package", "agent-policy", "coding-agent", "mcp"]
stars: 13
forks: 4
openIssues: 28
closedIssues: 78
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-01T18:03:49Z"
lastCommitAt: "2026-10-22T08:51:34Z"
lastReleaseAt: "2026-02-08T04:43:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 63
maintainers: ["renovate[bot]", "claude", "zpratt"]
openGraphImageUrl: "https://opengraph.githubassets.com/5535167a6e024beda74edaaff97e1d771829bab6d07fb3106fc98e298c07e065/zpratt/lousy-agents"
discussionCount: 0
---

# Lousy Agents

**Turn "lousy" AI outputs into production-grade code.**

## TL;DR

Lousy Agents is a set of published npm packages for agentic software development, with `@lousy-agents/cli` as the main entry point. Run `npx @lousy-agents/cli init` to create a new project with testing, linting, and GitHub Copilot configuration. Run `npx @lousy-agents/cli copilot-setup` in existing projects to generate a workflow that gives Copilot your environment context. Add `@lousy-agents/mcp` for MCP integrations and `@lousy-agents/agent-shell` for npm script telemetry when you need them.

---

Lousy Agents is an npm workspace monorepo that publishes focused packages for scaffolding, MCP integrations, and npm script telemetry. The CLI package gives you a production-ready development environment with testing, linting, and AI assistant configuration in one command.

## Quick Start

```bash
# Scaffold a new webapp project (no install required)
npx @lousy-agents/cli init --kind webapp

# Or use interactive mode to choose your project type
npx @lousy-agents/cli init

# Generate GitHub Copilot setup workflow from your project configuration
npx @lousy-agents/cli copilot-setup
```

## Table of Contents…
