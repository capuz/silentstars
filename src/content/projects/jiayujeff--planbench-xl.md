---
repo: "JiayuJeff/PlanBench-XL"
name: "PlanBench-XL"
description: "Official Repository for our paper: PlanBench-XL: Evaluating Long-Horizon Planning of LLM Tool-Use Agents in Large-Scale Tool Ecosystems"
url: "https://github.com/JiayuJeff/PlanBench-XL"
homepage: "https://planbench-xl.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "llm", "long-horizon", "long-horizon-agents", "tool-use"]
stars: 32
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T07:16:03Z"
lastCommitAt: "2026-06-27T06:24:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 19
maintainers: ["tu-naaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/4afc80006c83a1380e5a6d74b12cf4d1e44b83be9ca7fcb92c486b73181fd28d/JiayuJeff/PlanBench-XL"
---

# PlanBench-XL [Under Construction]

  </a>
  </a>
  </a>
  </a>
</p>

This is the official repository for **PlanBench-XL**, a benchmark for evaluating LLM agents' **long-horizon planning with massive tool ecosystems** under retrieval noise and path-preserving blocker events.

## 🎯 Project Overview

**PlanBench-XL** tests whether tool-use agents can solve retail planning tasks when they cannot see the whole tool universe at once. At each turn, the agent may retrieve relevant tools, call an available tool, or submit a final answer. The runtime tracks discovered tools, trusted and untrusted intermediate values, executable traces, and final-answer correctness.

The current release contains a retail-domain benchmark with **327 queries**, **56 datatypes**, and **1,665 tools**.

## ✨ Core Features

- **Massive Tool Retrieval**: Agents retrieve tools from a large tool ecosystem instead of receiving a complete tool list up front.
- **Long-Horizon Planning**: Ground-truth solution paths span at least 5 tool steps, requiring multi-step composition across intermediate values.
- **Noisy Tool Ecosystem**: Retrieved executable tools can be augmented with noisy sibling tools.
-…
