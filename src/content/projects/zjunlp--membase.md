---
repo: "zjunlp/MemBase"
name: "MemBase"
description: "A Comprehensive Benchmarking Framework for Long-Term Conversational Memory Layers"
url: "https://github.com/zjunlp/MemBase"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-memory", "ai-memory", "artificial-intelligence", "benchmark", "large-language-models", "memory-system", "natural-language-processing"]
stars: 41
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2026-02-14T09:37:16Z"
lastCommitAt: "2026-06-29T07:23:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 39
maintainers: ["Xinle-Deng", "Xubqpanda", "penghujin"]
openGraphImageUrl: "https://opengraph.githubassets.com/edddebd7fc77674bd021e51bb13ce1eff28995591f95a3be1e47a6064b835abc/zjunlp/MemBase"
---

# MemBase

A comprehensive evaluation framework for benchmarking various memory layers on long-term conversational memory tasks. This framework provides a unified pipeline for **memory construction**, **memory retrieval**, and **question answering evaluation**.

---

## Key Features

- **Checkpoint, Recovery & Rerun**: It automatically saves progress during memory construction. If interrupted, simply re-run the script and it will skip already-processed trajectories and resume from where it left off. Use the `--rerun` flag to force rebuild memories from scratch when needed.
- **Non-Invasive Token Cost Monitoring**: Built-in token consumption tracking for LLM API calls. It uses monkey-patching to intercept calls **without modifying any baseline's internal code**.
- **Execution Graph Tracing**: It can trace how memory layers construct, retrieve, and use memories. Each user gets a dedicated execution graph, which makes it easier to inspect memory-augmented agent behavior and perform failure attribution. This feature is available for part of the supported memory layers.
- **Modular Architecture**: Clean separation between memory layers, datasets, and evaluation logic. Adding a new…
