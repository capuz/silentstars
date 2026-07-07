---
repo: "CaspianG/wavemind"
name: "wavemind"
description: "Local-first dynamic memory for agents and apps: SQLite source of truth, vector search candidates, hotness, decay, TTL, namespaces, and benchmarks."
readmeQualityOk: true
url: "https://github.com/CaspianG/wavemind"
homepage: "https://pypi.org/project/wavemind/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "langchain", "llm", "memory", "python", "rag", "sqlite", "vector-search", "agent-memory", "dynamic-memory"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-17T19:41:59Z"
lastCommitAt: "2026-07-07T06:38:30Z"
lastReleaseAt: "2026-07-05T15:14:53Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 68
maintainers: ["CaspianG", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd9919cd966331a04ae4df85d8dc1e5747c029a8f091d4172333829843f72d5f/CaspianG/wavemind"
discussionCount: 3
---

# WaveMind

**Local-first dynamic memory for apps, agents, notebooks, and tools.**

WaveMind stores memories in SQLite, finds relevant candidates with vector
search, then uses a wave-field priority layer to decide what still matters:
hot facts rise, stale facts fade, temporary facts expire, and namespaces keep
users or projects isolated.

[Quick Start](#quick-start) |
[CLI](#cli-cheat-sheet) |
[Studio](#wavemind-studio) |
[Python Example](#python-example) |
[HTTP Example](#http-example) |
[Where Data Lives](#where-data-lives) |
[LangChain](#langchain-memory) |
[Chroma Migration](https://github.com/CaspianG/wavemind/blob/HEAD/docs/CHROMA_MIGRATION.md) |
[Use Cases](https://github.com/CaspianG/wavemind/blob/HEAD/docs/USE_CASES.md) |
[HTTP API](#http-api) |
[Benchmarks](#benchmark) |
[Benchmark Brief](https://github.com/CaspianG/wavemind/blob/HEAD/docs/BENCHMARK_BRIEF.md) |
[Research Branches](#research-branches) |
[Roadmap](#roadmap) |
[Contributing](#contributing) |
[Limitations](#known-limitations)

</div>

## What Is WaveMind?

WaveMind is a dynamic memory engine you can embed in a product.

Use it when your app needs to remember things like user preferences, decisions,…
