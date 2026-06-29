---
repo: "ly-wang19/engram"
name: "engram"
description: "Engram — an open-source long-term memory engine for LLM agents: bi-temporal facts, hybrid retrieval, reproducible benchmarks."
url: "https://github.com/ly-wang19/engram"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T15:54:00Z"
lastCommitAt: "2026-06-29T07:21:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["claude", "ly-wang19"]
openGraphImageUrl: "https://opengraph.githubassets.com/91ab78956bad616cfbf5a67a06f3c3c5c3933e45859906c151960d3b53edf12d/ly-wang19/engram"
---

# Engram

**🌐 English | [中文](README.zh-CN.md)**

**An open-source long-term memory engine for LLM agents — built around one principle: every number we
publish, you can reproduce.**

**📄 [Paper — arXiv:2606.09900 →](https://arxiv.org/abs/2606.09900)** — *Less Context, More Accuracy: A Bi-Temporal Memory Engine for LLM Agents Where a Lean Retrieved Context Beats the Full History.*

**🎬 [Live demo / 在线动画演示 →](https://ly-wang19.github.io/engram/)** — see how it works in 60 seconds.

**🔌 [Try the live console →](http://42.193.220.197:8456/ui)** — open it, enter the demo key `1`, and browse a fully-loaded public memory end-to-end (profile, facts, timeline, graph, Q&A).

Engram gives LLM agents durable, queryable memory across sessions: it stores what happened, distills
atomic facts, tracks how they change over time (bi-temporal), resolves contradictions without losing
history, and retrieves the right context with a hybrid semantic + lexical + graph + recency search.

> Status: **alpha**. The end-to-end loop runs with **zero setup** (no API keys, no services). The
> benchmark numbers below run on real models and are reproducible with one command. See
> [`RESULTS.md`](RESULTS.md) for…
