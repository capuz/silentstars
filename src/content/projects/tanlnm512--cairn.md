---
repo: "tanlnm512/cairn"
name: "cairn"
description: "Local codebase intelligence system: structural graph + compass + wiki + agent memory."
readmeQualityOk: true
url: "https://github.com/tanlnm512/cairn"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-08-03T15:33:42Z"
lastCommitAt: "2026-08-16T04:07:55Z"
lastReleaseAt: "2026-08-16T04:02:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["tanlnm512"]
openGraphImageUrl: "https://opengraph.githubassets.com/60603da3ea3cfaeb5aabe4dcfb63c7082434255f7db80ad466c4772dd7d971fb/tanlnm512/cairn"
---

# cairn

> Verifiable codebase memory for AI agents: a structural graph + compass + wiki + tribal memory, all local, all traceable to source.

cairn is the **verifiable memory of your codebase for AI agents.** It parses
your repos with tree-sitter into a precise structural graph (symbols, call
edges, blast radius) and fuses it with code-grounded tribal memory — all in a
local SQLite store, all behind one MCP server (27 tools) + a `cairn` CLI. The
product is a **verification contract**: every `exact` edge is actually resolved,
every symbol in a compass/wiki/memory doc is graph-verified by a deterministic
critic, and the LLM is never in the query path. No network call, no torch in
the default install.

## What is cairn?

cairn is a **local, verifiable, agent-first** codebase memory system. It parses
your repos with tree-sitter into a **structural graph** (definitions, call
edges, cross-repo dependencies) stored in SQLite, then layers a **compass**
(per-module navigation guides), a **wiki** (architecture docs), **memory**
(decisions / patterns / mistakes / workarounds), and a **knowledge** store on
top. It is **MCP-native**: the same store backs the `cairn` CLI and a 27-tool
MCP…
