---
repo: "IngvarConsulting/unica"
name: "unica"
description: "Unica (Ю́ника) — a public plugin for Codex and Claude Code for 1C:Enterprise development."
originalDescription: "Unica (Ю́ника) — публичный плагин Codex и Claude Code для разработки на 1С:Предприятии."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/IngvarConsulting/unica"
homepage: "https://ingvarconsulting.github.io/unica/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["1c-enterprise", "claude-code-plugin", "codex-plugin", "mcp", "skills"]
stars: 249
forks: 36
openIssues: 420
closedIssues: 710
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-05-02T10:32:15Z"
lastCommitAt: "2026-11-08T14:05:40Z"
lastReleaseAt: "2026-06-22T12:10:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 28
maintainers: ["zeegin"]
openGraphImageUrl: "https://opengraph.githubassets.com/784d5c81b90a45efd081ef860cad8287ec7543f9c555c09140c50c59ff7d7da1/IngvarConsulting/unica"
discussionCount: 1
---

# Unica

Unica (Ю&#x301;ника) — a plugin for [Codex](https://openai.com/codex/),
[Claude Code](https://code.claude.com/docs/en/overview) and ZCode for 1C:Enterprise development. It adds skills and a single MCP server `unica`, through which the agent creates and validates metadata, forms, roles, SKD, external data processors and reports, runs 1C, and searches BSL code.

All three hosts receive the same plugin directory: the manifests sit alongside each other, and `.mcp.json` determines the plugin root from the variable that each specific host substitutes.

## Requirements

- one of the agents:
  - [Codex CLI](https://learn.chatgpt.com/docs/codex/cli);
  - [Claude Code](https://code.claude.com/docs/en/overview);
  - ZCode Desktop with `.zcode-plugin` support (contract verified for 3.14.4);
- standard Git, including Git for Windows on Windows;
- a 1C platform only for operations that actually require running 1C.

### Supported 1C platform versions

| Platform version | Status | What it means |
| --- | --- | --- |
| `8.5.1.x`, `8.5.4.x` | Planned | We want to add these in the near future. |
| `8.3.27.x` | Supported | Unica supports all current releases of the 8.3.27 branch. |
|…
