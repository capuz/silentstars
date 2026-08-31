---
repo: "oh-my-dsh/dsh-plugin-upgrade-skill"
name: "dsh-plugin-upgrade-skill"
description: "帮助插件自动随着dsh版本升级的skill"
readmeQualityOk: true
url: "https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 16
forks: 16
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 24
recentReleases: 1
createdAt: "2026-08-30T14:10:59Z"
lastCommitAt: "2026-08-31T10:00:03Z"
lastReleaseAt: "2026-08-31T03:45:13Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 55
maintainers: ["hikariming", "ccch1mneyyy", "yejiming"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a45f87fe336ab4770ddf6e2d1f9ba76babce367911602fea3ceb0fe77261ef9/oh-my-dsh/dsh-plugin-upgrade-skill"
---

# DSH Plugin Upgrade Skill

**简体中文** | [English](https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill/blob/HEAD/README.en.md)

**教 AI 帮你升级 dsh 插件的 skill**，社区共建。

[DSH（DeepSeek Harness）](https://github.com/deepseek-ai/deepseek-harness) 是一个"所有功能都以插件形式存在"的 AI 运行框架。麻烦在于：**dsh 每次发新版，老插件就可能启动不了**。本仓库做的事情就是把所有已知的坑写成 AI 看得懂的升级手册，让 AI（Claude Code、Codex、Gemini 等）帮你把插件安全迁到新版本。

## 这个仓库里有什么

- **30 张升级说明卡**：每张卡记录一个真实的坑——什么坏了、为什么坏、怎么修、信息来源是哪个版本。按版本排好序，从 0.1.1 一路到 0.1.2-alpha.2。
- **12 条通用对策**：有些坑和版本无关（比如"先备份再动手""新旧版本怎么共存"），这些写成了一份对策清单。
- **5 个 skill**：查升级、写新插件、测插件、发插件、对比两个版本的差别，各管一件事。
- **6 道考题（benchmark）**：用来测"AI 装了我们的 skill 之后到底会不会升级插件"，每道题都有自动判分。
- **两份验证报告**：我们在 docker 里真的装了两个版本的 dsh，验证了"按卡片做就能修好插件"。

## 快速开始

### 使用 skills CLI（推荐）

一条命令装到它支持的 agent：

```bash
npx skills add oh-my-dsh/dsh-plugin-upgrade-skill
```

### Claude Code

**Marketplace 安装**：

```bash
/plugin marketplace add oh-my-dsh/dsh-plugin-upgrade-skill
/plugin install dsh-plugin-upgrade-skill
```

> **SSH 错误？**如果没有配置 GitHub SSH 密钥，使用 HTTPS URL：
> ```bash
> /plugin marketplace add https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill.git
> /plugin install dsh-plugin-upgrade-skill
> ```
**本地/开发模式**：

```bash
git clone…
