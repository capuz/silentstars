---
repo: "BadKid90s/Spreado"
name: "Spreado"
description: "Spreado 是一款开源的社交媒体自动化发布工具，专为创作者设计。它能够帮助用户将视频内容一键同步发布到抖音、小红书、快手、视频号等中国主流的社交媒体平台。无论是个人创作者还是MCN机构，都可以通过 Spreado 实现高效的内容分发与管理。"
readmeQualityOk: true
url: "https://github.com/BadKid90s/Spreado"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 100
forks: 16
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-12-14T09:52:29Z"
lastCommitAt: "2026-07-29T06:12:56Z"
lastReleaseAt: "2026-05-02T13:16:07Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 28
maintainers: ["github-actions[bot]", "BadKid90s"]
openGraphImageUrl: "https://opengraph.githubassets.com/e97251eda3d29e7ee0c078d365b35ec0cdd2708136c3e12f38a0c8ac786b774b/BadKid90s/Spreado"
---

# Spreado - 全平台内容发布工具

一个强大的自动化工具，支持将视频同时发布到多个中国社交媒体平台，包括抖音、小红书、快手和腾讯视频号。

## 🚀 功能特性

- **多平台支持**: 一键上传至抖音、小红书、快手、腾讯视频号
- **智能认证**: 自动处理登录和Cookie管理，支持二维码扫码登录全流程
- **灵活调度**: 支持定时发布和草稿保存
- **丰富配置**: 标题、描述、标签、封面、地理位置等完整设置
- **命令行界面**: 简单易用的CLI工具
- **程序接口**: 支持Python API集成
- **插件化架构**: 新平台无需改动核心代码，放入 `plugins/` 目录即可自动发现

## 🤖 Agent Skill

我们为 AI Agent (如 Claude, Antigravity，OpenCode, Codex, Cursor, Windsurf) 提供了专门的 Skill 支持，可以更智能地协助您进行安装、配置和视频发布。

### 获取 Skill
您可以下载打包好的 `.skill` 文件并导入到您的 AI 助手：

- **下载链接**: [spreado-skill](https://github.com/BadKid90s/Spreado/blob/HEAD/skills/spreado-skill)
- **源码位置**: `./skills/spreado-skill`

### 支持的功能
- **智能安装**: 自动根据环境推荐最合适的安装方式（二进制或 Python）。
- **流程引导**: 引导完成多平台登录认证和状态校验。
- **发布助手**: 协同处理视频上传、元数据配置及定时任务。

## 📋 系统要求

- Python **3.9** 或更高版本（推荐 3.10+）
- 操作系统：Windows, macOS, Linux
- 浏览器：自动检测系统已安装的 Chrome/Edge，或使用 Playwright Chromium

## 📦 安装指南

### 方式一：下载可执行文件（最简单）

如果你不想安装 Python 环境，可以直接从 GitHub 下载官方编译好的可执行文件：

| 操作系统 | 下载链接 | 国内加速 |
| :--- | :--- | :--- |
| **Windows** | [x64](https://github.com/BadKid90s/Spreado/releases/latest/download/spreado-windows-x64.exe) \|…
