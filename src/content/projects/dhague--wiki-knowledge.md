---
repo: "dhague/wiki-knowledge"
name: "wiki-knowledge"
description: "Git-enhanced LLM-Wiki optimised for LLM efficiency"
readmeQualityOk: true
url: "https://github.com/dhague/wiki-knowledge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 7
forks: 0
openIssues: 17
closedIssues: 216
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-18T19:37:10Z"
lastCommitAt: "2026-09-15T08:54:20Z"
lastReleaseAt: "2026-08-11T18:19:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 60
maintainers: ["dhague"]
openGraphImageUrl: "https://opengraph.githubassets.com/e324a45502da08af0f3e42b9b7bdd05a24e9d8a0881707074ce440f31cfdf75b/dhague/wiki-knowledge"
---

# wiki-knowledge

Personal knowledge management powered by LLM agents. Turns raw documents into a structured, searchable, git-backed markdown wiki vault — then answers questions over it with typed-edge graph traversal and cited synthesis.

Follows the [Karpathy LLM-wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## What's inside

- **wiki-knowledge** — a Claude Code / OpenCode plugin that provides ingestion and retrieval over a markdown wiki vault
- **Agent pipeline** — Claude Sonnet for semantic ingestion (chunking, overlap classification, edge typing); Claude Haiku for retrieval (query expansion, BM25 search, frontier traversal, synthesis) - models are configurable for OpenCode
- **Deterministic script layer** — a single TypeScript bundle for vault I/O, placement, FTS5 search indexing, and commit construction (no model calls, no runtime to install — it runs on the already-installed Node)
- **Full-text search** — SQLite FTS5 via stdlib, zero extra search dependencies

## Install

### Claude Code

1. Add the marketplace entry and install the plugin:
   ```
   /plugin marketplace add dhague/wiki-knowledge
   /plugin install wiki-knowledge
   ```…
