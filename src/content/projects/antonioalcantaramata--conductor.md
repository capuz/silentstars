---
repo: "antonioalcantaramata/CONDUCTOR"
name: "CONDUCTOR"
description: "An LLM-orchestrated digital twin for uncertainty-aware power-system operations. Ask for a security assessment, N-1 screening or a corrective dispatch in plain language; runs on a hosted model or entirely on your own machine."
readmeQualityOk: true
url: "https://github.com/antonioalcantaramata/CONDUCTOR"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T13:01:49Z"
lastCommitAt: "2026-10-08T10:51:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 25
maintainers: ["antonioalcantaramata"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ae1707939601e6ae1901a6bc7812289e585ac06b721df96c52b642bf8c10921/antonioalcantaramata/CONDUCTOR"
---

# CONDUCTOR

An LLM-orchestrated digital twin for uncertainty-aware power-system operations.
CONDUCTOR pairs a power-systems analysis backend (security assessment, N-1
contingencies, probabilistic risk, robust corrective dispatch, flexibility and
hosting-capacity studies, KPIs) with a natural-language agent that drives those
tools from a chat interface.

The agent runs on a **hosted model** — Google Gemini, OpenAI, or Anthropic
(Claude) — or a **local model via Ollama**. You pick which each time you start
it, and no grid data leaves your machine in local mode.

The OpenAI option is not limited to OpenAI: point `OPENAI_BASE_URL` at any
endpoint speaking the same chat-completions dialect — Kimi, DeepSeek, Qwen,
Groq, Mistral, OpenRouter, Azure OpenAI, or a self-hosted vLLM server — and the
same agent runs on it. The only hard requirement is **tool calling**, since
CONDUCTOR drives the grid entirely through tools.

## Overview

- **`backend/`** — FastAPI service with the power-system engines (pandapower +
  Pyomo/IPOPT) exposed as tools.
- **`llm_agent/`** — Streamlit chat app and the LLM agent that orchestrates the
  backend tools.
- **`systems/`**, **`data_files/`** — networks and…
