---
repo: "lambda-alpha-labs/Graphenium"
name: "Graphenium"
description: "Provenance-aware structural memory for AI coding agents. Turns your repo into a persistent, queryable graph with confidence on every edge. MCP-native, Rust, MIT."
url: "https://github.com/lambda-alpha-labs/Graphenium"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-coding", "code-analysis", "knowledge-graph", "mcp", "mcp-server", "rust"]
stars: 13
forks: 1
openIssues: 13
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-24T10:40:22Z"
lastCommitAt: "2026-06-27T06:22:13Z"
lastReleaseAt: "2026-06-27T06:12:24Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 83
undervaluedScore: 43
maintainers: ["lambda-alpha-labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d53a7cd05718daa75bf21a7bdd4cffb4731626760fb42432f178c29a107b128/lambda-alpha-labs/Graphenium"
---

# Graphenium

**Provenance-aware structural memory for AI coding agents.**

Graphenium turns a repository into a persistent, queryable architecture graph
so Claude, Cursor, and other MCP-compatible assistants can navigate large
codebases without starting from zero every session.

Most code tools help humans search files. Graphenium gives AI agents something
more useful: a durable map of the repository, with confidence and provenance on
every relationship. The assistant can see not only what is connected, but how
that connection was discovered and how much it should trust it.

Use Graphenium when grep-and-trace navigation breaks down:

- What calls this function?
- What depends on this module?
- What are the architectural hubs?
- What is the shortest path between these components?
- Which files belong to the same community?
- What is the blast radius of this change?
- Which graph facts are source-backed, inferred, or ambiguous?
- Does this repository still meet the trust-quality bar for CI?

Graphenium replaces repeated repository navigation, not source-code
understanding. Agents still read source code before making implementation
changes. They just start with structural memory…
