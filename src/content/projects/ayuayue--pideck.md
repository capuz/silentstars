---
repo: "ayuayue/PiDeck"
name: "PiDeck"
description: "Desktop workbench for managing multiple pi coding-agent sessions across project folders."
url: "https://github.com/ayuayue/PiDeck"
homepage: "https://ayuayue.github.io/PiDeck/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["ai-agent", "coding-agent", "desktop-app", "electron", "pi", "react", "rpc", "typescript"]
stars: 178
forks: 20
openIssues: 5
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-31T12:40:24Z"
lastCommitAt: "2026-06-28T02:02:56Z"
lastReleaseAt: "2026-06-07T06:03:21Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 34
maintainers: ["ayuayue", "1900EasonJin", "zx3022448"]
openGraphImageUrl: "https://opengraph.githubassets.com/450fa83dadf85f9bd51edf9bc86e0e63585c1c672b31e3f8becf7a4f87df977f/ayuayue/PiDeck"
---

# PiDeck

[English](README.en.md) · [LinuxDO 友链](https://linux.do)

**一个用于管理多个 [pi](https://pi.dev) 编码 Agent 会话的桌面工作台。**

`PiDeck` **不是** pi 的分支。它是一个轻量 Electron 外壳，通过启动多个 `pi --mode rpc` 进程，将项目管理、会话管理、对话界面、配置管理和工具编排整合到一个原生桌面应用中——所有 Agent 能力由 pi 原生提供。

---

## 📋 更新日志

> **最新版本 v0.6.3**（2026-06-28）

### v0.6.3 更新
- 🚀 桌面宠物系统：透明悬浮窗、Canvas 动画、巡游/逗弄/Review 交互
- 🚀 Chip 输入系统：`@`路径和 `/` 命令可视化为交互式 chip，可点击打开文件
- 🚀 居中模态对话框：设置/配置/反馈改为覆盖模态框
- 🚀 支持 OpenCode 会话导入和批量模型选择
- ✨ 会话统计、模型折叠、加载动画等 UI 优化
- 🐛 修复 macOS 终端权限、宠物 IPC 时序、换行丢失等 20+ 项问题
- 🔧 流式卡顿修复、宠物代码精简 41%

[查看完整更新日志 →](CHANGELOG.zh-CN.md)

---

## 核心功能

| 功能 | 说明 |
|---|---|
| **多项目工作区** | 添加、搜索、拖动排序和切换本地项目目录，同时运行多个 pi Agent，项目间完全隔离。 |
| **内置 Chat 对话区** | 项目列表顶部固定 Chat 入口，写入应用用户目录，适合无需绑定代码项目的通用对话。 |
| **配置、Skill 与 Extension 管理** | 可视化编辑器管理 pi 的 `models.json`、`auth.json`、`settings.json`，并可管理全局 Skills 与 Extensions。 |
| **代理设置** | 独立管理 pi agent 子进程代理和桌面端代理，模型拉取与连接测试可走桌面端代理。 |
| **斜线命令 & `!` Shell** | 内置斜线命令建议（`/compact`、`/session` 等），支持 `!command` / `!!command` 在聊天输入框直接执行 Shell 命令。 |
| **内嵌终端 Dock** | 当前 Agent 绑定独立终端 tab，支持 PowerShell/cmd/sh fallback、多 tab、主题切换、拖拽高度、右键复制选区和关闭确认。 |
| **会话管理** | 新建会话、项目内联历史、恢复历史会话、重命名、复制、导出 HTML、删除历史会话和关闭…
