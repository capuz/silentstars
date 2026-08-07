---
repo: "sev7n4/lnkpi"
name: "lnkpi"
description: "超创平台 - AI 无限画布创作工作流，对标 NeoWOW 产品能力"
readmeQualityOk: true
url: "https://github.com/sev7n4/lnkpi"
homepage: "https://lnkpi-web.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python", "Vue"]
languagePcts: [41, 32, 24]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-09T05:39:07Z"
lastCommitAt: "2026-08-07T05:14:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 58
maintainers: ["sev7n4"]
openGraphImageUrl: "https://opengraph.githubassets.com/61f967a10cea05a6e7b9fe63b5ffa4d5ab5ceb761d7d4bfb40a0220370656698/sev7n4/lnkpi"
---

# 超创平台 (lnkpi)

> AI 无限画布创作工作流平台 — 深度对标 NeoWOW，AI Native Agent 全面驱动画布。

## 核心架构

```
用户自然语言 → Agent 对话 (SSE) → Canvas Tools → 画布实时更新
                     ↓
              OpenAI / 规则引擎
                     ↓
         create_shot / generate_image / generate_video / ...
```

## 功能概览

| 模块 | 状态 | 对标 NeoWOW |
|------|------|------------|
| 创作启动器 | ✅ | `/workflow` |
| 无限画布 + 分镜节点 | ✅ | `WorkflowCanvas` |
| **Agent 驱动画布** | ✅ | `/agent/chat/conversation` |
| Canvas API (6 端点) | ✅ | `/agent/canvas/*` |
| 图像生成 Provider | ✅ | OpenAI / Placeholder 降级 |
| Shot/Material 持久化 | ✅ | Prisma + 轮询 |
| PlayCanvas POC | ✅ | 3D 画布评估模式 |
| @mention 输入 | ✅ | `MentionInput.vue` |
| 语音输入 | ✅ | Web Speech API |
| Agent 工具链 (8 tools) | ✅ | Canvas Domain API |
| SSE 流式对话 | ✅ | 流式 Agent 回复 |
| 三栏布局 (会话/画布/Agent) | ✅ | SessionSelector + Canvas + Chat |
| 底部生成栏 + 模型选择 | ✅ | GenerationBar |
| 手机验证码登录 | ✅ | LoginDialog |
| 社区作品流 | ✅ | NeoTV |

## 技术栈

- **前端**: Vue 3 + TypeScript + Vite + Tailwind + Vue Flow
- **Agent**: `@lnkpi/agent` — 原生 Tool-Calling Agent 框架
- **后端**: NestJS + Prisma + SQLite + SSE
- **对标调研**: [NeoWOW 深度调研](https://github.com/sev7n4/lnkpi/blob/HEAD/docs/NEOWOW_RESEARCH.md)

## 快速开始

```bash…
