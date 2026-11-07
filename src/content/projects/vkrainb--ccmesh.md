---
repo: "VkRainB/ccMesh"
name: "ccMesh"
description: "Claude Code / Codex local AI proxy gateway desktop app (Tauri). Anthropic Messages <-> OpenAI-compatible protocol transform, model mapping, endpoint rotation/failover. Local desktop proxy gateway: protocol conversion, model mapping, multi-endpoint rotation and circuit breaking. Connects to official APIs or relay services without modifying the client. Windows/macOS/Linux."
originalDescription: "Claude Code / Codex local AI proxy gateway desktop app (Tauri). Anthropic Messages <-> OpenAI-compatible protocol transform, model mapping, endpoint rotation/failover. 本地桌面代理网关：协议转换、模型映射、多端点轮换/熔断，对接官方 API 或中转站，不改客户端。Windows/macOS/Linux."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/VkRainB/ccMesh"
homepage: "https://vkrainb.github.io/ccMesh/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 43]
topics: ["llm", "claude", "tauri2", "desktop-app", "gateway", "local-proxy", "protocol-conversion"]
stars: 126
forks: 11
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-09T03:03:26Z"
lastCommitAt: "2026-11-07T09:29:21Z"
lastReleaseAt: "2026-07-08T02:05:07Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 33
maintainers: ["VkRainB", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/069cab8af9bd1d6f70530e78b14a405a4e865e2e75f14729367314d4704da0d0/VkRainB/ccMesh"
---

·
    ·
    ·

---

ccMesh is a desktop AI proxy gateway built on **Tauri 2 + Rust + React 19**. It provides a unified local entry point for multiple upstreams such as Claude / OpenAI / Codex, with protocol conversion, model mapping, endpoint rotation and circuit breaking, request statistics, and configuration management. Supports Windows, macOS, and Linux.

## Interface Preview

## Features

### Dashboard

- Overview of local proxy service start/stop and port status
- Today's token usage and request summary
- Real-time request monitoring: model, latency, time to first token, token breakdown

### Endpoint Management

- Endpoint CRUD, drag-and-drop sorting, list/grid views
- Supports three converter types: **claude (passthrough)**, **openai (conversion)**, and **codex (Responses)**
- Model list maintenance, inbound/outbound model mapping, connectivity testing
- Per-model filtered rotation and circuit breaking, to avoid unrelated endpoints being penalized

### Configuration Files

- Manages Claude Code `settings.json` and Codex `auth.json` + `config.toml` as "channels"
- Two write modes: endpoint write / custom write, with two-way sync between form and JSON
- Saved channels are kept…
