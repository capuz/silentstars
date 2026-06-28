---
repo: "dark-hxx/CLI-Manager"
name: "CLI-Manager"
description: "CLI-Manager: 用于集中管理基于CLI 的多个开发项目，解决多窗口切换、重复输入命令的痛点，提升开发工作流效率。"
url: "https://github.com/dark-hxx/CLI-Manager"
homepage: "https://dark-hxx.github.io/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [63, 23]
stars: 124
forks: 11
openIssues: 5
closedIssues: 27
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-03-12T12:18:12Z"
lastCommitAt: "2026-06-28T12:44:32Z"
lastReleaseAt: "2026-05-13T03:38:30Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 37
maintainers: ["dark-hxx", "charlexys"]
openGraphImageUrl: "https://opengraph.githubassets.com/192248db0504f28ad8d967ed4c0103e34bcc18bdf7ab12032cd4af68c638fff2/dark-hxx/CLI-Manager"
---

# CLI-Manager

> **语言**：简体中文 | [English](README.en-US.md)

**🚀 跨平台 AI CLI 增强工作台**

专为 **Claude Code / Codex CLI** 深度优化的多项目终端管理器

[功能特性](#-核心特性) • [界面预览](#-界面预览) • [快速开始](#-快速开始) • [技术栈](#-技术栈) • [交流讨论](#-交流讨论)

</div>

---

## 💡 项目简介

CLI-Manager 是一款专注于 **AI CLI 工作流增强**的桌面应用，将多项目终端管理与 Claude Code / Codex CLI 深度集成。

> **平台支持**：Windows（完整测试） | macOS / Linux（实验性支持，欢迎反馈）

### 🎯 为什么选择 CLI-Manager？

在多项目并行开发中，你可能遇到这些痛点：

- ❌ Claude / Codex 跑任务时得盯着终端，错过权限请求就卡住
- ❌ 想回看某次会话改了什么代码，Claude 历史没有 Diff 视图
- ❌ 不知道这个月用了多少 Token、哪个项目最费钱
- ❌ 多个项目频繁切换终端，重复输入相同命令
- ❌ 想给不同项目用不同的 Claude 后端（官方 / 中转），每次手动改环境变量

**CLI-Manager 提供：**

✅ **实时 Hook 通知** — Claude 需要审批时桌面弹窗提醒，点击直接跳转<br>
✅ **会话实时统计** — 每个终端显示当前会话 Token 用量、费用、工具调用<br>
✅ **历史 Diff 回看** — 统一查看所有历史会话的代码变更，支持跳回触发消息<br>
✅ **用量分析看板** — 多维度统计（热力图、趋势图、效率散点）<br>
✅ **项目级供应商切换** — 一键切换 Claude 后端（官方 / 中转 / 自建），无需手动改配置<br>
✅ **灵活分屏布局** — 自由的终端分屏 + Tab 跨 pane 拖拽<br>
✅ **命令面板 & 模板** — `Ctrl+P` 快速启动项目 / 执行常用命令

---

## ✨ 核心特性

### 🔥 Claude Code / Codex CLI 深度集成

<table>
<tr>
<td width="50%">

#### 🔔 Hook 实时通知

- **权限审批提醒** — Claude 需要审批时桌面弹窗，点击跳转
- **任务状态同步** — 终端 Tab 实时显示运行中 / 待审批 / 完成 / 失败状态
- **OSC 133 Shell 集成** — 标准化命令边界检测
- **SessionStart 会话绑定** —…
