---
repo: "ayuayue/PiDeck"
name: "PiDeck"
description: "Desktop workbench for managing multiple pi coding-agent sessions across project folders."
url: "https://github.com/ayuayue/PiDeck"
homepage: "https://ayuayue.github.io/PiDeck/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai-agent", "coding-agent", "desktop-app", "electron", "pi", "react", "rpc", "typescript"]
stars: 166
forks: 17
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-31T12:40:24Z"
lastCommitAt: "2026-06-25T06:41:31Z"
lastReleaseAt: "2026-06-07T06:03:21Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 34
maintainers: ["ayuayue", "1900EasonJin", "zx3022448"]
openGraphImageUrl: "https://opengraph.githubassets.com/382400e80226245fc395afee92e9c79ff55207fbd5d281703dd947acd4bbd0cc/ayuayue/PiDeck"
---

# PiDeck

[English](README.en.md) · [LinuxDO 友链](https://linux.do)

**一个用于管理多个 [pi](https://pi.dev) 编码 Agent 会话的桌面工作台。**

![Status](https://img.shields.io/badge/status-experimental-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Electron](https://img.shields.io/badge/Electron-38-47848f)
![React](https://img.shields.io/badge/React-19-61dafb)
![Version](https://img.shields.io/badge/version-0.6.2-green)

`PiDeck` **不是** pi 的分支。它是一个轻量 Electron 外壳，通过启动多个 `pi --mode rpc` 进程，将项目管理、会话管理、对话界面、配置管理和工具编排整合到一个原生桌面应用中——所有 Agent 能力由 pi 原生提供。

---

## 📋 更新日志

> **最新版本 v0.6.2**（2026-06-22）

### v0.6.2 更新
- 🚀 项目子项统一列表：Agent 和历史会话混排，默认显示 5 项
- 🚀 外部编辑器管理：设置中新增编辑器配置页，支持检测/启用/禁用
- ✨ 顶部操作按钮统一：“新会话”“文件”“终端”视觉一致
- ✨ 日志页优化：级别筛选和时间范围筛选
- 🐛 修复历史会话重复显示/激活问题
- 🐛 修复关闭 Agent 后再次打开历史会话消息空白
- 🐛 修复单纯打开历史会话导致排序提前

[查看完整更新日志 →](CHANGELOG.zh-CN.md)

---

## 核心功能

| 功能 | 说明 |
|---|---|
| **多项目工作区** | 添加、搜索、拖动排序和切换本地项目目录，同时运行多个 pi Agent，项目间完全隔离。 |
| **内置 Chat 对话区** | 项目列表顶部固定 Chat 入口，写入应用用户目录，适合无需绑定代码项目的通用对话。 |
| **配置、Skill 与 Extension 管理** | 可视化编辑器管理 pi 的 `models.json`、`auth.json`、`settings.json`，并可管理全局 Skills 与 Extensions。 |
| **代理设置** | 独立管理 pi agent 子进程代理和桌面端代理，模型拉取与连接测试可走桌面端代理。 |
| **斜线命令…
