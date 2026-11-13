---
repo: "luojiaaoo/xpeech"
name: "xpeech"
description: "Xpeech Super Feishu Agent, Reject all complex concepts and keep it simple."
originalDescription: "Xpeech Super Feishu Agent, Reject all complex concepts and keep it simple."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/luojiaaoo/xpeech"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["feishu", "nanobot", "openclaw", "docker-compose", "multi-user"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-29T07:12:37Z"
lastCommitAt: "2026-11-13T05:39:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 58
maintainers: ["luojiaaoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c4b37ea946c930da7676cceb1175b68b8c2dd7bb7d14a41d9df178fba98e28d/luojiaaoo/xpeech"
---

Xpeech is a FastAPI-based Agent service. It provides a `/chat` endpoint that can receive text, images, and files, call a large language model to generate streaming replies, and call tools to complete tasks when needed.

Suitable for quickly launching an extensible AI Agent API service.

## Features

- Provides HTTP API and SSE streaming responses
- Supports text, image, and file input
- Supports multi-turn sessions and independent workspaces
- Supports LiteLLM-compatible large model services
- Supports built-in tools and custom Python tools
- Supports extending Agent tools through MCP Server
- Supports Feishu message bridging
- Supports one-time and periodic background scheduled Agent tasks on Feishu
- Uses `conf.toml` to centrally manage application configuration and secrets
- Stores session history in YAML format for better readability
- Automatic history message compression (three-level compression strategy) to avoid exceeding context limits
- Built-in memory system that automatically summarizes and saves key information
- Supports video input
- Token context usage rate and per-turn input, output, and total consumption statistics, supports `k` / `m` units; usage not returned is…
