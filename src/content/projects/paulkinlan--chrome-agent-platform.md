---
repo: "PaulKinlan/chrome-agent-platform"
name: "chrome-agent-platform"
description: "Chrome as the agent platform: NTP agent hub orchestrating the web via WebMCP, with sites-as-sub-agents, OPFS memory, alarms, and co-do WASM tools"
readmeQualityOk: true
url: "https://github.com/PaulKinlan/chrome-agent-platform"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 42]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-14T18:40:40Z"
lastCommitAt: "2026-10-16T08:26:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 37
maintainers: ["PaulKinlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/38cff4c2273453b0fd0c37550759ccbf57833f9b0bf297a8cea1f1c62fb05b21/PaulKinlan/chrome-agent-platform"
---

# Chrome Agent Platform

Chrome as the agent platform: a **new-tab agent hub** that orchestrates the web with
**persistent named agents**, **per-site sub-agents** (WebMCP tool discovery), and the
**generative-UI** surface. Built on [agent-do](https://github.com/PaulKinlan/agent-do)
patterns + the **Vercel AI SDK** (swappable models).

The hub is the command center: a task composer, a conversation surface with live
progress, a task thread list, and the agents you've created — each with its own
isolated OPFS memory, run history, skills, and avatar.

## What it does

- **The agent model** — persistent, named agents (avatar + name + role) with their own
  OPFS sandbox (memory + run history + installable skills + a `memory_grep` tool).
  Named, site, and background agents are all isolated. The master hub agent
  creates + manages them (create/update/delete/delegate).
- **Unified agent access** — one shared `<agent-picker>` everywhere: the side
  panel's Agents view (browse/search/select → the agent's own conversation →
  direct a task, live updates, per-session restore), every composer's + menu
  "Choose agent" (a removable agent chip routes the run by canonical ID), and
  the `/agent`…
