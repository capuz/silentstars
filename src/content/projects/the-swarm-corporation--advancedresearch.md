---
repo: "The-Swarm-Corporation/AdvancedResearch"
name: "AdvancedResearch"
description: "An open source and enterprise-grade implementation of the orchestrator-worker pattern from Anthropic's paper, \"How we built our multi-agent research system,\" using the swarms framework. "
readmeQualityOk: true
url: "https://github.com/The-Swarm-Corporation/AdvancedResearch"
homepage: "https://swarms.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "ai", "anthropic", "claude", "claude-sonnet", "langchain", "llms", "multi-agent", "swarms-agents", "graphworkflow"]
stars: 38
forks: 7
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-07-25T17:43:02Z"
lastCommitAt: "2026-11-09T00:52:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 38
maintainers: ["kyegomez"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de98a5bcde89a44fb27f9d1d1b63de96181f04d8907b13a4448b0c335d1b4d3/The-Swarm-Corporation/AdvancedResearch"
fundingLinks: ["GITHUB:https://github.com/kyegomez"]
---

# Advanced Research System (Based on Anthropic's Paper)

An implementation of the orchestrator-worker pattern from Anthropic's ["How we built our multi-agent research system"](https://www.anthropic.com/research/multi-agent-research-system), built entirely on the [Swarms API](https://docs.swarms.ai) and [Exa](https://exa.ai) search. A lead researcher plans the query, parallel search subagents research each part with Exa, the lead writes the report and decides whether gaps need another round, and a citation agent checks every claim against the sources.

Every agent is one call to the Swarms API and every search is one call to Exa, so there is no agent framework or model-provider SDK to install: two API keys and `httpx`.

## Installation

```bash
pip3 install -U advanced-research

# uv pip install -U advanced-research
```

## Environment Variables

```bash
SWARMS_API_KEY="your_swarms_api_key_here"   # https://swarms.world/platform/api-keys
EXA_API_KEY="your_exa_api_key_here"         # https://dashboard.exa.ai/api-keys
```

Models and token limits are set on `AdvancedResearch(...)`, not via environment variables. Any model from `GET https://api.swarms.world/v1/models/available` works…
