---
repo: "IngvarConsulting/unica"
name: "unica"
description: "Unica (Ю́ника) — public Codex and Claude Code plugin for development on 1С:Предприятие."
originalDescription: "Unica (Ю́ника) — публичный плагин Codex и Claude Code для разработки на 1С:Предприятии."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/IngvarConsulting/unica"
homepage: "https://ingvarconsulting.github.io/unica/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["1c-enterprise", "claude-code-plugin", "codex-plugin", "mcp", "skills"]
stars: 231
forks: 35
openIssues: 372
closedIssues: 608
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-05-02T10:32:15Z"
lastCommitAt: "2026-10-26T02:45:42Z"
lastReleaseAt: "2026-06-22T12:10:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 27
maintainers: ["zeegin", "korolevpavel", "VictorMurashkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e434aa1116e93fc49c3f21ec84041f562e543ccfd514f4046e9975e8c726ec/IngvarConsulting/unica"
---

# Unica

Unica (Ю&#x301;ника) is a plugin for [Codex](https://openai.com/codex/),
[Claude Code](https://code.claude.com/docs/en/overview), and ZCode for development on
1С:Предприятие. It adds skills and a single MCP server `unica`, through which the agent creates and validates metadata, forms, roles, СКД, external processors and reports, launches 1С, and searches BSL code.

All three hosts receive the same plugin directory: the manifests sit alongside each other, and `.mcp.json` determines the plugin root from the variable that each specific host substitutes.

## Requirements

- one of the agents:
  - [Codex CLI](https://learn.chatgpt.com/docs/codex/cli);
  - [Claude Code](https://code.claude.com/docs/en/overview);
  - ZCode Desktop with `.zcode-plugin` support (contract verified for 3.14.4);
- standard Git, including Git for Windows on Windows;
- 1С platform only for operations that actually require running 1С.

### Supported 1С platform versions

| Platform version | Status | What it means |
| --- | --- | --- |
| `8.5.1.x`, `8.5.4.x` | Planned | We want to add these in the near future. |
| `8.3.27.x` | Supported | Unica supports all current releases of the 8.3.27 branch. |
|…
