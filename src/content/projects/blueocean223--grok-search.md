---
repo: "BlueOcean223/grok-search"
name: "grok-search"
description: "Agent skill scripts for Grok-powered web search, fetch, and site mapping"
readmeQualityOk: true
url: "https://github.com/BlueOcean223/grok-search"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 45
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-22T14:56:13Z"
lastCommitAt: "2026-09-08T08:13:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 26
maintainers: ["BlueOcean223"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9ba712982d9989f7629392e89c6a6f4b62027dfe427736c53c163662d41b38c/BlueOcean223/grok-search"
---

# grok-search

**简体中文** | [English](https://github.com/BlueOcean223/grok-search/blob/HEAD/README.en.md)

`grok-search` 是一个通用 AI agent skill / 脚本包，用轻量 Node.js 脚本提供三类网络访问能力：

- **Search**：通过 Responses API 调用 Grok / OpenRouter / Responses-compatible 接口，并行返回 Tavily / Firecrawl 独立信源。
- **Fetch**：抓取指定 URL 的可读内容，优先使用 Tavily / Firecrawl，最后 fallback 到无 key 的 Direct Fetch。
- **Map**：发现站点内的候选页面 URL，优先使用 Tavily Map，最后 fallback 到轻量 Direct Map。

## 要求

- Node.js `>=18.17`
- 需要先运行一次 `npm install` 安装 `undici` 传输依赖
- `search.js` 需要配置 `GROK_API_URL` 和 `GROK_API_KEY`

## 快速开始

先安装依赖一次，然后从项目根目录运行脚本：

```bash
npm install
./scripts/search.js "latest Node.js LTS"
./scripts/fetch.js https://example.com
./scripts/map.js https://docs.example.com --limit 20
```

## 在 pi 中使用（示例）

把本目录 clone 或复制到你的 pi skills 位置，然后通过 `SKILL.md` 启用这个 skill。

示例命令仍然是直接运行脚本：

```bash
./scripts/search.js "latest Node.js LTS"
./scripts/fetch.js https://example.com
./scripts/map.js https://docs.example.com --limit 20
```

其他 agent harness 也可以采用同样方式：读取 `SKILL.md`，再按需运行 `scripts/search.js`、`scripts/fetch.js`、`scripts/map.js`。

## 文档

- [架构说明](https://github.com/BlueOcean223/grok-search/blob/HEAD/docs/architecture.md)
-…
