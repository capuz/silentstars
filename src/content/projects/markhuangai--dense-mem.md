---
repo: "markhuangai/dense-mem"
name: "dense-mem"
description: "Self-hosted AI agent memory server with MCP, evidence provenance, typed claims, conflict detection, embeddings, recall, PostgreSQL, and Neo4j."
url: "https://github.com/markhuangai/dense-mem"
homepage: "https://markhuang.ai/blog/ai-memory-beyond-rag"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["agent-memory", "ai-memory", "conflict-detection", "docker", "embeddings", "golang", "knowledge-graph", "llm-memory", "mcp", "mcp-server"]
stars: 30
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-04-13T21:31:57Z"
lastCommitAt: "2026-06-28T02:00:37Z"
lastReleaseAt: "2026-05-30T19:07:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 51
maintainers: ["Z-M-Huang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5fcf9d1e32f4862d6b7fe73b63b161c1f3746996f57703955f2040c7816c4d9/markhuangai/dense-mem"
discussionCount: 1
---

<h1 align="center">Dense-Mem</h1>

</p>

</p>

  <strong>Self-hosted memory for AI agents that preserves evidence, detects conflicts, and never silently rewrites facts.</strong>
</p>

</p>

  <strong>Create a temporary isolated team and test Dense-Mem before self-hosting.</strong>
</p>

</p>

</p>

</p>

Dense-Mem gives MCP clients a durable memory layer with provenance, typed claims
and facts, verification gates, server-side embeddings, recall, team isolation,
REST/OpenAPI, and a token-protected control portal. The host LLM owns
conversation and judgment; Dense-Mem owns durable memory state and returns
structured outcomes the host can explain to users.

Under the hood, Dense-Mem is a standalone HTTP MCP memory server. HTTP MCP is
the v1 supported MCP transport and is served at `/mcp` from the main HTTP
process.

Dense-Mem is part of the research preprint
[Governed Enterprise AI Memory Beyond RAG: From Vector Retrieval to Permissioned
Knowledge Graphs](https://zenodo.org/records/20519039).

## Project Intro

  </a>
</p>

</p>

## Try the Hosted Demo

Create a temporary isolated team at
[https://demo-dense-mem.markhuang.ai](https://demo-dense-mem.markhuang.ai) and
test Dense-Mem…
