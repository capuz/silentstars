---
repo: "ScriptedAlchemy/tracedecay"
name: "tracedecay"
description: "Local semantic code intelligence, project memory, and workflow context for AI coding agents."
readmeQualityOk: true
url: "https://github.com/ScriptedAlchemy/tracedecay"
homepage: "https://github.com/ScriptedAlchemy/tracedecay#readme"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["ai-coding-agents", "code-intelligence", "developer-tools", "knowledge-graph", "mcp", "rust", "semantic-search", "tree-sitter"]
stars: 76
forks: 6
openIssues: 11
closedIssues: 366
watchers: 1
contributors: 17
recentReleases: 5
createdAt: "2026-06-06T23:05:08Z"
lastCommitAt: "2026-09-18T14:02:58Z"
lastReleaseAt: "2026-06-24T01:28:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["ScriptedAlchemy", "github-actions[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/218e03c0b2f9d67c461c25de0033b0f31e5d957331c264ec4228d217a8b7f549/ScriptedAlchemy/tracedecay"
---

</p>

<h3 align="center">Semantic code intelligence for AI coding agents</h3>

</p>

TraceDecay builds a local semantic graph of your repository so AI coding agents can ask for the right symbols, call relationships, impact radius, docs, and source snippets without scanning the tree.

Instead of repeated `grep`, `glob`, and file reads, agents use MCP tools such as `tracedecay_context`, `tracedecay_search`, `tracedecay_callers`, and `tracedecay_impact`.

## Highlights

- Typed MCP operations for discovery, call graphs, impact analysis, code health, test mapping, repository context, and anchored edits.
- Rust tree-sitter extractors with lite/medium/full Cargo feature tiers; `Cargo.toml` is the exact language authority.
- Native integrations for supported Claude Code, Codex, Cursor, Hermes, Kiro, Kimi Code, OpenCode, and Cline-family hosts.
- Daemon-owned local storage through the `rusqlite` runtime and embedded Grafeo graph store. Local operation is the default; configured remote sources and authorities follow explicit policy rather than an implicit local-only guarantee.
- On-demand freshness checks with exact repository, worktree, ref, commit, and generation provenance across linked…
