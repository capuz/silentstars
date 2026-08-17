---
repo: "AlphaAvatar/AlphaAvatar-distill"
name: "AlphaAvatar-distill"
description: "Agentic distillation for transforming frontier-scale models into real-time, edge-device models."
readmeQualityOk: true
url: "https://github.com/AlphaAvatar/AlphaAvatar-distill"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T11:49:15Z"
lastCommitAt: "2026-08-17T04:20:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["AlphaAvatar"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b8b30906c924b467d3e52e90491ce330d0a160c462db6a9c1924d55dc51173d/AlphaAvatar/AlphaAvatar-distill"
---

# AlphaAvatar-distill

## 📈 Performance Trend and Project Goal

AlphaAvatar-distill is an agent-guided model compression and distillation framework for turning large teacher models into small, real-time, edge-deployable students.

The goal is to make distillation reproducible and automated, producing efficient student models with long-context and multi-turn comprehension, strong reasoning and self-correction, and reliable accuracy across sustained interactions and long-running agentic workloads such as AlphaAvatar—including RAG, tool use, quantized inference, and low-latency deployment.

**Positioning: teacher checkpoint → arbitrary requested target size.** The framework is
not a fixed recipe for one teacher/student pair. It takes a teacher checkpoint, a target
architecture, a calibration pool and a search budget, and produces an initialized student
of exactly the requested size. The current study is 4B → ~596M; the same machinery is
intended to carry a later ~30B → ~4.xB setting, so nothing in the search engine may
hard-code layer counts, hidden or FFN sizes, head counts, or a target parameter count.

### Current state

| | |
| --- | --- |
| current best behaviour | E1/P1…
