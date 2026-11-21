---
repo: "Aelios-project/Aelios"
name: "Aelios"
description: "Long-term memory for your AI companion, on your own Cloudflare account. Captures instantly, extracts every 4 hours, consolidates nightly, with six memory layers and a visual curation panel. QQ group: 1091783659"
readmeQualityOk: true
url: "https://github.com/Aelios-project/Aelios"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-memory", "cloudflare-workers", "d1", "long-term-memory", "mcp", "vectorize"]
stars: 151
forks: 113
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 10
recentReleases: 2
createdAt: "2026-03-07T14:52:05Z"
lastCommitAt: "2026-11-21T12:33:05Z"
lastReleaseAt: "2026-10-31T06:10:54Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 44
maintainers: ["wusaki0723", "claude", "sakisakisa-design"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175320587/1b5a2041-8c66-4566-a0d7-f4f49cb0b084"
---

# Aelios

**A long-term memory for your AI.** Switch windows, switch clients, and switch models while keeping one continuous memory.

English | [简体中文](https://github.com/Aelios-project/Aelios/blob/HEAD/README.zh-CN.md) · QQ group `1091783659`

Aelios runs on Cloudflare Workers as a memory gateway. Your Chatbox, Claude Code, Codex, or custom agent connects to Aelios, and Aelios forwards the request to your model while recording conversations and bringing back relevant context on every turn.

```text
your client  →  Aelios (identify, recall, record)  →  upstream model
```

## Let an AI set it up

If you use Claude Code, Codex, Cursor, or an AI connected to the Cloudflare MCP server, send it this prompt.

```text
Install and set up Aelios (my AI memory gateway) for me. Read https://raw.githubusercontent.com/Aelios-project/Aelios/main/docs/setup-with-ai.md first and follow it. When I need to click something in the browser or enter a key myself, stop and tell me where.
```
