---
repo: "qiushile/AgentTeam"
name: "AgentTeam"
description: "基于 OpenClaw 、Hermes的企业级联邦式多 Agent 协作系统。采用 Docker 容器隔离、PostgreSQL 统一知识底座与 RLS 权限控制，专为无 GPU 服务器与云端算力（如阿里云 Coding Plan）优化的全生命周期 AI 研发团队解决方案。"
url: "https://github.com/qiushile/AgentTeam"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [48, 32]
topics: ["openclaw", "openclaw-alternative", "openclaw-extension", "openclaw-installer", "openclaw-integration", "openclaw-setup"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-12T15:31:32Z"
lastCommitAt: "2026-06-23T23:17:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 48
maintainers: ["qiushile"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecb575729cdd8b1d394c96be96cdaf1d18efebb6c3d178a4fae1bf8068a0a10e/qiushile/AgentTeam"
---

# ClawTeam: 企业级联邦式多 Agent 协作架构

ClawTeam 是一个为软件开发公司打造的 **“联邦式全生命周期 AI 数字团队”** 落地模板。本项目基于 [OpenClaw](https://github.com/openclaw/openclaw) 框架，专为**高性能无 GPU 服务器**（如高核高内存的 Ubuntu）以及**云端聚合算力**（如阿里云百炼 Coding Plan）场景进行了深度优化。

## 核心特性架构

*   **联邦式中枢调度 (Orchestrator-Led):** 采用统一协调中枢接收前端（企业微信/钉钉）请求，通过意图识别和向量匹配，精准将任务路由给后端的专业 Agent（产品、研发、测试等）。
*   **Docker 物理级隔离与沙箱:** 所有的专业 Agent 作为独立的 Docker 容器运行，针对涉及代码执行的高危 Agent（如 Developer Helper、Auto-Tester）默认采用 `sandbox` / `sandbox-browser` 隔离镜像，保障宿主机安全。
*   **PostgreSQL 统一知识底座:** 放弃分散的本地文件记忆，所有 Agent 接入搭载 `pgvector` 扩展的统一 PostgreSQL 数据库。
*   **RLS 行级安全与 Schema 隔离:** 在数据库层为不同 Agent 分配专属 Schema（如 `pm_schema`, `dev_schema`）保护私有知识，并通过 行级安全策略 (RLS) 实现细粒度的共享表（如 `shared.tasks`）读写协同。
*   **大模型算力池化 (Coding Plan 优化):** 所有 Agent 共享统一的阿里云 Dashscope API Key，但在各自的 `openclaw.json` 中配置最匹配岗位的模型（如研发配置 `qwen2.5-coder` / `glm-5`，中枢配置 `qwen-max`），并强制启用 Fallback 防限流降级链。

## 团队成员 (Agent Roster)

本团队模板预置了以下核心角色，可按需启动：
1.  **Orchestrator (协调中枢)**: 对接企微/钉钉，进行意图识别与任务分发。
2.  **Product Manager (产品经理)**: 竞品分析、需求定义，将草稿写入共享数据库。
3.  **Developer Helper (开发助手)**: 挂载代码库，基于需求生成代码、审查安全漏洞。
4.  **QA Agent (测试与质量保障)**: 自动编写用例、维护缺陷库。
5.  **DevOps (运维与日志分析)**: 服务器巡检、线上日志分析异常诊断。

## 目录结构…
