---
repo: "Qizhan7/claude-imprint"
name: "claude-imprint"
description: "Self-hosted AI agent system built on Claude Code. Multi-channel chat, persistent memory with semantic search, scheduled tasks, and a single-file dashboard."
readmeQualityOk: true
url: "https://github.com/Qizhan7/claude-imprint"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 91
forks: 28
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-25T19:05:47Z"
lastCommitAt: "2026-10-20T08:49:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["Qizhan7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03f50c1afda1cb7d3e3f1fa0287141af37b40223764b67bcc11c94681fcd71c/Qizhan7/claude-imprint"
---

# Claude Imprint

A self-hosted system that gives Claude persistent memory, multi-channel messaging, and automation. Talk to it from Claude Code, Claude.ai, or Telegram — it remembers everything and shares context across channels. Other channels (Discord, Slack, etc.) can be added via their own MCP servers.

Built for **Claude Code Pro/Max subscribers**. Uses only official Claude Code features — no API costs, no third-party auth.

> ⚠️ **Security notice (Oct 2026).** This repo was built in May 2026. If you set up the Claude.ai integration (`imprint-memory --http`) back then, upgrade: `pip install -U imprint-memory` (0.4.1+).
> - Older imprint-memory let any request coming from `127.0.0.1` skip the token. Cloudflare Tunnel passes the real client IP, so the setup below stayed locked, but plain TCP forwarders (frp, ssh -R, socat, port-forward services) make every outside request look local. 0.4.1 always requires the token and won't start HTTP mode without one.
> - imprint-memory 0.1.0 / git installs from before 2026-05-17 let anyone in when no credentials were set and included a `cc_execute` tool that could drive your local Claude Code. If you exposed one of those, upgrade and assume…
