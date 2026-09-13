---
repo: "oh-my-dsh/dsh-plugin-upgrade-skill"
name: "dsh-plugin-upgrade-skill"
description: "帮助插件自动随着dsh版本升级的skill"
readmeQualityOk: true
url: "https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [47, 44]
stars: 127
forks: 28
openIssues: 8
closedIssues: 11
watchers: 0
contributors: 35
recentReleases: 1
createdAt: "2026-08-30T14:10:59Z"
lastCommitAt: "2026-09-13T08:26:17Z"
lastReleaseAt: "2026-08-31T03:45:13Z"
status: "newborn"
tags: []
healthScore: 91
undervaluedScore: 30
maintainers: ["hikariming", "lhh010", "yejiming"]
openGraphImageUrl: "https://opengraph.githubassets.com/338339719827f423d691ca845104655daed07e433e7980c3a1e269219042d83e/oh-my-dsh/dsh-plugin-upgrade-skill"
---

# DSH Plugin Upgrade Skill

**简体中文** | [English](https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill/blob/HEAD/README.en.md)

**教 AI 帮你升级 dsh 插件的 skill**，社区共建。

[DSH（DeepSeek Harness）](https://github.com/deepseek-ai/deepseek-harness) 是一个"所有功能都以插件形式存在"的 AI 运行框架。麻烦在于：**dsh 每次发新版，老插件就可能启动不了**。本仓库做的事情就是把所有已知的坑写成 AI 看得懂的升级手册，让 AI（Claude Code、Codex、Gemini 等）帮你把插件安全迁到新版本。

## 这个仓库里有什么

- **127 张升级说明卡**：每张卡记录一个真实的坑——什么坏了、为什么坏、怎么修、信息来源是哪个版本。按版本排好序，从 0.1.0-rc.8 一路到 0.1.5-rc.2（alpha.5→rc.1 无插件面变更，0 张卡；alpha.2→alpha.3 有 2 张卡（1 张新增能力卡 + SQLite 移除回填）；alpha.3→alpha.4 有 6 张；rc.8→rc.1 为 9 张草稿卡；0.1.2-rc.1→0.1.3-alpha.1 有 8 张（2 张 session-log 实测 + 1 张 Windows 安装 fs-ext 实测 + 3 张钉 tag + A1-07/08 源码宿主配方与运行时复核）、0.1.3-alpha.1→0.1.3-alpha.2 有 5 张草稿卡、0.1.3-alpha.2→0.1.5-alpha.1 有 20 张草稿卡、0.1.5-alpha.1→0.1.5-alpha.2 有 24 张草稿卡（其中 12 张覆盖客户端与打包面）、0.1.5-alpha.2→0.1.5-rc.1 有 5 张草稿卡、0.1.5-rc.1→0.1.5-rc.2 有 6 张草稿卡）。
- **13 条通用对策**：有些坑和版本无关（比如"先备份再动手""新旧版本怎么共存"），这些写成了一份对策清单。
- **9 个 skill**：一个统一工作流负责选择和编排，另外八个分别负责查升级、写新插件、测插件、发插件、对比两个版本的差别、排查运行时故障、给轻量插件接入重依赖，以及把插件升级经验提取成 benchmark 考题。
- **56 道考题（benchmark）**：用来测"AI 装了我们的 skill 之后到底会不会升级插件"，每道题都有自动判分；其中包含 dsh-web v0.3.8 → v0.3.9 和 dsh-data-agent v0.1.3 → v0.1.4…
