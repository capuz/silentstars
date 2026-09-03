---
repo: "Leihb/learn-agent-the-hard-way"
name: "learn-agent-the-hard-way"
description: "笨办法学 Agent：从 60 行代码到一个完整的 harness。Learn Agent the Hard Way — 中文电子书，全书 32 个练习已完结。"
readmeQualityOk: true
url: "https://github.com/Leihb/learn-agent-the-hard-way"
homepage: "https://leihb.github.io/learn-agent-the-hard-way/"
language: "Go"
languages: ["Go", "Python", "JavaScript"]
languagePcts: [34, 33, 32]
topics: ["agent", "ai-agent", "chinese", "ebook", "function-calling", "golang", "llm", "llm-agent", "mcp", "tutorial"]
stars: 32
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-31T04:30:54Z"
lastCommitAt: "2026-09-03T08:12:42Z"
lastReleaseAt: "2026-08-17T04:26:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["Leihb"]
openGraphImageUrl: "https://opengraph.githubassets.com/eacafdb565db556f7d7bdc308682be9db0bc68909c9d4232022cc3c98be176ea/Leihb/learn-agent-the-hard-way"
---

# 笨办法学 Agent · 亲手打造一个 harness

> 同系列第二本《[笨办法学 Agent · 用 LangGraph 上线](https://github.com/Leihb/langgraph-in-action)》
> 用框架把场景 agent 做出来、放到线上，不需要先读完这一本。

**从 60 行代码开始，亲手写出一个 agent。**

**agent = LLM + tool use。** 模型你改不了，循环只有几十行——一个 agent 和另一个 agent
的全部差别，都在工具的设计里。这本书带你从一次裸 HTTP 请求开始，把工具循环、权限系统、
上下文管理、skill、subagent、MCP、浏览器、沙箱一个个亲手写出来——你会发现它们本质上
都是同一件事：设计 tool。每个练习结束时，你手里的代码都能跑。

书中代码不是教学玩具：每一段都从一个真实生产 harness（[octo](https://github.com/open-octo/octo-agent)，
作者从零写的开源 agent）蒸馏而来。

## 📖 在线阅读

**https://leihb.github.io/learn-agent-the-hard-way/**

## 怎么读

- **跟着敲，不要复制粘贴。** 这是"the hard way"的全部含义。
- 你需要：Go 1.22+（或 Python 3.10+ / Node 18+，见下方"三种语言"）、
  任意一家模型服务商的 key（DeepSeek / Kimi / OpenAI 官方，
  或本机 Ollama——第一个练习起就支持，不花一分钱）。
- 每个练习的参考实现在 [`exercises/`](https://github.com/Leihb/learn-agent-the-hard-way/blob/HEAD/exercises/)，**卡住了再看**。

## 三种语言

代码以 Go 为母本，Python 和 JavaScript 版本正在逐章补齐。
凡是正文里出现语言切换标签的章节，三种语言都过了同一套真机验证
（DeepSeek + 本机 Ollama）；点一次标签，全书跟着你切换。
参考实现的位置：Go 在 `exercises/exNN/`，Python 和 JavaScript
在对应的 `exercises/exNN/python/` 和 `exercises/exNN/node/`。

## 目录

**全书已完结**：前言 + 32 个练习 + 后记，全部发布。

| 部 | 练习 |
|---|---|
| 前言 | 什么是 agent |
| Part 0 · 为什么要自己写一遍 | 0 |
| Part 1 · 最小对话 | 1-4…
