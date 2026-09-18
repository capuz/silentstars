---
repo: "liixing/eplayerx-homepage"
name: "eplayerx-homepage"
description: "EplayerX 首页数据源"
readmeQualityOk: true
url: "https://github.com/liixing/eplayerx-homepage"
homepage: "https://eplayerx-homepage.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 25
forks: 16
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-02T14:33:42Z"
lastCommitAt: "2026-09-18T08:27:03Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 57
maintainers: ["liixing"]
openGraphImageUrl: "https://opengraph.githubassets.com/dec7e4ac9055312be3dece2fff26c02cd5f3323ff116281f27e6c31f5da90fb2/liixing/eplayerx-homepage"
---

# EPlayerX API 服务

[English](https://github.com/liixing/eplayerx-homepage/blob/HEAD/README.en.md) | **简体中文**

一个基于 [Hono](https://hono.dev/) 框架构建的媒体内容 API 服务，提供 TMDB API 代理和豆瓣热门内容爬取功能。

## 🚀 部署

### Docker 部署（推荐）

```bash
docker run -d \
  --name eplayerx-homepage \
  -p 3000:3000 \
  --env-file .env \
  --restart unless-stopped \
  snowleee/eplayerx-homepage:latest
```

或使用 Docker Compose，创建 `docker-compose.yml`：

```yaml
services:
  app:
    image: snowleee/eplayerx-homepage:latest
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: unless-stopped
```

```bash
docker compose up -d
```

### Vercel 部署

### Cloudflare Workers 部署

```bash
npm run deploy:cf
```

## 🔑 获取 TMDB API Token

1. 访问 [TMDB 官网](https://www.themoviedb.org/) 并注册账号
2. 进入 [API 设置页面](https://www.themoviedb.org/settings/api)
3. 申请 API Key（选择 Developer 类型即可）
4. 获取 **API Read Access Token** (以 `eyJ` 开头的长字符串)
5. 在 Vercel 部署时填入此 Token

## ✨ 功能特性

- 🎬 **TMDB API 代理** - 电影、电视剧搜索、详情、图片、演职人员等
- ⭐ **多源评分** - 按 TMDB / IMDb id 查询 IMDb、烂番茄、Metacritic 等（MDBList）
- 🔥 **豆瓣热门内容** - 爬取豆瓣热门电影、电视剧、动画、综艺节目
- 📡 **发现功能** - 按语言、平台发现电视剧内容
- 🖼️ **图片代理** - TMDB 图片代理服务，支持缓存
- ☁️ **云存储** - 使用 Cloudflare R2 存储爬取数据

##…
