---
repo: "marioatcloudvane/litefactory"
name: "litefactory"
description: "A lightweight Software Factory"
readmeQualityOk: true
url: "https://github.com/marioatcloudvane/litefactory"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 15
forks: 0
openIssues: 11
closedIssues: 888
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-23T17:21:19Z"
lastCommitAt: "2026-11-01T10:44:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["marioatcloudvane", "botatcloudvane"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e08d920cb2309291ffc49ef0717c47095883614ba8972daacd2c51a7aeb6771/marioatcloudvane/litefactory"
---

# litefactory

**Your issue tracker is the interface. Coding agents are the workforce. You stay the owner.**

litefactory is a self-hosted software factory. You write an issue; it researches the
problem, plans it into stories, builds them in parallel with Claude Code and Codex,
validates the result against the plan and hands you a report. Nothing ships until you
say so. It runs as a single Go daemon on your own machine, with your own agents,
your own keys and a local SQLite database.

```
issue ──► Research ──► Plan ──► Implement ──► Validate ──► you ship
            │            │          │             │
         findings    stories    parallel      suite, repair,
         questions   approvals  worktrees     3 reviewers
```

NOTE: litefactory is experimental. Contact me if you want to use it!

## Why it is different

- **Workflows are graphs, not prompts.** Research, Plan, Implement, Validate, Bug and
  Spike are DOT graphs shipped in versioned team packages. Every node, outcome and
  loop bound is declared and checked before a run starts. No hidden control flow in
  agent prose.
- **You approve content, not vibes.** Plan approvals are bound to content hashes per
  story and…
