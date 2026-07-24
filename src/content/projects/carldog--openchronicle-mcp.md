---
repo: "CarlDog/openchronicle-mcp"
name: "openchronicle-mcp"
description: "OpenChronicle is an open-source, self-hosted interaction engine for LLMs that makes conversations durable. It adds persistent memory, deterministic tasking, and auditable decision trails so work doesn’t reset each session. Provider-agnostic by design, it supports multiple interfaces (CLI, Discord, MCP) with explicit, privacy-aware routing."
readmeQualityOk: true
url: "https://github.com/CarlDog/openchronicle-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai", "chatbot", "context-management", "hexagonal-architecture", "llm", "mcp", "memory", "provider-agnostic", "python", "self-hosted"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-16T02:46:42Z"
lastCommitAt: "2026-07-24T06:07:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 72
undervaluedScore: 52
maintainers: ["CarlDog", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68fc59cf06dcddd7a2d995162859548ef7d166085c0611622c4ea0d794808586/CarlDog/openchronicle-mcp"
fundingLinks: ["GITHUB:https://github.com/CarlDog", "KO_FI:https://ko-fi.com/carldog"]
discussionCount: 1
---

# OpenChronicle

 <sub>· claude-fable-5 · 2026-07-06 · [details](https://github.com/CarlDog/openchronicle-mcp/issues/14)</sub>

A memory database for LLM agents. Persistent semantic + keyword
memory, project namespacing, git-onboard, served over HTTP REST and
MCP from a single ASGI process. Runs on your hardware.

## What it does

- **Persistent memory across sessions.** Save decisions, milestones,
  and rejected approaches that survive context compression and new
  conversations. Retrieve them with hybrid full-text and semantic
  search via Reciprocal Rank Fusion.
- **Project namespacing.** Memory is scoped to projects, so context
  for one workstream doesn't leak into another.
- **Git onboarding.** Clone a repo, cluster commits by relatedness,
  return summaries ready for memory ingestion. Seeds long-term memory
  with the WHY behind existing code.
- **One process, two transports.** FastAPI hosts both the REST surface
  (`/api/v1/*`) and the MCP streamable-HTTP transport (`/mcp`) on the
  same port. Single container, single port mapping, single
  healthcheck.
- **Embedding-failure degradation.** When the embedding provider goes
  down, search degrades cleanly to FTS5-only and…
