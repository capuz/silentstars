---
repo: "huangjia2019/designing-ai-agents"
name: "designing-ai-agents"
description: "Companion code for 'Designing AI Agents' (Manning, 2027) — 27 agent design patterns, organized by the 7 cognitive modules. Chapters 1–5 available."
readmeQualityOk: true
url: "https://github.com/huangjia2019/designing-ai-agents"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 213
forks: 43
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-21T09:42:28Z"
lastCommitAt: "2026-11-04T02:56:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 16
maintainers: ["huangjia2019"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fd7f8621dc3a2816af500b8df6e7a60681f0d086cb16b8e2ed739be9a458a17/huangjia2019/designing-ai-agents"
---

# Designing AI Agents — Source Code

**[*Designing AI Agents*](https://hubs.la/Q04hCsH10)** — the design-pattern catalogue for production AI agents. (Manning)

This repository is the official source code for the book.

## Current MEAP companion code

This repository matches the September 2026 MEAP update of *Designing AI
Agents*. The [MEAP code guide](https://github.com/huangjia2019/designing-ai-agents/blob/HEAD/docs/meap-update-2026-09.md) maps each book
listing to its runnable source file and verification command.

The examples are organized in two tracks:

- **`argus/`** — Argus, the running-example PR-review agent, evolves
  **cumulatively** from Ch2 to Ch10. Each chapter adds **one cognitive
  module** and ships a self-contained snapshot that imports as
  `from argus import ...` so the reader runs the chapter's Argus directly:
  `python -m argus.cli <diff> --project <name>`.
- **`patterns/`** — independent pattern demos for everything the chapter
  introduces. Patterns that do not belong in the cumulative Argus example
  remain here as runnable references.

中文版：[README.zh-CN.md](https://github.com/huangjia2019/designing-ai-agents/blob/HEAD/README.zh-CN.md)

> Need a separate…
