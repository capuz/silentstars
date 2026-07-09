---
repo: "0ximu/mu"
name: "mu"
description: "MCP server that gives AI assistants deep codebase understanding. Semantic graph, BM25 search, impact analysis, code review."
readmeQualityOk: true
url: "https://github.com/0ximu/mu"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["claude", "code-intelligence", "llm", "mcp", "mcp-server", "rust", "tree-sitter"]
stars: 63
forks: 4
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2025-12-06T10:16:56Z"
lastCommitAt: "2026-07-09T20:44:51Z"
lastReleaseAt: "2026-07-08T16:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["0ximu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7167623a9c4cd58484975a9a01b70cefb9cc869bcb9a81a98f8194e3004b922/0ximu/mu"
---

<h1 align="center">MU</h1>

  <strong>Your codebase, understood.</strong>
</p>

  <em>MCP server that gives AI assistants deep codebase understanding.<br/>
  Semantic graph, BM25 search, impact analysis, code review - all via tool calls.</em>
</p>

MU parses your codebase into a semantic graph stored in DuckDB, then exposes it through 13 MCP tools. Your AI assistant can search, navigate, review, and understand your code without stuffing the entire repo into a context window.

## Why

LLMs choke on large codebases. Context windows are precious. 90% of code is boilerplate. You're feeding syntax when you need semantics.

MU solves this by building a semantic graph - nodes (files, classes, functions), edges (imports, calls, inheritance, DI injection, message-bus publish/consume), importance scores, summaries - and letting your AI pull exactly what it needs.

## Does it actually beat grep?

We measured. 12 real questions about a 920k-line C# microservices codebase, identical agents: one arm with only grep/read, one with only MU tools. Blind grading against source-verified ground truth.

| | grep-only agent | MU-only agent |
|---|---|---|
| Correct answers | 12/12 (one incomplete) |…
