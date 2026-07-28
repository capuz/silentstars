---
repo: "Mathews-Tom/archex"
name: "archex"
description: "Verified code context for agents"
readmeQualityOk: true
url: "https://github.com/Mathews-Tom/archex"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agents", "ast", "code-intelligence", "code-retrieval", "code-search", "context-engineering", "context-window-optimization", "developer-tools", "local-first", "mcp"]
stars: 61
forks: 6
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-02-27T06:04:33Z"
lastCommitAt: "2026-07-28T14:57:06Z"
lastReleaseAt: "2026-06-09T14:16:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["Mathews-Tom"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168211370/9a321dae-f912-42b1-be8a-d328fb152c5d"
---

# archex

---

**Verified local code context for agents.**

AI coding agents usually start by opening a file, following an import, checking a type definition, and backtracking through the repo until the context window is partly spent before the real task starts. archex does that retrieval and structural expansion up front and returns a ranked, token-budgeted context bundle plus a receipt that records what was included, what was skipped, and whether the bundle is complete enough to act on.

It runs locally, uses deterministic retrieval and analysis, and does not require hosted inference or an API key. The v0.16 line adds five full-tier language promotions (PHP, Ruby, Scala, C, C++), a new `structured` tier for markup/config languages (HTML, XML, YAML, Markdown, CSS) with a Maven POM dependency-graph plugin, portable index artifacts for team-shared bootstrap, and diff-scoped blast-radius analysis with per-symbol risk classification. The v0.17 line adds opt-in, non-blocking tool-call hooks across six clients (Claude Code, oh-my-pi, Pi, OpenCode, Codex CLI, Cursor) that augment `grep`/`glob`-shaped calls with archex results — or, where a client has no matching hook to augment, log a…
