---
repo: "CarlDog/openchronicle-mcp"
name: "openchronicle-mcp"
description: "Memory database for LLM agents — persistent keyword + optional semantic memory, project namespacing, served over HTTP REST and MCP from a single ASGI process. SQLite-backed, packaged as a Docker container. Runs on your hardware."
readmeQualityOk: true
url: "https://github.com/CarlDog/openchronicle-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "hexagonal-architecture", "llm", "mcp", "memory", "python", "self-hosted", "ai-agents", "docker", "embeddings"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-07-16T02:46:42Z"
lastCommitAt: "2026-10-03T22:04:00Z"
lastReleaseAt: "2026-09-29T06:04:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 70
maintainers: ["CarlDog", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/741b178532630419900231e1db462f01b96f45170a99600854712461bee9c7dc/CarlDog/openchronicle-mcp"
fundingLinks: ["GITHUB:https://github.com/CarlDog", "KO_FI:https://ko-fi.com/carldog"]
discussionCount: 1
---

# OpenChronicle

 <sub>· claude-fable-5 · 2026-08-30 · [details](https://github.com/CarlDog/openchronicle-mcp/blob/HEAD/../../issues/27)</sub>

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
  down, search degrades cleanly to…
