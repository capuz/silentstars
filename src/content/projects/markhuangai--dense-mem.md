---
repo: "markhuangai/dense-mem"
name: "dense-mem"
description: "Self-hosted AI agent memory server with MCP, evidence provenance, typed claims, conflict detection, embeddings, recall, PostgreSQL, and Neo4j."
readmeQualityOk: true
url: "https://github.com/markhuangai/dense-mem"
homepage: "https://markhuang.ai/blog/ai-memory-beyond-rag"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["agent-memory", "ai-memory", "conflict-detection", "docker", "embeddings", "golang", "knowledge-graph", "llm-memory", "mcp", "mcp-server"]
stars: 34
forks: 5
openIssues: 4
closedIssues: 26
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-04-13T21:31:57Z"
lastCommitAt: "2026-07-23T06:15:32Z"
lastReleaseAt: "2026-05-30T19:07:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 48
maintainers: ["Z-M-Huang", "JoshKappler"]
openGraphImageUrl: "https://opengraph.githubassets.com/e77fc79c734ddfc8c883c92e2bcf756b1e8a33104b3fd7f69231af67191fc6f7/markhuangai/dense-mem"
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
REST/OpenAPI, a user portal with graph inspection, and a token-protected control
portal. The host LLM owns conversation and judgment; Dense-Mem owns durable
memory state and returns structured outcomes the host can explain to users.

Under the hood, Dense-Mem is a standalone HTTP MCP memory server. HTTP MCP is
the v1 supported MCP transport and is served at `/mcp` from the main HTTP
process.

Dense-Mem is part of the research preprint
[Governed Enterprise AI Memory Beyond RAG: From Vector Retrieval to Permissioned
Knowledge Graphs](https://zenodo.org/records/21403316).

## Project Intro

  </a>
</p>

</p>

## Try the Hosted Demo

Create a temporary isolated team at…
