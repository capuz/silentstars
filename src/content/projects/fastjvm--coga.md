---
repo: "FastJVM/coga"
name: "coga"
description: "A CLI on top of your coding agents: per-task context and workflows, stored as Markdown in Git."
readmeQualityOk: true
url: "https://github.com/FastJVM/coga"
homepage: "https://github.com/FastJVM/coga"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 2
createdAt: "2026-04-13T21:37:08Z"
lastCommitAt: "2026-11-12T05:38:31Z"
lastReleaseAt: "2026-10-21T04:28:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["lilfedor", "nicktoper"]
openGraphImageUrl: "https://opengraph.githubassets.com/14a5d5d30a01854dab22b4647f7c29cc3ad747fd219c4a387143bbf6d3755e00/FastJVM/coga"
---

# Coga

**Build with your agents. Hack your system.**

Claude Code and Codex can plan, investigate, and implement tasks. But a software project outlives any agent session. Assumptions change, and a discovery in one task can overturn the next. Important constraints get buried in conversations and working notes—even when those records are saved. Finding and re-explaining them to each new agent takes work.

**Coga keeps a project moving without losing what you've learned along the way.** It's a local CLI for launching coding agents and tracking work around evolving project knowledge. Findings from temporary tickets become durable contexts and skills, selected when later tasks need them. Plans, decisions, and constraints remain readable Markdown in Git, where humans and agents can inspect and correct them.

**Work compounds.** As project context and reusable skills mature, tickets run through agent steps and peer review with less human steering. The next task starts from better shared knowledge instead of rediscovering the same constraints.

For a specific task, `coga launch` brings its ticket, selected contexts, and current workflow step into your agent’s prompt, using the current…
