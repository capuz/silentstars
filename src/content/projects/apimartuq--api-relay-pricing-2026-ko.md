---
repo: "apimartuq/api-relay-pricing-2026-ko"
name: "api-relay-pricing-2026-ko"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartuq/api-relay-pricing-2026-ko"
homepage: "https://go.apimart.ai/k-1c7ff7"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "api-relay-pricing-2026", "apimart-ko", "llm-api-gateway", "openai-compatible", "pay-as-you-go"]
stars: 63
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-29T03:00:07Z"
lastCommitAt: "2026-11-10T14:49:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: ["apimartuq"]
openGraphImageUrl: "https://opengraph.githubassets.com/34ffea18670ce82bd1bac635d1217f0ddaa8761f1bd6e6c0eb356a94c6d07046/apimartuq/api-relay-pricing-2026-ko"
---

# Vidu Q4 API (`vidu-q4`)

> **per generated second** for 3–16 s clips, up to 4K — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-597362)** · **[Live pricing](https://go.apimart.ai/k-b123e7)** · **[Model page](https://go.apimart.ai/k-7a5ebc)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Vidu Q4 (`vidu-q4`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Vidu Q4 (`vidu-q4`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Vidu Q4 creates 3–16 second videos: animate one first frame or use 1–15 reference images and optional MP3…
