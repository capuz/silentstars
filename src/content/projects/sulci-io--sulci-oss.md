---
repo: "sulci-io/sulci-oss"
name: "sulci-oss"
description: "The semantic cache for LLM apps and Agentic AI. Open source, Apache 2.0. sulci.io"
readmeQualityOk: true
url: "https://github.com/sulci-io/sulci-oss"
homepage: "https://sulci.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agents", "ai-agents", "cache", "embeddings", "langchain", "llamaindex", "llm", "mcp-server", "python", "rag"]
stars: 11
forks: 1
openIssues: 44
closedIssues: 35
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-03-09T22:10:01Z"
lastCommitAt: "2026-11-06T12:17:04Z"
lastReleaseAt: "2026-10-31T17:56:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 60
maintainers: ["sulci-cache"]
openGraphImageUrl: "https://opengraph.githubassets.com/783d38ba366fd5c2aeec93eee58f6767561fc1014907826973fc378c4eedbae0/sulci-io/sulci-oss"
discussionCount: 2
---

# Sulci Cache

**The AI native context-aware semantic caching for LLM apps — stop paying for the same answer twice**

Sulci Cache is a drop-in Python library that caches LLM responses by **semantic meaning**, not exact string match. When a user asks _"How do I deploy to AWS?"_ and someone else later asks _"What's the process for deploying on AWS?"_, Sulci Cache returns the cached answer instead of calling the LLM again — saving cost and latency.

---

## Why Sulci Cache

| Without Sulci Cache          | With Sulci Cache                                         |
| ---------------------------- | -------------------------------------------------------- |
| Every query hits the LLM API | Semantically similar queries return instantly from cache |
| Every call is billed by your LLM provider | Cache hits need a local embedding, not an LLM call |
| Every call waits on the model | Cache hits: ~87 ms p50 on the benchmark machine (below)  |
| No memory across sessions    | Context-aware lookups: recent conversation turns are blended into the lookup |

**Benchmark results — measured on the shipped MiniLM embedder**, 5,000-query
corpus, `threshold=0.85`. Ranges are across four seeded draws…
