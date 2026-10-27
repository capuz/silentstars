---
repo: "392fyc/Mercury"
name: "Mercury"
description: "Multi-Agent GUI Orchestrator — eliminates manual handoffs between AI coding agents"
readmeQualityOk: true
url: "https://github.com/392fyc/Mercury"
language: "Python"
languages: ["Python", "Shell", "JavaScript"]
languagePcts: [45, 28, 21]
stars: 8
forks: 1
openIssues: 28
closedIssues: 316
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-15T17:11:15Z"
lastCommitAt: "2026-10-27T12:39:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 53
maintainers: ["392fyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9057b7175b3bd9fbd2af6aac4ab6cd10a6be86bac85a146d93bd8b1f6eacb661/392fyc/Mercury"
---

# Mercury

Mercury is a **Claude Code harness framework** for keeping AI coding agents working continuously, autonomously, and at high quality. It is a repo you clone and point Claude Code at, not an application you install and launch.

Mercury solves the things Claude Code alone does not:

- Session continuity when context fills up (handoff to a fresh session)
- Cross-session, cross-project long-term memory
- Quality gates for unattended long-running work

See [`.mercury/docs/DIRECTION.md`](https://github.com/392fyc/Mercury/blob/HEAD/.mercury/docs/DIRECTION.md) for the full project charter and [`.mercury/docs/EXECUTION-PLAN.md`](https://github.com/392fyc/Mercury/blob/HEAD/.mercury/docs/EXECUTION-PLAN.md) for the roadmap.

## What Mercury is NOT

The earlier README described a Tauri/Vue desktop application with a Node.js orchestrator sidecar. That architecture was archived in April 2026 as part of the direction pivot (see [DIRECTION.md §五](https://github.com/392fyc/Mercury/blob/HEAD/.mercury/docs/DIRECTION.md)).

- **Not** a CLI wrapper — Mercury does not wrap `claude` / `codex` / `opencode` binaries; it configures them
- **Not** a custom orchestrator — Claude Code native…
