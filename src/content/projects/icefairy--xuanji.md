---
repo: "icefairy/xuanji"
name: "xuanji"
description: "Xuanji: a Go single-binary AI gateway that unifies OpenAI and Anthropic protocols. A lightweight alternative to one-api, new-api, and LiteLLM, with automatic routing, load balancing, retries, cost-first routing, and high availability without interruption."
originalDescription: "璇玑 Xuanji —— Go 单二进制 AI 网关，OpenAI / Anthropic 双协议汇聚。one-api / new-api / LiteLLM 轻量替代品，自动分流、负载、重试，成本优先路由，高可用不中断。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/icefairy/xuanji"
homepage: "https://icefairy.github.io/xuanji/"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [58, 34]
topics: ["ai-gateway", "anthropic", "claude-code", "gateway", "litellm", "llm", "llm-proxy", "one-api", "openai", "opencode"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-31T04:20:24Z"
lastCommitAt: "2026-11-16T04:17:20Z"
lastReleaseAt: "2026-10-21T05:18:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 25
maintainers: ["icefairy"]
openGraphImageUrl: "https://opengraph.githubassets.com/99355bfcd721ac76b421bfbda092940ef8db53e211cdc1b9e0774e16088be211/icefairy/xuanji"
---

# Xuanji

> **OpenAI / Anthropic Protocol Aggregation · Load Balancing · Routing Gateway**  
> *Go ecosystem · Single binary · Zero external dependencies · Lightweight alternative to one-api / LiteLLM*

Xuanji (the first star of the Big Dipper, the pivot of ancient astronomical instruments): gathers all directions and turns them into routing.  
A lightweight AI gateway built in Go, providing a unified entry point for AI tools such as Hermes, Claude Code, and OpenCode. It aggregates multiple upstream providers (SiliconFlow, SenseTime, DeepSeek-family relays, vLLM, OpenRouter, etc.) and automatically routes traffic based on cost and health status.

**It is a lightweight alternative to gateways such as one-api / new-api / LiteLLM / Portkey / Kong AI Gateway**: it solves the same problems of a unified entry point for multiple upstreams, API key management, cost control, and failover, but its footprint, dependencies, and deployment cost are an order of magnitude lower. It is also a **server-side alternative to desktop configuration switchers like CC Switch**: no switching is needed, because the gateway schedules automatically.

> **🎯 Positioning: personal / small-team self-use**. It…
