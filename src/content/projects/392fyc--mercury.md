---
repo: "392fyc/Mercury"
name: "Mercury"
description: "Multi-Agent GUI Orchestrator — eliminates manual handoffs between AI coding agents"
readmeQualityOk: true
url: "https://github.com/392fyc/Mercury"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [51, 25]
stars: 8
forks: 1
openIssues: 6
closedIssues: 377
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-15T17:11:15Z"
lastCommitAt: "2026-11-10T11:38:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["392fyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dfb680d917238d0f56dbaadf1fc59042694b9e2b6027ed515aabfa2a9e53304/392fyc/Mercury"
discussionCount: 0
---

# Mercury

Mercury is a **Claude Code harness framework** for keeping AI coding agents working continuously, autonomously, and at high quality. It is a repo you clone and point Claude Code at, not an application you install and launch.

Mercury solves the things Claude Code alone does not:

- Session continuity when context fills up (handoff to a fresh session)
- Cross-session, cross-project long-term memory
- Quality gates for unattended long-running work

See [`docs/README.md`](https://github.com/392fyc/Mercury/blob/HEAD/docs/README.md) for the knowledge base: the current principles in [`docs/01-rules/principles.md`](https://github.com/392fyc/Mercury/blob/HEAD/docs/01-rules/principles.md) and current progress in [`docs/00-progress/README.md`](https://github.com/392fyc/Mercury/blob/HEAD/docs/00-progress/README.md).

## What Mercury is NOT

The earlier README described a Tauri/Vue desktop application with a Node.js orchestrator sidecar. That architecture was archived in April 2026 as part of the direction pivot (see the former charter, deleted from `docs/` and kept at a fixed commit:…
