---
repo: "basellm/llm-metadata"
name: "llm-metadata"
description: "A lightweight interface for accessing and integrating LLM metadata, enabling applications to seamlessly discover, query, and integrate large language model information."
readmeQualityOk: true
url: "https://github.com/basellm/llm-metadata"
homepage: "https://basellm.github.io/llm-metadata/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-gateway", "llm-metadata", "ai-models", "llms", "meta", "metadata", "llm-meta", "newapi", "voapi", "ai-data"]
stars: 147
forks: 22
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-08-31T14:59:38Z"
lastCommitAt: "2026-10-10T10:04:10Z"
lastReleaseAt: "2026-10-10T09:59:31Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 50
maintainers: ["github-actions[bot]", "t0ng7u"]
openGraphImageUrl: "https://opengraph.githubassets.com/a288bb0586b7419ba509ac18afbba02950734b581d8bb3c2f04912906fa5aa83/basellm/llm-metadata"
---

# LLM Metadata

> A lightweight static API for discovering and integrating LLM metadata. Live:
> [GitHub Pages](https://basellm.github.io/llm-metadata/) · [Cloudflare Pages](https://llm-metadata.pages.dev/)

English | [中文文档](https://github.com/basellm/llm-metadata/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/basellm/llm-metadata/blob/HEAD/README.ja.md)

High-throughput friendly, static-by-default interface: rebuild on change; serve static JSON via GitHub Pages. The live site ships a minimal pricing browser (`web/`, Vite + React + Tailwind + shadcn/ui + Magic UI) rendering per-provider model price tables straight from the static API, with light/dark themes (system-following by default) and an English/Chinese/Japanese UI.

Sources: [models.dev/api.json](https://models.dev/api.json) + basellm community contributions, filtered to native (first-party) providers via `data/native-providers.json`.

## Quick Start

Requirement: Node.js 20.19+ (API build works on 18+; the web UI toolchain requires 20.19+).

```bash
npm install
npm run build
```

Outputs: `dist/api/`

Scripts:

- `npm run build` — Compile TypeScript and build API (no-op if nothing changes)
- `npm run build:force` —…
