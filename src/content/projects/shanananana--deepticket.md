---
repo: "shanananana/deepticket"
name: "deepticket"
description: "支持对接内部系统的 AI 排障工作台：通过 HTTP API / Webhook 接入工单与告警系统，串联代码、日志、配置和 Agent，并提供面向产品、运营、客服的 Web 自助分析页面。"
readmeQualityOk: true
url: "https://github.com/shanananana/deepticket"
language: "Python"
languages: ["Python"]
languagePcts: [64]
topics: ["aiops", "incident-response", "llm-agent", "mcp", "on-call", "openhands", "python", "root-cause-analysis", "sre", "ticket-system"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-01T06:35:17Z"
lastCommitAt: "2026-08-23T04:09:12Z"
lastReleaseAt: "2026-08-21T15:16:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["shanananana"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ebb8d009332309398730bdf56e4d2a58c2abbc87552220779263009ae63ec72/shanananana/deepticket"
---

</p>

  ·
  ·
  ·
</p>

</p>

<h1 align="center">DeepTicket</h1>

  ·
  ·
  ·
  ·
  ·
</p>

---

## 它是什么

DeepTicket 是一层部署在团队自己环境里的 **AI 工单排障与 Agent 编排平台**。

它提供统一的 HTTP Ingress API 和可配置 Webhook：内部工单、告警、监控平台或自研系统，只要能够发送或接收 HTTP 请求，就可以按统一事件格式接入。DeepTicket 当前提供的是通用接入能力，不内置某个具体厂商的专用适配器。

进入 DeepTicket 的工单会按项目路由到对应的 Git 仓库、日志查询 Skill、配置中心 MCP 和其他内部工具。OpenHands Agent 完成多轮分析后，DeepTicket 将摘要、证据、影响面、根因假设和建议通过 Webhook 写回原工单系统，也可以选择只存储、不回调。

一句话概括：**DeepTicket 让内部工单从“人工转述问题”，变成“自动带着项目上下文完成第一轮排查”。**

---

## 演示

  <video src="https://github.com/user-attachments/assets/3bc7b913-f3a9-49c5-bbe7-1c15f1a0381b" width="720" controls autoplay muted loop playsinline></video>
</p>

---

## 为什么是 DeepTicket

很多问题并不需要立刻叫研发，却也不是一句“建议检查日志”就能结束。

DeepTicket 把问题分析所需的上下文放到同一个工作台里：项目源码、运行日志、配置项、内部工具和原始工单。客服、运营、产品与研发可以围绕同一份上下文协作。Agent 先读取事实，再给出问题原因、影响范围和处理建议。

> **从“问一个 AI”到“完成一次排查”。**
>
> 重点不是让对话更长，而是让每个结论都更接近证据。

### 它适合谁

- 希望由业务团队自己部署、自己接入内网数据的团队
- 需要让产品、运营、QA 或值班同学先完成一轮事实核查的团队
- 已经有 Git、日志平台、配置中心或 ITSM，但缺少统一 Agent 入口的团队

### 它不是什么

DeepTicket 不是公司级 Copilot 的替代品，也不是把所有文档灌进向量库的纯 RAG。它更像一层面向具体项目的“排查与回写编排”：接入真实工具，限定项目边界，让 Agent 对着可验证的上下文工作。

---

## 核心能力

### 01 · 接入真实上下文

- **Git 知识库同步**：将一个或多个项目仓库同步到 Agent…
