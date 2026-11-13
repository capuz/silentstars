---
repo: "AMD-Ecosystem/moat"
name: "moat"
description: "Porting popular CUDA projects to ROCm/HIP, one repository at a time. Driven by Claude."
readmeQualityOk: true
url: "https://github.com/AMD-Ecosystem/moat"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-06T06:48:06Z"
lastCommitAt: "2026-11-13T05:40:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["jeffdaily"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a7c6c32687e80b5f6bca2a9d571718b2ecc2fb787d8b2b206f5bb87e3a5bb21/AMD-Ecosystem/moat"
---

# MOAT: Migration Orchestration via Automated Translation

MOAT ports popular CUDA GitHub projects to ROCm/HIP, one repo at a time. Coverage is expressed as gates -- wave64, wave32, windows -- so a port is proven once each gate has an architecture that validated it on real hardware. It is driven by AI coding agents running through either Claude Code or Codex: intake screens a candidate, a planner analyses it, a porter applies the change on a fork in the AMD-Ecosystem org, a reviewer checks it, and a validator runs the real tests on AMD GPUs. Submitting the result upstream, and everything that follows with a maintainer, stays with a person. This repo is the control plane; it tracks progress and holds the porting knowledge in the `cuda-to-rocm` skill.

Prefer pictures? [VISUAL.md](https://github.com/AMD-Ecosystem/moat/blob/HEAD/VISUAL.md) walks through all of this in twelve diagrams.

- [If you maintain a project we might send a pull request to](#if-you-maintain-a-project-we-might-send-a-pull-request-to)
- [How it works](#how-it-works)
- [What a person decides, and what agents may never do](#what-a-person-decides-and-what-agents-may-never-do)
- [Suggest a project to…
