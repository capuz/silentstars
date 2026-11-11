---
repo: "ScriptedAlchemy/tracedecay"
name: "tracedecay"
description: "Local semantic code intelligence, project memory, and workflow context for AI coding agents."
readmeQualityOk: true
url: "https://github.com/ScriptedAlchemy/tracedecay"
homepage: "https://github.com/ScriptedAlchemy/tracedecay#readme"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai-coding-agents", "code-intelligence", "developer-tools", "knowledge-graph", "mcp", "rust", "semantic-search", "tree-sitter"]
stars: 86
forks: 7
openIssues: 35
closedIssues: 1136
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2026-06-06T23:05:08Z"
lastCommitAt: "2026-11-11T19:38:13Z"
lastReleaseAt: "2026-06-24T01:28:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 36
maintainers: ["ScriptedAlchemy", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/397f36e6e83bc16d1e3ab498128eb9c6a160e47fb70cd03c964e51b8c13fe410/ScriptedAlchemy/tracedecay"
---

TraceDecay builds a local semantic graph of your repository. AI coding agents query it for symbols, call relationships, affected callers, docs, and source snippets.

Instead of repeated `grep`, `glob`, and file reads, agents use MCP tools such as `tracedecay_context`, `tracedecay_search`, `tracedecay_callers`, and `tracedecay_impact`.

## Highlights

- Typed MCP operations for discovery, call graphs, impact analysis, code health, test mapping, repository context, and anchored edits.
- Rust tree-sitter extractors with lite/medium/full Cargo feature tiers; `Cargo.toml` is the exact language authority.
- Native integrations for supported Claude Code, Codex, Cursor, Hermes, Kiro, Kimi Code, OpenCode, and Cline-family hosts.
- Daemon-owned local storage through the `rusqlite` runtime and embedded Grafeo graph store. Local operation is the default; configured remote sources and authorities follow explicit policy rather than an implicit local-only guarantee.
- On-demand freshness checks with exact repository, worktree, ref, commit, and generation provenance across linked git worktrees.
- Project-wide facts, sessions, and lossless LCM history remain available across branches; historical…
