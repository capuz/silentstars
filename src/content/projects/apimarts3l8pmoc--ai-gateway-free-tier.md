---
repo: "apimarts3l8pmoc/ai-gateway-free-tier"
name: "ai-gateway-free-tier"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimarts3l8pmoc/ai-gateway-free-tier"
homepage: "https://go.apimart.ai/k-055875"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "apimart-en", "llm-api-gateway", "openai-compatible", "pay-as-you-go", "ai-gateway"]
stars: 39
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T08:43:17Z"
lastCommitAt: "2026-11-10T14:49:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["apimarts3l8pmoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5764d46cdade3a8fddd6e911080a0800c874ba6e534666159ea1aaa6cb35da2b/apimarts3l8pmoc/ai-gateway-free-tier"
---

# Seedance 2.0 API (`seedance-2.0`)

> **from $0.066 per second** at 480P (720P $0.216 · 1080P $0.3849) — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-a1864f)** · **[Live pricing](https://go.apimart.ai/k-4c9ec7)** · **[Model page](https://go.apimart.ai/k-3ef50a)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Seedance 2.0 (`seedance-2.0`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Seedance 2.0 (`seedance-2.0`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Seedance 2.0 is ByteDance's text-to-video and image-to-video…
