---
repo: "shibing624/agentica"
name: "agentica"
description: "One person, a team of agents. Multi-session CLI that collaborates across terminals; /goal keeps long tasks running; WeChat/WeCom/Feishu gateway lets you call them back when you walk away. Async Python SDK, persistent memory, self-evolving skills."
readmeQualityOk: true
url: "https://github.com/shibing624/agentica"
homepage: "https://shibing624.github.io/agentica/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent", "agents", "langchain", "llm", "multi-agent", "agentica", "agent-framework", "ai-agent", "cli", "mcp"]
stars: 351
forks: 49
openIssues: 1
closedIssues: 20
watchers: 10
contributors: 8
recentReleases: 0
createdAt: "2024-06-03T12:07:51Z"
lastCommitAt: "2026-09-03T08:12:46Z"
lastReleaseAt: "2025-12-21T14:30:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 40
maintainers: ["shibing624", "googio"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f5e676c80767c1fc174637a8caf318ce8b723e33288203f493f01a4f8e57017/shibing624/agentica"
---

</a>
</p>

<h1 align="center">Agentica</h1>

<h3 align="center"><a href="#桌面版">⬇️ Download Desktop App</a></h3>

</p>

## 为什么选 Agentica

### 1. 🏆 同一个模型，更准、更快、更省钱

工具面刻意收窄、接口保持底层，对 DeepSeek 等开放模型深度适配。和 OpenAI Codex 各跑同一个模型、同一批公开题目，正面对比：

</p>

**编程题全对、数据分析题准确率更高——而且快一倍、输入 token 少三分之二。** 复现命令、逐项指标与原始 `predictions.jsonl` 见 [评测页](https://shibing624.github.io/agentica/guides/benchmark)。

### 2. 🤝 一个会话是一个 agent，多个会话是一支队伍

一个终端会话就是一个可协作的 agent。进程内 `task` 拉临时 subagent，进程级 `delegate` 另起一整个 agent 去干独立的大活，跨终端 peer 消息让两个会话互相说话——都不需要额外部署任何东西。

### 3. 🧬 自进化，越用越强

跑完的经验自动编译成可跨会话复用的 `SKILL.md`；下次遇到同类任务，agent 读的是自己上次的结论，不是从零开始。流程见 [Skills 文档](https://shibing624.github.io/agentica/advanced/skills)。

### 4. 📱 人可以离开现场

微信 / 企微 / 飞书 / Telegram 直连本机 agent：`@会话名` 自己寻址，或者只说一句人话，让网关 agent 去指挥这台机器上的所有会话。

## 安装

```bash
pip install -U agentica
```

### 桌面版

窗口里就是同一套 Web UI，同一 `~/.agentica`，和 CLI / 浏览器混用没有区别。

> [!IMPORTANT]
> 当前构建**未签名**，系统可能拦第一次启动，按对应系统操作一次即可。机器上还没有 `agentica-gateway` 时，桌面版会在**第一次打开**时用 uv 安装一份托管 runtime（Python 3.12 + `agentica[gateway]`），放在 Application Support，不进 `~/.agentica`。已经 `pip install` 过的继续用你原来的。

<details>
<summary><b>🍎 macOS 提示「Agentica 已损坏，无法打开」</b></summary>

macOS…
