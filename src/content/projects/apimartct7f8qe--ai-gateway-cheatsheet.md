---
repo: "apimartct7f8qe/ai-gateway-cheatsheet"
name: "ai-gateway-cheatsheet"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartct7f8qe/ai-gateway-cheatsheet"
homepage: "https://go.apimart.ai/k-bc58ad"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "apimart-en", "llm-api-gateway", "openai-compatible", "pay-as-you-go", "ai-gateway"]
stars: 61
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T08:40:09Z"
lastCommitAt: "2026-11-10T14:49:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 29
maintainers: ["apimartct7f8qe"]
openGraphImageUrl: "https://opengraph.githubassets.com/f02496e109d9812845ed34c224856e082a955086edd7212aab73f22502bc5923/apimartct7f8qe/ai-gateway-cheatsheet"
---

# FLUX 3 Video API (`flux-3-video`)

> **per generated second** for 5–20 s HD or FHD clips — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-d30840)** · **[Live pricing](https://go.apimart.ai/k-6bb167)** · **[Model page](https://go.apimart.ai/k-12aada)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call FLUX 3 Video (`flux-3-video`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach FLUX 3 Video (`flux-3-video`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

FLUX 3 Video covers text-to-video, ordered keyframes, video continuation and…
