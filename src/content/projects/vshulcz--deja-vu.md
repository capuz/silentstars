---
repo: "vshulcz/deja-vu"
name: "deja-vu"
description: "Memory layer for coding agents: search, MCP recall, auto-context, secret redaction, stats, share and sync over the session logs Claude Code, Codex, opencode, Cursor, Gemini CLI, aider, Antigravity, Grok Build and Qwen Code already write. One zero-dep binary."
readmeQualityOk: true
url: "https://github.com/vshulcz/deja-vu"
homepage: "https://vshulcz.github.io/deja-vu/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["claude-code", "cli", "codex", "developer-tools", "mcp", "opencode", "agent-memory", "ai-memory", "claude", "coding-agents"]
stars: 366
forks: 17
openIssues: 7
closedIssues: 51
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-14T07:45:44Z"
lastCommitAt: "2026-07-19T06:12:23Z"
lastReleaseAt: "2026-07-16T06:46:27Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 97
undervaluedScore: 30
maintainers: ["vshulcz", "shgpavel", "leemeo3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1300173275/7d8a13fa-f15f-4036-8df4-6c7c7cb8ce7a"
---

</p>

Claude Code, Codex, opencode, aider, Gemini CLI, Cursor, Antigravity, Grok Build and Qwen Code write every conversation to local files — gigabytes of debugged problems and design decisions you can't search. deja is a zero-dependency binary that turns those histories into a memory layer:

| Feature | What it does |
| --- | --- |
| **Search** | `deja "connection pool exhausted"` — ~12 ms over gigabytes, retroactive: months of logs from before you installed it |
| **Agent recall** | MCP `recall` tool — the agent answers *"we fixed this three weeks ago"* instead of re-debugging, across harnesses |
| **Auto-recall** | `install --auto` adds a SessionStart hook: relevant memory lands in context before you ask |
| **Redaction** | API keys, JWTs, private keys are stripped at index time — the cache is safe to keep |
| **Stats** | `deja stats` — your agent work, wrapped: harnesses, top projects, activity sparkline |
| **Share** | `deja share <id>` — hand a colleague a sanitized digest of a session, secrets already scrubbed |
| **Sync** | `deja sync export/import` — move memory between machines, append-only, idempotent |
| **Remember** | `deja remember "text"` or MCP `remember` — keep…
