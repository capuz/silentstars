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
openIssues: 6
closedIssues: 869
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-23T17:21:19Z"
lastCommitAt: "2026-10-30T10:22:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["marioatcloudvane", "botatcloudvane"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a12f64ac0c28836491b5e89166e73c7cf06e1a66d997449f16d1b8eade6ca55/marioatcloudvane/litefactory"
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
