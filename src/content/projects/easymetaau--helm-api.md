---
repo: "EasyMetaAu/helm-api"
name: "helm-api"
description: "Self-hosted LLM gateway — route OpenAI/Anthropic/Gemini traffic by config, not code. Fallback, protocol translation, telemetry."
readmeQualityOk: true
url: "https://github.com/EasyMetaAu/helm-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-gateway", "anthropic", "api-gateway", "claude", "gemini", "gpt", "hono", "llm", "llm-gateway", "llm-memory"]
stars: 29
forks: 6
openIssues: 0
closedIssues: 24
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-29T12:32:18Z"
lastCommitAt: "2026-08-13T05:17:55Z"
lastReleaseAt: "2026-06-06T13:42:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["mylukin", "myluke"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3777310229fe9a837a88474ccca021769722328c83031cb2439576e57446720/EasyMetaAu/helm-api"
---

# Helm API

**English** · [Chinese](https://github.com/EasyMetaAu/helm-api/blob/HEAD/README.zh-CN.md)

### One control plane for LLM traffic: text, images, subscriptions, fallback, and memory.

Open-source · self-hosted · MIT

</div>

LLM apps tend to accumulate routing code in all the wrong places: fallback lists inside clients, one-off patches for provider quirks, hard-coded model names, ad hoc cost controls, and no clean way to answer "why did this request go there?"

Helm API puts that work in one place: an open-source, self-hosted **LLM routing gateway** — *nginx for the LLM world*. Your app sends normal OpenAI, Anthropic, Gemini, or image-generation requests. Helm classifies the request, picks a lane, chooses a provider account, falls back when an upstream breaks, translates protocols when needed, and records the whole decision trail. Clients usually change only `base_url` and the API key.

> **Manage traffic as configuration, not as code.**

```python
# Your app: the same OpenAI client, just a new base_url and key.
client = OpenAI(base_url="http://localhost:8080/v1", api_key="<helm-key>")
client.chat.completions.create(model="auto", messages=[...])   # Helm classifies and…
