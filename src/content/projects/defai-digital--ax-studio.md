---
repo: "defai-digital/ax-studio"
name: "ax-studio"
description: "Open-source AI desktop app that unifies cloud and self-hosted AI with MCP tools, local inference, artifacts, and multi-agent workflows"
url: "https://github.com/defai-digital/ax-studio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai-desktop", "ax-fabric", "local-inference", "mcp", "multi-agent", "openai-compatible", "ax-serving", "enterprise-ai", "automatosx"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 769
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-08T19:17:22Z"
lastCommitAt: "2026-07-04T06:14:24Z"
lastReleaseAt: "2026-03-13T17:36:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["bhaskarvora-sun", "automatosx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/993003525616995b42cb5d48d8f6c690a22f98267a1485924f0bda192903ee77/defai-digital/ax-studio"
---

# AX Studio

**A native desktop AI workspace that unifies cloud LLMs, local inference (including in-process Apple MLX), a local knowledge base, persistent memory, MCP tools, and research workflows into one app.**

AX Studio is a [Tauri 2](https://tauri.app/) desktop application (Rust backend + React 19 frontend) for general-purpose AI work. Cloud and local inference live side-by-side under one provider abstraction; conversations, projects, attachments, and a local knowledge base are stored on-device.

Built by [DEFAI Digital](https://github.com/defai-digital).

---

## Highlights

- **7 cloud + local providers** — OpenAI, Anthropic, Azure OpenAI, Google Gemini, Groq, OpenRouter, plus an Apple-MLX provider on macOS
- **Three local-inference paths** — cross-platform `llama.cpp` for GGUF, optional `ax-serving` subprocess, and **in-process `ax-engine-sdk`** for Apple MLX on macOS
- **Local knowledge base** — AKIDB / fabric-ingest daemon for personal RAG over your own documents
- **Persistent memory** — categorized memory entries that automatically inform conversations
- **LLM Router** — autonomously picks the best model for each message
- **MCP client** — connect external tools,…
