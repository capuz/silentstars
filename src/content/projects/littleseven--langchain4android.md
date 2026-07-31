---
repo: "littleseven/langchain4android"
name: "langchain4android"
description: "PoLang is an on-device AI agent smart photo gallery that treats the LLM as the central nervous system of the app. It serves as a living experiment for next-generation AI-first client architectures."
readmeQualityOk: true
url: "https://github.com/littleseven/langchain4android"
homepage: "https://www.polang.net"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [52, 35]
topics: ["ai-native-development", "camera", "gallery", "langchain4android"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T18:23:03Z"
lastCommitAt: "2026-07-31T06:28:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["littleseven"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c4ce449a94e953d5e983926dee12cbb6eb4bcaffb9388eea249e65642524d3/littleseven/langchain4android"
---

</p>

<h1 align="center">langchain4android</h1>

  <b>PoLang（破浪相册）</b> — AI Agent 驱动的智能相册应用<br>
  <i>同仓库沉淀出 Android 端侧 AI Agent 框架 <b>langchain4android</b>（LangChain4j 风格 API · OpenAI 兼容 · 无 SPI 纯显式注入）</i>
</p>

</p>

---

## 概览

本仓库包含两件事：

- **PoLang（破浪相册）** —— 一个接近生产级复杂度的 **AI Agent 驱动的智能相册应用**，是本项目的应用与研究主体。以相册首页为默认入口，通过自然语言对话调度搜索 / 编辑 / 抠图 / 证件照 / 标签等能力，端侧 Qwen3.5-2B + 远程 DeepSeek 双推理，自研 OpenGL ES 美颜引擎，自建 Ktor 后端。
- **langchain4android** —— 从 PoLang 中沉淀出的 **Android 端侧 AI Agent 基础库**（`:agent-core`，LangChain4j 风格 ChatModel / Tool / AiServices / ChatMemory），无 SPI、纯显式注入，已发布 JitPack，可独立用于自己的 Agent 编排。

PoLang 的 Agent 编排层（`AgentOrchestrator`、`CapabilityRegistry`、`PrivacyGuard` 等）位于 `:runtime-core`，基于 `:agent-core` 的原语构建。先看 [PoLang 产品特性](#polang-产品特性)，或直接跳到 [作为库使用](#作为库使用langchain4android)。

---

## PoLang 产品特性

PoLang 以「对话即操作」为核心：用户用自然语言与相册交互，Agent 把意图路由到端侧或云端能力执行。以下能力大多已落地（标 🔄 者开发中）。

### AI Agent 对话中枢
🤖 自然语言 → 能力调度：`AgentOrchestrator` + `CapabilityRegistry` + `PrivacyGuard` 完整架构，Capability 可热插拔。
- **本地 / 远程双推理**：端侧 MNN-LLM（Qwen3.5-2B，离线/隐私）+ 远程 DeepSeek（复杂推理），输入框下拉切换
- **多轮对话记忆**：Room 持久化，重启自动恢复；本地 L1 缓存命中直返
- **隐私分级**：`PrivacyGuard` 把敏感操作（人脸/OCR/图片）钉在端侧，非敏感复杂推理才上云

### 智能相册搜索
🔍…
