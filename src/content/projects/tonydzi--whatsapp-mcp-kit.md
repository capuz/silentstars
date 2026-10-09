---
repo: "tonydzi/whatsapp-mcp-kit"
name: "whatsapp-mcp-kit"
description: "Link WhatsApp to Claude (or any MCP client) in ~20 minutes: a live self-refreshing QR page that makes pairing actually work, production patches, and 12 field gotchas. On top of @sjawhar/whatsapp-mcp."
readmeQualityOk: true
url: "https://github.com/tonydzi/whatsapp-mcp-kit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude", "claude-code", "mcp", "mcp-server", "model-context-protocol", "whatsapp", "whatsapp-api", "agent-skills", "claude-skills"]
stars: 11
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-10T15:58:19Z"
lastCommitAt: "2026-10-09T18:56:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 66
undervaluedScore: 16
maintainers: ["tonydzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a66f8f5f38aa9fcff14432b3ef00d6489491e4494c36ce38a4c5ec82f6c71b7/tonydzi/whatsapp-mcp-kit"
---

# whatsapp-mcp-kit

Connect Claude (Claude Code / Claude Desktop / Codex — any MCP client) to **a WhatsApp account** so it can read your chats and send messages. The server already exists and is good; what nobody ships is the **linking procedure**. Ours took an evening of broken iterations and a re-scan loop; with this kit it should take you ~20 minutes.

Built and battle-tested at [Palo Alto AI Research Lab](https://github.com/tonydzi/tonydzi) — our Claude fleet has been reading WhatsApp through exactly this setup since June 2026.

> ⚠️ Read [`docs/SECURITY.md`](https://github.com/tonydzi/whatsapp-mcp-kit/blob/HEAD/docs/SECURITY.md) first. Baileys is an **unofficial** WhatsApp client; upstream recommends a dedicated number, not your personal one. We linked a main number knowingly and accept the ban risk. That should be a decision, not an accident.

## What you get

1. **A working setup path** on top of the upstream server [`@sjawhar/whatsapp-mcp`](https://github.com/sjawhar/whatsapp-mcp-2.0) (Node/Baileys, security-hardened fork of `karlfoster/whatsapp-mcp-2.0`; 17 tools — list/search chats, messages, contacts, send text & files, download media, transcribe voice notes).
2.…
