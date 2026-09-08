---
repo: "epicsagas/alcove"
name: "alcove"
description: "Alcove is an MCP server that gives AI coding agents on-demand access to your private project docs — BM25 + vector hybrid search for precision retrieval, tree-sitter code indexing so agents understand your codebase structure, and policy enforcement for doc consistency."
readmeQualityOk: true
url: "https://github.com/epicsagas/alcove"
homepage: "https://epicsagas.github.io/alcove/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agent", "claude-code", "documentation", "knowledge-base", "mcp", "mcp-server", "privacy", "rust"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T11:51:31Z"
lastCommitAt: "2026-09-08T08:16:01Z"
lastReleaseAt: "2026-04-16T17:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 46
maintainers: ["epicsagas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6407c632592c39d8ae946d2fc3f7905e572d01a020b7aee3a577c1577399989a/epicsagas/alcove"
fundingLinks: ["GITHUB:https://github.com/epicsagas", "BUY_ME_A_COFFEE:https://buymeacoffee.com/epicsaga"]
---

</p>

</p>

</p>
</p>

Alcove is an HTTP API server that gives AI coding agents on-demand access to your private project docs — **BM25 + vector hybrid search** for precision retrieval, **tree-sitter code indexing** so agents understand your codebase structure, and **policy enforcement** for doc consistency. No context bloat, no leaking docs into public repos, no per-project config for every agent.

## Demo

> *Claude, Codex — search · switch projects · global search · validate & generate. One setup.*

<details>
<summary>CLI demo</summary>

> *`alcove search` · project switch · `--scope global` · `alcove validate`*

</details>

## The problem

Your AI agent starts every session from zero.

It doesn't know your architecture. It ignores constraints from decisions you already made. It asks you to explain the same things every session.

The context window is the bottleneck. Every token costs money and attention. Loading 10 architecture docs into context wastes 50K+ tokens on every run — and Anthropic's own docs warn that bloated config files make agents *ignore your actual instructions*.

So you have three bad options:

**Stuff everything into agent config** — every file loads into…
