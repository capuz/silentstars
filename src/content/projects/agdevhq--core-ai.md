---
repo: "agdevhq/core-ai"
name: "core-ai"
description: "A type-safe abstraction layer over LLM provider SDKs for TypeScript"
readmeQualityOk: true
url: "https://github.com/agdevhq/core-ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 7
closedIssues: 7
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-23T02:58:33Z"
lastCommitAt: "2026-10-28T09:57:47Z"
lastReleaseAt: "2026-02-26T06:21:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 59
maintainers: ["flore2003", "github-actions[bot]", "erzaehlsalex"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0c5424dd436dc4c6687e8283b78250dd2a6366c824701b8a1ea32659e5fdd9/agdevhq/core-ai"
---

# core-ai

A type-safe abstraction layer over LLM provider SDKs for TypeScript. Write provider-agnostic code with a unified API for chat completion, streaming, embeddings, image generation, and tool calling.

## Features

- **Unified API** across providers — switch between OpenAI, Anthropic, Mistral, and others without changing application code
- **Full type safety** — strict TypeScript types, Zod-based tool definitions, no `any`
- **Streaming** — eagerly-started replayable streams with live iteration, `result`, `events`, and `AbortSignal` support
- **Structured outputs** — schema-validated object generation and object streaming with `z.infer<TSchema>`
- **Tool / function calling** — define tools with Zod schemas, automatically converted to JSON Schema
- **Multi-modal** — text, images (base64 and URL), and file inputs
- **Embeddings & image generation** — first-class support, not just chat
- **Provider-specific options** — escape hatch via `providerOptions` when you need it
- **Lightweight** — thin wrappers over native SDKs, no heavy runtime

## Providers

| Provider              | Package                     | Chat | Streaming | Embeddings | Image Generation |
|…
