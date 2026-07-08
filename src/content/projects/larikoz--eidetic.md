---
repo: "LARIkoz/eidetic"
name: "eidetic"
description: "Claude Code memory system — auto context injection, drift detection, compounding, FTS5/vector search, Obsidian vault export. Zero core deps."
readmeQualityOk: true
url: "https://github.com/LARIkoz/eidetic"
homepage: "https://github.com/LARIkoz/eidetic#readme"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["ai-memory", "claude-code", "claude-hooks", "fts5", "knowledge-management", "long-term-memory", "sqlite", "zettelkasten", "context-engineering", "developer-tools"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-21T08:02:44Z"
lastCommitAt: "2026-07-08T05:41:59Z"
lastReleaseAt: "2026-06-20T18:31:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8bcf603f889eed484b2931ed3956d11fc8327ee049e2b10e728e247502cc61e2/LARIkoz/eidetic"
discussionCount: 0
---

🇬🇧 **English** · [🇷🇺 Русский](https://github.com/LARIkoz/eidetic/blob/HEAD/README.ru.md)

# Eidetic

**Long-term memory for AI coding agents — that knows when its memories go bad.**

> [What is it?](#what-is-it) · [Why](#why-eidetic) · [Install](#install) · [How to use it](#how-to-use-it) · [How it works](#how-it-works) · [Features](#features) · [Compare](#comparison)

---

## What is it?

Eidetic gives an AI coding agent **long-term memory** that lives in plain Markdown files and is searched with hybrid FTS5 + vector search. One engine, **two kinds of memory**:

- **Personal memory (PUSH)** — your own decisions, rules, and project context. **The agent writes its own memory:** at every session end a small LLM pulls the decisions, rules, and lessons out of the transcript and files them as cards (`agent-extracted`, 0.5× weight) — your memory grows from just working. It **auto-injects** into every Claude Code session (recallable on demand from any MCP agent too) and **compounds** — updating existing notes instead of piling up duplicates.
- **Topic bases (PULL)** — an external corpus (API docs, a methodology, a book) you turn into an isolated base and **attach only to the projects…
