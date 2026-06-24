---
repo: "jeffdaily/moat"
name: "moat"
description: "MOAT: a Claude-driven effort to port popular CUDA GitHub projects to ROCm/HIP across AMD targets (Linux gfx90a, gfx1100, Windows gfx1151)"
url: "https://github.com/jeffdaily/moat"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [62, 22]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T01:24:54Z"
lastCommitAt: "2026-06-24T00:20:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["jeffdaily"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9962dc50ee7095accc32086493882b3e9e568676e60c1309ce496900f512c60/jeffdaily/moat"
---

# MOAT

MOAT (Moat Obliteration via Automated Translation) ports popular CUDA GitHub projects to ROCm/HIP, one repo at a time, across AMD targets: Linux gfx90a, Linux gfx1100, and Windows on gfx1101 and gfx1201. It is driven by Claude: a planner analyzes each project, a porter applies the change on a fork in the jeffdaily org, a reviewer checks it, and a validator builds and runs the real tests on AMD hardware. This repo is the control plane; it tracks progress and accumulates porting best practices in PORTING_GUIDE.md.

## How it works

Each project gets a folder under `projects/` holding its plan, notes, and a per-platform status file. A fresh Claude CLI run in this repo detects its AMD architecture, finds the next actionable project, and continues the pipeline. Linux gfx90a is the lead platform; the follower archs (Linux gfx1100, Windows gfx1101 and gfx1201) reuse the resulting fork branch and re-validate, since the AMD targets share one unified ROCm port. gfx1151 is a retired Windows host: its earlier validations are kept as records, and it is scheduled no new work.

## Scope and honesty

The project list below is a best-effort ranked union of targeted GitHub searches, not a…
