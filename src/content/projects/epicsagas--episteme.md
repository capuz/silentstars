---
repo: "epicsagas/Episteme"
name: "Episteme"
description: "A production-ready knowledge graph system for software engineering that connects design patterns, refactoring techniques, and software laws through semantic relationships. Built for AI agents first — integrate software engineering expertise directly into Claude Code, Cursor, and other MCP-compatible tools."
readmeQualityOk: true
url: "https://github.com/epicsagas/Episteme"
homepage: "https://crates.io/crates/episteme"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["ai-agent", "claude-code", "design-patterns", "knowledge-graph", "mcp", "mcp-server", "refactoring", "rust", "software-engineering"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-04T03:58:25Z"
lastCommitAt: "2026-09-08T08:16:06Z"
lastReleaseAt: "2026-06-12T07:53:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 71
maintainers: ["epicsagas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1f0cdaf5261b5f2ec6b6b31d3ed20c0c61bdf9b3838afae6a9ede3a6cd56a/epicsagas/Episteme"
fundingLinks: ["GITHUB:https://github.com/epicsagas", "BUY_ME_A_COFFEE:https://buymeacoffee.com/epicsaga"]
---

</p>

---

</p>
</p>

  English |
</p>

---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/features.png">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/demo.gif">
</picture>

---

## Quick Start

### Claude Code

```
/plugin marketplace add epicsagas/plugins
/plugin install episteme@epicsagas

# or in your terminal
claude plugin marketplace add epicsagas/plugins
claude plugin install episteme@epicsagas
```

### Codex CLI

```bash
codex plugin marketplace add epicsagas/plugins
codex plugin add episteme@epicsagas
```

### Grok Build

```bash
grok plugin marketplace add epicsagas/plugins
grok plugin install epicsagas/Episteme --trust
```

### agy (Antigravity) / Hermes

agy and Hermes have no install hook, so install the binary first (see [Manual install](#manual-install)), then add the plugin:

```bash
agy plugin install https://github.com/epicsagas/Episteme
agy plugin enable episteme

hermes plugins install https://github.com/epicsagas/Episteme
hermes plugins enable episteme
```

> The Hermes install scanner may flag files in this repo (`AGENTS.md`, `Cargo.toml`, docs) as CRITICAL persistence and block.…
