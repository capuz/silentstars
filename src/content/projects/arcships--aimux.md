---
repo: "arcships/aimux"
name: "aimux"
description: "Unified LLM access layer in Rust — one API for 325 AI providers. 统一 LLM 服务接入层：一套 API 接入 325 家 AI 服务商。"
readmeQualityOk: true
url: "https://github.com/arcships/aimux"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["ai", "c", "flutter", "go", "java", "kotlin", "llm", "llm-api", "llm-providers", "nodejs"]
stars: 181
forks: 10
openIssues: 2
closedIssues: 35
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2026-07-28T04:58:46Z"
lastCommitAt: "2026-08-14T05:13:14Z"
lastReleaseAt: "2026-08-04T12:07:02Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 31
maintainers: ["eric8810", "cunninghamcard-bit"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1314553634/6cd86c15-07ad-4755-b65e-70f297807a60"
---

# aimux

</p>

> **A unified LLM access layer written in Rust. One API for 325 AI providers.**

aimux is a Rust implementation of a unified LLM provider access layer. It
collapses the HTTP APIs of every AI provider into a single
`dyn LanguageModel` interface that anything upstream can call.

Unlike **rig** or **langchain**, aimux does **not** build agent loops, RAG, or
orchestration — it focuses exclusively on unifying service access. That is the
difference: aimux is an access layer, those are orchestration layers.

---

## Why aimux

- **325 provider modules** — 250 registry-backed OpenAI-compatible
  (unified `provider(name, ...)` entry) + 10 native protocol
  implementations (OpenAI, Anthropic, Google, Bedrock, Vertex, Azure, Cohere,
  Mistral, xAI, Anthropic-AWS) + 65 standalone/modality/local/search providers
  (OpenRouter, DeepSeek, Ollama, vLLM, ElevenLabs, KlingAI, Tavily, …).
  Full list: [docs/api/providers.md](https://github.com/arcships/aimux/blob/HEAD/docs/api/providers.md).
- **Unified, object-safe interface** — the `LanguageModel` trait supports
  `Box<dyn>` so providers are interchangeable without changing call sites.
- **Full multimodal** — text, streaming, tool…
