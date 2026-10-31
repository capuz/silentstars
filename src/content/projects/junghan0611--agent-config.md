---
repo: "junghan0611/agent-config"
name: "agent-config"
description: "Skills SSOT and proving ground for entwurf — one operator's memory, skills, and 1KB identity carried identically across pi, Claude Code, Codex, Antigravity, Copilot, OMP, and OpenClaw. Semantic memory (Qwen3-Embedding-8B + LanceDB), 43 shared skills, and a version-pinned bench for agent runtimes."
readmeQualityOk: true
url: "https://github.com/junghan0611/agent-config"
homepage: "https://junghanacs.com/projects/agent-config/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [44, 33]
topics: ["ai-agent", "embedding", "lancedb", "org-mode", "pi-coding-agent", "rag", "semantic-search"]
stars: 5
forks: 0
openIssues: 9
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2025-11-14T02:57:43Z"
lastCommitAt: "2026-10-31T09:54:36Z"
lastReleaseAt: "2026-08-06T21:23:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 83
maintainers: ["junghan0611", "junghanacs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1536ad4498f1f3f4e5877888570bedef30da35d8bbb6334a540fb07851d0af/junghan0611/agent-config"
---

# agent-config

**Skills, identity and alignment across AI harnesses.** agent-config is the skills source of truth and lived proving ground behind GLG's working environment. It keeps a shared profile, capability doors and ways of returning to evidence across sessions and models — without becoming another harness or taking over their memories.

> **도구가 바뀌어도 같은 사람의 맥락과 작업의 자세로 돌아오도록.** 이 집은 스킬의 개수보다 함께 일하는 방식을 붙든다. 정체성·스킬 정본·연속성의 실사용 시험소이며, 조용해지는 쪽이 건강한 방향이다.

## How to Read This

This is a front door, not a manual. It is written for someone who wants to see **what one operator actually runs day to day** — not for someone about to install a framework. Four things to hold before the first table.

**1. This repo is not a harness.** Pi and the native harnesses own execution; [`entwurf`](https://github.com/junghan0611/entwurf) is their narrow screwdriver — the dispatch substrate through which independent harnesses address one another by **garden id**. Its [releases](https://github.com/junghan0611/entwurf/releases) and installation contract live there; the versioned observations in [`docs/`](https://github.com/junghan0611/agent-config/blob/HEAD/docs/) are dated evidence, not an install…
