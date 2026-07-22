---
repo: "ContextLab/llmXive"
name: "llmXive"
description: "llmXive is an LLM-driven system for automating scientific discovery"
readmeQualityOk: true
url: "https://github.com/ContextLab/llmXive"
homepage: "https://contextlab.github.io/llmXive/"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [46, 30]
topics: ["autonomous-systems", "llm", "robot-scientist"]
stars: 6
forks: 2
openIssues: 16
closedIssues: 1202
watchers: 0
contributors: 109
recentReleases: 0
createdAt: "2025-07-03T16:47:31Z"
lastCommitAt: "2026-07-22T06:09:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 100
undervaluedScore: 87
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7de499bada90e5c0ec6356c9ba0b9ae2173ecfad1dd899f751fb63610721886/ContextLab/llmXive"
discussionCount: 0
---

# llmXive — automated scientific discovery, conducted in the open

llmXive is an automated platform for scientific discovery: a registry of
specialist LLM agents — with occasional human guidance — systematically advances
ideas from a one-paragraph brainstorm to a peer-reviewed paper, committing every
artifact, review, and decision to git as it goes.

- **Live dashboard:** <https://context-lab.com/llmXive>
- **Repository:** <https://github.com/ContextLab/llmXive>
- **Constitution:** [.specify/memory/constitution.md](https://github.com/ContextLab/llmXive/blob/HEAD/.specify/memory/constitution.md)
- **Agent registry:** [agents/registry.yaml](https://github.com/ContextLab/llmXive/blob/HEAD/agents/registry.yaml) (53 agents) · prompts: [agents/prompts/](https://github.com/ContextLab/llmXive/blob/HEAD/agents/prompts/)

## How it works

Every project gets its own [Spec Kit](https://github.com/github/spec-kit)
scaffold and is driven through a ~34-state lifecycle by two pipelines.

### The research pipeline

`brainstormed` → `flesh-out` (lit-search-backed expansion + a research-question
validator) → `specified` → `clarified` → `planned` → `tasked` (+ analyze) →
`in progress` (the…
