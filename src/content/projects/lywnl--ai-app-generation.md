---
repo: "lywnl/ai-app-generation"
name: "ai-app-generation"
description: "基于Spring Boot 3 + LangChain4j的AI零代码应用生成平台。通过用户输入自然语言，由AI Agent 自动执行多源上下文增强、代码生成、项目构建的完整工作流，可一键部署为可访问的Web应用。并结合多级缓存、异步处理、安全护轨等多种优化策略，保证系统的高性能与稳定性"
readmeQualityOk: true
url: "https://github.com/lywnl/ai-app-generation"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 44
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T12:36:56Z"
lastCommitAt: "2026-09-10T08:19:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 32
maintainers: ["lywnl"]
openGraphImageUrl: "https://opengraph.githubassets.com/11fc8f102a620923b912b235af25cf080c1d5c04875aaef3ce41f350569168ac/lywnl/ai-app-generation"
---

# AI App Generation

**一句话需求 → 可部署 Web 应用** · 基于 LangChain4j 的 AI 全栈零代码（NoCode）应用生成平台

[功能特性](#-核心特性) · [架构设计](#-系统架构) · [快速开始](#-快速开始) · [项目结构](#-项目结构) · [核心模块](#-核心模块解析) · [API 文档](#-api-文档) · [部署](#-生产部署)

</div>

---

## 项目简介

`ai-app-generation` 是一个面向 C 端开发者与产品同学的 **AI 驱动应用生成平台**，对标美团 NoCode、Bolt.new、Lovable 等同类型产品。用户只需用自然语言描述应用需求，平台即可：

1. **AI 智能识别**应当生成什么形态的代码（单文件 HTML / 多文件项目 / Vue 完整工程）
2. **检索 RAG 模板库**为大模型注入高质量上下文片段，提升生成稳定性
3. **流式输出**生成过程，实时反馈代码片段、工具调用、思考过程
4. **一键部署**生成产物到平台静态服务，并支持代码 ZIP 下载

平台内置：智能路由、检索增强（RAG）、Agent 工具调用、Prompt 安全护栏、流式 SSE、对象存储、网页截图、应用市场、可观测监控等完整能力。

---

## 核心特性

| 能力 | 说明 |
| :--- | :--- |
| 三种代码生成模式 | `HTML` 单文件 / `MULTI_FILE` 多文件 / `VUE_PROJECT` Vue 工程 |
| AI 智能路由 | 由 Qwen-Turbo 自动判断需求适合的生成模式 |
| RAG 检索增强 | Milvus 向量检索 + DashScope `text-embedding-v4` + `gte-rerank-v2` 二次重排 |
| Agent 工具调用 | 工具注册层提供 5 个文件工具、`buildProject`、`exit`；在线 Vue 使用“5 个文件工具 + `buildProject`”显式白名单，离线首次生成评测使用“5 个文件工具 + `exit`” |
| 受控 ReAct 构建修复 | Vue 生成、真实构建和最多两个失败处理阶段位于同一 SSE 回合；最多执行 3 次真实构建，任意一次成功或第三次失败后由后端强制结束 |
| 图片采集 Agent | 首条消息自动调度 `Pexels 图片搜索` + `阿里 wan2.2 Logo 生成` + `unDraw 插画` 3 类工具，并行收集封面/Logo/插图素材 |
| 流式 SSE | Reactor `Flux<ServerSentEvent>` + 自定义工具调用流解析器（字符级状态机）…
