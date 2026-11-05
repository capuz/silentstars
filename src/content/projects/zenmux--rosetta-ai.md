---
repo: "ZenMux/rosetta-ai"
name: "rosetta-ai"
description: "Universal translator between AI provider protocols."
readmeQualityOk: true
url: "https://github.com/ZenMux/rosetta-ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-24T08:30:55Z"
lastCommitAt: "2026-11-05T11:24:53Z"
lastReleaseAt: "2026-07-27T08:07:23Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 43
maintainers: ["mackong", "lian-xiao-xi", "ytt719"]
openGraphImageUrl: "https://opengraph.githubassets.com/34a26c45d55f152ee6155f491d7cefbebcfb2e8bc21c9679df6604c69d684c81/ZenMux/rosetta-ai"
---

# rosetta-ai

Universal translator between AI provider protocols.

Convert between OpenAI Chat Completions, OpenAI Responses, Anthropic Messages, and Google Gemini APIs — with full support for tool calling, multimodal content, extended thinking, web search, grounding, and streaming.

## Install

```bash
npm install @zenmux/rosetta-ai
```

## How It Works

Each converter follows the **gateway pattern**: request goes forward (user protocol → backend protocol), while response and stream go backward (backend → user).

```
User ──request──→ [Converter] ──request──→ Backend
User ←─response── [Converter] ←─response── Backend
User ←──stream─── [Converter] ←──stream─── Backend
```

One converter instance handles the full round-trip for a single gateway route.

## Converters

| Converter | User Protocol | Backend Protocol |
|---|---|---|
| `ChatCompletionToMessagesConverter` | OpenAI Chat Completions | Anthropic Messages |
| `ChatCompletionToResponsesConverter` | OpenAI Chat Completions | OpenAI Responses |
| `ChatCompletionToGeminiConverter` | OpenAI Chat Completions | Google Gemini |
| `ChatCompletionToInteractionsConverter` | OpenAI Chat Completions | Google Interactions V1 |
|…
