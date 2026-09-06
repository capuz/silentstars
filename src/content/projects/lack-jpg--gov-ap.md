---
repo: "lack-jpg/gov_AP"
name: "gov_AP"
description: "政务多智能体平台 v3.0 完成全部规划任务，正式进入里程碑节点。定位：面向政务「高效办成一件事」场景的企业级多智能体协同与治理平台。 技术栈：Python 3.12 + FastAPI + LangGraph 1.x + MCP + A2A + RAG + AgentOps。"
readmeQualityOk: true
url: "https://github.com/lack-jpg/gov_AP"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 120
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-29T06:28:20Z"
lastCommitAt: "2026-09-06T08:02:30Z"
lastReleaseAt: "2026-08-13T12:33:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 25
maintainers: ["lack-jpg"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3882dd78100b1b3ecc10f3166579b5b865dd86bc6a61143060301df5af22d7a/lack-jpg/gov_AP"
---

# government-agent-platform

# 政务多智能体协同与治理平台

> Enterprise Multi-Agent Platform based on LangGraph + MCP + A2A + AgentOps + RAG

> 注意：前端界面全部由AI生成，请勿直接复制。

> **最近更新（2026-09-02）**：前端视觉重构（政务企业级设计系统 Trust & Authority——Light Navy 配色 + Plus Jakarta Sans + Lucide 风格 SVG 图标，替代全部 emoji）+ 完整 Docker 全栈验证（11 服务 healthy）。详见 [更新日志](#20-更新日志)。

---

</p>

## 项目简介

`government-agent-platform` 是一个面向政务业务场景设计的企业级多智能体协同平台。

平台围绕“高效办成一件事”场景，通过：

* **LangGraph** 构建可控 Agent 工作流
* **MCP(Model Context Protocol)** 标准化 Agent 工具调用
* **A2A(Agent-to-Agent)** 实现跨域 Agent 协作
* **RAG** 提供政策知识增强能力
* **AgentOps** 实现 Agent 全生命周期治理

构建了一套：

> 可编排、可观测、可评测、可治理的企业级 Agent Runtime 平台。

---

# 1. 背景与问题

传统政务智能化系统通常存在：

## 1.1 单Agent能力不足

单个LLM Agent同时承担：

* 意图理解
* 政策查询
* 材料审核
* 流程执行

容易导致：

* 推理混乱
* 幻觉增加
* 难以维护

---

## 1.2 系统接口割裂

真实业务中存在：

```
市场监管系统

消防系统

不动产系统

公积金系统

统一办件系统
```

不同系统：

* 接口不同
* 数据隔离
* 权限复杂

---

## 1.3 Agent缺少治理

生产环境需要解决：

* Agent调用链追踪
* 工具调用审计
* Prompt管理
* 自动评测
* 安全控制

因此设计：

```
Multi-Agent
+
Agent Governance
+
Evaluation Platform
```

---

# 2. 核心能力

## Multi-Agent协同

平台包含多个领域Agent：

| Agent            | 职责                                       |
| ---------------- |…
