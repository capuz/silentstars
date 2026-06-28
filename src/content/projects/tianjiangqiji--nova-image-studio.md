---
repo: "tianjiangqiji/nova-image-studio"
name: "nova-image-studio"
description: "自托管的 AI 图像生成工作台 · 自定义模型 · 多模式 · PWA · 实时任务 支持Agent模式，工作台模式，无限画布，反推提示词，提示词广场，GIF生成。前后端任务机制轻量后端；三端兼容 UI：桌面端、平板端、移动端自适应布局"
url: "https://github.com/tianjiangqiji/nova-image-studio"
homepage: "https://image.ccode.vip"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["banana", "gpt-image", "gpt-image-2", "image-editing", "image-generation", "nano-banana", "openai", "react", "tailwindcss", "typescript"]
stars: 95
forks: 25
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-21T03:50:26Z"
lastCommitAt: "2026-06-28T03:11:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 26
maintainers: ["tianjiangqiji"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb9997abfe33263a7150204f015b7b25ca8362818ed3fd3da0a8bd8ce567739/tianjiangqiji/nova-image-studio"
---

# Nova Image Studio

**自托管的 AI 图像生成工作台 · 自定义模型 · 多模式 · PWA · 实时任务**

</div>

---

## 📖 简介

Nova Image Studio（简称 Nova Image）是一个面向个人/团队的 AI 图像生成工作台。前端使用 Next.js 16 + React 19 静态导出（PWA），后端是轻量 Node.js 服务（`server.js` + SQLite + WebSocket），统一调度任务并代理图像生成 API。

**开源版特性：**
- 支持分别配置图片模型与文本模型，模型级独立保存 API Key 与 Base URL
- 用户自定义模型列表和 API 端点，后端按协议路由并透传已配置参数
- 所有配置存储在浏览器 localStorage
- 文字模型支持 Google（generateContent）和 OpenAI（Response 协议）

> 当前版本：**v3.1.1**

## 💎 赞助商

期待您的赞助

---

## 🖼️ UI 预览

### 生图工作台

| 宽屏 | 窄屏 | 手机版 |
|:---:|:---:|:---:|
|  |  |  |

### Agent 模式

| 询问 | 生成 |
|:---:|:---:|
|  |  |

### GIF 生成

| 生成 | 微调 |
|:---:|:---:|
|  |  |

### 无限画布

| 预览 | 编辑 |
|:---:|:---:|
|  |  |

### 其他功能

| 反推提示词 | 提示词广场 | 我的素材 | 设置 |
|:---:|:---:|:---:|:---:|
|  |  |  |  |

---

## ✨ 功能特性

### 五大工作模式

| 模式 | 入口 | 简介 |
| --- | --- | --- |
| 🎨 文本生图 | `TextToImageForm` | 纯文字提示词生成图像，支持多图并行 |
| 🖼️ 图生图 | `ImageToImageForm` | 上传参考图，编辑/转换/风格化 |
| 🤖 Agent 智能体 | `AgentChatWorkspace` | 多轮对话式生成：聊天 → 方案 → 出图，支持 vision 描述、联网搜索、reasoning |
| 🔍 反推提示词 | `ReversePromptForm` | 上传图片流式反推提示词（支持所有已配置的文字模型） |
| 🎬 动图生成 | `GifGenerationWorkspace` | 多帧生图 + 网格拼合，浏览器端编码 GIF（`gifenc`） |

### 提示词广场

`PROMPT_GALLERY_MODE`…
