---
repo: "tsouth89/conduit"
name: "conduit"
description: "Local MCP gateway: manage all your MCP servers in one place, set up once and shared by every AI client (Claude, Cursor, VS Code, Codex). Lazy discovery collapses them to 3 meta-tools the agent searches on demand, for ~90% fewer tokens. Keys in your OS keychain, no cloud."
url: "https://github.com/tsouth89/conduit"
homepage: "https://conduitmcp.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 30]
topics: ["ai", "claude", "cursor", "developer-tools", "gateway", "llm", "mcp", "model-context-protocol", "react", "rust"]
stars: 40
forks: 8
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-19T19:42:40Z"
lastCommitAt: "2026-06-27T00:49:55Z"
lastReleaseAt: "2026-06-22T02:46:54Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 47
maintainers: ["tsouth89", "bradhallett", "BharadwajKanneveti"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274695288/b2d4e02d-5800-477f-aa86-3cfe7679864d"
discussionCount: 1
---

# Conduit

**All your MCP servers in one place, with ~90% fewer tokens.**

Conduit is a local MCP (Model Context Protocol) gateway. You set up and
authenticate each server once, and every AI client (Claude, Cursor, Codex, and
the rest) points at Conduit and shares them, so you stop configuring the same
servers separately in each app.

It also fixes what those servers cost your agent. Every MCP server you connect
dumps all of its tools into context on every single request, and it adds up fast:
just 3 servers (62 tools) cost ~24,000 tokens of definitions before you've asked
anything. Conduit advertises 3 meta-tools the agent searches on demand instead,
so it pays ~660 tokens.

**Measured on a frontier model: up to 91% fewer total tokens at the same task
success** (graded for correct answers, not just completion), plus 97% less
tool-definition overhead on every request, rising to 99.6% on a real 415-tool
catalog (see [BENCHMARK.md](BENCHMARK.md)). That holds whether you run one AI tool
or five, on cloud models (where tokens are your bill) or local ones (where tool defs
eat your context window).

## Screenshots

| Servers | Activity | Playground |
|---|---|---|
|  |  |  |

## Why…
