---
repo: "firelock-ai/kin"
name: "kin"
description: "The system of record for AI-written software. A persistent graph of entities, relationships, changes, and provenance, so humans and AI agents see what a change touches before it merges. Beside Git today."
readmeQualityOk: true
url: "https://github.com/firelock-ai/kin"
homepage: "https://kinlab.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai-native", "developer-tools", "graph-database", "mcp", "rust", "tree-sitter", "ai", "ai-agents", "open-source", "semantic"]
stars: 45
forks: 5
openIssues: 4
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-10T21:09:53Z"
lastCommitAt: "2026-08-20T03:40:52Z"
lastReleaseAt: "2026-07-06T13:42:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 45
maintainers: ["troyjr4103", "kin-release-bot[bot]", "kin-workflow-pin[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/118f207a50f3072e6f98daeb5d0556764ae7a886420bfa4f227f96bce3ff3165/firelock-ai/kin"
discussionCount: 1
---

</p>

<h3>The diff is not the change.</h3>

</div>

AI agents can write a change faster than a team can establish what it touches,
whether it reverses an earlier fix, and how far its consequences reach. Git
records files and line history. Kin records the software itself as a graph of
entities, relations, changes, and provenance, then gives humans and agents one
semantic authority to query and review. What a change touches shows up before
it merges, and agents work from exact context instead of re-reading the
repository.

Kin is the semantic system of record for AI-written software. It is a public
alpha, usable today as a local CLI, daemon, MCP server, review surface, and
graph-backed filesystem projection. It is pre-1.0, so expect rough edges and
breaking changes. See the [latest stable release](https://github.com/firelock-ai/kin/releases/latest)
and the [current limitations](#platform-and-maturity) before adopting it in a
critical workflow.

## See it on a real repository

A one-line signature change in ripgrep looks harmless in the diff. Ask
`kin impact` about it, before any compiler runs, and it names what the edit
reaches. The callers of the changed signature come first, then…
