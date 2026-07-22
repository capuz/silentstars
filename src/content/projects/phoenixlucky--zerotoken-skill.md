---
repo: "phoenixlucky/zerotoken-skill"
name: "zerotoken-skill"
description: "⚡ ZeroToken Skill — 让 Agent 用最少的 token 做最准的事。提示词纪律规范：压缩无效上下文、无效解释、无效工具调用、无效输出，准确性不降。"
readmeQualityOk: true
url: "https://github.com/phoenixlucky/zerotoken-skill"
homepage: "https://clawhub.ai/phoenixlucky/zerotoken-skill"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent-discipline", "ai-workflow", "context-optimization", "prompt-engineering", "token-budget", "token-efficient", "concise-output", "zerotoken"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-27T07:37:37Z"
lastCommitAt: "2026-07-22T06:10:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 35
maintainers: ["phoenixlucky"]
openGraphImageUrl: "https://opengraph.githubassets.com/54df2069c72fbb149b6512dd803955cff33e07ddd1eae3da004f314e5165782f/phoenixlucky/zerotoken-skill"
---

# ⚡ ZeroToken Skill

**让 Agent 用最少的 token 做最准的事**

> 💬 **用不完，根本用不完，妈妈再也不用担心我缺 token 了。**

</div>

> **ZeroToken Skill** 是一套为 AI Agent 设计的**提示词纪律规范**——在不降低回答准确性的前提下，压缩无效上下文、无效解释、无效工具调用和无效输出，从而大幅降低 token 消耗和响应延迟。
>
> 它解决的核心问题是：Agent 在任务中经常过度读取、过度思考、过度输出，导致一次对话消耗成千上万不必要的 token。ZeroToken Skill 通过一套可执行的**模式决策表 + 行为约束 + 工具链策略**，让 Agent 在每一个任务环节都有明确的"省 token 行为准则"。
>
> 🎯 **目标：** 用最精准的提示，做最少的往返，产最精炼的结果。
>
> ✅ **适用于：** Reasonix / Codex CLI / OpenCode / Hermes / Cline 等主流 Agent 工具。一次学习，全平台受益。

---

## 🔌 平台集成指南

### 方式一

请依次阅读并安装以下 Skill。

ZeroToken Skill — phoenixlucky，Token 高效约束：最少 token 和精准提示完成任务，减少无效输出  
地址：https://github.com/phoenixlucky/zerotoken-skill

请根据上面每个 Skill 的「安装指令」完成安装。

### 方式二：从远程 Skill 仓库引用（推荐，始终获取最新版本）
```bash
install-source --source https://clawhub.ai/phoenixlucky/zerotoken-skill
```

### 方式三
```bash
安装这个技能  https://clawhub.ai/phoenixlucky/zerotoken-skill
```

以下是 ZeroToken Skill 对五种主流 Agent 工具的具体强化方向。

---

### ⚡ Reasonix

| 强化维度 | 说明 |
|---------|------|
| **🧠 原生 Skill 引擎** | Reasonix 的 Skill 机制原生支持本规范，载入即用，无需额外配置 |
| **🎯 自动模式匹配** | 根据请求特征自动选择六种任务模式之一（A-F），无需手动指定 |
| **🔧 工具链优化** | 按模式限制工具调用范围（简单问答不调工具、多文件任务分批加载） |
| **📄 输出规范** | 结论先行、不复述、要点+位置 等输出模板内嵌为默认行为 |
|…
