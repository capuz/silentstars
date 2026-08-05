---
repo: "memtomem/memtomem"
name: "memtomem"
description: "Markdown-first, long-term memory infrastructure for AI agents. Hybrid BM25 + semantic search across markdown/code files via MCP."
readmeQualityOk: true
url: "https://github.com/memtomem/memtomem"
homepage: "https://memtomem.com"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["agent", "ai", "bm25", "claude", "embedding", "knowledge-management", "llm", "markdown", "mcp", "memory"]
stars: 10
forks: 28
openIssues: 11
closedIssues: 559
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-03-28T06:33:51Z"
lastCommitAt: "2026-08-05T06:07:31Z"
lastReleaseAt: "2026-04-13T13:40:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 68
maintainers: ["memtomem", "dependabot[bot]", "pandas-studio"]
openGraphImageUrl: "https://opengraph.githubassets.com/909a48ecfbb768b4e1f521864cee04429ade245c9647aa68b9aef38bf9d559c6/memtomem/memtomem"
discussionCount: 1
---

# memtomem

> Markdown-first long-term memory for AI coding agents — your files stay yours, and core usage is hook-free by default.

> 🚧 **Alpha** — APIs, defaults, and on-disk config surfaces may still change between `0.x` releases. Feedback and issue reports are especially welcome: [Issues](https://github.com/memtomem/memtomem/issues) · [Discussions](https://github.com/memtomem/memtomem/discussions).

</p>

memtomem turns your markdown notes, documents, and code into a searchable knowledge base that any AI coding agent can use. Write notes as plain `.md` files — memtomem indexes them and makes them searchable by both keywords and meaning.

```mermaid
flowchart LR
    A["Your files\n.md .json .py"] -->|Index| B["memtomem"]
    B -->|Search| C["AI agent\n(Claude Code, Cursor, etc.)"]
```

> **First time here?** Follow the [Getting Started](https://github.com/memtomem/memtomem/blob/HEAD/docs/guides/getting-started.md) guide — you'll have a working setup in under 5 minutes. Claude Code or Codex CLI user? See the [Korean vibe-coding quickstart](https://github.com/memtomem/memtomem/blob/HEAD/docs/guides/vibe-coding-getting-started-ko.md).

---

## Why memtomem?

| Problem | How…
