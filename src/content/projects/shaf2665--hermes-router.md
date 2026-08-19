---
repo: "Shaf2665/Hermes-router"
name: "Hermes-router"
description: "OpenAI/Anthropic-compatible AI router that keeps apps online with provider failover, key rotation, caching, analytics, and local-model fallback."
readmeQualityOk: true
url: "https://github.com/Shaf2665/Hermes-router"
homepage: "https://hermes-router.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["agent", "ai", "api-proxy", "free", "langchain", "llm", "load-balancer", "openai", "python"]
stars: 99
forks: 10
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-06-05T02:46:34Z"
lastCommitAt: "2026-08-19T04:07:36Z"
lastReleaseAt: "2026-06-26T02:59:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["Shaf2665", "MarkoPaasila"]
openGraphImageUrl: "https://opengraph.githubassets.com/07a62b877d4683e7f7d6b97cd6b3490e27da1c62b70284f515c75b778f248485/Shaf2665/Hermes-router"
discussionCount: 0
---

# hermes-router

**Stretch free AI quotas across providers.** hermes-router sits between your app and a pool
of AI providers (Gemini, OpenRouter, Groq, and more). When one provider hits its rate limit,
it automatically tries the next. Requests can still fail when every configured option is
unavailable or exhausted.

It implements the commonly used OpenAI-compatible chat, embeddings, and models endpoints,
plus Anthropic's Messages endpoint. Compatible clients can usually connect by changing their
base URL and API key; unsupported OpenAI/Anthropic endpoints are listed in
**[Usage](https://github.com/Shaf2665/Hermes-router/blob/HEAD/documentation/usage.md)**.

```
  Your app ──────► hermes-router ──► Gemini → OpenRouter → Groq → … (tries each until one works)
 (OpenAI SDK or    localhost:8319
  Anthropic SDK)
```

**Highlights:** OpenAI-compatible chat/embeddings/models + Anthropic Messages · automatic key rotation &
failover · smart routing (sends each request to the cheapest model that can handle it) ·
**local models** (Ollama / LM Studio) with cloud fallback · tool calling · embeddings ·
response caching (incl. optional **semantic** cache) · **per-key budgets & rate limits** ·…
