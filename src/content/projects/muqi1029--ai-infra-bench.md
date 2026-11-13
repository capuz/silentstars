---
repo: "Muqi1029/ai-infra-bench"
name: "ai-infra-bench"
description: "End-to-end automated benchmarking for AI infrastructure workflows."
readmeQualityOk: true
url: "https://github.com/Muqi1029/ai-infra-bench"
homepage: "https://muqi1029.github.io/ai-infra-bench"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-20T06:59:27Z"
lastCommitAt: "2026-11-13T05:41:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 75
maintainers: ["Muqi1029", "lmyybh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b8b82efe112b0bc1e7c34db5e8c4cb7944587a1e3664c905c2688625032a0ed/Muqi1029/ai-infra-bench"
---

**[中文文档](https://muqi1029.github.io/ai-infra-bench/) · [English Docs](https://muqi1029.github.io/ai-infra-bench/en/)**

# AI Infra Bench

AI Infra Bench measures OpenAI-compatible inference endpoints, evaluates model
outputs, and finds the highest load that satisfies a service-level objective.
It is backend-independent and does not require a serving framework SDK.

## Documentation

Read the documentation: [简体中文](https://muqi1029.github.io/ai-infra-bench/) | [English](https://muqi1029.github.io/ai-infra-bench/en/).

The [user documentation source](https://github.com/Muqi1029/ai-infra-bench/blob/HEAD/website/docs/intro.mdx) covers setup, benchmarking,
SLO search, session replay, evaluation, and monitoring in Simplified Chinese and
English. The MDX site includes language switching and a GitHub Pages workflow.
See [website development and publishing](https://github.com/Muqi1029/ai-infra-bench/blob/HEAD/website/README.md) to preview or deploy it.

## Install

```bash
pip install ai-infra-bench
```

Python 3.10 or newer is required.

## CLI

Inspect NVIDIA GPUs using only the Python standard library and the installed NVIDIA driver
(no torch or CUDA Toolkit required):

```bash
aib…
