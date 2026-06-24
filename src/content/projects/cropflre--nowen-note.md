---
repo: "cropflre/nowen-note"
name: "nowen-note"
description: "开源自托管笔记与私有知识库，支持 Markdown/富文本、AI 写作、思维导图、任务管理、全文搜索、多级笔记本和 Docker 一键部署。"
url: "https://github.com/cropflre/nowen-note"
homepage: "http://note.nowen.cn/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["nas", "notebook", "fnos-app", "knowledge-base", "markdown", "note-taking", "notes", "personal-knowledge-management", "rich-text-editor", "self-hosted"]
stars: 253
forks: 40
openIssues: 36
closedIssues: 60
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-02-12T03:47:35Z"
lastCommitAt: "2026-06-24T06:38:33Z"
lastReleaseAt: "2026-05-08T03:46:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 31
maintainers: ["cropflre"]
openGraphImageUrl: "https://opengraph.githubassets.com/17f5f00a8248521b4b1c0c59e070876ef801d2175d63cccf73b6e7d72bb2d1c5/cropflre/nowen-note"
---

# nowen-note

> 自托管的私有知识库，对标群晖 Note Station。
>
> A self-hosted private knowledge base. [English README](./README.en.md) · [作者感言](./AUTHOR_STORY.md) · [在线体验](http://note.nowen.cn/)

## 功能概览

- **富文本 + Markdown 双引擎**：Tiptap 3 + CodeMirror 6，共享 AI、版本历史、评论等上层能力
- **AI 助手**：支持通义千问 / OpenAI / Gemini / DeepSeek / 豆包 / Ollama，覆盖写作辅助、生成标题、推荐标签、RAG 知识问答
- **知识管理**：无限层级笔记本、彩色标签、任务、思维导图、说说、FTS5 全文搜索
- **协作 & 历史**：分享支持 4 档权限（仅查看 / 可评论 / 可编辑 / 可编辑需登录）+ 访客留言 + 密码 / 有效期、版本回溯
- **文件管理**：图片缩略图（webp 三档自适应，密集图床场景流量降至 1/100）、「我的上传」分类（已引用 / 未引用细分）、孤儿清理
- **自动化**：沙箱插件系统、Webhook、审计日志、定时自动备份
- **多端**：Web / Electron（Win/macOS/Linux）/ Android（Capacitor）
- **开发者生态**：MCP Server、TypeScript SDK、CLI、[浏览器剪藏扩展](https://chromewebstore.google.com/detail/nowen-note-web-clipper/nglkodhfdbnfielchjpkjhenfaecafpg)、OpenAPI 3.0（见 [`packages/`](./packages)）

## 技术栈

React 18 · TypeScript · Vite 5 · Tiptap 3 · Tailwind · Hono 4 · SQLite(FTS5) · JWT · Electron 33 · Capacitor 8

## 截图

### 桌面端

| AI 写作助手 | AI 服务商配置 |
| :---: | :---: |
|  |  |

### 移动端（Android / Capacitor）

| 侧边栏 | 笔记列表 | 编辑器 |
| :---: | :---: | :---: |
|  |  |  |

## 在线体验

不想本地部署？可以直接打开作者维护的官方体验站点：

- 地址：<https://note.nowen.cn/>
- 账号：`demo`
- 密码：`demo123456`…
