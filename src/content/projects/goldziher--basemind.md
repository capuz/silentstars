---
repo: "Goldziher/basemind"
name: "basemind"
description: "Full AI context and content layer for coding agents over one MCP server — tree-sitter code-map, document RAG, shared memory, multi-agent comms, web crawl, git history + blame. 300+ languages, 10+ agent harnesses, pure Rust."
readmeQualityOk: true
url: "https://github.com/Goldziher/basemind"
homepage: "https://basemind.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["agent-context", "code-intelligence", "code-map", "lancedb", "mcp", "rag", "tree-sitter", "vector-search", "web-crawler", "claude"]
stars: 125
forks: 25
openIssues: 19
closedIssues: 264
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2024-06-01T11:56:53Z"
lastCommitAt: "2026-11-27T12:56:03Z"
lastReleaseAt: "2026-06-18T16:38:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 48
maintainers: ["Goldziher", "MaxonT"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/809000718/06af399b-400f-4096-b94d-d69ee8e0d95e"
discussionCount: 2
---

**The context and communication layer for coding agents.**

[Docs](https://basemind.ai) · [Quickstart](#quickstart-60-seconds) · [Install](#installation) · [For teams](#for-teams) · [How it works](#how-it-works) · [Security](https://github.com/Goldziher/basemind/blob/HEAD/SECURITY.md)

---

- **Fewer tokens.** An agent reads a file's outline, one symbol's body or a list of call sites
  instead of opening and grepping whole files.
- **Answers with paths and lines.** Every result names the file, the 1-based line and the
  signature, so the agent reads only the span it needs.
- **Coordination.** Agents on one machine, in any harness and any repository, post to shared
  threads and read their own inbox.

## Quickstart (60 seconds)

In a Claude Code session (not your shell), at the repository root:

```text
/plugin marketplace add Goldziher/basemind
/plugin install basemind@basemind
```
