---
repo: "apimartrvgd4/llm-api-proxy-sdk-python"
name: "llm-api-proxy-sdk-python"
description: "AI API gateway / relay: 307 models behind one OpenAI-compatible key. image2.5 $0.0085/image, Seedance 2.0 Mini $0.01056/sec, LLM from $0.0228/M tokens. USD settlement, pay-as-you-go, $1 minimum top-up."
readmeQualityOk: true
url: "https://github.com/apimartrvgd4/llm-api-proxy-sdk-python"
homepage: "https://go.apimart.ai/k-653355"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-api-gateway", "api-aggregator", "api-pricing", "apimart-en", "llm-api-gateway", "llm-api-proxy", "openai-compatible", "pay-as-you-go"]
stars: 68
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-02T13:35:11Z"
lastCommitAt: "2026-11-10T14:49:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 28
maintainers: ["apimartrvgd4"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd5b0ea33bd8fc620b61c9051152e78edcaa2dd25fdfb68d31a2114f5efae40/apimartrvgd4/llm-api-proxy-sdk-python"
---

# GPT Image 1.5 API (`gpt-image-1.5-official`)

> token-billed: `text_input` $4/M, `cached_text_input` $1/M, `image_input` $6.4/M, `cached_image_input` $1.6/M — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-0b40f0)** · **[Live pricing](https://go.apimart.ai/k-1c0f61)** · **[Model page](https://go.apimart.ai/k-0e2637)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call GPT Image 1.5 (`gpt-image-1.5-official`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach GPT Image 1.5 (`gpt-image-1.5-official`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **$1 minimum, pay as you go.** No subscription and no prepaid plan to size up front: top up from $1 and spend it on calls.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work,…
