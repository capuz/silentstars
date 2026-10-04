---
repo: "MattShelton04/TracePilot"
name: "TracePilot"
description: "Comprehensive Desktop app for visualizing, auditing, and orchestrating GitHub Copilot CLI sessions."
readmeQualityOk: true
url: "https://github.com/MattShelton04/TracePilot"
homepage: "https://mattshelton04.github.io/TracePilot/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [35, 31]
stars: 12
forks: 2
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-14T06:57:06Z"
lastCommitAt: "2026-10-04T10:02:35Z"
lastReleaseAt: "2026-03-31T11:28:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["MattShelton04"]
openGraphImageUrl: "https://opengraph.githubassets.com/45fce583b4d0e7d6d5afedeb4d382a8e10f70043404835a88d4ce460e69cdca7/MattShelton04/TracePilot"
---

# TracePilot

TracePilot is built for developers who use GitHub Copilot CLI heavily and want a clearer view of what happened across their sessions: prompts, assistant turns, subagents and the messages they exchange, tool calls, todos, checkpoints, context growth, prompt-cache state, token usage, AI Credits, search, and orchestration.

It reads the session data Copilot CLI writes under `~/.copilot/session-state/` by default, indexes it locally, and presents it in a Tauri desktop app backed by Rust, SQLite, and Vue.

> **Project status:** TracePilot is early-stage software. It is useful today, but the UI and internal data model still change quickly.
>
> **Platform status:** TracePilot is tested on Windows. Apple Silicon Macs get a preview build; Intel Macs and Linux are not yet release targets.

---

## What you can do

### Inspect Copilot CLI sessions

Browse your Copilot CLI session history as a searchable library, then open any session for a tabbed deep-dive:

| Area | What it helps with |
| --- | --- |
| **Overview** | Session metadata, plan and checkpoint summaries, incidents, AI Credits, and high-level stats. |
| **Conversation** | User/assistant turns, reasoning, model…
