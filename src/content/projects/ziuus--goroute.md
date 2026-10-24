---
repo: "ziuus/goroute"
name: "goroute"
description: "⚡ High-Performance LLM Gateway in Go + Rust SIMD (< 5MB RAM) • Multi-Account Pooling • 338+ Providers • Autonomous Cascades"
readmeQualityOk: true
url: "https://github.com/ziuus/goroute"
homepage: "https://www.npmjs.com/package/goroute"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["ai-gateway", "aider", "antigravity", "claude-code", "codex", "cursor", "golang", "llm", "opencode", "router"]
stars: 7
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-17T12:49:09Z"
lastCommitAt: "2026-10-24T08:21:26Z"
lastReleaseAt: "2026-10-22T09:57:18Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 60
undervaluedScore: 51
maintainers: ["ziuus"]
openGraphImageUrl: "https://opengraph.githubassets.com/139811f9f87448937eca38437bc1ffaaaf85992414a3144eb2214214212d1ed1/ziuus/goroute"
---

### High-Performance LLM Gateway & Multi-Provider Router for Coding Agents
**0.86ms Latency • < 5MB RSS RAM • Go Core + Rust SIMD • 338+ Providers • 35 CLI Agents • OmniRoute Vault Sync**

---

## ⚡ Why GoRoute?

Autonomous AI coding agents (**Claude Code, OpenCode, Cursor, Codex CLI, Aider, Hermes, Zed**) require constant upstream connectivity, multi-account quota rotation, and sub-millisecond protocol translation.

Traditional proxies (**OmniRoute, LiteLLM, CLIProxy**) run heavy Node.js or Python runtimes that consume **380MB to 1.5GB of RAM** 24/7. 

**GoRoute** is compiled into a single lean binary (< 15MB) combining a Go core with optional Rust SIMD acceleration. It runs 24/7 as an ultra-lightweight daemon consuming **4.7MB of RAM** with **0.86ms routing latency** — 80x lighter than OmniRoute with 100% routing parity.

---

## 📊 Benchmarks vs Traditional Gateways

Tested on Linux x86_64 under 500 concurrent streaming requests:

| Benchmark Metric | OmniRoute *(Node/Next.js)* | LiteLLM *(Python)* | GoRoute *(Go + Rust SIMD)* | Efficiency Gain |
| :--- | :--- | :--- | :--- | :--- |
| **Idle Memory (RSS)** | `~380 MB` | `~420 MB` | **`4.7 MB`** | **98.8% less RAM** |
|…
