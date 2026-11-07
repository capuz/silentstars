---
repo: "Muvon/octolib"
name: "octolib"
description: "One Rust API for 30+ AI providers — chat, tool calls, structured output, embeddings, reranking and media generation behind a single provider:model string, with built-in cost tracking"
readmeQualityOk: true
url: "https://github.com/Muvon/octolib"
homepage: "https://octomind.run/product/octolib"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "anthropic", "embeddings", "gemini", "openai", "llm", "llm-inference", "minimax", "rust", "zai"]
stars: 10
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-08-28T04:19:07Z"
lastCommitAt: "2026-11-07T13:46:11Z"
lastReleaseAt: "2026-02-03T13:19:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 78
maintainers: ["donk8r", "avanuts", "jonathan"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eb3077fbde21365ecec04cff15cb8e12e8a3d8f021a0fb6446f992c2004133e/Muvon/octolib"
---

# Octolib

> One `provider:model` string — 31 AI providers, one trait, cost tracking built in.

## Overview

Octolib is a self-sufficient Rust library for AI providers. One `provider:model` string — `openai:gpt-4o`, `anthropic:claude-opus-5-5`, `ollama:llama3.2` — resolves through `ProviderFactory` to a provider behind the `AiProvider` trait. Switching models is a string change, not a rewrite: the same `chat_completion` call drives OpenAI's Responses API, Anthropic's Messages API, an OpenAI-compatible proxy, or a local Ollama server.

Pricing and capability tables ship inside the crate, so every response reports token usage and USD cost — input, output, cache reads/writes, and reasoning tokens — with zero configuration. The API is `Result`-based end to end with no panics or printing in library code, and API keys are read from environment variables only.

**Contents:** [Features](#-key-features) · [Installation](#-quick-installation) · [Quick Start](#-quick-start) · [Media](#media-generation) · [Evaluation](#evaluation) · [Structured Output](#-structured-output) · [CLI Provider](#-cli-provider-proxy-mode) · [Tool Calling](#-tool-calling) · [Embeddings](#-embedding-generation) ·…
