---
repo: "cicy-ai/cicy-code"
name: "cicy-code"
description: "CiCy — the AI-agent workspace: run, orchestrate & chat with coding agents (Claude / Codex / OpenCode / …) in tmux, manage teams, drive browser & desktop. Go server + React workspace; ships native, web/PWA & Telegram Mini App clients."
readmeQualityOk: true
url: "https://github.com/cicy-ai/cicy-code"
homepage: "https://cicy-ai.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [57, 41]
topics: ["agent-orchestration", "ai-agent", "ai-coding-agent", "cicy", "claude", "codex", "devtools", "golang", "ide", "react"]
stars: 5
forks: 3
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T11:57:45Z"
lastCommitAt: "2026-08-17T04:20:21Z"
lastReleaseAt: "2026-03-19T19:42:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 59
maintainers: ["cicy-ai", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/937b5cd5142a4daf1d80af1b1ac1c8229772ce05c5c40d1ede5c1bdaf57541d3/cicy-ai/cicy-code"
---

# cicy-code

`cicy-code` 是一个本地优先的多 agent 开发工作区:tmux worker + WebTTY 终端 + React 工作区 + AI 网关 + skill 市场,收在同一个仓库里,通过 npm(`npx cicy-code`)分发单二进制。

[📸 更多截图 →](https://docs.cicy-ai.com/guide/screenshots)

## 快速开始

```bash
npx cicy-code
```

首次运行会拉取匹配当前平台的单二进制(~30 MB),然后在本机起服务 —— 浏览器打开 <http://127.0.0.1:8008> 即可进入工作区。从零到指挥一支 agent 团队,大约 5 分钟。

- 🚀 [快速开始](https://docs.cicy-ai.com/guide/getting-started) — 5 分钟从安装到第一支 agent 团队
- 📥 [下载与安装](https://docs.cicy-ai.com/guide/download) — 各平台安装包与 Docker 方式
- 🌐 [cicy-ai.com](https://cicy-ai.com) — 官网与云端版

## 仓库结构

```text
cicy-code/
├── app/          React + Vite 前端(入口 app/src/App.tsx,主界面 Workspace.tsx)
├── api/          Go 后端 + 终端层
│   ├── mgr/      主程序与业务路由(main.go 注册路由与启动)
│   ├── server/   WebTTY HTTP/WebSocket 服务
│   ├── webtty/   WebTTY 协议
│   ├── js/       浏览器端终端资产源码(改后需 `cd api && make asset`)
│   ├── skillcmd/ `cicy-code skill <…>` 子命令(安装/卸载/列表)
│   └── resources/ 后端静态资源
├── npm/          npm 发布包与启动器(bin/cicy-code.js + publish-all.sh + install.sh)
├── scripts/      构建/发版/测试脚本(build-image.sh / fresh-instance.sh / sync-version.py)
├── workers/      Cloudflare Workers(见下「Cloudflare Workers」)
├── build.sh      标准构建入口(唯一正确的构建/测试方式)
├──…
