---
repo: "lpalbou/AbstractCore"
name: "AbstractCore"
description: "Build your app on AI capabilities, not on providers. AbstractCore is one abstraction layer over open-source and cloud models: it understands and generates text, images, voice, music, video and 3D, so you design once and never deal with how each capability is wired."
readmeQualityOk: true
url: "https://github.com/lpalbou/AbstractCore"
homepage: "https://www.abstractcore.ai"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [67, 27]
topics: ["ai", "llm", "embeddings", "abstractframework", "anthropic", "generative-ai", "huggingface", "image-generation", "local-llm", "mcp"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-09-23T12:45:51Z"
lastCommitAt: "2026-10-29T05:49:11Z"
lastReleaseAt: "2026-05-07T00:16:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 67
maintainers: ["lpalbou"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c63e7c0eae05bedf0e919ca3584fc724cc5fb5b9951fc0bb22cfb3520285280/lpalbou/AbstractCore"
---

# AbstractCore

Unified LLM Interface
> Write once, run everywhere

What's new in 2.31.1: `/v1/chat/completions` reuses a model already resident in the process (a host's
runtime pool) instead of loading a second llama.cpp copy per request; the download catalog lists the
LFM2 and LFM2.5 families (GGUF and MLX, the 24B-A2B models included). See the
[changelog](https://github.com/lpalbou/AbstractCore/blob/HEAD/CHANGELOG.md#2311---2026-10-28).

What's new in 2.31.0: streamed tool calls carry the declared MCP tool name, the MLX prefix cache
survives per-call system riders in tool loops, and `POST /v1/voice/clone` takes `language`. See the
[changelog](https://github.com/lpalbou/AbstractCore/blob/HEAD/CHANGELOG.md#2310---2026-10-27).

AbstractCore is an offline-capable, open-source-first LLM infrastructure layer
for Python applications. It gives you one `create_llm(...)` API across local
runtimes, self-hosted servers, cloud APIs, and OpenAI-compatible gateways.

Use it in-process from Python, or run it as a universal `/v1` endpoint for apps
that already speak the OpenAI API. The same application can run fully offline
once local model assets are installed, stay private on your own…
