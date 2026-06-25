---
repo: "donghzs/vermes"
name: "vermes"
description: "Vermes - 开源、可自托管开箱即用的 AI Agent 解决方案"
url: "https://github.com/donghzs/vermes"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 33
recentReleases: 10
createdAt: "2026-05-22T14:05:50Z"
lastCommitAt: "2026-06-25T01:32:37Z"
lastReleaseAt: "2026-05-27T10:23:13Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 60
undervaluedScore: 42
maintainers: ["teknium1", "kshitijk4poor", "xxxigm"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d50dbfdc6ba6d69fac289740b751413720c595740e04ee4be85f55efe542313/donghzs/vermes"
---

# Vermes 🚀

> 你的 AI，即刻启程 — 开箱即用的中文 AI Agent

Vermes 基于官方 [Hermes Agent](https://github.com/NousResearch/hermes-agent) 引擎，
融合 [QClaw](https://skillhub.cn) 技能生态，为中文用户提供开箱即用的 AI Agent 体验。

## ✨ 特性

- 🧠 **自进化 Agent** — 从经验中学习，创建和改进技能
- 🛠 **30+ 内置技能** — 文档、搜索、邮件、天气、代码...
- 🏪 **技能商店** — 随时通过 Skillhub 扩展能力
- 🌐 **多模型支持** — DeepSeek、Qwen、OpenAI、Ollama...
- 💻 **全平台** — macOS / Windows / Linux
- 🇨🇳 **中文优先** — 默认中文交互，预置国内模型

## 📦 安装

### macOS / Linux
```bash
curl -fsSL https://install.vbit.top | bash
```

### pip
```bash
pip install vermes
vermes setup
vermes
```

## 🚀 快速开始

1. `vermes setup` — 选择模型和提供商（推荐 DeepSeek）
2. `vermes` — 开始对话！

## 🏪 技能商店

```bash
vermes skills search 天气   # 搜索技能
vermes skills install weather  # 安装技能
```

或直接在对话中让 Vermes 帮你安装。

## 📁 配置

| 文件 | 路径 | 说明 |
|------|------|------|
| 配置 | `~/.vermes/config.yaml` | 模型、工具、Agent 设置 |
| 环境 | `~/.vermes/.env` | API Keys（安全存储） |
| 技能 | `~/.vermes/skills/` | 自定义技能目录 |
| 人格 | `~/.vermes/SOUL.md` | Agent 个性定义 |

## 🙏 致谢

- [Hermes Agent](https://github.com/NousResearch/hermes-agent) by Nous Research — 核心引擎
- [QClaw / Skillhub](https://skillhub.cn) — 技能生态

## 📄 许可

MIT License
