---
repo: "MARSCHEN-CN/FapiaoGO"
name: "FapiaoGO"
description: "本项目是一个基于 Electron + React + Python 的桌面发票智能解析与管理系统。系统通过统一的解析服务，支持多种发票格式（PDF、OFD、图片），结合 OCR 文字识别与字段提取算法，实现发票信息的自动化识别、结构化存储与便捷管理。前端采用 React 构建可视化界面与交互体验，后端以 Flask 提供 REST 接口，Python 后端负责 OCR、解析与缓存策略，Electron 负责桌面应用封装、文件系统访问与打印导出。"
readmeQualityOk: true
url: "https://github.com/MARSCHEN-CN/FapiaoGO"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [48, 45]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-30T12:59:41Z"
lastCommitAt: "2026-08-31T10:02:18Z"
lastReleaseAt: "2026-08-31T03:23:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["MARSCHEN-CN"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebe27658350bcc009d72aeb0dde574c998356e4ed682ee6b5a255ed2cb150543/MARSCHEN-CN/FapiaoGO"
discussionCount: 0
---

# FapiaoGO  旨在为简化报销的繁琐过程而开发

发票解析、管理与打印一体化桌面应用。

## 项目概览

FapiaoGO 是一个基于 Electron 的桌面应用，支持 PDF/OFD/图片格式的发票智能解析、结构化字段提取、预览打印、批量重命名打包与 Excel 导出。

| 维度     | 技术栈                               |
| ------ | --------------------------------- |
| 桌面框架   | Electron43.4.0 + Node.js                |
| 前端     | React 19.2 + Vite8.2.1 + CSS（无 UI 框架）  |
| 后端 API | Flask (Python 3.12+)              |
| OCR 引擎 | RapidOCR + ONNX Runtime（PP-OCRv6） |
| 数据存储   | JSON oplog + 定期压缩                 |
| 打包分发   | electron-builder (NSIS)           |

## 架构

```
┌──────────────────────────────────────────────────────────────┐
│                     Electron Main Process                    │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌────────────┐ │
│  │ 窗口管理  │  │ IPC 通信  │  │ 打印服务   │  │ 文件对话框  │ │
│  └──────────┘  └──────────┘  └───────────┘  └────────────┘ │
│                     OsLauncherBridge → SumatraPDF             │
├──────────────────────────────────────────────────────────────┤
│                     Renderer (React SPA)                      │
│  ┌──────────┐  ┌────────────┐  ┌──────────┐  ┌───────────┐ │
│  │ 文件管理  │  │ 预览画布    │  │ 打印设置  │  │ 设置窗口   │ │
│  └──────────┘  └────────────┘…
