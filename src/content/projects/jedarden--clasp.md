---
repo: "jedarden/CLASP"
name: "CLASP"
description: "Run Claude Code with any LLM provider — drop-in proxy for OpenAI, Gemini, and more. Go."
readmeQualityOk: true
url: "https://github.com/jedarden/CLASP"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-agents", "claude", "claude-code", "gemini", "go", "llm", "openai", "proxy"]
stars: 23
forks: 8
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-05T19:39:47Z"
lastCommitAt: "2026-08-17T04:17:35Z"
lastReleaseAt: "2025-12-05T22:26:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 33
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/79d29153b7af76fac78dabe904c883e005a9d939cfb427e9e148817031b29bc1/jedarden/CLASP"
---

# CLASP - Claude Language Agent Super Proxy

Run Claude Code against any LLM provider — OpenAI, Azure, Gemini, Ollama, vLLM, or any OpenAI-compatible endpoint. CLASP is a lightweight Go proxy that sits between Claude Code and your chosen provider, translating the Anthropic Messages API to OpenAI Chat Completions in real time.

```
Claude Code  →  CLASP (:8080)  →  OpenAI / Azure / OpenRouter / Ollama / custom
```

No patches to Claude Code. No forks. Just point `ANTHROPIC_BASE_URL` at the proxy and go.

## Features

- **Bundled Claude Code**: Automatically includes Claude Code as a dependency - single `npx clasp-ai` installs everything
- **Multi-Provider Support**: OpenAI, Azure OpenAI, OpenRouter (200+ models), and custom endpoints (Ollama, vLLM, LM Studio)
- **Full Protocol Translation**: Anthropic Messages API ↔ OpenAI Chat Completions API
- **SSE Streaming**: Real-time token streaming with state machine processing
- **Tool Calls**: Complete translation of tool_use/tool_result between formats
- **Connection Pooling**: Optimized HTTP transport with persistent connections
- **Retry Logic**: Exponential backoff for transient failures
- **Metrics Endpoint**: Request statistics and…
