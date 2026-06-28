---
repo: "trip2g/trip2g"
name: "trip2g"
description: "Open-source MCP knowledge mesh - self-host your second brain, expose it to AI agents, federate with peers."
url: "https://github.com/trip2g/trip2g"
homepage: "https://trip2g.com"
language: "Go"
languages: ["Go"]
languagePcts: [66]
topics: ["knowledge-base", "obsidian", "publishing-platform", "self-hosted", "static-site-generator", "telegrambot", "ai-agents", "digitalgarden", "mcp", "second-brain"]
stars: 17
forks: 0
openIssues: 6
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-05T06:36:25Z"
lastCommitAt: "2026-06-28T12:54:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["alexesDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/22edbbbd95acff807c859e2b13b1544061ef2c8f8aba1abc62532058878c3dcc/trip2g/trip2g"
---

# trip2g

**Open-source MCP knowledge mesh.** Self-host your knowledge bases, expose them to AI agents via MCP, and federate with peers — no SaaS in the middle.

Unlike Obsidian Publish or Quartz, trip2g is a live server: subscriptions, webhook agents, federation between hubs, and an MCP endpoint out of the box.

[Try the public hub →](#try-it-now) · [Self-host](#self-host) · [Docs](https://trip2g.com/en/user)

---

## Second brain network for your agents

> *A second brain isn't one person's vault — it's the shared knowledge of people who think about the same things.*

Each person runs a hub with their own notes. Agents reach into it directly via MCP. Hubs peer with each other, so one question fans out across the network — your bases plus the ones your trusted peers share with you.

```
   human A           human B           human C
      │                 │                 │
      ▼                 ▼                 ▼
   agent A           agent B           agent C
      │                 │                 │
      ▼                 ▼                 ▼
  ┌────────┐  MCP  ┌────────┐  MCP  ┌────────┐
  │ hub A  │ ◄───► │ hub B  │ ◄───► │ hub C  │
  └────────┘       └────────┘…
