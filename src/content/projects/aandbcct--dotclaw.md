---
repo: "aandbcct/dotClaw"
name: "dotClaw"
description: "A lightweight agent harness framework for learning and practicing personal agent assistant architecture design, based on the ReAct architecture, connecting clients and underlying components through an intermediate routing layer, achieving multi-model adaptation, multi-platform adaptation, and session management."
originalDescription: "一个轻量级agent harness框架，用于学习与实践个人agent助手架构设计，基于ReAct架构，由中间路由层连接客户端与底层组件，实现了多模型适配、多平台适配和会话管理。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/aandbcct/dotClaw"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "agent-framework"]
stars: 8
forks: 0
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-30T10:28:46Z"
lastCommitAt: "2026-07-21T06:12:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 39
maintainers: ["aandbcct"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b4e2d5e81094c1087be93beae9ccd4945535884b4d75588797961ef73a8e34b/aandbcct/dotClaw"
---

# 🐾 dotClaw

**A lightweight Agent Harness framework built with declarative Agents, recoverable Runtime, and pluggable infrastructure**

Declarative roles · Model routing fault tolerance · Tools and MCP · Context and memory · Recoverable execution · Runtime observation · Multi-Agent collaboration

</div>

---

## What is dotClaw

dotClaw is a Python framework for AI Agent application development. It provides role declaration for Agents, model and tool integration, context and memory construction, as well as a reliable execution base for running, pausing, resuming, auditing, and delegating a request.

The project divides the Agent system into two categories of concerns:

- **Capability Plane** answers "What can the Agent do, what should it see at this moment": declarative roles, model routing, tools and MCP, Skills, Memory, Workspace;
- **Execution Plane** answers "How to reliably complete this request": Session, Runtime v4, execution storage, approval, cancellation, and multi-Agent delegation.

Runtime v4 is the key execution base of dotClaw, not the entirety of the project. It processes each user input as an independent `AgentRun`, allowing the running context, state machine,…
