---
repo: "yibie/awesome-rea"
name: "awesome-rea"
description: "A curated list of AI-assisted reverse engineering: decompilation, recompilation and native ports, with how each project verifies correctness"
readmeQualityOk: true
url: "https://github.com/yibie/awesome-rea"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 286
forks: 18
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-13T03:54:15Z"
lastCommitAt: "2026-11-13T05:43:24Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 19
maintainers: ["yibie", "007hacky007", "dnb4ever"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a5cdd747032c3fcbe14488c6fb9a14cb025a970c091c0ff7b4c4f67682f7d82/yibie/awesome-rea"
---

# awesome-rea

A curated list of AI-assisted reverse engineering: decompilation, static recompilation, native ports, and the agent tooling around them.

Every entry answers the same question: **how does this project define "done"?** This is not a collection of "AI is impressive" demos. It is a collection of projects that turned correctness into a gate a machine can decide — a byte comparison against the original ROM, a required hash match on the user's own dump, a compatibility matrix, a build that has to stay green.

The list runs on **two tracks**. Category pages hold projects that state how correctness is decided. `Related Practices & Discussions` holds practice signals — post-mortems, talk write-ups, arguments — which need **no repository and no acceptance test**, because a subject is worth recording while it is still an argument. Both tracks are first-class: an item with neither a repo nor a verification clause is a normal discussion entry here, not a rejected project.

## Why this list

The interesting part of an AI-assisted decompilation is never that a model wrote code. It is that someone decided what counts as correct *before* letting agents iterate, and then built the…
