---
repo: "XBP-Europe/sagemath-mcp"
name: "sagemath-mcp"
description: "Stateful SageMath MCP server: 40 tools for symbolic math, algebra, number theory, graphs, plotting and claim verification. A persistent Sage session per client, an AST policy in front of it, and a hardened container as the real boundary."
readmeQualityOk: true
url: "https://github.com/XBP-Europe/sagemath-mcp"
homepage: "https://pypi.org/project/sagemath-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-tools", "cas", "claude", "computer-algebra", "fastmcp", "llm", "math", "mathematics", "mcp", "model-context-protocol"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2025-11-02T16:53:49Z"
lastCommitAt: "2026-10-10T10:05:05Z"
lastReleaseAt: "2026-09-07T19:24:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 72
maintainers: ["csteinlxbp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e33f6d2017befae417eee747f1286f6f8b50de1228b17ffe16bcd4be0c0608f/XBP-Europe/sagemath-mcp"
discussionCount: 0
---

# SageMath MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io/) server that gives an
LLM a sandboxed mathematical subset of [SageMath](https://www.sagemath.org/) —
symbolic calculus, number theory, linear algebra, ODEs, plotting, combinatorics,
graphs, groups, elliptic curves, and more. Each MCP session gets a dedicated Sage
worker process, so variables, functions, and assumptions **persist across tool
calls**. It ships **40 MCP tools**, one of which — `verify_claim` — re-checks a
stated result through a proof ladder and answers `proved` / `refuted` /
`supported` / `undecided` with its evidence.

Caller code is **deny-by-default**: the full breadth of Sage mathematics is
reachable, but imports, the external CAS interfaces, and the file / display /
persistence primitives are not. The policy accepts **98.9% of SageMath's own
438,124 documented doctest examples** (4,259 in-scope refusals, every one
attributed to a named rule; 99.0% of 433,289 on the passagemath runtime) while
refusing the rest — measured on every CI run (see [Security](#security)).

Full manual: **[USAGE.md](https://github.com/XBP-Europe/sagemath-mcp/blob/HEAD/USAGE.md)** — every tool's parameters…
