---
repo: "HeadEdit/IdeaForge"
name: "IdeaForge"
description: "Use the AI Node Workbench to assist design work"
readmeQualityOk: true
url: "https://github.com/HeadEdit/IdeaForge"
homepage: "https://idea-forge-psi.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T07:54:02Z"
lastCommitAt: "2026-09-14T09:12:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 37
maintainers: ["HeadEdit"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddafa9ead2470280b542de1d6bbbe19616a487ae133972cd9a49471de614b847/HeadEdit/IdeaForge"
---

# IdeaForge

[English](https://github.com/HeadEdit/IdeaForge/blob/HEAD/README_EN.md) · 中文

**IdeaForge**（创意策划工作台）是一款本地优先的浏览器工作区。它通过可连接的工作流节点，将自然语言需求逐步转化为创意卡片、评分报告、深挖对话和结构化游戏策划案。

## 在线体验

演示地址：[https://idea-forge-psi.vercel.app/](https://idea-forge-psi.vercel.app/)

打开后请在 **AI 设置** 中自行填写 API Key。密钥仅保存在你本机浏览器中。

## 主要能力

- 在自由画布上组合 AI 生成、变量和数据筛选节点。
- 批量生成创意卡片，并进行搜索、筛选、赞踩、编辑与多维评分。
- 围绕卡片或参考资料开展相互独立、可持久化的多轮对话。
- 将文本整理为系统模块，维护当前版本与最新候选，并生成依赖图谱。
- 在本地浏览器中持久化工作区，并通过 JSON 快照导入或导出。

完整的输入输出、连接规则与使用示例请参阅[节点指南](https://github.com/HeadEdit/IdeaForge/blob/HEAD/docs/NODES.md)。

## 本地运行

需要 Node.js `^20.19.0`、`^22.13.0` 或 `>=24.0.0`。

```bash
npm install
npm run dev
```

生产构建请执行 `npm run build`，然后使用任意静态 HTTP 服务器托管生成的 `dist/` 目录。

推荐使用最新版 Chrome 或 Edge 浏览器。工作台支持宽度不低于 360px 的手机、平板和桌面视口；移动端通过顶部命令菜单与底部功能栏访问完整功能。

## 配置 AI

打开 **AI 设置**，填写 OpenAI 兼容的 Base URL、API Key 和模型。Base URL 应为服务商根地址，例如 `https://api.deepseek.com/v1`，不要包含 `/chat/completions`。服务商需允许浏览器 CORS 请求。

API Key 保存在本机浏览器的 IndexedDB 中，便于本地使用，但不适合共享或不可信设备。密钥不会出现在卡片、导出内容或错误信息中。

### 使用 SearXNG 作为搜索提供商

项目支持将模型服务和搜索服务分开配置。SearXNG 只负责检索，最终回答仍由上面配置的模型生成。可以使用仓库附带的 Compose 文件在本机启动一个实例：

```bash
docker compose -f docker-compose.searxng.yml up -d…
