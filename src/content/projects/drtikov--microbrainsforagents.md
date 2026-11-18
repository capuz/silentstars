---
repo: "drtikov/microbrainsforagents"
name: "microbrainsforagents"
description: "Sub-2ms pure-NumPy 4-layer pre-flight safety, full-file AST/secret/shell guard & MCP-Zero router (v0.6.4). 97.4% Recall@4 (2.6% drop rate, 39.7% net prefill tokens saved after retries on 32-tool OpenAI schemas), 42/42 alpha=0.05 calibration (n_cal=120), Clopper-Pearson bounds & drift monitor."
readmeQualityOk: true
url: "https://github.com/drtikov/microbrainsforagents"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "conformal-prediction", "edge-ai", "llm-orchestration", "micro-transformer", "mixture-of-experts", "numpy", "opencl", "vector-symbolic-architecture", "zero-gpu"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-11-17T21:09:58Z"
lastCommitAt: "2026-11-18T12:05:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["drtikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/db864368564c7d8ed14ec74860563e56f43a7b5cbc709f57caa99c94a691a6c5/drtikov/microbrainsforagents"
discussionCount: 0
---

# Aetheris Microbrains

**Aetheris Microbrains** (`v0.6.4`) is a deterministic, layered local pre-flight safety, full-file AST/shell verification, and registry-enforced tool-routing library for autonomous LLM agents built in pure NumPy (with optional OpenCL acceleration).

> **Architectural Honesty Note (`v0.6.4`):** Microbrains are **not** SGD-trained generative deep LLMs, and they do **not** replace general language reasoning. They are a **fast (`< 2 ms` p95 on CPU), deterministic 4-layer hybrid pre-filter and coprocessor** that stands *in front* of cloud LLMs and runtime execution: **Layer 0 universal SWE security paths (`.env`, `.git/hooks/`, `.ssh/`, `credentials.json`), risk classes, and live `available_tools` enforcement**, **Layer 1 full-file patched Python AST reconstruction (`ast.parse` over applied unified diffs), cyclomatic complexity vs.
