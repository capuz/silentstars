---
repo: "memtomem/memtomem"
name: "memtomem"
description: "Markdown-first, long-term memory infrastructure for AI agents. Hybrid BM25 + semantic search across markdown/code files via MCP."
url: "https://github.com/memtomem/memtomem"
homepage: "https://memtomem.com"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["agent", "ai", "bm25", "claude", "embedding", "knowledge-management", "llm", "markdown", "mcp", "memory"]
stars: 10
forks: 24
openIssues: 17
closedIssues: 403
watchers: 1
contributors: 19
recentReleases: 10
createdAt: "2026-03-28T06:33:51Z"
lastCommitAt: "2026-07-02T06:33:24Z"
lastReleaseAt: "2026-04-13T13:40:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 75
maintainers: ["memtomem", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/056e0110fa10fecc9e192bad6026945bf48d0c9f2e0dbc471907f5a6eeb1609e/memtomem/memtomem"
discussionCount: 1
---

# memtomem

> Markdown-first long-term memory for AI coding agents — your data, your quota, no hooks.

> 🚧 **Alpha** — APIs, defaults, and on-disk config surfaces may still change between `0.x` releases. Feedback and issue reports are especially welcome: [Issues](https://github.com/memtomem/memtomem/issues) · [Discussions](https://github.com/memtomem/memtomem/discussions).

</p>

memtomem turns your markdown notes, documents, and code into a searchable knowledge base that any AI coding agent can use. Write notes as plain `.md` files — memtomem indexes them and makes them searchable by both keywords and meaning.

```mermaid
flowchart LR
    A["Your files\n.md .json .py"] -->|Index| B["memtomem"]
    B -->|Search| C["AI agent\n(Claude Code, Cursor, etc.)"]
```

> **First time here?** Follow the [Getting Started](docs/guides/getting-started.md) guide — you'll have a working setup in under 5 minutes.

---

## Why memtomem?

| Problem | How memtomem solves it |
|---------|------------------------|
| AI forgets everything between sessions | Index your notes once, search them in every session |
| Keyword search misses related content | Hybrid search: exact keywords + meaning-based…
