---
repo: "Osmosis-AI/osmosis-sdk-python"
name: "osmosis-sdk-python"
description: "A Python SDK and CLI for building agent rollouts and managing LLM post-training workflows on Osmosis."
readmeQualityOk: true
url: "https://github.com/Osmosis-AI/osmosis-sdk-python"
homepage: "https://osmosis.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "reinforcement-learning", "rollout-service"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 7
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2025-03-16T16:46:02Z"
lastCommitAt: "2026-10-21T21:14:30Z"
lastReleaseAt: "2026-06-04T23:46:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 80
maintainers: ["JoyboyBrian", "BaiqingL", "allenlinsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/338cd88afd27af9396848f4d2eab16ee28514041f28353894c0d47d318db4d28/Osmosis-AI/osmosis-sdk-python"
---

# osmosis-ai

> ⚠️ **Warning**: osmosis-ai is still in active development. APIs may change between versions.

Python SDK and CLI for [Osmosis AI](https://platform.osmosis.ai), a platform for training LLMs with reinforcement learning. Implement an **AgentWorkflow** and a concrete **Grader** in Python, then use the CLI to submit evaluation and training runs from an Osmosis workspace directory.

## Installation

Requires **Python 3.12+**.

```bash
pip install osmosis-ai                     # CLI + framework-neutral rollout core
pip install "osmosis-ai[server]"            # + generic FastAPI rollout server
pip install "osmosis-ai[eval]"              # + local evaluation runner and dataset support
pip install "osmosis-ai[strands]"           # + Strands integration
pip install "osmosis-ai[openai-agents]"     # + OpenAI Agents integration
pip install "osmosis-ai[harbor]"            # + Harbor backend with Daytona support
pip install "osmosis-ai[rubric]"            # + LLM-as-judge rubric evaluation
pip install "osmosis-ai[parquet]"           # + Parquet dataset support
pip install "osmosis-ai[full]"              # every optional feature
# or with uv:  uv add osmosis-ai
```

There is one…
