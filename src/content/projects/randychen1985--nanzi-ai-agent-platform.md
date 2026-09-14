---
repo: "RandyChen1985/nanzi-ai-agent-platform"
name: "nanzi-ai-agent-platform"
description: "🚀 开源企业级多智能体平台与 ChatBI 数据洞察平台。支持多 Agent 协作、RAG 知识增强、物理数据源直连与安全沙箱执行、Redis 长期记忆引擎，并集成多模态 EmbedChat 挂件与全方位 Token 消耗审计看板，完整 RBAC权限控制和 Harness支持。"
readmeQualityOk: true
url: "https://github.com/RandyChen1985/nanzi-ai-agent-platform"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [62, 34]
topics: ["ai-agents", "chat-bi", "chatbot", "knowledge-management", "langchain", "ragflow", "agentscope", "agentscope-runtime", "aigc", "harness"]
stars: 168
forks: 47
openIssues: 0
closedIssues: 12
watchers: 5
contributors: 3
recentReleases: 7
createdAt: "2026-05-28T14:05:41Z"
lastCommitAt: "2026-09-14T09:12:23Z"
lastReleaseAt: "2026-08-03T02:58:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["RandyChen1985"]
openGraphImageUrl: "https://opengraph.githubassets.com/8745724c0560f1a335ac2265cc6f6e33cb18a9fb9dfd8950b38dc29f2910b4ee/RandyChen1985/nanzi-ai-agent-platform"
---

> **项目声明**
> 本项目为**个人开源**，供自由学习交流，遵循 [MIT](https://github.com/RandyChen1985/nanzi-ai-agent-platform/blob/HEAD/LICENSE) 开源协议，可自由分发。
> 原项目名称「云枢」与其他企业项目重名，为避免混淆，现更名为「NanZi」。
> 「NanZi」来自我一直使用的网名（南孜），取「孜孜不倦」之意，寓意 AI 持续学习与进化。

# NanZi · 智能体平台 (NanZi AI Agent Platform)

**简体中文** | [English](https://github.com/RandyChen1985/nanzi-ai-agent-platform/blob/HEAD/README_EN.md)

> **企业级 AI 智能体编排与执行平台**
> *Connect Data. Orchestrate Intelligence.*

> 📖 **实战连载**：[NanZi 开源智能体平台实战连载](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3NzAwOTA0NA==&action=getalbum&album_id=4613921118301732865#wechat_redirect)（架构 · 安装 · 智能体配置 · ChatBI · 工具箱 · MCP）

**NanZi 智能体平台** 是专为企业级复杂场景打造的 AI 智能中枢。

平台核心聚焦于以下能力矩阵：

* 💬 **深度交互式对话 (Dialogue & Co-Agent)**：极速流式响应，支持 **智能委派（默认进入 Main）** 与 **专家模式 / @提及直选**、多专家协同。内置 **工具预检** 促发模型主动调用工具；支持 `ask_user_question` 智能提问卡（单选/多选/输入）、**Todo 任务清单** 分步执行与常驻跟踪；主助手支持 **Skill 自动扫描** 与权限挂起恢复。
* 🛡️ **多策略安全沙箱与隔离执行 (Multi-Policy Sandbox)**：原生支持 **Local**（本机进程）、**Docker**（私有容器隔离）、**K8s**（Kubernetes 原生 Pod 沙箱，云原生免 Docker Socket 安全推荐）、**E2B**（云端安全沙箱）、**SSH**（远端安全通道）五大执行策略；Docker 与 K8s 模式支持用户工作区**同路径/subPath 挂载**，支持在代码画布中直接打开预览并保存回物理文件；支持镜像预构建、空闲 30 分钟自动回收（Idle…
