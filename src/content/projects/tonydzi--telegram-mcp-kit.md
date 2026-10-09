---
repo: "tonydzi/telegram-mcp-kit"
name: "telegram-mcp-kit"
description: "Connect Claude (or any MCP client) to your own Telegram in ~15 minutes: setup prompt for Claude Code/Codex, production patches (shared daemon, extra tools, multi-account), watchdog, and every gotcha that cost us hours. On top of chigwell/telegram-mcp."
readmeQualityOk: true
url: "https://github.com/tonydzi/telegram-mcp-kit"
language: "PowerShell"
languages: ["PowerShell", "Batchfile"]
languagePcts: [72, 28]
topics: ["ai-agents", "claude", "claude-code", "codex", "mcp", "mcp-server", "model-context-protocol", "telegram", "telethon", "agent-skills"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-10T14:39:10Z"
lastCommitAt: "2026-10-09T18:55:55Z"
lastReleaseAt: "2026-10-02T18:12:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 66
undervaluedScore: 25
maintainers: ["tonydzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a9941ef07596b5dffacd99e46d8d529b25e8d44bfb132d0d92b9b4f8ec0fd6/tonydzi/telegram-mcp-kit"
---

# telegram-mcp-kit

Connect Claude (Claude Code / Claude Desktop / Codex — any MCP client) to **your own Telegram account** so it can read your chats and send replies. This kit is everything we wish we had on day one: it took us several hours and many broken iterations to get a stable setup; with this kit it should take you ~15 minutes.

Built and battle-tested at [Palo Alto AI Research Lab](https://github.com/tonydzi/tonydzi) — our Claude fleet reads and writes Telegram through exactly this setup, every day, across 5 machines.

## What you get

1. **A working setup path** on top of the excellent upstream server [`chigwell/telegram-mcp`](https://github.com/chigwell/telegram-mcp) (MTProto user-account, pure Python, no TDLib build pain).
2. **[`PROMPT.md`](https://github.com/tonydzi/telegram-mcp-kit/blob/HEAD/PROMPT.md)** — a copy-paste prompt you give to Claude Code or Codex, and it performs the whole installation for you, including the gotchas.
3. **Patches** we run in production, pinned to upstream commit `a008ac2` (apply cleanly there; run `git checkout a008ac2` after cloning, or resolve conflicts yourself on a newer HEAD):
   -…
