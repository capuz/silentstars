---
repo: "memtomem/memtomem"
name: "memtomem"
description: "Markdown-first, long-term memory infrastructure for AI agents. Hybrid BM25 + semantic search across markdown/code files via MCP."
readmeQualityOk: true
url: "https://github.com/memtomem/memtomem"
homepage: "https://memtomem.com"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent", "bm25", "embedding", "markdown", "mcp", "memory", "python", "rag", "semantic-search", "mcp-server"]
stars: 22
forks: 38
openIssues: 83
closedIssues: 918
watchers: 0
contributors: 31
recentReleases: 0
createdAt: "2026-03-28T06:33:51Z"
lastCommitAt: "2026-11-05T00:21:05Z"
lastReleaseAt: "2026-04-13T13:40:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["memtomem", "dependabot[bot]", "Gennifer-Dominic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1194290694/34173b40-3ed6-4afe-93be-f37e1e8865f6"
discussionCount: 1
---

# memtomem

> Long-term memory for AI coding agents, kept as Markdown you own. Core usage is hook-free by default: memory changes happen only when you or your agent call memtomem.

> 🧪 **Beta** — the nine core MCP tools, the `mm` CLI, and the format of your memory and config files change only with an `Upgrading` note in the [CHANGELOG](https://github.com/memtomem/memtomem/blob/HEAD/CHANGELOG.md). Features marked **experimental** can change without one; see [Stability](#stability). Feedback is welcome: [Issues](https://github.com/memtomem/memtomem/issues) · [Discussions](https://github.com/memtomem/memtomem/discussions).

## The session loop

Three plugin workflows carry a project's memory from one session to the next, and from one coding agent to another.

Illustrative output — agent wording and results vary.

```text
# End of a session, in Claude Code
> /memtomem:handoff save codex-cli
handoff_id: 3f2a9c1e-7b4d-4e8a-9c2f-1d5e6a7b8c9d
scope: project_local · namespace: shared:retry-policy · 1 file written, 2 chunks indexed

# Next session, in Codex CLI
> $memtomem-brief
Recent updates and active handoff IDs
  - 3f2a9c1e-7b4d-4e8a-9c2f-1d5e6a7b8c9d  from claude-code → codex-cli…
