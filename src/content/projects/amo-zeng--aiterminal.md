---
repo: "Amo-Zeng/AITerminal"
name: "AITerminal"
description: "AI 运维终端：本地 PTY / SSH、多标签 AI 接管、交互式 CLI 与插件中心。Apache-2.0。"
readmeQualityOk: true
url: "https://github.com/Amo-Zeng/AITerminal"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["ai", "devops", "electron", "mcp", "plugins", "ssh", "terminal", "wsl", "xterm"]
stars: 55
forks: 5
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-07-03T08:23:47Z"
lastCommitAt: "2026-11-09T04:33:47Z"
lastReleaseAt: "2026-11-09T04:30:51Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 71
undervaluedScore: 42
maintainers: ["Amo-Zeng", "painpratham-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee95cbfce9549064d338cdae2bb06d33728620e8183828141cb0f5f2961d8bfe/Amo-Zeng/AITerminal"
discussionCount: 1
---

# AITerminal

[English](https://github.com/Amo-Zeng/AITerminal/blob/HEAD/README_en.md) · [下载](https://github.com/Amo-Zeng/AITerminal/releases/latest) · [安装排障](https://github.com/Amo-Zeng/AITerminal/blob/HEAD/INSTALLATION.md) · [使用手册](https://github.com/Amo-Zeng/AITerminal/blob/HEAD/USER_GUIDE.md) · [文档索引](https://github.com/Amo-Zeng/AITerminal/blob/HEAD/DOCUMENTATION.md) · [插件开发](https://github.com/Amo-Zeng/AITerminal/blob/HEAD/PLUGIN_SDK.md)

**用 AI 管理本地电脑和远程服务器，也让开发者把自己的运维经验变成插件。**

AITerminal 是基于 Electron、xterm.js 和 SSH2 的开源桌面终端，将本地 PTY、SSH、AI 对话、交互式命令接管和插件中心放在同一工作界面。源码使用 **Apache License 2.0**，支持 Windows、Linux 和 macOS。

## 功能演示

保留以下早期版本录屏，展示实际操作方式。当前版本的界面布局、标签隔离和权限确认流程已有升级，以当前应用与文档为准。

**自然语言转命令**：描述“查找所有大于 100 MB 的文件”，查看 AI 给出的命令，再按需执行。

**AI 接管任务（2 倍速）**：输入“创建一个介绍广义相对论的炫酷网页”，由 AI 执行开发任务，并继续提出修改要求。

**AI 问答与建议**：询问如何查看 Linux 内存使用情况，获取解释和命令示例。

**文件拖拽与传输**：将本地文件拖入已连接的 SSH 终端，上传后浏览和下载远程文件。

**终端主题切换**：调整字体和配色，选择适合自己的终端外观。

## 能做什么

- **本地与远程终端**：直接打开本地 Shell，或连接 SSH；支持 Codex、Vim、tmux 等交互式程序。
- **AI 问答与命令助手**：自然语言问答、`fix` 错误诊断、`analyze` 系统分析、`cmd` 自然语言转命令；支持流式回复、分屏、Markdown、代码高亮、数学公式和自定义回答要求。
- **SSH 文件与命令**：密码/私钥登录、拖拽上传、`rfe` 浏览和下载远程文件、`myls` 点击下载并打开文件；`send` 直接发送 Shell 命令，输入…
