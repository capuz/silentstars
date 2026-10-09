---
repo: "tonydzi/sqlite-graph-memory"
name: "sqlite-graph-memory"
description: "Graph RAG on SQLite for AI agents: vector retrieval + hand-curated wikilink graph + cross-encoder rerank, with a zero-token per-turn memory ledger. Working pilot."
readmeQualityOk: true
url: "https://github.com/tonydzi/sqlite-graph-memory"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-memory", "claude-code", "graph-rag", "llm-agents", "obsidian", "rag", "sqlite", "ai-agents", "knowledge-graph", "mcp"]
stars: 9
forks: 6
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-07-03T21:49:15Z"
lastCommitAt: "2026-10-09T18:55:51Z"
lastReleaseAt: "2026-10-02T19:09:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["tonydzi", "Kaap10", "Deva4287"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1288697614/ebf179de-9f9f-48c2-9d34-5f0e2eef48f9"
discussionCount: 0
---

# sqlite-graph-memory

**Your agent forgets everything between sessions, and plain vector search gives it back
flat, unrelated chunks. This gives it associative recall over your own markdown notes —
one SQLite file, no graph database, no ETL pass, no server.**

```bash
pip install sqlite-graph-memory
```

> The first PyPI release has not landed yet (the publish workflow is in place).
> Until it does: `pip install git+https://github.com/tonydzi/sqlite-graph-memory`
> — same package, same five commands.

Graph RAG on SQLite for AI agents — a working pilot, not a framework. It is the extracted
memory layer of a personal "second brain" agent setup: vector search finds the entry
points, the `[[wikilinks]]` you already wrote by hand are the graph, and a cross-encoder
reranks what the hop dragged in.
SQLite is the only database ([`schema.sql`](https://github.com/tonydzi/sqlite-graph-memory/blob/HEAD/src/sqlite_graph_memory/schema.sql)).

Status: **pilot**, and the word is load-bearing: it runs daily in one real setup (a ~100k-note
Obsidian vault driven by Claude Code), but it is deliberately minimal and makes no attempt
to be general — see [What's intentionally…
