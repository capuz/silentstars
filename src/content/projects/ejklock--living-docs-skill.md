---
repo: "ejklock/living-docs-skill"
name: "living-docs-skill"
description: "Living Docs —  a AI agent skill that runs your project's documentation as a living system: constitution, ADRs, BDRs, PRDs, issues, research notes & Mermaid architecture diagrams under five no-drift governance invariants. OKF-formatted, stack-agnostic. Works with Claude Code, Cursor, Copilot, OpenCode & Pi."
readmeQualityOk: true
url: "https://github.com/ejklock/living-docs-skill"
homepage: "https://github.com/ejklock/living-docs-skill"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["adr", "agent-skills", "ai-agents", "architecture-decision-records", "bdr", "claude-code", "claude-skill", "cursor", "docs-as-code", "documentation"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-19T21:32:09Z"
lastCommitAt: "2026-11-27T16:31:04Z"
lastReleaseAt: "2026-08-13T23:12:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["ejklock"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d0d8bac8f5b6ca0767dec5040df319a338cfa76eedc31c916838810fe2bb344/ejklock/living-docs-skill"
---

# Living Docs

**Run a project's engineering decisions as a living log — not a write-once artifact that rots.**

> **This is an experiment and it changes constantly.** Verbs and record formats may
> change between releases without a deprecation window — see ADR 0059 for the latest
> cut. Pin a release tag rather than tracking `main` if you need stability.

Living Docs is an **AI agent skill** for **documentation-as-code** that keeps a
codebase's decision log in sync with its code. It works with **Claude Code**, **Cursor**,
**GitHub Copilot**, **OpenCode**, **Codex**, and **Pi** — any agent that loads
markdown "skills" / instruction files. It is stack-agnostic: it governs *how* decisions
are recorded and maintained (Architecture Decision Records, issues, research notes, an
optional PRD, a constitution, living [Mermaid](https://mermaid.js.org/) architecture
views), never *what* technology a project uses.
