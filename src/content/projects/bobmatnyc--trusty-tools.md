---
repo: "bobmatnyc/trusty-tools"
name: "trusty-tools"
description: "Unified Rust workspace for the trusty-* AI developer-tooling ecosystem: hybrid code search, memory palace, code analysis, PR review, and the MPM multi-agent platform — MCP servers, daemons & CLIs."
readmeQualityOk: true
url: "https://github.com/bobmatnyc/trusty-tools"
homepage: "https://trustytools.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai-tools", "claude", "code-search", "developer-tools", "llm", "mcp", "memory", "rust", "vector-search"]
stars: 22
forks: 7
openIssues: 285
closedIssues: 4918
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-19T21:45:45Z"
lastCommitAt: "2026-10-10T10:04:07Z"
lastReleaseAt: "2026-06-10T04:00:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["bobmatnyc", "mac-duetto"]
openGraphImageUrl: "https://opengraph.githubassets.com/25cd6bbd9dbba57e10381b51a56e218d9eb1b9b5dcbad9327e3f9d274db2d0ed/bobmatnyc/trusty-tools"
discussionCount: 1
---

# trusty-tools

**Website: [trustytools.dev](https://trustytools.dev/)**

Unified Rust workspace consolidating the entire trusty-* AI tooling ecosystem.
It combines code search, memory, analysis, orchestration, review, and
operator interfaces in one Cargo workspace. The live package inventory comes
from `cargo metadata`; the human-readable map is
[docs/reference/crate-map.md](https://github.com/bobmatnyc/trusty-tools/blob/HEAD/docs/reference/crate-map.md).

| Crate | What it is | Install / run |
|---|---|---|
| [trusty-mpm](#trusty-mpm--meta-harness-multi-agent-orchestration) | PM-style multi-agent orchestration over coding work | `cargo install trusty-mpm --version 1.8.0 --locked && tm start` |
| [trusty-memory](#trusty-memory--memory-palace-storage-engine) | Long-term memory storage with semantic search and an embedded UI | `cargo run -p trusty-memory -- serve` |
| [trusty-search](#trusty-search--hybrid-code-search) | Machine-wide hybrid code search — BM25 + vector + KG fusion, MCP server | `cargo install trusty-search && trusty-search start` |
| [trusty-review](#trusty-review--llm-backed-pr-review) | LLM-backed review of GitHub PRs and diffs via AWS Bedrock or OpenRouter |…
