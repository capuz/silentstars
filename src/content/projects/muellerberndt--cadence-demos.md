---
repo: "muellerberndt/cadence-demos"
name: "cadence-demos"
description: "Simple Cadence examples: Patch-net settlement brains that learn from live experience."
readmeQualityOk: true
url: "https://github.com/muellerberndt/cadence-demos"
homepage: "https://cadence.floatingpragma.ai/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 40]
topics: ["cadence", "embodied-ai", "interactive-demo", "machine-learning", "reproducible-research", "simulation"]
stars: 20
forks: 7
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-28T03:32:43Z"
lastCommitAt: "2026-11-13T04:40:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 52
maintainers: ["muellerberndt"]
openGraphImageUrl: "https://opengraph.githubassets.com/7230acfad60bfaaed33e56b69bd5fc3d5fa9764b9b14ed22c98220afea7c4ecd/muellerberndt/cadence-demos"
---

# Cadence demos

Small example applications for [Cadence](https://github.com/muellerberndt/cadence):
brains that learn from experience through bounded patches, local relations,
readback and settlement. Each demo demonstrates a specific mechanism and names
its implementation and evidence. These are bounded examples, not complete
recipes for the intended continuing brain.

> **Early research.** Cadence is under heavy early research. These demos are
> imperfect and change as the library changes.

## What the demos show

Cadence's functional target is an animal-like continuing brain that acquires
reusable knowledge, retains context and adapts to witnessed outcomes. This is
a software design goal, not a claim that these demos reproduce biological
learning or can learn every human task. The demos expose parts of that goal:

- **Live learning.** Acquired knowledge can remain useful while the same brain
  continues acting and learning. Bootstrap, ordinary settled behavior and
  evidence-driven repair have distinct roles and costs. A new observation
  need not trigger a supervised update.
- **Adapting to new conditions.** When the body or the world changes, the live
  brain adjusts from…
