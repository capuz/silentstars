---
repo: "parttimenerd/hprof-analyzer"
name: "hprof-analyzer"
description: "Fast Java heap dump analyzer, that emulates standard Eclipse MAT views with minimal memory in Rust"
readmeQualityOk: true
url: "https://github.com/parttimenerd/hprof-analyzer"
homepage: "https://parttimenerd.github.io/hprof-analyzer/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["heap-dump-analysis", "java"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-07-14T09:55:32Z"
lastCommitAt: "2026-11-10T09:49:29Z"
lastReleaseAt: "2026-11-03T15:25:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 72
maintainers: ["parttimenerd"]
openGraphImageUrl: "https://opengraph.githubassets.com/389b6645fda46d2a4f6a1a0591504ec2b5d78d13d3c2f9f6af1db331c0fd5c02/parttimenerd/hprof-analyzer"
postedAt: "2026-11-09T12:06:47.127Z"
---

# hprof-analyzer

Heap dump analyzer for JVM applications. Generates MAT-parity reports (leak suspects, retained-size breakdown, OQL queries) with peak RSS well below the dump size for dumps ≥ 1 GiB. One binary covers the full workflow: automated reports, interactive analysis, AI-assisted triage via MCP, heap redaction, and Eclipse MAT cache generation. For dumps up to 3 GB there is also a [browser version](https://parttimenerd.github.io/hprof-analyzer/) that runs entirely in WebAssembly.

*By the [SapMachine](https://sapmachine.io) team.*

## Capabilities at a glance

| Capability | How to use |
|-----------|------------|
| **[Analysis reports](#analysis-reports)** (System Overview, Leak Suspects, Top Consumers, Threads) | `hprof-analyzer heap.hprof report.html` |
| **[OQL queries](#oql-queries)** (SQL-flavoured, MAT-compatible, with extensions) | `hprof-analyzer query heap.hprof --query "..."` |
| **[Cached interactive analysis](#cached-interactive-analysis)** (histogram, dominator tree, inspect objects) | `hprof-analyzer heap summary heap.hprof` |
| **[MCP server](#mcp-server)** (AI-assisted triage in Claude, Cline, and other agents) | `hprof-analyzer mcp` |
| **[HTTP…
