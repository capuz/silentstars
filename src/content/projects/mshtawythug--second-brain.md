---
repo: "mshtawythug/second-brain"
name: "second-brain"
description: "Local-first personal knowledge base CLI — hybrid FTS + pgvector search, a GraphRAG entity graph, and LLM enrichment over your notes, transcripts, Slack & Gmail. Runs fully local on Ollama (no cloud, no API keys); queryable by any AI agent through the built-in MCP server. Postgres-backed, publishes an Obsidian-style Quartz wiki."
readmeQualityOk: true
url: "https://github.com/mshtawythug/second-brain"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["cli", "embeddings", "graphrag", "hybrid-search", "knowledge-base", "local-ai", "local-first", "mcp", "mcp-server", "note-taking"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-14T22:01:26Z"
lastCommitAt: "2026-10-30T10:22:27Z"
lastReleaseAt: "2026-08-08T12:38:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["mshtawythug"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f25528528cc6cb95d359b6b0daef1062d1694c1165d6c22443195ef561624d1/mshtawythug/second-brain"
discussionCount: 2
---

# Second Brain

Local, queryable knowledge base and note vault with hybrid search and an entity-graph layer — searchable by any AI coding agent or assistant from any conversation.

Stores career docs, interview prep, Krisp transcripts, Slack threads, Gmail, and authored Markdown notes in Postgres + pgvector. Any agent reaches all of it through the `brain` CLI or the bundled `brain-mcp` MCP server — no re-pasting context into every chat. You read it through the CLI or the [local web UI](#local-web-ui), and the [vault](https://github.com/mshtawythug/second-brain/blob/HEAD/docs/vault.md) is plain Markdown you can open in any editor.

The everyday loop — capture a note, search it back, read the top hit, check the corpus:

## Token savings

Querying `brain` returns a ranked snippet instead of dumping whole threads and files into an agent's context, so a lookup costs a fraction of the tokens a direct MCP or file read would:

| Source | Direct read (MCP / `Read` tool) | Via `brain` (search + optional `show`) | Savings |
|---|---|---|---|
| **Gmail thread** | 15–50k (metadata + full threads with quoted replies / headers) | ~2–4k (snippets + one targeted `brain show`) | **~5–15×** |
|…
