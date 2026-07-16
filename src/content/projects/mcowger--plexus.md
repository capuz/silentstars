---
repo: "mcowger/plexus"
name: "plexus"
description: "Unified API gateway for multiple AI providers (OpenAI, Anthropic, Gemini, etc.). Switch models and providers without changing client code. Features OAuth authentication, quota tracking, embeddings, transcriptions, and OpenAI-compatible endpoints."
readmeQualityOk: true
url: "https://github.com/mcowger/plexus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 213
forks: 40
openIssues: 1
closedIssues: 161
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2025-12-01T07:49:35Z"
lastCommitAt: "2026-07-16T05:58:31Z"
lastReleaseAt: "2026-01-05T17:46:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 32
maintainers: ["mcowger", "darkspadez", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2680fa5d9abf7380a9744624b5b348b0d75358eeab385e3257d0f73b597195eb/mcowger/plexus"
---

# Plexus

**A universal LLM API gateway and transformation layer.**

### [Discord Community](https://discord.com/channels/292942011261124608/1503831216095367239) | [API Reference](https://github.com/mcowger/plexus/blob/HEAD/docs/openapi/openapi.yaml) | [Configuration](https://github.com/mcowger/plexus/blob/HEAD/docs/CONFIGURATION.md) | [Installation](https://github.com/mcowger/plexus/blob/HEAD/docs/INSTALLATION.md) | [Testing](https://github.com/mcowger/plexus/blob/HEAD/docs/TESTING.md)

Plexus sits in front of your LLM providers and exposes one consistent API surface for OpenAI, Anthropic, Gemini, OpenAI-compatible providers, OAuth-backed subscriptions, MCP servers, and more. It handles protocol translation, routing, failover, usage tracking, and provider-specific quirks so clients can switch models without rewriting code.

---

## Highlights

- **Unified API surface** for OpenAI Chat Completions, OpenAI Responses, Anthropic Messages, Gemini, embeddings, audio, and images.
- **Provider routing and load balancing** across OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, OpenRouter, and any OpenAI-compatible backend.
- **OAuth-backed providers** for GitHub Copilot, Anthropic…
