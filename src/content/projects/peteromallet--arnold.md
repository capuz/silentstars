---
repo: "peteromallet/Arnold"
name: "Arnold"
description: "General-purpose planning and execution harness for LLMs — structured phases, critique, gating, and review"
readmeQualityOk: true
url: "https://github.com/peteromallet/Arnold"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 97
forks: 8
openIssues: 135
closedIssues: 6
watchers: 1
contributors: 104
recentReleases: 0
createdAt: "2026-03-20T01:51:24Z"
lastCommitAt: "2026-08-15T04:04:00Z"
lastReleaseAt: "2026-04-21T16:42:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 23
maintainers: ["peteromallet"]
openGraphImageUrl: "https://opengraph.githubassets.com/a45881d09665f77ae5f397ddfc5be54004e5daa48cc5ab2605ddd6eaf7f3a716/peteromallet/Arnold"
---

# Arnold — Build Intelligent Pipelines

Arnold is a tool for building intelligence systems out of many coordinated models. Today you can experience one slice of that through its first tool, **Megaplan** — a planning and execution harness for software. More on building and sharing your own pipelines soon.

---

## Megaplan - a pipeline for cost-efficient advanced planning and execution

It breaks building software into structured, independently-checked phases — making intelligent-but-unreliable LLMs systematically robust, and letting each phase run on the cheapest model that can do it well.

## Megaplan's philosophy

Two ideas, and they reinforce each other.

**1. Structure makes LLMs robust.** Modern LLMs are highly intelligent but systematically unreliable. Left to their own devices they skip steps, miss concerns, rubber-stamp their own work, and research sloppily. Megaplan breaks the whole process into explicit stages — `prep`, `plan`, `critique`, `gate`, `revise`, `finalize`, `execute`, `review` — each scoped and equipped so the model does one thing well, and each checked by a *separate* pass instead of the model grading itself. That structure is what turns raw intelligence…
