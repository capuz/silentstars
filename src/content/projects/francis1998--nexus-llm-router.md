---
repo: "Francis1998/nexus-llm-router"
name: "nexus-llm-router"
description: "Drop-in LLM router and AI gateway speaking OpenAI Chat Completions, OpenAI Responses and Anthropic Messages APIs, with 124 routing strategies across GPT-6 Astra, Claude Opus 5.5, Gemini 4 Argon and Kimi K3.1 Pro, plus budgets, fallbacks, tenant rate limits, idempotency and audit logs."
readmeQualityOk: true
url: "https://github.com/Francis1998/nexus-llm-router"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-infrastructure", "cost-optimization", "llm-gateway", "llm-router", "multi-llm", "openai-compatible", "ai-gateway", "anthropic", "claude", "fastapi"]
stars: 122
forks: 35
openIssues: 8
closedIssues: 4
watchers: 25
contributors: 3
recentReleases: 0
createdAt: "2026-06-21T05:44:19Z"
lastCommitAt: "2026-11-13T05:43:11Z"
lastReleaseAt: "2026-07-07T01:51:11Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 26
maintainers: ["Francis1998", "cursor[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b5663dd981d969fbabfef0cc9fda89b5f6f82cb866dfbf9c096960561454795/Francis1998/nexus-llm-router"
---

# nexus-llm-router

  

> Intelligent multi-LLM routing middleware with task-aware model selection, cost optimization, fallback safety, and a drop-in OpenAI-compatible API.

**Point any OpenAI SDK at one endpoint and let policy pick the model.** Nexus routes every request to GPT-6, Claude 5.5, Gemini 4 / 3.8, or Kimi K3.1 based on task, cost, latency, and provider health, and enforces budgets, fallbacks, rate limits, and an audit trail along the way.

*The official OpenAI Python SDK calling `POST /v1/responses` (plain and streaming) against nexus with mock providers, recorded from a real run ([how it was recorded](https://github.com/Francis1998/nexus-llm-router/blob/HEAD/docs/guides/RESPONSES_API_GUIDE.md#how-this-demo-was-recorded)).*

## Why Nexus

Most teams start with one LLM endpoint. That works until traffic grows, latency starts swinging, finance asks why every request hits the most expensive model, and incident review asks why the app kept calling a degraded provider. Nexus gives the application one stable OpenAI-compatible API while moving model choice, fallback, budget, audit, and routing rationale into infra-owned middleware.

Nexus is designed for AI infrastructure…
