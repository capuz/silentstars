---
repo: "D3-vin/Zcode2Api"
name: "Zcode2Api"
description: "OpenAI-compatible proxy for Zcode"
readmeQualityOk: true
url: "https://github.com/D3-vin/Zcode2Api"
homepage: "https://t.me/D3_vin"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["ai", "ai-agent", "ai-agents", "ai-coding", "ai-tools", "api", "glm", "glm-5-3", "glm-5-3-flash", "glm5-2"]
stars: 59
forks: 20
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-09-15T07:59:00Z"
lastCommitAt: "2026-11-27T16:25:21Z"
lastReleaseAt: "2026-11-23T18:12:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 36
maintainers: ["D3-vin", "Mffff4", "Matvey-Guzienko"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e0b542defba5f8600e1aac035d2d823d86db65b20c0593faffe2bb73ac29607/D3-vin/Zcode2Api"
---

# ⚡ Zcode2API

OpenAI & Anthropic-compatible proxy for Z.AI (ZCode Start Plan) with JWT account pool, automatic failover, captcha handling, and smart proxy rotation.

[Features](#features) • [Quick Start](#quick-start) • [Usage](#usage) • [Configuration](#configuration) • [API Endpoints](#api-endpoints) • [Contact](#contact)

[English](#) | [Русский](https://github.com/D3-vin/Zcode2Api/blob/HEAD/README_RU.md)

---

## Features

- 🚀 **Single Binary** — server, captcha handler, and token pool in one executable
- 🔓 **Dual Protocol** — Anthropic Messages (`/v1/messages`) + OpenAI Chat (`/v1/chat/completions`)
- 🧩 **Account Pool** — JWT rotation with automatic failover on quota exhaustion
- 🛡️ **Smart Failover** — handles 429, load errors (3012/3007/3009/3010/529) with proxy rotation
- 📊 **Live Dashboard** — account quotas, proxy profiles, real-time monitoring
- 🌐 **Proxy Support** — sticky/rotate modes, auto-pause on failures, IP probing
- 🔐 **Captcha handling** — embedded Node.js module for Aliyun captchas
- 🎯 **Dynamic Models** — catalog synced from account billing (currently **GLM-5.3** & **GLM-5.3-Flash**)
- 📦 **Zero Dependencies** — Node.js module embedded, SQLite…
