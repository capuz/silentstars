---
repo: "FuRongJun-1999/dsh-memory"
name: "dsh-memory"
description: "白箱AGI架构探索：元认知（自我认知循环）、持续学习（知识飞轮）、世界模型（条件空间+语义时空图）、自我改进（自举纪律）、零LLM白箱管线与可审计信任护栏。"
readmeQualityOk: true
url: "https://github.com/FuRongJun-1999/dsh-memory"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["dsh-plugin", "mcp", "multi-agent", "knowledge-graph", "rag", "persistent-memory", "spatiotemporal-graph-neural-network", "ai-agent-framework", "agentic-ai", "guardrails"]
stars: 219
forks: 15
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-14T13:28:26Z"
lastCommitAt: "2026-09-18T08:27:33Z"
lastReleaseAt: "2026-09-16T11:48:27Z"
status: "newborn"
tags: []
healthScore: 98
undervaluedScore: 32
maintainers: ["FuRongJun-1999"]
openGraphImageUrl: "https://opengraph.githubassets.com/cce4ba7e9c29edd41828a8c0f14779a03ba07ee878f5c7f50178591843914d70/FuRongJun-1999/dsh-memory"
discussionCount: 1
---

# 让 AI Agent 拥有不可遗忘的记忆

**灵枢（Lingshu）** —— 高性能 · 无幻觉 · 多智能体适用的长期记忆系统（v0.4.5）

> **一句话**：让 AI Agent 拥有跨会话的长期记忆——对话自动沉淀为纯文本 md 认知图，
> 规则化检索引擎决定「记什么、取什么」，全过程可审计、结果可复现。

**定位**：为追求高性能、无幻觉、多智能体适用、轻松使用的开发者打造——三步接入，装完即用，无需理解任何理论。

**形态**：跨 harness 的记忆基础设施——大脑（`md_cg/`）即标准 stdio MCP server，任何支持 MCP 的 AI Agent 可直接接入，不与任何单一 Agent 框架绑定。

---

## ✨ 核心亮点

- **🧠 不失忆**——记忆一旦落盘即长期留存：写入须过三道闸门并以 `committed` 字段确认（**绝不假装成功**），遗忘只能由显式 `cg(op=forget)` 发起、不做静默淘汰；检索索引只是派生物、随时可重建——**原文即真源**（见[工具面](#-工具面)）
- **⚡ 高性能**——Rust 检索内核（零第三方依赖）：库内嵌多线程大批量检索，`--serve` 进程实例支撑多智能体并发（语言无关）；中文检索 hit@1 99.0%，六家横评同口径登顶（见[六家横评](#-六家记忆系统横向对比)）
- **🛡️ 无幻觉**——记什么、取什么、能不能写入，全部由确定性规则裁决，不依赖 LLM 黑箱判断；条件层弱证据的检索干扰由四层证据防火墙白箱剔除（见[弱证据实证](#-弱证据会干扰检索三分离与证据防火墙实证)）；写没写成功看 `committed` 字段，绝不假装通过；全链路审计留痕、结果可复现
- **🔌 多智能体适用**——同一份大脑（`md_cg/`）+ 同一份纪律，接入 DSH · CodeBuddy · ZCode · Codex CLI · Claude Code，任何 MCP 宿主可直接挂载（见[多 harness 接入](#多-harness-接入按端分目录)）
- **😊 轻松使用**——三步接入，装完像往常一样对话即可；记忆本体是纯 md 文档，任何编辑器可直接打开审阅
- **🔧 工程能力**——平台不只有记忆，四类工程能力可直接使用：**任务调度**（spec 进 / result 出，文件协议即接口）· **上下文管理**（重要性评分 · 预算装包 · 分层注入 · 记忆自净）· **蜂巢并发**（worker 池原子领取，多智能体真并行）· **双实例验证**（互验机制——改动须过对端断言才可入主线）；四类能力各自落在哪一层见[平台全景](#-平台全景)
- **📊…
