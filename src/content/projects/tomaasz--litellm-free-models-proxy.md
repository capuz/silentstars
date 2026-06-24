---
repo: "tomaasz/litellm-free-models-proxy"
name: "litellm-free-models-proxy"
description: "Self-hosted LiteLLM proxy with auto-discovery of free/trial LLM models from OpenRouter, Groq, Gemini, Cerebras, SambaNova, Cohere, NVIDIA NIM and more"
url: "https://github.com/tomaasz/litellm-free-models-proxy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 37
forks: 5
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-27T19:27:10Z"
lastCommitAt: "2026-06-24T00:23:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 32
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b88972a8f8b38ac535ad5f385b69e4d9e46acdea2451dc2dead85ee6aa275fa6/tomaasz/litellm-free-models-proxy"
---

# litellm-free-models-proxy

Self-hosted [LiteLLM](https://github.com/BerriAI/litellm) proxy that automatically discovers and registers LLM models available on **free API tiers** (free tokens, no credit card required) from multiple providers.

## What it does

- Exposes a single OpenAI-compatible API endpoint for all your LLM providers
- **Auto-discovers models with free API access** every 8h via `sync_models.py` — no manual config updates needed
- Load-balances across multiple API keys for the same provider
- Logs usage to Postgres (optional: Langfuse for observability)

> **Note:** "Free" here means _free API tokens_ — providers that let you call their models via API at no cost (within rate/token limits). This is not a list of open-source or self-hostable models.

## Providers with auto-discovery

| Provider | Free tier | How detected |
|---|---|---|
| **OpenRouter** | Free tokens for selected models | `pricing.prompt == "0"` in `/api/v1/models` |
| **Groq** | Rate-limited free tier for all models | All models from `/v1/models` |
| **Cerebras** | 1M tokens/day free | All models from `/v1/models` |
| **SambaNova** | Free tier for all models | All models from `/v1/models` |
|…
