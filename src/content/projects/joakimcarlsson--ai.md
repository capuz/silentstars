---
repo: "JoakimCarlsson/ai"
name: "ai"
description: "A Go toolkit for building AI agents and applications across multiple providers. Unified LLM client, agent framework with handoffs, tool calling, streaming, structured output, MCP integration, and cost tracking."
url: "https://github.com/JoakimCarlsson/ai"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai", "golang", "llm", "structured-output", "tool-calling", "agent-framework", "ai-agents", "anthropic", "aws-bedrock", "google-gemini"]
stars: 31
forks: 7
openIssues: 1
closedIssues: 40
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-07-20T09:51:24Z"
lastCommitAt: "2026-07-01T07:05:48Z"
lastReleaseAt: "2026-01-06T07:14:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["JoakimCarlsson", "crzptn", "dcb"]
openGraphImageUrl: "https://opengraph.githubassets.com/18712df63874ae8424494950119b054546cf6dd750157bc8ef860ab8fdf29f30/JoakimCarlsson/ai"
---

# Go AI Client Library

> **Migrating?** [MIGRATION.md](MIGRATION.md) covers two transitions: `v0.18.x → v0.1.0` (single module split into ~50 per-vendor modules) and `v0.1.x → v0.2.0` (`memory` and `session` lifted out of `agent/` to top-level modules).

A multi-provider Go library for AI: LLMs, embeddings, image generation, TTS,
STT, rerankers, and fill-in-the-middle. Each capability is a modality module
and each vendor implementation is its own sub-module — you import only the
SDKs you actually use.

**[Documentation](https://joakimcarlsson.github.io/ai)**

## Features

- **Per-vendor modules** — Pull only the SDKs you need; no transitive bloat
- **LLM** — Chat, streaming, tool calling, structured output, reasoning
- **Agent framework** — Sub-agents, handoffs, fan-out, sessions, persistent memory, context strategies
- **Voice agent** — Low-latency streaming STT → LLM → TTS pipeline with barge-in, filler audio, tool-call sounds, sessions, hooks, handoffs, toolsets, and memory
- **Embeddings** — Text, multimodal, and contextualized
- **Image generation** — OpenAI, Gemini, xAI
- **Audio** — TTS (ElevenLabs, OpenAI, Google Cloud, Azure Speech) and STT (OpenAI Whisper, ElevenLabs…
