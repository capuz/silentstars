---
repo: "hewzhew/dsh-agent-rp"
name: "dsh-agent-rp"
description: "SillyTavern migration and next-generation Agent RP for DSH"
readmeQualityOk: true
url: "https://github.com/hewzhew/dsh-agent-rp"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 45]
topics: ["agent", "dsh", "roleplay", "sillytavern"]
stars: 175
forks: 6
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T12:49:30Z"
lastCommitAt: "2026-08-23T04:08:16Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 26
maintainers: ["hewzhew"]
openGraphImageUrl: "https://opengraph.githubassets.com/d613c5bb8e7aacfce76d11c6fcef24000d09b4202562dd6d68f2d0503319bb4d/hewzhew/dsh-agent-rp"
---

# DSH Agent RP

DSH Agent RP 是运行在 DSH 上的原生角色扮演 Runtime。角色会直接作为顶层 Agent 行动；Persona、世界、提示策略、状态和记忆都是可以独立选择、复用与组合的一等资源，而不是某张角色卡的附属设置。

Character Card、Chat Completion 预设、World Info、MVU、EJS 和 Tavern Helper 是目前优先接入的内容格式。它们让已有创作可以进入这套 Runtime，但不会反过来定义它的能力边界。

## 现在可以体验什么

- 从统一的「开始游玩」入口选择角色对话或世界场景，再组合 Persona、世界、提示策略与开场；已知的外部资源权限会在启动前一次处理。
- 导入 PNG、JSON、CHARX 角色卡，以及 World Info、Chat Completion 预设和 SillyTavern JSONL 聊天记录；角色、Persona、世界与预设可以分别保存和复用。
- 连续游玩一段可回溯的故事：重新生成、续写、切换回复版本、修改输入并创建分支，同时保存明确状态与长期记忆。
- 运行更复杂的社区内容：MVU、同步 EJS、世界书正则、显示正则、轻量 HTML 前端及一部分 Tavern Helper 脚本会进入各自受限的兼容环境，单项失败不会拖垮整段会话。
- 在沉浸视图与调试视图之间切换，查看实际生效的提示、世界召回、状态和运行诊断。

角色本身就是顶层 Agent。这里没有额外的旁白、协调器或 Character 子代理，角色对话直接发生在普通会话中。

## 安装

需要 Node.js 22.19+ 或 24+，以及 pnpm 11。没有 pnpm 时可以先运行 `npm install --global pnpm@11`。无需克隆仓库，桌面端统一使用 pnpm 安装与启动：

```powershell
pnpm dlx --reporter append-only '@deepseek-ai/dsh@latest' plugin --profile web add 'github:hewzhew/dsh-agent-rp#main'
pnpm dlx --reporter append-only '@deepseek-ai/dsh@latest' --profile web
```

以后更新插件时运行：

```powershell
pnpm dlx --reporter append-only '@deepseek-ai/dsh@latest' plugin --profile web update '@dsh-external/dsh-agent-rp'
```

`--reporter append-only`…
