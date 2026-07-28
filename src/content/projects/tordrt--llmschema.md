---
repo: "tordrt/LLMSchema"
name: "LLMSchema"
description: "Generate database schema documentation for LLM's and AI agents."
readmeQualityOk: true
url: "https://github.com/tordrt/LLMSchema"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["agentic-workflow", "database", "documentation-generator", "golang", "markdown"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-10-02T06:14:04Z"
lastCommitAt: "2026-07-28T14:54:26Z"
lastReleaseAt: "2026-07-28T13:58:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["tordrt"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4f8965aec7a4a552163f02d5029a07966e8cb9df885afbc3f6203998ae04fbf/tordrt/LLMSchema"
---

# LLMSchema

**Simple database schema docs for LLMs and AI agents.**

LLMSchema extracts database schemas from PostgreSQL, MySQL, and SQLite into
simple, concise Markdown documentation. [See example output](#output-format).

## Why?

AI coding agents need an accurate understanding of your database schema to work effectively on your application. Without dedicated schema documentation, they often have to reconstruct it from application code and migration histories—a slower and less reliable use of context.

LLMSchema extracts the essentials—tables, columns, types, indexes, constraints, and relationships—into concise Markdown. It produces a single portable document by default, with optional per-table files for larger schemas.

This gives AI agents a clear and concise understanding of your data model without overwhelming their context window with irrelevant details.

> **Note:** This tool is intended for development databases to aid AI-assisted coding. Do not rely on it for production-critical documentation.

## Installation

### CLI Tool

**With Go installed:**
```bash
go install github.com/tordrt/llmschema/cmd/llmschema@latest
```

**Quick install (macOS/Linux):**
```bash
curl -fsSL…
