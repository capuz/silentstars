---
repo: "cjhyy/codeshell"
name: "codeshell"
description: "An open-source AI coding assistant for your terminal, inspired by Claude Code. Interact with your codebase directly from the command line."
readmeQualityOk: true
url: "https://github.com/cjhyy/codeshell"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["claude", "claude-code"]
stars: 75
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-12T02:55:36Z"
lastCommitAt: "2026-11-17T12:18:20Z"
lastReleaseAt: "2026-07-06T05:30:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: ["cjhyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5246f9c7ca20b14bc0e7b814dfde410c37a436351e489712cc3985608c6ee98f/cjhyy/codeshell"
---

# CodeShell

CodeShell is one orchestration engine wearing three faces:

- a **terminal CLI** (`code-shell`) for interactive and headless agent runs,
- an **Electron desktop app** with chat, file/browser/terminal/diff panels, model & credential management, an extensions marketplace, automation, and a phone remote, and
- a **programmatic SDK** (`import { Engine } from "@cjhyy/code-shell"`) for embedding the engine in your own product.

The core is deliberately **domain-agnostic**. The turn loop, context management, permissions, MCP integration, hooks, tasks, cron, sub-agents, sessions, and memory all stay generic. Coding tools, git/worktree behavior, LSP, review, quota, and coding prompts live in the physically separate `@cjhyy/code-shell-capability-coding` package and are composed by the CLI/Desktop hosts. (See `packages/core/CONTRIBUTING.md`: "core only carries mechanism, not policy.")

> Status: **0.9.x**. The desktop app is the headline product; the CLI and SDK share the same core engine. See [published releases](https://github.com/cjhyy/codeshell/releases) and the [current release acceptance…
