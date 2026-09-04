---
repo: "moutsea/koinote"
name: "koinote"
description: "所见即所得的在线 Markdown 编辑器：边写边渲染，图片粘贴即进图床，一键导出到微信公众号 / PDF / Word"
readmeQualityOk: true
url: "https://github.com/moutsea/koinote"
homepage: "https://koinote.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [49, 35]
topics: ["cloudflare-r2", "cloudflare-workers", "golang", "markdown", "markdown-editor", "note-taking", "prosemirror", "react", "self-hosted", "tiptap"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-06T00:39:18Z"
lastCommitAt: "2026-09-04T08:10:45Z"
lastReleaseAt: "2026-08-17T01:51:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["moutsea"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b992ce3211b22c2ddd8f8d59f4f2ee443b95cf7529e5602b11bab033b42f087/moutsea/koinote"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/logo-dark.png">
</picture>

# Koinote 锦鲤笔记 —— 所见即所得的在线 Markdown 编辑器

边写边渲染，图片粘贴即进图床，一键导出到微信公众号、知乎、PDF 和 Word。

**[koinote.app](https://koinote.app)** —— 打开即用，不必自己部署

[English](https://github.com/moutsea/koinote/blob/HEAD/README.en.md) · [在线更新日志](https://koinote.app/changelog) · [中文更新日志](https://github.com/moutsea/koinote/blob/HEAD/CHANGELOG.zh.md) · [路线图](https://github.com/moutsea/koinote/blob/HEAD/docs/ROADMAP.zh.md) · [设计文档](https://github.com/moutsea/koinote/blob/HEAD/docs/DESIGN.zh.md) · [MIT License](https://github.com/moutsea/koinote/blob/HEAD/LICENSE)

</div>

---

## 这是什么

一个 Typora 式的在线 Markdown 编辑器：不分左右分栏，写下的语法立刻变成排版后的样子。

和本地 Markdown 编辑器的五个区别：

- **图片粘贴即上传** —— 存进自己的 R2 图床，正文里是干净链接而不是一坨 base64
- **一键导出到自媒体** —— 微信公众号复制内联富文本并可保存到草稿箱，知乎可在确认后直接发布，掘金复制原生 Markdown；网页端和桌面端均可绑定最多 5 个公众号、设置默认账号；封面可用 Koinote Logo+标题、正文图片或 AI 生成
- **文档在云端** —— 多设备同步、可分享
- **Agent 通过 MCP 读写文档** —— Codex、Claude Code、OpenCode、OpenClaw 等客户端
- **AI 审阅式优化**（会员）—— 模型先给出标题、正文和排版 Diff，用户逐条决定是否应用

仓库还包含基于 Tauri 2 的 macOS / Windows 客户端 alpha：文档与图片本地优先保存，恢复网络后
自动上传图片、替换正文地址并同步文档；登录在系统浏览器完成，通过 `koinote://auth` + PKCE
把短期访问令牌交回客户端。

>…
