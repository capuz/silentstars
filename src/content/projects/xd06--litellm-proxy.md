---
repo: "XD06/litellm-proxy"
name: "litellm-proxy"
description: "LLM API proxy with 3-format conversion (OpenAI Chat/Responses/Anthropic Messages), smart routing, failover & web dashboard. 智能路由，三格式互转，多供应商管理"
readmeQualityOk: true
url: "https://github.com/XD06/litellm-proxy"
language: "Python"
languages: ["Python", "JavaScript", "CSS"]
languagePcts: [45, 32, 22]
topics: ["anthropic", "api-gateway", "api-proxy", "chat-completions", "dashboard", "failover", "format-conversion", "llm", "llm-proxy", "multi-provider"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-10T03:06:35Z"
lastCommitAt: "2026-10-05T10:46:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["XD06"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57b1e5bd992f1cc0cb377cc72e9df7c1d21bfac004248132c7c47669aef6028/XD06/litellm-proxy"
---

# 🚀 LiteLLM Proxy

### Format-Aware LLM API Proxy · Smart Routing · Web Dashboard

**English** · [中文](https://github.com/XD06/litellm-proxy/blob/HEAD/docs/README_CN.md) · [Architecture](https://github.com/XD06/litellm-proxy/blob/HEAD/ARCHITECTURE.md) · [Contributing](https://github.com/XD06/litellm-proxy/blob/HEAD/docs/CONTRIBUTING.md)

---

> A Python-based **format-aware LLM API proxy** that sits between LLM clients (Cherry Studio, Claude Code, OpenAI SDK, etc.) and multiple upstream LLM providers. It accepts three API formats — **OpenAI Chat Completions**, **OpenAI Responses**, and **Anthropic Messages** — and can convert between any pair when the best available provider uses a different format than the client requested.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [⚡ Quick Start](#-quick-start)
- [🐳 Docker / VPS](#-docker--vps)
- [📊 Dashboard](#-dashboard)
- [🏗️ Architecture](#-architecture)
- [🔌 Client Endpoints](#-client-endpoints)
- [⚙️ Configuration](#-configuration)
- [🗺️ Project Map](#-project-map)
- [🛠️ Development](#-development)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Icon |…
