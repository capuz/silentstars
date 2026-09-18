---
repo: "markhuangai/dense-mem"
name: "dense-mem"
description: "Self-hosted AI agent memory server with MCP, evidence provenance, typed claims, conflict detection, embeddings, recall, PostgreSQL, and pgvector"
readmeQualityOk: true
url: "https://github.com/markhuangai/dense-mem"
homepage: "https://markhuang.ai/blog/ai-memory-beyond-rag"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["agent-memory", "ai-memory", "conflict-detection", "docker", "embeddings", "golang", "knowledge-graph", "llm-memory", "mcp", "mcp-server"]
stars: 39
forks: 6
openIssues: 25
closedIssues: 149
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-04-13T21:31:57Z"
lastCommitAt: "2026-09-18T14:02:34Z"
lastReleaseAt: "2026-05-30T19:07:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 41
maintainers: ["Z-M-Huang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f34cc9e6e001d6dc43726abd035813a78aad37fd8b94b2e5ec9fb57c0a0aed32/markhuangai/dense-mem"
discussionCount: 2
---

<h1 align="center">Dense-Mem</h1>

</p>

</p>

  <strong>Self-hosted MCP memory with durable evidence, explicit lifecycle, and support-gated recall.</strong>
</p>

</p>

</p>

Dense-Mem is a standalone HTTP MCP memory server using Streamable HTTP. It
stages exact evidence, derives semantic state through validated server policy,
and returns active evidence contexts with graph-shaped Relationship handles.
PostgreSQL is the durable authority for knowledge, lifecycle, provenance,
search, authorization, and audit; Redis is coordination only. A single-node
deployment may use process-local coordination; a multi-instance deployment
requires Redis or an equivalent distributed coordination implementation.

The host LLM owns conversation and judgment. Dense-Mem owns durable evidence,
owner authorization, lifecycle events, support eligibility, and bounded recall.
The external memory automation contract is MCP at `/mcp`; browser routes are
first-party interfaces, not an alternative public automation API.

Dense-Mem is part of the research preprint
[Governed Enterprise AI Memory Beyond RAG: From Vector Retrieval to Permissioned
Knowledge Graphs](https://zenodo.org/records/21403316).

## Try the…
