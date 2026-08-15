---
repo: "highkay/googleaisearch2api"
name: "googleaisearch2api"
description: "把 https://google.com/ai 转换成一个openai兼容的接口"
readmeQualityOk: true
url: "https://github.com/highkay/googleaisearch2api"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 27
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-23T15:48:17Z"
lastCommitAt: "2026-08-15T03:59:09Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 36
maintainers: ["highkay", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/da5e55ce92bb8bc9cf82512137b0ed4f2e9d0786c79e57ed00e5a5872c2cb30c/highkay/googleaisearch2api"
---

# Google AI Search2API

`googleaisearch2api` 把 Google AI 搜索页面上的真实浏览器交互包装成一个 OpenAI 兼容 API，并提供一个本地 Web Console 用来查看配置、请求统计和实时探针结果。

## 运行时事实

- 当前已验证稳定入口是 `https://www.google.com/search?udm=50&aep=11...`，不是 `https://google.com/ai`。
- 运行时浏览器策略已经收敛为单一 `patchright + chrome`。
- Docker 使用 Playwright 官方镜像内置 Chromium，并把它映射到 Patchright 的 `chrome` channel 兼容路径。
- 单进程并发通过常驻 browser worker 池实现；每个 worker 独占自己的 browser/context。
- 纯 `httpx` 直接请求同一 AI 搜索 URL 只能拿到 `enablejs` 壳页，不能把 Google AI 当成稳定公开 HTTP API。

## 功能

- `GET /v1/models`
- `GET /query`
- `POST /query`
- `POST /v1/chat/completions`
- `POST /v1/responses`
- Bearer Token 认证
- 可配置模型名、代理、语言、超时、worker 数和队列长度
- 可在 Gemini web、Duck.ai、gemini-upstream 和自动降级模式之间切换
- SQLite 持久化配置与请求日志
- 本地 Web Console: `/console`

## 推荐启动方式

默认推荐直接用 Docker Compose：

```bash
cp .env.example .env
```

先在 `.env` 里填一个你自己的 `API_TOKEN`，再启动：

```bash
docker compose pull
docker compose up -d
```

默认宿主端口是 `9010`。启动后访问：

- API: `http://127.0.0.1:9010`
- Console: `http://127.0.0.1:9010/console`

默认 Compose 使用 GitHub Actions 发布到 GHCR 的镜像：`ghcr.io/highkay/googleaisearch2api:latest`。它不再挂载源码目录，也不会在容器启动时重新执行 `uv sync`。这样可以直接复用镜像里已经构建好的运行环境，避免宿主机仓库里的 `.python-version=3.13`…
