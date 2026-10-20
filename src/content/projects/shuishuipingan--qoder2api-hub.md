---
repo: "shuishuipingan/qoder2api-hub"
name: "qoder2api-hub"
description: "Multi-account reverse proxy gateway for Qoder (international and domestic), a multi-account OpenAI-compatible gateway hub for Qoder's dual-region (domestic and international) service, featuring COSY signing inference, stable device fingerprints to avoid risk controls, OAuth device authorization for client-free login, daily check-in and Pro benefits, a background scheduled task scheduler, a web monitoring dashboard, and support for Codex / Claude Code and standard OpenAI clients"
originalDescription: "Qoder国际国内多账号反代网关，Qoder 国际国内双区多账号 OpenAI 兼容网关中枢 — COSY 签名推理、稳定设备指纹防风控、OAuth 设备授权免客户端登录、每日签到与 Pro 福利、后台定时调度器、Web 监控看板，支持 Codex / Claude Code 与标准 OpenAI 客户端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shuishuipingan/qoder2api-hub"
homepage: "https://qoder2api-hub-eybpg15659n.qoder.zone"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["aliyun", "api-gateway", "claude-code", "codex", "dashboard", "deepseek", "llm-proxy", "openai-api", "python", "qoder"]
stars: 258
forks: 71
openIssues: 1
closedIssues: 52
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-09-19T03:55:23Z"
lastCommitAt: "2026-10-20T08:49:48Z"
lastReleaseAt: "2026-10-02T04:02:24Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["cliffcat", "jk-uzi", "maiphucgiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7cea3365057a0b1c44bd5556a360fa3797b1cf9a8708d87087d2a2137388a9/shuishuipingan/qoder2api-hub"
---

Wraps Qoder's domestic edition (qoder.com.cn) and international edition (qoder.com) into a multi-account gateway exposing OpenAI / Anthropic-compatible interfaces

## Features

- **Three protocols**: OpenAI Chat Completions, Responses API (Codex), Anthropic Messages (Claude Code)
- **Dual-region multi-account**: the domestic and international editions have separate account pools and egress, with automatic region selection based on the model; account round-robin, session affinity, and failure cooldown with account switching
- **Client-free login**: OAuth device authorization, PAT import, or direct import of credentials already logged in via the local official client
- **Models in sync with the official source**: dynamically fetches the official model list, including peak/off-peak pricing, context windows, thinking levels, and disable reasons
- **Check-in and keep-alive**: automatically claims the daily Credits promotion and periodically refreshes tokens
- **Risk-control avoidance**: outbound identity aligned with the official client, optional per-account concurrency gate and request pacing control, and `/health` provides telemetry for queuing / rate-limiting / rejection signals
-…
