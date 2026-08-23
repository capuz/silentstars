---
repo: "fuzhengwei/WaLiOffice"
name: "WaLiOffice"
description: "WaLiOffice - 在线办公系统（docx、ppt、draw.io、excel、图像、视频）"
readmeQualityOk: true
url: "https://github.com/fuzhengwei/WaLiOffice"
homepage: "https://walioffice.xiaofuge.cn/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [54, 46]
stars: 24
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T02:31:54Z"
lastCommitAt: "2026-08-23T04:08:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["fuzhengwei"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eaba2ce4fbc7226c74f32fa1a9e5c99fddfee166fd1280562517a37b69536a0/fuzhengwei/WaLiOffice"
---

# WaLiOffice

> Web 端 AI Agent 智能办公平台 — 通过自然语言对话，一键生成 PPT、文档、表格、流程图、图表、图片和视频。

WaLiOffice 将 AI Agent 能力与办公文档生成深度结合：用户在对话中描述需求，Agent 自动拆解任务、调用工具、生成产物，全程 SSE 流式响应，实时展示思考和生成过程。生产部署只需一个 Rust 二进制（前端静态资源内嵌），开箱即用。

你也可以选择安装 Deepseek Harness Plugin [https://github.com/fuzhengwei/walioffice-dsh-plugin](https://github.com/fuzhengwei/walioffice-dsh-plugin)

## ✨ 功能特性

- **AI 对话驱动**：基于 ReAct 循环的 Agent 引擎，支持多轮对话、上下文压缩、自动工具编排
- **PPT 生成**：大纲规划 → 内容填充 → 视觉设计，生成可预览的幻灯片
- **文档生成**：支持报告 / PRD / 计划等多种文档类型，可导出 `.docx`
- **表格生成**：结构化数据表格，可导出 `.xlsx`
- **图表生成**：基于数据自动生成可视化图表
- **流程图生成**：输出 draw.io 格式 XML，支持在线编辑
- **图片生成**：调用文生图模型，生成高质量图片
- **视频生成**：调用文生视频模型，远程不可用时本地 `ffmpeg` 兜底合成 MP4
- **联网搜索**：支持 SearXNG / DuckDuckGo 多搜索源，Agent 可主动检索实时信息
- **文件解析**：支持上传文件内容提取与 OCR 识别，作为对话上下文
- **多模型切换**：文本 / 图片 / 视频各自独立配置模型列表，前端设置页可实时切换
- **用户认证**：JWT 认证 + 公众号验证码登录，支持注册和登录验证码
- **单一二进制部署**：Rust + rust-embed，前端嵌入后端，一个二进制即可启动全部服务
- **Docker 一键部署**：多阶段构建，内置国内镜像加速

## 🏗 技术栈

| 层 | 技术 | 说明 |
|---|---|---|
| 后端框架 | Rust + axum + tokio | 高性能异步 Web 框架 |
| 前端框架 | React 18 + TypeScript + Vite | SPA，构建后嵌入 Rust 二进制 |
| 样式 | TailwindCSS | 原子化 CSS |
| 状态管理 | Zustand | 轻量级状态管理 |
| 数据库 | SQLite（嵌入式） | 零配置，可选 MySQL |
| LLM 接口 |…
