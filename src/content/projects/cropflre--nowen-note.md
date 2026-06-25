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
stars: 257
forks: 41
openIssues: 37
closedIssues: 60
watchers: 2
contributors: 2
recentReleases: 8
createdAt: "2026-02-12T03:47:35Z"
lastCommitAt: "2026-06-25T02:07:42Z"
lastReleaseAt: "2026-05-08T03:46:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 31
maintainers: ["cropflre"]
openGraphImageUrl: "https://opengraph.githubassets.com/758a5193a4d3411815f94d6ecbe042652098fa5d655194397bec19dc52270770/cropflre/nowen-note"
---

# nowen-note

> 自托管的私有知识库，对标群晖 Note Station。
>
> A self-hosted private knowledge base. [English README](./README.en.md) · [作者感言](./AUTHOR_STORY.md) · [在线体验](http://note.nowen.cn/)

## 功能概览

- **富文本 + Markdown 双引擎**：Tiptap 3 + CodeMirror 6，共享 AI、版本历史、评论等上层能力；支持表格（单元格水平/垂直居中）、图片、附件
- **AI 助手**：支持通义千问 / OpenAI / Gemini / DeepSeek / 豆包 / Ollama，覆盖写作辅助、生成标题、推荐标签、RAG 知识问答；AI 思考过程自动过滤，仅展示最终回答
- **知识管理**：无限层级笔记本、彩色标签、收藏、回收站（笔记锁定，禁止编辑/收藏/锁定操作）、FTS5 全文搜索
- **待办事项**：任务中心支持树形任务、看板视图、日历视图、甘特图 / 时间轴、任务依赖、重复任务、AI 拆任务、提醒系统、任务模板
- **思维导图**：节点拖拽 / 多选 / 复制粘贴、文件夹管理、导图模板、全屏编辑、滚轮缩放、从笔记生成、收藏与搜索
- **说说 / 动态**：轻量社交化笔记，支持图文混排
- **分享与权限**：4 档权限（仅查看 / 可评论 / 可编辑 / 可编辑需登录）+ 访客留言 + 密码 / 有效期 + 分享链接可撤销、版本回溯
- **实时同步**：基于 Yjs + WebSocket 的多端实时协作，删除 / 回收站操作跨端即时同步；IndexedDB 本地离线缓存
- **文件管理**：图片缩略图（webp 三档自适应，密集图床场景流量降至 1/100）、「我的上传」分类（已引用 / 未引用细分）、孤儿清理；附件按 `YYYY/MM` 分目录存储
- **导出**：Markdown / PDF / Word / PNG / JPG 多格式导出；Android 导出图片可直接保存到系统相册
- **备份与恢复**：定时自动备份、邮件备份推送、一键恢复；Docker / NAS 部署开箱即用
- **多端**：Web / Electron（Win/macOS/Linux）/ Android（Capacitor）
- **自动化**：沙箱插件系统、Webhook、审计日志
- **开发者生态**：MCP Server、TypeScript…
