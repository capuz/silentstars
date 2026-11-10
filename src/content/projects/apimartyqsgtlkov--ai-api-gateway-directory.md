---
repo: "apimartyqsgtlkov/ai-api-gateway-directory"
name: "ai-api-gateway-directory"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartyqsgtlkov/ai-api-gateway-directory"
homepage: "https://go.apimart.ai/k-7fce1e"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "apimart-en", "llm-api-gateway", "openai-compatible", "pay-as-you-go"]
stars: 39
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T09:42:06Z"
lastCommitAt: "2026-11-10T14:49:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["apimartyqsgtlkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/229ab2cc933436ead096589f2bbaf7f4e8f4b3a38271f5d9f20ebdf8416dffa8/apimartyqsgtlkov/ai-api-gateway-directory"
---

# Vidu Q4 API (`vidu-q4`)

> **per generated second** for 3–16 s clips, up to 4K — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-cee157)** · **[Live pricing](https://go.apimart.ai/k-358f90)** · **[Model page](https://go.apimart.ai/k-641b19)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Vidu Q4 (`vidu-q4`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Vidu Q4 (`vidu-q4`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Vidu Q4 creates 3–16 second videos: animate one first frame or use 1–15 reference images and optional MP3…
