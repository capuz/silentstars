---
repo: "yingjian666/dsh-zh-thinking"
name: "dsh-zh-thinking"
description: "DeepSeek Harness (dsh) plugin: injects a system prompt that forces the agent's chain-of-thought, planning, and tool reasoning to use Simplified Chinese throughout, preventing Chinese thinking from drifting into English. Zero external dependencies; install by linking any local directory."
originalDescription: "DeepSeek Harness (dsh) 插件：注入系统提示词，强制 Agent 的思维链 / 规划 / 工具推理全程使用简体中文，防止中文思考漂移为英文。零外部依赖，任意本地目录 link 即装。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yingjian666/dsh-zh-thinking"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent", "chain-of-thought", "chinese", "deepseek-harness", "deepseek-harness-plugin", "dsh", "dsh-plugin", "llm", "simplified-chinese", "thinking"]
stars: 22
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-09-06T14:44:14Z"
lastCommitAt: "2026-11-16T11:56:26Z"
lastReleaseAt: "2026-11-15T13:44:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 21
maintainers: ["yingjian666"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d710eddc250ccc389eed02ef3dd34b9d05f75f212e9c26eb1d5e1f38e95d814/yingjian666/dsh-zh-thinking"
---

# dsh-zh-thinking

⭐ **If this plugin helped you, feel free to [Star](https://github.com/yingjian666/dsh-zh-thinking) it**. A star is the most direct encouragement for the author.

> **Project status**: This is a personal learning experiment. The author **does not commit to ongoing maintenance**.
> If a future DSH kernel upgrade breaks it, feel free to fork and modify it yourself.
> The logic lives in a single file, `lib/index.js`. All it does is register a requirement to "think in Simplified Chinese" in the system prompt.
>
> 📝 **The causes and fixes for past "kernel upgrade breaks it" incidents are recorded in [CHANGELOG.md](https://github.com/yingjian666/dsh-zh-thinking/blob/HEAD/CHANGELOG.md)**,
> including the full analysis of the silent disablement in 0.2.0. If your plugin shows the same symptoms, you can compare against it directly.

A host plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) that keeps the agent's **internal thinking process** (chain-of-thought, step-by-step planning, reasoning before and after tool calls, and self-review) always in **Simplified Chinese**.

> **Disclaimer**: This project is inspired by…
