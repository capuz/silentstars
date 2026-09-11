---
repo: "honlnk/gpt-image-studio"
name: "gpt-image-studio"
description: "Local-first AI image creation workbench | 本地优先的 AI 图片创作工作台"
readmeQualityOk: true
url: "https://github.com/honlnk/gpt-image-studio"
homepage: "https://image.honlnk.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["ai-image-generation", "gpt-image-2", "image-editing", "openai", "text-to-image", "vue", "vue3", "ai-art", "companion", "docker"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-05-01T08:25:38Z"
lastCommitAt: "2026-09-11T08:14:57Z"
lastReleaseAt: "2026-06-19T16:06:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["honlnk", "HonlnkAgent", "Wink-Nerver"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aa19e27ac7c23ade752e342a1cf7637979e977d3dae729a1bdc2f5b5797e279/honlnk/gpt-image-studio"
---

# GPT Image Studio

> 🔗 **在线体验**：<a href="https://image.honlnk.com" target="_blank">image.honlnk.com</a>

本地优先的 AI 图片创作工作台。通过聊天式界面调用 OpenAI 兼容 Images API，生成和编辑图片。数据本地存储，无需后端即可使用；需要保护 API 凭据或多人共用时，可接入本地 Companion 或部署为服务器模式。

## 快速开始

选择最适合你的使用方式：

| 方式 | 适合场景 | 一句话说明 |
|------|----------|------------|
| **[在线版](https://image.honlnk.com)** | 个人快速体验 | 直接打开浏览器用，填入自己的 API 地址和密钥 |
| **本地 Companion** | 不想暴露 API Key 给浏览器 | 装个 CLI 服务，凭据留在本机 |
| **Docker 自部署** | 内网 / 私有化 / 服务器多租户 | docker compose 一键拉起前端 + 后端 |
| **桌面端** | 想要原生 App 体验 | macOS 原生壳（Tauri v2） |

### 方式一：在线直接用

打开 [image.honlnk.com](https://image.honlnk.com)，在设置中填入你的 OpenAI 兼容 Images API 地址和密钥即可。所有数据保存在浏览器本地。

### 方式二：本地 Companion

凭据不经过浏览器，适合不想在前端暴露 API Key 的场景：

```bash
npm install -g @honlnk/image-studio-companion
gpt-image-studio provider add    # 交互式添加 Provider 凭据
gpt-image-studio start           # 启动后台服务
gpt-image-studio status          # 查看连接密钥（access key）
```

然后在网页设置中切换到「本地 Companion」，粘贴终端中 `status` 显示的连接密钥完成连接。

### 方式三：Docker 自部署

```bash
# 拉预构建镜像并启动（默认仅前端）
docker compose pull
docker compose up -d
# → http://localhost:8080

# 带 Companion 后端（local 模式）
docker compose --profile companion up -d

# 服务器模式（JWT 多租户，配合…
