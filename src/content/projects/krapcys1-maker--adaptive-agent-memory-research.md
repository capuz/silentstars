---
repo: "krapcys1-maker/adaptive-agent-memory-research"
name: "adaptive-agent-memory-research"
description: "Experience memory for LLM agents that act, built up one measured step at a time: no memory, examples, random bank, retrieval by state. Controls and per-task gain/loss after every rung. ALFWorld first. Lend a GPU: run a 2-hour cell (#179). No GPU? Many CPU tasks under the milestone. Directions: docs/research-map."
readmeQualityOk: true
url: "https://github.com/krapcys1-maker/adaptive-agent-memory-research"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "llm", "local-first", "long-term-memory", "research", "agent-memory", "evaluation", "memory-systems", "open-science", "python"]
stars: 8
forks: 3
openIssues: 64
closedIssues: 25
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-08-22T11:29:54Z"
lastCommitAt: "2026-11-15T11:21:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["krapcys1-maker"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29f236c17565d0bf2ea36db8da7b8a2b3f1c0ba925597af7dffc6b5ea4fedc0/krapcys1-maker/adaptive-agent-memory-research"
discussionCount: 6
---

# adaptive-agent-memory-research

**Experience memory for LLM agents that act — built up from the simplest thing that works, one measured step at a time.**

An agent that does tasks (in a home simulator, a science lab simulator, later with real tools) should get better from its own experience without retraining the model. This project asks a narrow question first and earns every next step with a measurement:

> Does showing an agent the *right* pieces of its earlier successful runs, at the *right* moment, make it solve more tasks — and is it the match that helps, or just showing any example?

**Status (15 November 2026): new direction, nothing measured yet in it.** The repository changed course after an external literature and code review. Earlier research lines are kept, with their results and negative findings, in the [archive index](https://github.com/krapcys1-maker/adaptive-agent-memory-research/blob/HEAD/docs/ARCHIVE_INDEX.md). The previous README is preserved unchanged at [README at commit 34936e9](https://github.com/krapcys1-maker/adaptive-agent-memory-research/blob/34936e9/README.md).

---

## Why this direction

A review of recent work, read in full where it…
