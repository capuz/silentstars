---
repo: "PaulKinlan/chrome-agent-platform"
name: "chrome-agent-platform"
description: "Chrome as the agent platform: NTP agent hub orchestrating the web via WebMCP, with sites-as-sub-agents, OPFS memory, alarms, and co-do WASM tools"
readmeQualityOk: true
url: "https://github.com/PaulKinlan/chrome-agent-platform"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [48, 46]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-14T18:40:40Z"
lastCommitAt: "2026-09-29T10:03:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 45
maintainers: ["PaulKinlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d622e41e208d9451c90489c329de6b0ce53face6169d3601ed1b1c0582ca8c6a/PaulKinlan/chrome-agent-platform"
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
