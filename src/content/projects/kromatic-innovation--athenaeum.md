---
repo: "Kromatic-Innovation/athenaeum"
name: "athenaeum"
description: "Open source knowledge management pipeline — passive recall, append-only intake, tiered compilation, configurable schemas"
readmeQualityOk: true
url: "https://github.com/Kromatic-Innovation/athenaeum"
homepage: "https://kromatic.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "claude-code", "knowledge-management", "llm", "mcp", "memory", "python"]
stars: 11
forks: 4
openIssues: 11
closedIssues: 199
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-04-16T20:45:32Z"
lastCommitAt: "2026-07-24T06:07:57Z"
lastReleaseAt: "2026-07-04T19:57:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["dijkstra-kromatic[bot]", "TriKro"]
openGraphImageUrl: "https://opengraph.githubassets.com/c546da333983f37bdcfbc43bcbb4a3f7f2629666ceb52c462704e40a9f48d0b5/Kromatic-Innovation/athenaeum"
---

# Athenaeum

**Production-tested agentic memory for teams deploying multiple AI agents.**
Append-only intake, a tiered librarian that compiles raw observations into a
trustworthy wiki, and a sidecar that makes recall happen passively on every
turn.

</p>

> **Is this for me?** If you're running more than one agent on shared
> knowledge — or if you want agents and humans reading and writing the same
> institutional memory — yes. If you're building a single-user chatbot,
> [mem0](https://github.com/mem0ai/mem0) or
> [Letta](https://github.com/letta-ai/letta) may be a better fit.

## Why Athenaeum

Four design choices separate a production memory system from a single-user
markdown file. Each one fixes something that quietly breaks when a team scales
past one agent:

1. **[Sources as first-class objects](https://github.com/Kromatic-Innovation/athenaeum/blob/main/docs/why-athenaeum.md#1-sources-are-first-class-objects-trust-but-verify)** — every claim carries provenance, the way Wikipedia does. An unfootnoted fact is an assertion.
2. **[The librarian — a tiered compilation…
