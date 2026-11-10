---
repo: "apimartm7f7tycc/flux-2-pro-api-cn"
name: "flux-2-pro-api-cn"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartm7f7tycc/flux-2-pro-api-cn"
homepage: "https://go.apimart.ai/k-03a8ad"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api", "api-aggregator", "api-pricing", "apimart-cn", "llm-api-gateway", "openai-compatible", "pay-as-you-go"]
stars: 69
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-29T03:08:00Z"
lastCommitAt: "2026-11-10T14:49:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: ["apimartm7f7tycc"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0aa51a313146dd2bef88068a790b98c6fe9d6180825c0522ad1c130631e854/apimartm7f7tycc/flux-2-pro-api-cn"
---

# FLUX 2 Pro API (`flux-2-pro`)

> **from $0.024 per image** (1MP $0.024 · 2MP $0.036 · 3MP $0.048) — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-67389b)** · **[Live pricing](https://go.apimart.ai/k-082e5b)** · **[Model page](https://go.apimart.ai/k-126302)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call FLUX 2 Pro (`flux-2-pro`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach FLUX 2 Pro (`flux-2-pro`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **$1 minimum, pay as you go.** No subscription and no prepaid plan to size up front: top up from $1 and spend it on calls.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

FLUX 2 Pro by Black Forest Labs generates images from text or…
