---
repo: "rocke2020/open-agent-memory-benchmark"
name: "open-agent-memory-benchmark"
description: "Open benchmark for choosing agent memory: compare Hindsight, Mem0, and OpenViking on accuracy, answer-visible context, latency, and indexing tokens/time."
readmeQualityOk: true
url: "https://github.com/rocke2020/open-agent-memory-benchmark"
homepage: "https://rocke2020.github.io/open-agent-memory-benchmark/eval_results/v0.1.0/comparison-20260913-133717-82378/report.html"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
topics: ["agent-memory", "ai-agents", "benchmark", "hindsight", "llm-evaluation", "long-term-memory", "longmemeval", "mem0", "openviking", "self-hosted"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-20T23:41:13Z"
lastCommitAt: "2026-11-18T12:07:29Z"
lastReleaseAt: "2026-11-08T13:24:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 61
maintainers: ["rocke2020"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c25d295b4524438a4f7dd0254393e5442bca8ef6893b7833c655c483943dc01/rocke2020/open-agent-memory-benchmark"
---

# Open Agent Memory Benchmark

English | [简体中文](https://github.com/rocke2020/open-agent-memory-benchmark/blob/HEAD/README_CN.md) | [日本語](https://github.com/rocke2020/open-agent-memory-benchmark/blob/HEAD/README_JA.md)

## Overview

Open Agent Memory Benchmark (OAMB) is the standalone evaluation repository for Open Agent Memory (OAM), with a publicly documented workflow for LME-500 and BEAM-10M. It covers dataset preparation, execution and reporting, with separate comparisons against Hindsight, Mem0 and OpenViking.

## OAM results

**OAM reaches 95.2% on LME-500 (476/500)** with MiniMax M3.1 Flash native-adaptive answering and judging, using an **18,000-token retrieval-context limit**.
