---
repo: "shunnet/VisualIdentity"
name: "VisualIdentity"
description: "[ 开箱即用 ] 应用于工业物联网项目上基础视觉识别服务，使用 .net Core 与 Yolo 识别服务开发的 WebApi 服务，包含(标注/训练/验证)一站式服务管理后台，开箱即用"
readmeQualityOk: true
url: "https://github.com/shunnet/VisualIdentity"
homepage: "https://snet.cn"
language: "C#"
languages: ["C#"]
languagePcts: [71]
topics: ["webapi", "yolo"]
stars: 41
forks: 18
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2025-08-08T01:05:08Z"
lastCommitAt: "2026-09-18T14:03:58Z"
lastReleaseAt: "2026-09-13T11:18:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 69
maintainers: ["shunnet"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1c9479f0d00f40584ad68e61d70d50d3b15b32ae7c973329173483cb63d3712/shunnet/VisualIdentity"
---

<h1 align="center">🔍 Snet.VisualIdentity</h1>

</p>

  <b>基于 .NET 10 的 YOLO 多模型智能视觉识别平台</b>
</p>

</p>

  🚀 高效 · 🧩 灵活 · 📦 易部署 · 🔒 安全
</p>

</p>

  📖 <a href="README.en.md"><b>English</b></a> | 简体中文
</p>

## 📑 目录

| | | |
|---|---|---|
| [🌟 项目简介](#-项目简介) | [🎯 应用场景](#-应用场景) | [🏗️ 项目架构](#-项目架构) |
| [⚡ 快速开始](#-快速开始) | [🏷️ Tasks 工作台](#-tasks-web-标注与训练工作台) | [🎬 视频与 FFmpeg](#-视频验证的-ffmpeg-部署) |
| [🖥️ 界面展示](#-界面展示) | [📦 NuGet 安装](#-nuget-安装) | [🔌 API 接口](#-api-接口文档) |
| [⚙️ 配置文件](#-配置文件) | [🧠 支持的任务](#-支持的任务) | [🖥️ 执行提供者](#-执行提供者) |
| [🐳 Docker 部署](#-docker-部署) | [🧪 测试](#-测试) | [🔒 安全特性](#-安全特性) |

## 🌟 项目简介

**VisualIdentity** 是一个开箱即用的智能识别平台：结合 **.NET** 的现代化能力、[YoloDotNet](https://github.com/NickSwardh/YoloDotNet) 高性能推理引擎与 **SQLite** 轻量数据管理，解决「多模型部署 + 多任务识别」的落地痛点——**检测、分类、分割、姿态估计、定向检测** 五种任务统一管理、按需切换。

> 💡 `.NET` badge：核心库 `Snet.Yolo.Server` 多目标 **net8.0 / net10.0**；API 服务与工具均基于 **.NET 10**。

### ✨ 核心特性（功能总览）

#### 🧠 识别与模型

| 特性 | 说明 |
|------|------|
| 🎯 **五合一识别** | 对象检测 · 定向检测 (OBB) · 图像分类 · 语义分割 · 姿态估计，统一管理、按需切换 |
| 🧠 **多模型管理** | 基于 SQLite 的模型增删改查，版本化管理与快速切换 |
| 🖱️ **点图即识别** | 验证页点击图片自动识别；视频因为耗时长，仍由「识别」按钮触发，并可随时取消 |
| 🔍 **大图查看器** | 双击图片打开：滚轮缩放（以光标为锚点）· 按住拖动 ·…
