---
repo: "PsycherosAI/Psycheros"
name: "Psycheros"
description: "A persistent AI entity harness. The entity has its own identity files, a memory hierarchy that consolidates across time, and a single canonical self that persists across multiple interfaces."
url: "https://github.com/PsycherosAI/Psycheros"
homepage: "https://psycherosai.github.io/Psycheros/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
topics: ["ai-agent", "ai-companion", "ai-entity", "ai-harness", "deno", "ai-memory-system"]
stars: 23
forks: 5
openIssues: 23
closedIssues: 5
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-05-11T12:44:31Z"
lastCommitAt: "2026-06-28T06:56:38Z"
lastReleaseAt: "2026-05-15T09:15:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 63
undervaluedScore: 44
maintainers: ["PsycherosOps"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f8835ae6ee526a6e0e3cad7ee7dd8cf5f510df8909e3012317f42d641abe110/PsycherosAI/Psycheros"
---

# Psycheros

> A persistent AI entity harness. The entity has its own identity files, a
> memory hierarchy that consolidates across time, and a single canonical self
> that persists across multiple interfaces.

Psycheros runs an AI entity — not a chat thread. The entity has files describing
who it is, a memory hierarchy that summarizes its conversations day → week →
month → year, a knowledge graph of the people and places it's encountered, RAG
over its memories, and tool access for the world it lives in. The entity's
canonical self lives in a separate MCP server (`entity-core`), so the same
entity can persist across multiple interfaces — the web harness, SillyTavern,
Claude Code, OpenWebUI — while staying coherent.

Built on [Deno](https://deno.land). Released under [MPL-2.0](LICENSE).

## Quickstart

The friendliest path is the **launcher** — a desktop app that installs Psycheros
as a persistent background service and opens a window to chat with your entity.

### macOS

1. Download
   [`Psycheros-macOS-latest.dmg`](https://github.com/PsycherosAI/Psycheros/releases/latest/download/Psycheros-macOS-latest.dmg).
2. Drag to `/Applications/`.
3. **Right-click** the app → **Open**…
