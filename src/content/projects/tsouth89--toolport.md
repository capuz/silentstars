---
repo: "tsouth89/toolport"
name: "toolport"
description: "Local-first MCP gateway. One port for every tool and every AI client: lazy discovery (~90% token savings), tool integrity + quarantine, secrets in the OS keychain."
readmeQualityOk: true
url: "https://github.com/tsouth89/toolport"
homepage: "https://toolport.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 29]
topics: ["ai", "claude", "cursor", "developer-tools", "gateway", "llm", "mcp", "model-context-protocol", "react", "rust"]
stars: 63
forks: 13
openIssues: 8
closedIssues: 35
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-06-19T19:42:40Z"
lastCommitAt: "2026-07-04T23:16:43Z"
lastReleaseAt: "2026-06-22T02:46:54Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["tsouth89", "leemeo3", "bradhallett"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274695288/b7d36502-a01b-472b-b1c0-cb88f251ee8b"
discussionCount: 1
---

# Toolport

**Every tool. One port.** One local gateway for all your MCP servers, shared by
every AI client, with far fewer tokens.

</div>

Toolport is a local MCP (Model Context Protocol) gateway. You set up and
authenticate each server once, and every AI client (Claude, Cursor, Codex, and
the rest) points at Toolport and shares them, so you stop configuring the same
servers separately in each app.

</p>

It also fixes what those servers cost your agent. Every MCP server you connect
dumps all of its tools into context on every single request, and it adds up fast:
just 3 servers (62 tools) cost ~24,000 tokens of definitions before you've asked
anything. Toolport advertises 3 meta-tools the agent searches on demand instead,
so it pays ~660 tokens.

**Measured on a frontier model: up to 91% fewer total tokens at the same task
success** (graded for correct answers, not just completion), plus 97% less
tool-definition overhead on every request, rising to 99.6% on a real 415-tool
catalog (see [BENCHMARK.md](https://github.com/tsouth89/toolport/blob/HEAD/BENCHMARK.md)). That holds whether you run one AI tool
or five, on cloud models (where tokens are your bill) or local ones (where tool…
