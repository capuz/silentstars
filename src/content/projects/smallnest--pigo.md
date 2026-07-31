---
repo: "smallnest/pigo"
name: "pigo"
description: "pi agent in Golang"
readmeQualityOk: true
url: "https://github.com/smallnest/pigo"
homepage: "https://colobu.com/pigo/"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 260
forks: 23
openIssues: 6
closedIssues: 227
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-09T09:28:03Z"
lastCommitAt: "2026-07-31T06:29:54Z"
lastReleaseAt: "2026-07-27T08:17:45Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["smallnest"]
openGraphImageUrl: "https://opengraph.githubassets.com/3728478e563f0468be2765e4ea228d8a8f4d3c239ebb5268269136c053a02548/smallnest/pigo"
---

# pigo

使用 Go 复刻的 [pi](https://pi.dev) AI Agent —— 一个面向命令行的编码智能体，同时支持**无头（headless）脚本模式**与**交互式 REPL**。

pigo 可以读写文件、执行命令、检索代码、抓取网页，并借助大模型完成从"读懂需求"到"改好代码"的闭环。它兼容 OpenAI / Anthropic 等多种协议网关，支持会话续跑、项目信任、技能（Skills）、插件与包管理。

> 模块路径：`github.com/smallnest/pigo` · Go 1.27+

> 📖 配套电子书《用 Go 编写 pi Agent》：[write_pi_agent_in_go.pdf](https://github.com/smallnest/ebooks/blob/master/write_pi_agent_in_go.pdf)

---

## 目录

- [特性一览](#特性一览)
- [架构总览](#架构总览)
- [安装与构建](#安装与构建)
- [快速开始](#快速开始)
- [命令行参数](#命令行参数)
- [模型与 Provider](#模型与-provider)
- [内置工具](#内置工具)
- [运行模式](#运行模式)
- [系统提示词组装](#系统提示词组装)
- [项目信任](#项目信任)
- [技能 Skills](#技能-skills)
- [提示词模板](#提示词模板)
- [插件](#插件)
- [Hooks](#hooks)
- [包管理](#包管理)
- [发布release](#发布release)
- [目录与环境变量](#目录与环境变量)
- [安全说明](#安全说明)

---

## 特性一览

- **两种模式**：无头 `-p` 一次性执行（适合脚本 / CI），或直接进入交互式 REPL。
- **多 Provider**：OpenRouter（默认）、本地 Ollama、NVIDIA NIM、Anthropic、任意 OpenAI 兼容端点。
- **内置工具集**：`read` / `write` / `edit` / `grep` / `find` / `bash` / `todo` / `webfetch`。
- **会话续跑**：`--list-sessions` / `--resume` / `--continue`，无头与 REPL 均可续跑。
- **stream-json 输出**：逐行 JSON 事件，首个事件携带 `session_id`，便于调用方关联。
- **系统提示词分层组装**：base 指令 + 环境块 + `AGENTS.md`（general→specific）+…
