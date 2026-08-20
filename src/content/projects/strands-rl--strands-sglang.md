---
repo: "strands-rl/strands-sglang"
name: "strands-sglang"
description: "SGLang model provider of Strands Agents for on-policy agentic RL training."
readmeQualityOk: true
url: "https://github.com/strands-rl/strands-sglang"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-rl", "ai-agents", "sglang", "strands-agents"]
stars: 77
forks: 14
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-12-31T23:40:08Z"
lastCommitAt: "2026-08-20T04:07:38Z"
lastReleaseAt: "2026-02-14T08:38:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 34
maintainers: ["Lawhy", "seanliu96", "rz-zhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f24f02c739a3a070e473a5d9678ba0bb113acb49d898462d907357a06008264/strands-rl/strands-sglang"
---

# Strands-SGLang

**Agentic RL, done correctly.**

- [Strands Agents SDK](https://github.com/strands-agents/sdk-python): a harness builder whose event-based hooks make the agent loop fully customizable.
- [SGLang](https://docs.sglang.io/): a high-performance serving framework for fast, high-concurrency rollouts that exposes per-token metadata.

**Strands-SGLang** bridges the two so multi-turn rollouts stay on-policy — token-in, token-out, no silent retokenization drift.

## Features

- **Token-In/Token-Out** rollouts: model-generated tokens carried through as-is
    - Only new messages are tokenized each turn with **incremental chat templating**
- **Strict tool-call parsing**: parsed exactly as generated, no heuristic repair
- **Harness customization**: pass tools and hooks into `Agent` to customize your harness
- **Native SGLang `/generate` endpoint**: high-throughput, non-streaming rollouts

> For RL environment integration, please refer to [`strands-env`](https://github.com/strands-rl/strands-env)

## Installation

```bash
pip install strands-sglang
```

Or install from source with development dependencies:

```bash
git clone https://github.com/strands-rl/strands-sglang.git
cd…
