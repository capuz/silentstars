---
repo: "NexusVAI/NexusV"
name: "NexusV"
description: "这不是一个模板，这是一个有灵魂的作品。--复刻OpenAI.com"
readmeQualityOk: true
url: "https://github.com/NexusVAI/NexusV"
homepage: "https://www.nexusvai.xyz"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [67, 25]
stars: 20
forks: 3
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-02T06:11:54Z"
lastCommitAt: "2026-08-18T04:09:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["NexusVAI", "devin-ai-integration[bot]", "MonkeyCode-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/651937c400e8df921fa468be031b951bd982f9beb6c3ebb126957f90433a23aa/NexusVAI/NexusV"
---

</p>

<h1 align="center">NexusV</h1>

  聚合主流大语言模型的 AI 对话平台 — 一个界面，接入 30+ 模型，自由切换、横向对比。
</p>

</p>

---

## 简介

NexusV 是一个多模型 AI 对话平台，为用户提供统一的多模型对话体验。通过一个简洁的 Web 界面，您可以同时访问来自不同供应商的数十个大语言模型，在同一会话中切换模型、横向比较输出质量。

> **开源范围说明**
>
> 本仓库**仅开源前端代码**（静态页面、聊天界面、API 平台界面等全部浏览器端代码）。
> 后端（Supabase Edge Functions、网关、路由、鉴权、计费等服务端代码）为**闭源**，不包含在本仓库中。
> 前端中出现的 `__SUPABASE_ANON_KEY__`、Turnstile site key 等均为设计上公开的客户端公钥，不构成敏感信息。

**当前接入的上游模型供应方：**

阿里云百炼 · 魔搭社区 · 智谱 · 月之暗面 · Mistral · Google Gemini · 星火 · 商汤 · 以及更多第三方中转服务

## 功能特性

- **多模型对话** — 在同一界面与 30+ 个模型对话，支持文本、图像理解、代码生成
- **模型切换** — 会话中途切换模型，横向比较不同模型的回答质量
- **竞技场模式** — 匿名对比两个模型的输出，投票选出更优回答
- **图像生成** — 调用 DALL·E、Grok Imagine 等模型生成图像
- **语音朗读** — 基于小米 MiMo TTS 的流式语音合成，支持多种音色预设
- **OpenAI 兼容 API** — 为开发者提供标准 `/v1/chat/completions` 接口，一个 API Key 访问所有模型
- **对话历史** — 云端保存、随时回查、支持搜索
- **主题切换** — 暖色 / 亮色 / 深蓝三套主题
- **多语言** — 中文 / 英文界面

## 技术架构

```
┌──────────────────────────────────────────────────┐
│  前端（本仓库 · 开源）                            │
│  GitHub Pages 静态托管                            │
│  index.html · chat/ · js/ · css/                 │
└──────────────┬───────────────────────────────────┘
               │ HTTPS（经 Cloudflare 边缘网关反代）…
