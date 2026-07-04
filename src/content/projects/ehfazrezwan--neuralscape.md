---
repo: "ehfazrezwan/neuralscape"
name: "neuralscape"
description: "Neuralscape - Agentic Memory Layer combining getzep/graphiti and mem0"
url: "https://github.com/ehfazrezwan/neuralscape"
language: "Python"
languages: ["Python"]
languagePcts: [62]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 44
recentReleases: 0
createdAt: "2026-02-10T00:05:28Z"
lastCommitAt: "2026-07-04T06:13:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["ehfazrezwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/19b92c5e3707462166c820f1f0f1197f289a6ce8c4d62a0ba4b0a284bf288faf/ehfazrezwan/neuralscape"
---

# Neuralscape - Agentic Memory Layer

A production-grade memory system for AI coding assistants and personal agents. Neuralscape gives any LLM-powered agent persistent, structured memory across sessions and projects — remembering user preferences, project conventions, technical decisions, and learned facts.

Built on [mem0](https://github.com/mem0ai/mem0) (vector storage + LLM deduplication) and [Graphiti](https://github.com/getzep/graphiti) (temporal knowledge graph), exposed via REST API and MCP server. Memory writes are processed asynchronously by background workers via [ARQ](https://github.com/python-arq/arq) + Redis.

> **Looking for the comprehensive reference?** See [`docs/neuralscape/`](./docs/neuralscape/) for 12 pages covering architecture, schemas, plugin internals, deployment, and more. Start at [`00-overview.md`](./docs/neuralscape/00-overview.md) or jump straight to [`01-getting-started.md`](./docs/neuralscape/01-getting-started.md) for the full setup walkthrough.

## Prerequisites

- **Python 3.10+** and **uv** (for local development)
- **Docker** + **Docker Compose** (for containerized deployment)
- **Google API key** with Gemini access (for LLM extraction +…
