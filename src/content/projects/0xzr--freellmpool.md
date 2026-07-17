---
repo: "0xzr/freellmpool"
name: "freellmpool"
description: "Pool free tiers from 22 LLM providers behind one OpenAI-compatible API. 239 enabled routes, 397 cataloged models, keyless start, automatic failover, CLI, proxy, and MCP."
readmeQualityOk: true
url: "https://github.com/0xzr/freellmpool"
homepage: "https://0xzr.github.io/freellmpool/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["failover", "free-llm", "gemini", "groq", "llm-gateway", "llm-router", "openai", "openai-proxy", "openrouter", "python"]
stars: 39
forks: 7
openIssues: 7
closedIssues: 6
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-06-03T00:35:58Z"
lastCommitAt: "2026-07-17T05:59:21Z"
lastReleaseAt: "2026-06-03T04:53:48Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 43
maintainers: ["0xzr", "arthurlacoste", "ekkoitac"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257725978/8f357765-3847-48ba-8795-7d3c3ae7b420"
---

# freellmpool

Pool the free tiers of 22 LLM providers cataloged in freellmpool (239 enabled chat routes, 397 cataloged chat models)
behind one OpenAI-compatible endpoint — as a CLI, a Python library, or a local
proxy. Can start without API keys when a keyless provider is up.

[FAQ](https://github.com/0xzr/freellmpool/blob/HEAD/FAQ.md): where prompts go, ToS posture, failover, bans, and comparisons.

## 30-second quickstart

Fresh install to first free-model reply is measured at about 19 seconds under
the 30-second target on a clean Linux/Python 3.12 environment, with no API keys
when a keyless provider is up:

```bash
python3 -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install freellmpool
freellmpool ask --max-tokens 32 "Reply with one short sentence: freellmpool is ready."
```

CI runs the same path from this checkout with
`FREELLMPOOL_QUICKSTART_PACKAGE=. scripts/quickstart-test.sh`.

Groq, Cerebras, NVIDIA NIM, Google Gemini, OpenRouter, GitHub Models, Cloudflare,
Mistral, Cohere and others each give away a free tier — but each has its own SDK,
rate limits, and daily cap. freellmpool puts them in one pool: it sends each
request to a…
