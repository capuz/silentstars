---
repo: "bobmatnyc/trusty-tools"
name: "trusty-tools"
description: "Unified Rust workspace for the trusty-* AI developer-tooling ecosystem: hybrid code search, memory palace, code analysis, PR review, and the MPM multi-agent platform — MCP servers, daemons & CLIs."
readmeQualityOk: true
url: "https://github.com/bobmatnyc/trusty-tools"
homepage: "https://trusty-tools.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-tools", "claude", "code-search", "developer-tools", "llm", "mcp", "memory", "rust", "vector-search"]
stars: 16
forks: 6
openIssues: 514
closedIssues: 2888
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-19T21:45:45Z"
lastCommitAt: "2026-08-18T04:08:14Z"
lastReleaseAt: "2026-06-10T04:00:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["bobmatnyc", "bob-duetto", "mac-duetto"]
openGraphImageUrl: "https://opengraph.githubassets.com/013a7cf65df6616fe5e3a66e01070f53184ed7bcdd24eb78a37f559adfbf7038/bobmatnyc/trusty-tools"
discussionCount: 1
---

# trusty-tools

**Website: [trustytools.dev](https://trustytools.dev/)**

Unified Rust workspace consolidating the entire trusty-* AI tooling ecosystem.
21 crates of AI development tooling with three flagship MCP servers for code search, memory management, and analysis.

## Three Flagship MCP Servers

### trusty-search — Hybrid Code Search

Machine-wide code search daemon with hybrid BM25 + vector + knowledge-graph fusion, fused via Reciprocal Rank Fusion. One install per machine, unlimited named project indexes.

**What you get:**
- Sub-10ms p50 warm query latency on 100k-chunk indexes
- Intelligent query routing (Definition / Usage / Conceptual / BugDebt intent detection)
- Knowledge graph expansion with caller/callee chains
- Branch-aware search (boost results from your current feature branch)
- Auto-tuned memory tiers (5 tiers from 8 GB to 64+ GB RAM)
- Embedded Svelte 5 admin UI
- OpenRouter-backed chat with auto-injected search context

**Quick start:**
```bash
cargo install trusty-search
trusty-search start
trusty-search index ~/Projects/myproj --name myproj
trusty-search query "fn authenticate" --index myproj
```

**MCP tools:** `search`, `search_lexical`,…
