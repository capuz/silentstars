---
repo: "Accenture/ContextEcho"
name: "ContextEcho"
description: "ContextEcho: A Benchmark for Persona Drift in Long Agentic-Coding Sessions"
readmeQualityOk: true
url: "https://github.com/Accenture/ContextEcho"
homepage: "https://accenture.github.io/ContextEcho/donate/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agentic-coding", "benchmark", "llm", "llm-evaluation", "long-context", "persona-drift"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T17:18:10Z"
lastCommitAt: "2026-07-04T22:21:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["dingxianzhong"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca290516921daddd26e2048ce2730b1ddfd24a183c61ef43bdb80c8aef5bcdbc/Accenture/ContextEcho"
---

# ContextEcho

Code release for:

> **ContextEcho: A Benchmark for Persona Drift in Long Agentic-Coding Sessions**
> Xianzhong Ding, Yangyang Yu, Changwei Liu, Bill Zhao. arXiv:2605.24279, 2026.

## News

- **June 2026** — ContextEcho is released alongside our [arXiv preprint](https://arxiv.org/abs/2605.24279), with the full harness, three donated sessions, and the per-cell evaluation corpus on [Hugging Face](https://huggingface.co/datasets/contextecho2026/persona-drift-contextecho).

ContextEcho measures whether a frontier LLM's trained Assistant persona
survives long agentic-coding sessions (thousands of tool-using turns,
hours of continuous use). It is a **25-probe identity suite + harness**
that snapshots a real Claude Code session prefix, forks the
conversation state, and probes any chat-completions API target on the
forked branch — without perturbing the main session.

</p>

## Key findings

Measured across **24 frontier models from 10 organizations** on three
anonymized real Claude Code sessions (3,746–9,716 turns):

| # | Finding | Takeaway |
|---|---------|----------|
| 1 | **Drift is general, not family-specific** | Persona drift appears across organizations, not just…
