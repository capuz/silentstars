---
repo: "apimartqfbi49xip/vllm-migration-guide"
name: "vllm-migration-guide"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartqfbi49xip/vllm-migration-guide"
homepage: "https://go.apimart.ai/k-ea33f7"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "apimart-en", "llm-api-gateway", "openai-compatible", "pay-as-you-go", "vllm"]
stars: 52
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-03T04:39:12Z"
lastCommitAt: "2026-11-10T14:49:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 29
maintainers: ["apimartqfbi49xip"]
openGraphImageUrl: "https://opengraph.githubassets.com/e61ccf3dd1d76b396caf90aadbfba5627567905abd2b0c001cef58facb5b5f90/apimartqfbi49xip/vllm-migration-guide"
---

# Wan 2.5 API (`wan-2.5`)

> **per generated second**, billed by resolution — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-ad3bea)** · **[Live pricing](https://go.apimart.ai/k-c96f6f)** · **[Model page](https://go.apimart.ai/k-d6ef53)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Wan 2.5 (`wan-2.5`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Wan 2.5 (`wan-2.5`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Wan 2.5 is Alibaba's text-to-video and image-to-video model with high visual quality and smooth motion.

##…
