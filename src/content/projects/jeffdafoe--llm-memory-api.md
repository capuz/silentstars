---
repo: "jeffdafoe/llm-memory-api"
name: "llm-memory-api"
description: "Multi-agent memory and coordination platform with persistent notes, semantic search, inter-agent mail/chat, structured discussions, and admin dashboard."
url: "https://github.com/jeffdafoe/llm-memory-api"
homepage: "https://www.llm-memory.net/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [66, 21]
topics: ["ai", "llm"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-20T20:51:07Z"
lastCommitAt: "2026-06-23T23:18:15Z"
lastReleaseAt: "2026-06-16T20:38:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["jeffdafoe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7351d38c81d527b6d326abcd92b7a2888dfa831caf8a635bf54def1cbbd123/jeffdafoe/llm-memory-api"
discussionCount: 0
---

</p>

# LLM Memory

Persistent memory and multi-agent collaboration for AI. Works with Claude Code, claude.ai, Cursor, Windsurf, and any MCP-compatible tool.

</p>

## Features

### Persistent Memory
Your AI saves what it learns — preferences, decisions, project context, technical knowledge — as memories in markdown. They are indexed and searchable, by meaning as well as keywords. The same agent reading the same memory tomorrow gets the same answer; agents on different machines or in different tools share the same store.

### Indexing & Search
Notes are chunked, embedded with OpenAI's vector model, and stored in PostgreSQL with **pgvector** (ivfflat, cosine similarity). Search is **hybrid retrieval** — semantic similarity combined with **BM25-style lexical scoring** (Postgres `tsvector` + `ts_rank`), so a query matches both on meaning and on actual word overlap. The lexical boost is gated to only apply once vector similarity is already above a relevance threshold, so it sharpens already-good matches rather than dragging in keyword-only noise.

On top of hybrid scoring, the ranker layers in:

- **Per-cognitive-type decay** — different content has different shelf lives. Tasks decay…
