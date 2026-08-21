---
repo: "Danissimode/litellm-free-models-prox-DNy"
name: "litellm-free-models-prox-DNy"
description: "Hardened local-only LiteLLM gateway — auto-discovers free/trial LLM models from 15+ providers (OpenRouter, Groq, Gemini, Cerebras, NVIDIA NIM, SambaNova, Cohere, GitHub Models, etc.). Single OpenAI-compatible endpoint at 127.0.0.1:4000. Role-based aliases for AI coding agents."
readmeQualityOk: true
url: "https://github.com/Danissimode/litellm-free-models-prox-DNy"
homepage: "https://danissimode.github.io/litellm-free-models-prox-DNy/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["ai-agents", "api-gateway", "cerebras", "cohere", "docker", "free-tier", "gemini", "github-models", "groq", "huggingface"]
stars: 9
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-22T10:51:45Z"
lastCommitAt: "2026-08-21T04:10:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb422bc1f885b18276ae7269d23f6a8520714a4e645830d8c057f002348d3f8e/Danissimode/litellm-free-models-prox-DNy"
---

# Aion Model Gateway

A **hardened, local-only** [LiteLLM](https://github.com/BerriAI/litellm) gateway that auto-discovers and routes to LLM models on **free API tiers** (free tokens, no credit card). Any OpenAI-compatible client connects to a single endpoint:

```
http://127.0.0.1:4000/v1
```

This is a fork of [litellm-free-models-proxy](https://github.com/cheahjs/litellm-free-models-proxy), reworked for local security, reproducible startup, role-based aliases for AI coding agents, and a strict free-only admission policy.

> **Fork status:** All upstream author-specific traces have been removed. The repository is stabilized — CI passes, tests cover policy/config invariants, and the security posture is enforced by `preflight.sh` + `security-check.sh`. Contributions welcome.

## What this is

- A single OpenAI-compatible endpoint for many free/trial LLM providers (OpenRouter, Groq, Cerebras, SambaNova, NVIDIA NIM, Cohere, Gemini, HuggingFace, Mistral, GitHub Models, Cloudflare Workers AI, …).
- **Auto-discovery** of free models every 8h via `sync_models.py` (calls the LiteLLM Management API — never edits your routing groups).
- **Load-balancing** across multiple API keys for the…
