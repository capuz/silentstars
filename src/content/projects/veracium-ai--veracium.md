---
repo: "veracium-ai/Veracium"
name: "Veracium"
description: "Provenance-aware memory for AI agents."
readmeQualityOk: true
url: "https://github.com/veracium-ai/Veracium"
homepage: "https://veracium.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-memory", "provenance", "llm-memory", "long-term-memory", "prompt-injection", "ai-security", "trust"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-11T20:26:04Z"
lastCommitAt: "2026-08-28T15:32:59Z"
lastReleaseAt: "2026-07-16T18:24:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 55
maintainers: ["qspencer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297761273/b71f4223-9e3d-4a4d-897d-f38a225974c7"
discussionCount: 3
---

# Veracium

**Veracium is a provenance-aware memory plug-in for agentic systems** —
durable, per-user memory that resists the injection and confabulation failures
that plague naive agent memory. Provenance means every fact tracks *who said
it*: a claim from an email your agent merely read can never become a "fact" it
asserts. It remembers what the user said, past interactions, and what worked —
and it remembers where each of those came from.

Veracium is the production distillation of an evaluation-driven research project
(`agent-memory`): every design choice below traces to a measured finding, and the
research's synthetic-corpus harness is reused as the regression suite.

**Research:** the evaluation instrument behind those findings — a longitudinal
benchmark for agent memory — is described in Q. Spencer, *"Ground Truth First:
A Longitudinal Evaluation Instrument for Agent Memory, and the Tenure Crossover
in Memory-Architecture Rankings"* ([arXiv:2607.21962](https://arxiv.org/abs/2607.21962), 2026).

## Why it's shaped this way

- **Typed graph + dated episodes are the store of record.** Entity facts live as
  relational edges (with unforgeable provenance); interaction history…
