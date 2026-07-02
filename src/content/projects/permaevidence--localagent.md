---
repo: "permaevidence/LocalAgent"
name: "LocalAgent"
description: "Telegram-based AI agent for local LLM inference. Fork of ConciergeforTelegram, evolving toward filesystem-level machine access (vs. sandboxed documents)."
url: "https://github.com/permaevidence/LocalAgent"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
stars: 9
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-13T21:49:59Z"
lastCommitAt: "2026-07-02T06:34:35Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 39
maintainers: ["permaevidence", "matteosconcierge"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8ce296adafbc29485d3b21f1858bf9b1a122677fd44201986173cdbb70b4dcb/permaevidence/LocalAgent"
---

# LocalAgent

A native macOS application that turns any LLM into an autonomous personal agent. It connects to you via Telegram, manages your files, browses the web, generates images, transcribes voice messages, orchestrates subagents, integrates with external tool servers via MCP, and remembers everything across sessions — powered by any model available through OpenRouter or running locally via any OpenAI-compatible inference server.

</p>

---

## Features

### LLM Provider Flexibility
- **OpenRouter** — access Gemini, Claude, GPT, DeepSeek, Qwen, Grok, and hundreds more through a single API key
- **Local inference** — run models on your own hardware via any OpenAI-compatible server (LM Studio, Ollama, vLLM, llama.cpp, etc.) with automatic KV cache preservation
- **Configurable reasoning effort** — adjust thinking depth per model
- **Provider enforcement** — pin requests to specific providers with strict routing (no silent fallbacks)

### Full-Autonomy Tool Use
- **25+ built-in tools** — the LLM autonomously decides when and how to use them
- **Parallel tool execution** — independent tool calls dispatch concurrently
- **Agentic loop** — the model runs iteratively: call tools,…
