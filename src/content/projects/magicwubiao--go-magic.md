---
repo: "magicwubiao/go-magic"
name: "go-magic"
description: "A high-performance, ultra-lightweight Go implementation of the AI Agent, inspired by Nous Research’s hermes-agent."
readmeQualityOk: true
url: "https://github.com/magicwubiao/go-magic"
homepage: "https://magictech.cc/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["agent", "go", "magic", "ai", "harness"]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-29T06:19:19Z"
lastCommitAt: "2026-09-19T01:15:39Z"
lastReleaseAt: "2026-05-25T08:54:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["magicwubiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0ddca04e6ef624b969e40f792f290c4fd73aa31868deb4c3181e5d91668144e/magicwubiao/go-magic"
---

# go-magic

**Magic Agent** -- A high-performance, ultra-lightweight AI Agent framework written in Go.

## Overview

go-magic is a full-featured AI Agent framework that combines a powerful Go backend with a modern Vue 3/TypeScript web dashboard. It supports 22+ AI providers, ships a built-in TUI (BubbleTea), and offers extensive tooling for file operations, code execution, web browsing, and more.

## Features

### Multi-Provider Support (22+)

DeepSeek, OpenAI, Anthropic, Gemini, Ollama, vLLM, Groq, 硅基流动, 智谱GLM, 通义千问, 文心一言, MiniMax, MiMo, 腾讯混元, 豆包(火山引擎), Moonshot (Kimi), OpenRouter, Together AI, Mistral AI, Cohere, Perplexity, and any OpenAI-compatible endpoint.

### Multi-Model per Provider

Each provider can configure multiple models. The first model in the array is the current active model. Switch models instantly without restart (hot-reload).

### TUI Interface

Built with [BubbleTea](https://github.com/charmbracelet/bubbletea), featuring multi-line input, Markdown rendering, streaming output, and slash commands.

### Web Dashboard

Vue 3/TypeScript frontend with:
- Real-time chat with streaming responses
- Session management (create, search, resume)
- Provider and model…
