---
repo: "zycaskevin/Vault-Agent-Memory"
name: "Vault-Agent-Memory"
description: "Local-first memory governance for AI agents: shared, reviewable, auditable memory via SQLite and MCP."
url: "https://github.com/zycaskevin/Vault-Agent-Memory"
homepage: "https://zycaskevin.github.io/Vault-Agent-Memory/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["knowledge-base", "llm", "local-first", "mcp-server", "rag", "sqlite", "sqlite-vec", "trust-scoring", "agent-memory", "ai-agents"]
stars: 40
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-16T13:39:32Z"
lastCommitAt: "2026-07-04T06:12:22Z"
lastReleaseAt: "2026-06-21T14:28:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["zycaskevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/053db55139dc50b760dc4a0b5b0be395fcb9fdd05b1fecce4dcc2ddf424fe19e/zycaskevin/Vault-Agent-Memory"
---

# Vault Agent Memory

[English](README.md) | [繁體中文](README.zh-Hant.md) | [简体中文](README.zh-CN.md)

Local-first memory governance for AI agents.

Vault Agent Memory gives Codex, Claude Code, Hermes, OpenClaw, n8n, Coze, and
other agents one governed memory vault to share. It is not trying to be another
notes app or vector database. It helps agents decide what should be remembered,
who can use it, whether it is still current, and how to roll it back when it is
wrong.

The Python package and existing install path remain `vault-for-llm`.

Vault is for people already building or working with agents. The main interface
should still not be a long CLI manual: ask an agent to install Vault, answer a
few setup questions, then read a short daily memory report.

New here? Start with the visual demo:
[`docs/landing/index.html`](docs/landing/index.html).

## 30-Second Version

Vault Agent Memory exists because agent memory fails in practical ways:

- a new session acts like it joined the project on day one
- bug fixes stay buried in chat history
- old notes outrank newer decisions
- private observations leak into shared project memory
- teams cannot tell which memory was reviewed, trusted, or…
