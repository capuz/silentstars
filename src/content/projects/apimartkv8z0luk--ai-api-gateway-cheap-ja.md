---
repo: "apimartkv8z0luk/ai-api-gateway-cheap-ja"
name: "ai-api-gateway-cheap-ja"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartkv8z0luk/ai-api-gateway-cheap-ja"
homepage: "https://go.apimart.ai/k-f09350"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "ai-api-gateway-cheap", "api-aggregator", "api-pricing", "apimart-ja", "llm-api-gateway", "openai-compatible", "pay-as-you-go"]
stars: 67
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-29T02:52:48Z"
lastCommitAt: "2026-11-10T14:49:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: ["apimartkv8z0luk"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7836e6200556b7644d20ad5c0163ab08bdd1d272803b101e5bf47a327dfcb9b/apimartkv8z0luk/ai-api-gateway-cheap-ja"
---

# Seedance 1.5 Pro API (`seedance-1.5-pro`)

> **per generated second**, billed by resolution — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-8806bb)** · **[Live pricing](https://go.apimart.ai/k-216dc4)** · **[Model page](https://go.apimart.ai/k-d38dd3)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Seedance 1.5 Pro (`seedance-1.5-pro`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Seedance 1.5 Pro (`seedance-1.5-pro`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Seedance 1.5 Pro is ByteDance's AI video model with…
