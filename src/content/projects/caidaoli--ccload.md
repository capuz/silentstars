---
repo: "caidaoli/ccLoad"
name: "ccLoad"
description: "AI API gateway that ends manual channel switching with smart routing, auto failover, exponential cooldown, multi-URL scheduling, live request monitoring and soft-error detection."
readmeQualityOk: true
url: "https://github.com/caidaoli/ccLoad"
homepage: "https://www.ccload.xyz"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["ai", "ai-gateway", "anthropic", "api-proxy", "claude-api", "claude-code", "codex", "cost-control", "failover", "gemini"]
stars: 409
forks: 73
openIssues: 1
closedIssues: 95
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2025-09-08T11:10:18Z"
lastCommitAt: "2026-09-12T08:04:37Z"
lastReleaseAt: "2025-12-10T12:06:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 38
maintainers: ["caidaoli", "ChenYCL", "dwyanewang"]
openGraphImageUrl: "https://opengraph.githubassets.com/95bccfe789406e2f14597db34d72215fb64b834698d00a261128cd8de2bebeeb/caidaoli/ccLoad"
---

# ccLoad

**AI API gateway for Claude Code, Codex, Gemini, and OpenAI.**

**English | [简体中文](https://github.com/caidaoli/ccLoad/blob/HEAD/README.zh-CN.md)**

> Smart routing | Automatic failover | Model-aware cooldown | Multi-URL scheduling | Protocol transforms | Live monitoring | Cost control

ccLoad removes the operational mess of running multiple AI API upstreams. It keeps Claude Code, Codex, Gemini, and OpenAI-compatible clients on one stable gateway, then handles upstream selection, failover, cooldown, protocol conversion, request visibility, and cost limits in the service instead of in every client script.

## 🤖 Built with Codex and GPT-5.6

During OpenAI Build Week, Codex powered by GPT-5.6 was the primary engineering agent used to:

- Trace request routing, failover, cooldown, protocol conversion, and dashboard flows across the Go backend and embedded web UI.
- Implement and review model-scoped cooldown handling for upstream `5xx`, key-level `429`, model-unavailable `404`, and explicit model-retirement `410` failures without unnecessarily cooling an entire channel.
- Refine the model-status and call-statistics UI, update the English and Chinese documentation, and verify…
