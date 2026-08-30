---
repo: "tianjiangqiji/nova-image-studio"
name: "nova-image-studio"
description: "自托管的 AI 图像生成工作台 · 自定义模型 · 多模式 · PWA · 实时任务 支持Agent模式，UI设计模式，工作台模式，无限画布，反推提示词，提示词广场，GIF生成。前后端任务机制轻量后端；三端兼容 UI：桌面端、平板端、移动端自适应布局"
readmeQualityOk: true
url: "https://github.com/tianjiangqiji/nova-image-studio"
homepage: "https://image.ccode.vip"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["banana", "gpt-image", "gpt-image-2", "image-editing", "image-generation", "nano-banana", "openai", "react", "tailwindcss", "typescript"]
stars: 366
forks: 83
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T03:50:26Z"
lastCommitAt: "2026-08-30T09:24:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 27
maintainers: ["tianjiangqiji", "zzhhxx", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f863f2864cdced728362d679c475a6fe0dcfa2fdcca295bdc73157324b186b3/tianjiangqiji/nova-image-studio"
---

# Nova Studio

**English** · [简体中文](https://github.com/tianjiangqiji/nova-image-studio/blob/HEAD/README.zh-CN.md)

**Self-hosted AI video/image generation workbench · bring your own models · multi-mode · PWA · live task updates**

</div>

---

## 📖 Overview

Nova Studio is an AI video/image generation workbench for individuals and small teams. The frontend is a Next.js 16 + React 19 static export (PWA); the backend is a small Node.js service (`server.js` + SQLite + WebSocket) that schedules tasks and proxies generation APIs.

**What the open-source edition gives you:**

- Image models and text models are configured separately, each with its own API key and base URL
- You define the model list and endpoints yourself; the backend routes by protocol and passes your parameters through
- All client configuration lives in the browser's localStorage
- Text models support Google (`generateContent`) and OpenAI (Responses protocol)
- **Video generation is fully plugin-based**: the host ships no upstream video protocol at all — capability comes from plugin packs

> Current version: **v3.3.0**

## 📚 Documentation

Everything lives under…
