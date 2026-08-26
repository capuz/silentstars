---
repo: "adilfaisal01/llm-multiagent-swarm"
name: "llm-multiagent-swarm"
description: "Multi-agent research orchestration using Ollama cloud models — parallel workers, web search, shared scratchpad, modular tools."
readmeQualityOk: true
url: "https://github.com/adilfaisal01/llm-multiagent-swarm"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "ai-agents", "llm-agents", "llm-tools", "llms", "multiagent-systems"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-30T16:18:07Z"
lastCommitAt: "2026-08-26T04:17:45Z"
lastReleaseAt: "2026-08-07T05:38:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["adilfaisal01", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c13d3fdc8faa1a89e1d9dac5b9b1629cb6e7aefa686ecc47ceb97d39c5044dd5/adilfaisal01/llm-multiagent-swarm"
---

# 🐝 Swarm v2

Multi-agent research orchestration using Ollama cloud models. Spawn parallel workers with focused research angles, each with web search access, and collect their outputs via a shared scratchpad.

Core library is pure Python stdlib. The optional persistent TUI requires `textual`. Web search works out of the box via DuckDuckGo (the `ddgs` package, no API key, no self-hosting).

```bash
# Quick start
python3 -m swarm --goal "What's happening with AI regulation in the EU?" --mix

# Persistent TUI with follow-up support
python3 -m swarm --tui
```

## Architecture

```
                         ┌─────────────────────────────────────┐
                         │         YOU (the user)             │
                         │   python3 -m swarm --goal "..."   │
                         └──────────────┬──────────────────────┘
                                        │
                          ┌──────────────▼──────────────────────┐
                          │         ORCHESTRATOR               │
                          │  • Parses --goal, --mix, --config  │
                          │  • Loads swarm_config.json         │
                          │  • Estimates complexity…
