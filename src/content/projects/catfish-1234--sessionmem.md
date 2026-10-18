---
repo: "catfish-1234/sessionmem"
name: "sessionmem"
description: "Local-first MCP memory layer for AI coding assistants; persistent cross-session memory, stored entirely on your machine"
readmeQualityOk: true
url: "https://github.com/catfish-1234/sessionmem"
homepage: "https://www.npmjs.com/package/sessionmem"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "claude-code", "cline", "codex", "cursor", "developer-tools", "local-first", "mcp", "memory", "nodejs"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-24T19:32:47Z"
lastCommitAt: "2026-10-18T08:17:07Z"
lastReleaseAt: "2026-10-17T21:39:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["catfish-1234", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248546335/a6a5e765-3433-454e-b663-afef842d9112"
---

# sessionmem

**Project memory between sessions, stored on your machine.**

```
New session. Claude starts fresh.

WITHOUT sessionmem:
  You explain the stack. The JWT bug from last week.
  The Stripe migration that's halfway done. The billing code to stay away from.
  Same questions. Different day.

WITH sessionmem:
  [warning] JWT blacklist must be checked before issuing new tokens. Fixed PR #47.
  [decision] Stripe migration ~50% done. Do NOT use /lib/billing-v1.
  [fact] Stack: TypeScript, Next.js, Postgres.

  Claude: "Looks like you're mid-Stripe migration. Where do you want to pick up?"
```

`sessionmem` is an MCP server that stores decisions, warnings, and project context across sessions. Claude Code hooks capture supported tool events and load relevant memories automatically. Other hosts use its MCP tools and installed instructions; session automation depends on the host. It works with Claude Code, Cursor, Cline, Codex, Windsurf, and other [MCP](https://modelcontextprotocol.io) hosts.

By default, everything stays on your machine. You don't need an account or a cloud service. Data only leaves your computer if you enable sharing or cloud summarization.

---

## Quickstart…
