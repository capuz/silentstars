---
repo: "tofutools/tclaude"
name: "tclaude"
description: "The slop machine"
readmeQualityOk: true
url: "https://github.com/tofutools/tclaude"
language: "Go"
languages: ["Go"]
languagePcts: [80]
stars: 8
forks: 4
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-07T11:04:30Z"
lastCommitAt: "2026-08-29T17:28:00Z"
lastReleaseAt: "2026-03-07T12:35:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 57
maintainers: ["mikaelstaldal", "GiGurra"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf1a8d1090b96520d9fb6257c1d87a13119bc1eab702454c935d2fdddd45460/tofutools/tclaude"
---

# tclaude

`tclaude` is a self-hosted agentic dev environment: a Go CLI plus daemon that
wraps vendor coding CLIs ("harnesses") in tmux and adds the operations layer
you need to run many agents seriously. Durable sessions, searchable history, 
a fleet dashboard, agent-to-agent mail, teams with identity and permissions,
sandboxing, and automation, all running on your own machine.

It wraps four harnesses — [Claude Code](https://claude.ai/code),
[OpenAI Codex CLI](https://developers.openai.com/codex/cli),
[OpenCode](https://opencode.ai), and
[GitHub Copilot CLI](https://github.com/features/copilot/cli) — behind one
workflow, so a team can mix vendors and switch as models improve. Everything
routes through one daemon, `agentd`, which owns identity, permissions, audit,
spawning, and mail — fail-closed. tclaude is MIT-licensed; the models are the
only external part.

## What it adds

- **Durable sessions and history** — every harness runs in an isolated tmux
  server: detach, reattach, resume, and watch live working/idle/blocked
  status. Conversations outlive their sessions and are indexed across all
  harnesses for listing, text search, and local semantic search.
- **Fleet…
