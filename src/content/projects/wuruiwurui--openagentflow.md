---
repo: "wuruiwurui/OpenAgentFlow"
name: "OpenAgentFlow"
description: "Java AI Agent, Spring Boot 3, Vue3, RAG, Tool Calling, MCP, LLM, OpenAI-compatible, Milvus, MySQL, Redis, Workflow, Trace, Evaluation, Cost Governance. OpenAgentFlow-Java 是开源 Java AI Agent 工作流平台，核心链路自研，支持智能体编排、知识库问答、文档切片、向量检索、工具调用、MCP 接入、可视化工作流、运行追踪、模型评测、Token 统计、成本治理和企业级二次开发。"
url: "https://github.com/wuruiwurui/OpenAgentFlow"
language: "Java"
languages: ["Java"]
languagePcts: [75]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T03:52:05Z"
lastCommitAt: "2026-07-03T12:03:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["wuruiwurui"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c2f9d8783294f56ab11c8fe4ad9305241124287a41611029114fc113a6582a/wuruiwurui/OpenAgentFlow"
---

# OpenAgentFlow-Java

OpenAgentFlow-Java 是一个基于 **Java 21 + Spring Boot 3 + Vue 3** 的开源 AI Agent 工作流平台。项目面向企业知识库问答、工具调用、MCP 接入、工作流编排、运行 Trace 和模型评测场景，目标是提供一套可运行、可追踪、可评测、可扩展的 AI Agent 应用开发底座。

## 为什么核心链路自研

OpenAgentFlow-Java 的目标不是做一个简单的 AI 调用 Demo，而是完整呈现企业级 Agent 平台的核心链路。项目中的 Agent 编排、RAG 知识库、Tool Calling、MCP 接入、工作流执行、Trace 追踪、模型评测和成本治理均采用自研实现，方便开发者直接理解底层流程、学习关键设计并进行二次开发。

项目不会把能力绑定到某一个 AI 框架。模型、Embedding、向量库和工具调用都按开放适配思路设计，当前默认使用 OpenAI-compatible 接口、MySQL、Redis 和 Milvus；后续也可以按需扩展 Spring AI、LangChain4j 或其他模型网关。为企业落地留下可插拔的工程空间。

## 核心能力

- **模型接入**：OpenAI-compatible、豆包方舟、Ollama、DeepSeek、Qwen 等供应商配置，支持连通性测试、普通对话和 SSE 流式输出。
- **Agent 管理**：Agent CRUD、发布、复制、删除、模型参数、System Prompt、资源级权限、调试运行和 Runtime 策略解释器。
- **多 Agent 协作**：协作团队 CRUD、成员分工、顺序/并行/路由/主控/复核模式、真实 Agent 调用、协作执行和 Trace 追踪。
- **Prompt 模板中心**：System、User、RAG、Tool、Evaluation、Workflow Prompt 模板管理，支持变量解析、版本发布、复制、回滚和 Agent 绑定。
- **RAG 知识库**：知识库 CRUD、文档上传、解析、切片、Embedding、Milvus 写入、混合召回、重排、低置信度提示、可信回答模式、强制引用来源和 Agent 绑定。
- **Tool Calling**：REST API、Webhook、数据库查询、MCP 工具，支持 Schema、连通性测试、风险等级、调用日志和 Trace。
- **可视化工作流**：Vue Flow…
