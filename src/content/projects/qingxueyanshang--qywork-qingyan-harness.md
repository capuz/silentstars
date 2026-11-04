---
repo: "qingxueyanshang/qywork-qingyan-harness"
name: "qywork-qingyan-harness"
description: "Self-developed lightweight Harness kernel for customizing Agents in vertical domains"
originalDescription: "自研轻量级 Harness 内核 可用于垂直领域 Agent 定制"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qingxueyanshang/qywork-qingyan-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-27T10:43:30Z"
lastCommitAt: "2026-11-04T08:03:36Z"
lastReleaseAt: "2026-09-09T10:53:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["qingxueyanshang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d4c4a49ff65167739a2cd9209cdbf2e3149af9f894ade96100225e4a8904394/qingxueyanshang/qywork-qingyan-harness"
---

# qywork

**A lightweight open-source Agent Harness with multi-model access and multi-agent collaboration.**

Agent = Model + Harness. The model handles reasoning. qywork provides tool execution, context management, memory, skills, and task orchestration, and integrates them into a local workbench. You can use it directly for programming, or combine domain knowledge, tools, and roles to build your own Agent.

[Download for Windows / macOS / Linux](https://github.com/qingxueyanshang/qywork-qingyan-harness/releases/latest) ·
[Quick Start](#快速开始) · [Run from Source](#从源码启动) · [Documentation](https://github.com/qingxueyanshang/qywork-qingyan-harness/blob/HEAD/docs/INDEX.md)

## Core Features

### Multi-model access, freely combine models and services

- Supports **Anthropic Messages, OpenAI Chat Completions, and OpenAI Responses** interfaces. You can connect to official services, relay services, and local model services that use compatible protocols.
- Configure multiple services and models at the same time and switch between them within a session. Custom model IDs are supported, so you are not limited to the built-in model catalog.
- Choose a thinking level based on model capability.…
