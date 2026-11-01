---
repo: "v0lka/c0wrk"
name: "c0wrk"
description: "Desktop R&D AI-agent"
readmeQualityOk: true
url: "https://github.com/v0lka/c0wrk"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 39]
topics: ["ai-agent", "ai-assistant", "coding-agent", "coding-assistant"]
stars: 33
forks: 5
openIssues: 42
closedIssues: 34
watchers: 2
contributors: 5
recentReleases: 2
createdAt: "2026-03-25T21:40:34Z"
lastCommitAt: "2026-11-01T10:45:08Z"
lastReleaseAt: "2026-08-21T16:35:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["zabbius", "v0lka"]
openGraphImageUrl: "https://opengraph.githubassets.com/85d898966c67165e8d373736d7bead645c4e16a43b7b72c71d404497f5baaf88/v0lka/c0wrk"
discussionCount: 2
---

# c0wrk

> [!NOTE]
> **Stable beta** — c0wrk is stable enough for everyday work, but you may still run into bugs.
> Features, APIs, and configuration formats can change between releases.
> If something breaks, please report it — every report helps us make c0wrk better.

c0wrk is for work that won't fit in a single reply — research, coding, writing, anything that takes more than one step to get right. It's a desktop app built so the whole loop — plan, implement, review, revise, and ship — feels like one continuous flow instead of a dozen disconnected tools. And you never hand over control blindly: you review the plan before work starts and approve your definition of "done" before the goal loop runs.

## What makes c0wrk different

- **One place for the whole build loop.** From a task to a shipped change without switching tools: review the plan, let c0wrk implement in parallel, review real diffs with per-hunk and per-file comments, request revisions, then stage, commit, push, inspect branches, and browse a lane graph of history.
- **A plan you review before work starts.** For non-trivial work, c0wrk maps the task to a graph-based plan. Independent steps run as isolated subagents in…
