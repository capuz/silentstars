---
repo: "maadb/maadb"
name: "maadb"
description: "Markdown As A Database — treats markdown as the canonical data store, builds a queryable index, and gives LLMs deterministic read/write access."
readmeQualityOk: true
url: "https://github.com/maadb/maadb"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-07T12:46:42Z"
lastCommitAt: "2026-08-08T04:34:36Z"
lastReleaseAt: "2026-05-02T00:34:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["patchnetluis", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c801ea71cf8ff03ca046a4ae43a66bbc922342bd90fb8dac7df352169060046/maadb/maadb"
---

# MAADb — Markdown As A Database

> **Markdown is the database. The engine makes it queryable.**

MAADb stores records as markdown files with YAML frontmatter for structured fields and body content for narrative. The engine validates schemas, builds a lookup index, and serves the whole thing to LLM agents over MCP. Your data stays in files you can read, grep, and version-control — not behind an opaque database server.

## Why MAADb

- **Markdown is canonical.** Open any record in any text editor — your data is exactly what's on screen, no translation layer.
- **History policy is explicit.** Choose per-write audit commits, a Git-free feed, zero-write reads, batched commits, or annotated snapshots per project. `maad_history` shows available Git history.
- **LLM-native.** Ships with 30+ MCP tools for discovery, read, write, maintenance, and auth. Designed for agent workflows from the start.
- **Optional schemas.** Add YAML schemas when you want structure, skip them when you don't. Validation runs on writes, never on old records.
- **The index is a speed layer.** SQLite stores pointers into your markdown files. Delete it and `maad reindex` rebuilds it from the markdown — your data…
