---
repo: "lpalbou/AbstractCore"
name: "AbstractCore"
description: "Code once, run everywhere across Ollama, LM Studio, MLX, HuggingFace, vLLM, OpenAI, Anthropic, and more with consistent APIs for tools, structured output, streaming, media, prompt caching, and secure OpenAI-compatible gateway deployment."
readmeQualityOk: true
url: "https://github.com/lpalbou/AbstractCore"
homepage: "https://www.abstractcore.ai"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [65, 31]
topics: ["abstraction-layer", "ai", "genai", "llm", "llm-framework", "llm-tools", "tools", "unified", "agent", "core"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-09-23T12:45:51Z"
lastCommitAt: "2026-09-26T08:47:37Z"
lastReleaseAt: "2026-05-07T00:16:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 66
maintainers: ["lpalbou"]
openGraphImageUrl: "https://opengraph.githubassets.com/bba728d34eff5123b8cf7c54419c5659a8ef1cf950c02e0086fb887280e5cbb4/lpalbou/AbstractCore"
---

# AbstractCore

Unified LLM Interface
> Write once, run everywhere

AbstractCore is an offline-capable, open-source-first LLM infrastructure layer
for Python applications. It gives you one `create_llm(...)` API across local
runtimes, self-hosted servers, cloud APIs, and OpenAI-compatible gateways.

Use it in-process from Python, or run it as a universal `/v1` endpoint for apps
that already speak the OpenAI API. The same application can run fully offline
once local model assets are installed, stay private on your own inference
server, or route to hosted providers when you want managed capacity.

The goal is simple: put LLM capability at your fingertips without tying your
product to a vendor, network connection, or model family. AbstractCore keeps
application code portable while the model underneath moves between OpenAI,
Anthropic, Ollama, LM Studio, MLX, HuggingFace/GGUF, vLLM, OpenRouter, Portkey,
or any OpenAI-compatible backend.

The default install is intentionally lightweight; add providers and optional
subsystems via explicit install extras. For local runtimes, AbstractCore is
cache-first and offline-first: it will not silently download model weights; you
download the models…
