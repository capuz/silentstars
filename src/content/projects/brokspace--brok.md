---
repo: "brokspace/brok"
name: "brok"
description: "Local-first workspace search, agents and skills for developers: hybrid code search, MCP for coding agents, local LLMs, event-driven shards"
readmeQualityOk: true
url: "https://github.com/brokspace/brok"
homepage: "https://github.com/brokspace/brok"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["agent-skills", "brokspace", "cli", "code-search", "developer-tools", "llm", "local-first", "mcp", "ollama", "productivity"]
stars: 10
forks: 1
openIssues: 47
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-24T14:47:13Z"
lastCommitAt: "2026-11-25T13:17:21Z"
lastReleaseAt: "2026-11-14T12:19:31Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["paulowdev", "dependabot[bot]", "Aaqibhafeezkhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d3591ffd1e6e2415da2120a6153efd616b2ad697ab26416da1984121901ff04/brokspace/brok"
discussionCount: 0
---

Brokspace (`brok`) makes any development workspace, from a side project to a
corporate monorepo with dozens of submodules, instantly searchable and
agent-ready. One command sets everything up; nothing leaves your machine
unless you choose a hosted model.

```console
$ brok init
[1/6] Workspace        ✓ Created .brokspace
[2/6] Agent            ✓ Installed brok-agent 0.1.0
[3/6] Semantic search  ✓ Embedding model ready
[4/6] Local LLM        ✓ Found Ollama with 3 model(s): brok ask will use qwen2.5-coder:7b
[5/6] Index            ✓ Indexed 1 284 files (9 912 chunks)
[6/6] Coding agents    ✓ Claude Code: MCP server registered in .mcp.json, 20 skills in .claude/skills

$ brok search "where do we validate jwt tokens"
0.97 services/auth/src/jwt.rs:42-77 function validate_token
```
