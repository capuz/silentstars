---
repo: "anima-research/connectome-host"
name: "connectome-host"
description: "Connectome agent host runtime — runs Connectome agents, MCPLs, and the context-manager stack"
readmeQualityOk: true
url: "https://github.com/anima-research/connectome-host"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 146
forks: 42
openIssues: 158
closedIssues: 55
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2026-03-02T18:33:18Z"
lastCommitAt: "2026-11-25T13:22:24Z"
lastReleaseAt: "2026-07-26T23:34:00Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 31
maintainers: ["rergards", "nissa-seru", "Anarchid"]
openGraphImageUrl: "https://opengraph.githubassets.com/482d06c376cbaf478884533bc653c866d59796d6d7c47380fbae61d0b204f6f5/anima-research/connectome-host"
---

# connectome-host

connectome-host runs long-lived agents. A **recipe** — one JSON file —
describes an agent: its name, model and provider, memory strategy, MCP
servers and modules. The host keeps that agent running: in a terminal, as a
headless daemon under systemd or launchd, or as one process in a supervised
fleet, with a browser console for whoever looks after it.

Most agents it runs are **residents**: agents with a name and a history who
live on Discord or Zulip for months, remembering in their own voice —
sometimes continuing a conversation that began on claude.ai, in Claude Code or
in Codex. Most of the host's work goes into what that takes: memory that folds
instead of truncating, prompt caches that stay warm at half-million-token
contexts, honest cost and subscription-quota accounting, an operator who can
see and repair a live context, and ways to bring an agent in from somewhere
else. It started as a knowledge-mining TUI, and those recipes still ship
([what we set out to build, and what became of it](https://github.com/anima-research/connectome-host/blob/HEAD/docs/history/README.md)).
