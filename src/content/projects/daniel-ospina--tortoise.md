---
repo: "daniel-ospina/tortoise"
name: "tortoise"
description: "Tortoise — Semantic + Epistemic + Episodic + Procedural Graph Engine. A product of Premise Labs."
readmeQualityOk: true
url: "https://github.com/daniel-ospina/tortoise"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 702
closedIssues: 1534
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-30T22:26:04Z"
lastCommitAt: "2026-09-17T08:51:09Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["daniel-ospina"]
openGraphImageUrl: "https://opengraph.githubassets.com/722102906e3e35f602f03436ca01bfb424c0dbd662ac0cd3be8feb32d0a2c785/daniel-ospina/tortoise"
discussionCount: 0
---

---
title: "Tortoise — Semantic + Epistemic + Episodic + Procedural Graph Engine"
type: readme
domain: epistemic
status: live
created: 2026-07-24
updated: 2026-08-10
---

# Tortoise

A graph engine for agent memory: claims are **Points**, relationships are **edges**, and belief scores are computed by propagating evidence through the graph (EP — Evidence Propagation).

## Core hypothesis: the graph is the memory, not the summaries

The graph stores **STATE, not decisions**. Competitors store decision objects
("Decision X was made because of Reasons"); we do not. The record is: state
(objects/options with queryable lifecycle events — promoted/deprecated/
superseded — and confidence) + points (the logic: claims connected to the
state, the arguments that move confidence) + events (what happened, including
the decision moment as an Event node, so the decision dimension stays
queryable as a timeline). The graph says "this state is based on these
reasons" — never "this decision was made because of these reasons". The
narrative lives in the graph's content **and** its metadata; agents are the
computational layer that reads and maintains it; semantic summaries are
derived projections,…
