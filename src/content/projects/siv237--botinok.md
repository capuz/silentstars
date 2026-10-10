---
repo: "siv237/botinok"
name: "botinok"
description: "Lightweight and fast AI agent for working with Ollama"
originalDescription: "Lightweight and fast AI agent for working with Ollama"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/siv237/botinok"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 16
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T00:21:03Z"
lastCommitAt: "2026-10-10T10:04:23Z"
lastReleaseAt: "2026-03-30T01:40:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 40
maintainers: ["siv237"]
openGraphImageUrl: "https://opengraph.githubassets.com/b18a7d7a31e2d33b6a8d4c57705a62d98b70ac8d49a70249e670c5e130524e4d/siv237/botinok"
---

# Project “Botinok” — Console Agentic AI

Agentic AI with support for **Ollama** and any **OpenAI-compatible APIs** (OpenAI, llama-server, vLLM). Extreme focus on performance, transparency of LLM operation, and detailed session auditing. Fully console-based interface with rich formatting.

## Concept
The goal of the project is to create an autonomous console agent capable of efficiently solving programming, information search, and system administration tasks on systems with low VRAM, through deep optimization of workflows.

## Key Features
- **Advanced console UI (Textual)**: Interactive interface with color formatting, live VRAM statistics, TTFT (Time To First Token), TPS (Tokens Per Second), visualization of the thinking process (thinking), and a built-in terminal (PTY sessions `shell_exec` with collapsible windows).
- **Smart context management**:
    - Sliding memory window: old turns are gradually evicted instead of resetting history all at once; the agent keeps a catalog of “forgotten” content and recalls any fragment on demand (`session_memory`).
    - **SESSION_PROTOCOL** generation on overflow: the model itself summarizes important facts and outlines next steps…
