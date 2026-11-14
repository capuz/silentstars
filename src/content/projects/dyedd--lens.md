---
repo: "dyedd/lens"
name: "lens"
description: "A lightweight LLM API gateway built for individuals. It centrally manages multiple protocols and providers, supports calls from harnesses such as Claude Code, Codex, OpenCode, OpenClaw, Grok Build, Hermes Agent, and Pi, and is compatible with the OpenAI (Chat, Responses, Embeddings, Images), Anthropic, Gemini, and Rerank ingress protocols."
originalDescription: "专为个人打造的轻量 LLM API 网关，统一管理多协议、多供应商，支持 Claude Code, Codex, OpenCode, OpenClaw, Grok Build, Hermes Agent、Pi 等 harness 调用，兼容 OpenAI（Chat、Responses、Embeddings、Images）、Anthropic、Gemini、Rerank 入口协议。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dyedd/lens"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [63, 36]
stars: 135
forks: 12
openIssues: 0
closedIssues: 60
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-09T10:45:29Z"
lastCommitAt: "2026-11-14T10:48:03Z"
lastReleaseAt: "2026-05-28T07:33:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 33
maintainers: ["dyedd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06c0f9b1badba0f8ee801a67539b410da89448f78f5c9c985bd83f911ed5033f/dyedd/lens"
---

Self-hosted multi-protocol LLM gateway with a visual management interface.<br>
  Connect once, route as needed, and see the usage and cost of every request.

**Model providers can be swapped, while client configuration stays simple.** Lens centralizes upstream addresses, keys, models, routing, and usage in one place. Your apps and coding tools only need the Lens address, a gateway key, and a model group name.

## Why Lens

| What you need to do | How Lens helps |
| --- | --- |
| Connect clients that use different APIs | Provides OpenAI Chat, Responses, Embeddings, and Images, plus Anthropic, Gemini, and Rerank ingress; supported chat protocols can be converted between each other |
| Switch providers with minimal client changes | Provides stable names through model groups and aliases, and lets you adjust upstream members within the gateway |
| Prepare backup channels for failures | Configure primary/backup failover and smooth round-robin, and schedule requests using health status and cooldown management |
| Manage multiple upstream accounts | Centrally maintain multiple addresses, multiple keys, model catalogs, sync rules, and automatic grouping |
| See costs and failure causes…
