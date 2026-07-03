---
repo: "luuuc/sense"
name: "sense"
description: "MCP server for AI coding agents - gives Claude Code, OpenCode, Cursor, and Codex CLI structural understanding of your codebase: symbol graph, blast radius, semantic search, conventions."
url: "https://github.com/luuuc/sense"
homepage: "https://luuuc.github.io/sense/"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["ai-tools", "code-analysis", "codebase-understanding", "developer-tools", "mcp", "semantic-search", "tree-sitter", "code-intelligence", "claude-code", "code-search"]
stars: 14
forks: 1
openIssues: 9
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-04-17T18:19:50Z"
lastCommitAt: "2026-07-03T06:24:44Z"
lastReleaseAt: "2026-04-20T15:25:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["luuuc", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213756841/a18194b6-3818-4b94-82b4-e517340e6f7c"
---

# Sense ⠎⠑⠝⠎⠑

**An MCP server for codebase context, built for AI coding agents.**

Your AI agent reads 19 files to answer "who calls this function?" because it has the text of your codebase but never the map. It re-derives structure on every task, burns tokens chasing grep chains, and hallucinates dependencies that don't exist. Sense indexes your repo once and serves a symbol graph plus semantic code search over MCP. Claude Code, Cursor, Codex CLI, and any MCP client finish the same task in 10 tool calls instead of 19, on 156K tokens instead of 228K, with the same correctness ([bench/](bench/)).

One binary, one local index, four tools for your AI. No SaaS account, no API key, no cloud dependency.

> Sense sits on your machine, has no learning curve, and isn't for you. It's for your AI.

New here? Start with [the Guide](GUIDE.md) for a map to every doc, by who you are.

## What Sense believes

A codebase is structure, not just text. The graph of what calls what, what breaks what, and how the team writes is real, knowable, and worth holding onto. Sense keeps it on your machine and hands it to your AI.

The rest follows from that. Local, because your code is yours. Read-only,…
