---
repo: "caidaoli/ccLoad"
name: "ccLoad"
description: "AI API gateway that ends manual channel switching with smart routing, auto failover, exponential cooldown, multi-URL scheduling, live request monitoring and soft-error detection."
url: "https://github.com/caidaoli/ccLoad"
homepage: "https://www.ccload.xyz"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [66, 21]
topics: ["ai", "ai-gateway", "anthropic", "api-proxy", "claude-api", "claude-code", "codex", "cost-control", "failover", "gemini"]
stars: 335
forks: 52
openIssues: 2
closedIssues: 43
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2025-09-08T11:10:18Z"
lastCommitAt: "2026-06-27T00:46:17Z"
lastReleaseAt: "2025-12-10T12:06:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 34
maintainers: ["caidaoli", "lukegood"]
openGraphImageUrl: "https://opengraph.githubassets.com/f972a07d3c3901b7f61094d722d3628028a79a01f29ee7e42a45ee03db7f6809/caidaoli/ccLoad"
---

# ccLoad

**AI API gateway for Claude Code, Codex, Gemini, and OpenAI.**

**English | [简体中文](README.zh-CN.md)**

> Smart routing | Automatic failover | Exponential cooldown | Multi-URL scheduling | Protocol transforms | Live monitoring | Cost control

ccLoad removes the operational mess of running multiple AI API upstreams. It keeps Claude Code, Codex, Gemini, and OpenAI-compatible clients on one stable gateway, then handles upstream selection, failover, cooldown, protocol conversion, request visibility, and cost limits in the service instead of in every client script.

## 🎯 What ccLoad Solves

Common failure modes when you run several AI API channels:

- **Manual channel switching**: Different keys, validity windows, quotas, and upstream URLs quickly become hard to manage.
- **Rate limits and upstream failures**: `429`, `502`, `504`, expired keys, and overloaded providers should not stop the client workflow.
- **Opaque request status**: Without live request visibility, long streaming requests become guesswork.
- **HTTP 200 with error content**: Some upstreams return a successful HTTP status while the response body is an actual error.
- **Cost drift**: Shared gateways need…
