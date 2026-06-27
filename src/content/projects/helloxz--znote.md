---
repo: "helloxz/znote"
name: "znote"
description: "ZNote是一款小而美的纯笔记应用，原生支持 Markdown 所见即所得，一处部署，随处可用。"
url: "https://github.com/helloxz/znote"
homepage: "https://znote.xphub.dev"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [50, 49]
topics: ["notebook", "notes", "notes-app"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-24T02:02:18Z"
lastCommitAt: "2026-06-27T00:48:38Z"
lastReleaseAt: "2026-06-26T09:38:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["helloxz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ee8e2995baa8aeb669308479b1b889f58c2962ea532e06a9aff25eb10de589a/helloxz/znote"
---

# ZNote

ZNote是一款小而美的纯笔记应用，原生支持 Markdown 所见即所得，一处部署，随处可用。使用Bun + Hono.js + libSQL + Vue3开发。

* **演示地址：** [https://znote.xphub.dev/](https://znote.xphub.dev/)
* **账号：** `demo`
* **密码：** `blog.xiaoz.org`

## 特点

- **纯笔记应用**：无脑图、无清单、无多余功能，只专注于笔记本身
- **原生 Markdown**：所见即所得，支持所见即所得，专注内容不打扰
- **无同步困扰**：服务端集中存储数据，用户无需折腾同步方案
- **私有部署**：提供 Docker 私有部署，数据完全自主掌控，本地存储，隐私无忧
- **WEB 访问**：浏览器即开即用，无需安装客户端，跨平台无障碍
- **拖拽排序**：笔记分类、笔记内容均支持拖拽排序
- **数据导入**：支持将本地 .md 文件分类打包 ZIP 后一键导入
- **版本历史**：自动记录最近 50 个历史版本，随时回滚无惧丢失
- **多用户支持**：支持多账号体系（最多 5 用户），适合个人或家庭使用
- **轻量级**：基于 Bun + Hono.js + libSQL 打造，极速启动与低资源占用
- **全局搜索**：跨分类全文检索，输入关键词秒级定位所需笔记
- **API 支持**：提供 RESTful API，方便第三方工具集成与自动化操作

### Todo List

- [ ] 笔记分享
- [ ] AI功能
- [ ] 支持多语言
- [ ] 导出所有笔记
- [ ] 文档功能
- [ ] 浏览器扩展
- [ ] 手机客户端
- [ ] PC客户端

## 快速开始

使用 Docker Compose 一键部署（推荐）：

```yaml
services:
  znote:
    container_name: znote
    image: helloz/znote:latest
    ports:
      - "3888:3888"
    volumes:
      - "./data:/app/data"
    restart: always
    environment:
      TZ: Asia/Shanghai
```

启动服务：

```bash
docker compose up -d
```

或者使用 Docker 命令行部署：

```bash
docker run -d \
  --name znote \
  -p 3888:3888 \
  -v ./data:/app/data \
  --restart always…
