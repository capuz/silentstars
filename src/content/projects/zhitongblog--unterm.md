---
repo: "zhitongblog/unterm"
name: "unterm"
description: "The terminal AI agents can drive — and the cockpit to run them from. 99 MCP methods / 21 namespaces, agent Inbox, verified worktree fleets, diff review & rollback. macOS / Linux / Windows, local-first, $0, MIT."
readmeQualityOk: true
url: "https://github.com/zhitongblog/unterm"
homepage: "https://unterm.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agent-tools", "claude", "claude-code", "codex", "cursor", "gemini-cli", "linux", "macos", "mcp", "mcp-server"]
stars: 11
forks: 0
openIssues: 10
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-15T09:09:57Z"
lastCommitAt: "2026-08-15T04:03:03Z"
lastReleaseAt: "2026-05-02T09:01:12Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 43
maintainers: ["unzooai", "zhitongblog"]
openGraphImageUrl: "https://opengraph.githubassets.com/caa8e512ee7dc9f467ef88003a8a405f4c1c230f10e0e79f26ec0fce8e7d2c1a/zhitongblog/unterm"
discussionCount: 0
---

# Unterm

**The terminal AI agents can drive.**

Cross-platform terminal (macOS / Linux / Windows) built on Unterm's native
`next-core` terminal engine, with one design bet: the terminal itself is
controllable from the outside by any AI agent over MCP. Claude Code, Codex,
Gemini CLI, Cursor, Aider, your own scripts — they all get the same JSON-RPC
surface (**103 authenticated methods plus `auth.login`**) to spawn shells, run
commands, read pane state, capture screenshots, change settings, and record
sessions.

Since v0.55 the relationship runs both ways: agents drive the terminal from outside, and the terminal is an **Agent Cockpit** for the agents running inside it — live per-pane agent state, a waiting-first Inbox, fleets of N agents on one task in N isolated git worktrees, and a Review page to diff / merge / roll back what they produced.

The other 2026 terminals each pick a different side: Warp embeds AI inside a closed cloud (Oz), Ghostty stays out of your way and lets you bring your own tools, iTerm2 is Mac-only. Unterm picks the third side — terminal as MCP-controllable surface, deliberately keep AI *generation* out of the terminal, let external agents grip it through the…
