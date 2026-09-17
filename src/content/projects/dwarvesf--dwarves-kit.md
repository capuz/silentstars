---
repo: "dwarvesf/dwarves-kit"
name: "dwarves-kit"
description: "The control plane for proof-based Claude Code SDLC, built for production teams. Agent loops that self-correct, not self-report."
readmeQualityOk: true
url: "https://github.com/dwarvesf/dwarves-kit"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [62, 20]
topics: ["claude-code", "claude-code-hooks", "developer-tools", "spec-driven-development", "workflow"]
stars: 11
forks: 2
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-29T16:20:55Z"
lastCommitAt: "2026-09-17T08:51:29Z"
lastReleaseAt: "2026-06-11T14:21:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 42
maintainers: ["tieubao"]
openGraphImageUrl: "https://opengraph.githubassets.com/530c97299c9f8c723f5fd14ed81b06b6ab2dd821e47f8a7e48d438ad0a2bd134/dwarvesf/dwarves-kit"
---

# dwarves-kit

> A closed-loop Claude Code workflow: you set the goal and the gates, agents loop until the verifier passes. Worker → verifier → fix-agent retry, by default.

## Quickstart

```
/plugin marketplace add dwarvesf/dwarves-kit
/plugin install kit@dwarves-marketplace
```

Open your repo and run `/kit:onboard`. It previews every write and adopts the repo with sane
defaults. Then run `/kit:start` at the top of every session: it reads where the repo stands and
hands you the next command. Onboarding never finishes; `/kit:start` is the onboarding.

Condensed walkthrough: [`docs/QUICKSTART.md`](https://github.com/dwarvesf/dwarves-kit/blob/HEAD/docs/QUICKSTART.md). Full command reference:
[`MANUAL.md`](https://github.com/dwarvesf/dwarves-kit/blob/HEAD/MANUAL.md).

Agent workflows are shifting from `prompt -> output` to `goal -> loop -> evaluate -> improve -> result`. dwarves-kit is the **closed** kind of that loop: you set the goal and the gates up front, and agents iterate inside them until a read-only verifier passes, never grading their own homework.

It ships as a **toolbox, not an appliance.** Every subsystem is a standalone shell command that already works on its own,…
