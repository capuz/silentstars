---
repo: "TinySuiteHQ/TinyContext"
name: "TinyContext"
description: "Shrink the memory space for your agents! Token-efficient, fast and fully local long-term memory with semantic recall. Open-source MCP server for AI agents."
readmeQualityOk: true
url: "https://github.com/TinySuiteHQ/TinyContext"
homepage: "https://tinysuite.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-30T08:43:06Z"
lastCommitAt: "2026-10-29T10:36:49Z"
lastReleaseAt: "2026-10-08T11:10:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 60
maintainers: ["MarcellM01", "benmaster82", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1284842191/3508bdca-7db5-4da1-bd58-6bfe7e4854a8"
---

# TinyContext

  TinyContext is a token-light local memory layer for AI agents. It recalls
  only the memories that fit your token budget.

  ·
  ·
  ·

TinyContext stores concise memories and their embeddings in SQLite, ranks them
with hybrid BM25 and dense retrieval, and returns only the context that fits
the requested token budget.

No hosted account. No giant context dumps. No required vector database.

TinyContext is part of [TinySuite](https://tinysuite.dev), small, practical
open-source tools for AI workflows, built in Europe and maintained with care.

## Choose a tier

| Tier | Use it when | Entry point |
| --- | --- | --- |
| Python library | You are building an agent or Python application | `pip install tinysuite-context` |
| One-command MCP | An MCP client should launch TinyContext for you | `uvx --python 3.12 --from "tinysuite-context[server]" tinycontext` |
| Docker | You want persistent self-hosted storage and HTTP MCP | `docker compose ... up -d` |

The Python library contains the memory engine. MCP, FastAPI, and Docker are
adapters around the same `save_memories`, `recall_memories`, and
`delete_memory` operations.

## One-command MCP

Add TinyContext to any stdio…
