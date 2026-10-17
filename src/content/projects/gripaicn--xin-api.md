---
repo: "GripAIcn/Xin-api"
name: "Xin-api"
description: "Xin API is a high-performance gateway service that integrates unified management of LLM APIs, full-link tracing, and smart distribution. It seamlessly supports mainstream LLMs such as OpenAI, Anthropic Claude, and DeepSeek, providing standardized unified API access."
originalDescription: "Xin API 是集大模型 API 统一管理、全链路追踪、智能分发于一体的高性能网关服务。无缝兼容 OpenAI、Anthropic Claude、DeepSeek 等主流大模型，实现标准化统一 API 接入。Xin API is a high‑performance gateway for unified LLM API management, full‑link tracing and smart distribution. Compatible with OpenAI, Claude, DeepSeek and other LLMs, it enables one‑protocol unified access."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GripAIcn/Xin-api"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [51, 47]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-16T12:16:52Z"
lastCommitAt: "2026-10-17T07:58:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 37
maintainers: ["GripAIcn"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8a95ce9fef3df42517866b2d1f973dec1b06605a6829d16ab73d989243d8e73/GripAIcn/Xin-api"
---

# Xin API 🚀

[English](https://github.com/GripAIcn/Xin-api/blob/HEAD/README.en.md) | Chinese

---

## ✨ Project Overview

Xin API is a high-performance large language model (LLM) gateway service that seamlessly supports mainstream LLMs such as OpenAI, Anthropic Claude, DeepSeek, and Gemini. It provides unified API access, channel routing, billing and settlement, and observability.

### Core Features

- **🎯 Unified API access**: The data plane provides three inbound protocol endpoints, `/v1/chat/completions`, `/v1/responses`, and `/v1beta/models/{model}:generateContent`, all routed uniformly to upstream providers
- **🔀 Smart distribution**: Route selection uses "priority + weighted round-robin among equal priority". Failed requests are retried automatically, and already-failed channels are excluded
- **🛡️ Circuit breaker protection**: Redis-based distributed passive circuit breaking. After consecutive failures reach a threshold, the channel is isolated automatically and probed for recovery at the recovery interval
- **⚡ Rate limiting (reserved)**: A Redis-based token bucket rate-limiting middleware is implemented but not yet attached to the data plane in the current version, so…
