---
repo: "bobmatnyc/trusty-tools"
name: "trusty-tools"
description: "Unified Rust workspace for the trusty-* AI developer-tooling ecosystem: hybrid code search, memory palace, code analysis, PR review, and the MPM multi-agent platform — MCP servers, daemons & CLIs."
readmeQualityOk: true
url: "https://github.com/bobmatnyc/trusty-tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-tools", "claude", "code-search", "developer-tools", "llm", "mcp", "memory", "rust", "vector-search"]
stars: 11
forks: 4
openIssues: 228
closedIssues: 921
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-19T21:45:45Z"
lastCommitAt: "2026-07-05T20:17:11Z"
lastReleaseAt: "2026-06-10T04:00:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["bobmatnyc", "bob-duetto"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fbd3dacf1a413d373782f7727f54dd950f460214edf1abbd2fc3b577c75928d/bobmatnyc/trusty-tools"
discussionCount: 1
---

# trusty-tools

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

**MCP tools:** `search_code`, `search_similar`, `index_file`, `remove_file`, `list_indexes`, `create_index`,…
