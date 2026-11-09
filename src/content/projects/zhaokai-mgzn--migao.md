---
repo: "zhaokai-mgzn/migao"
name: "migao"
description: "多租户 AI 智能客服 SaaS：双 Agent（LangGraph）+ 31 个业务工具 + SSE 流式对话，Java / Python / Next.js / Taro，阿里云 SWAS 部署"
readmeQualityOk: true
url: "https://github.com/zhaokai-mgzn/migao"
language: "Python"
languages: ["Python", "Java", "TypeScript"]
languagePcts: [43, 26, 22]
stars: 10
forks: 4
openIssues: 12
closedIssues: 4914
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-06T01:12:14Z"
lastCommitAt: "2026-11-09T00:53:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["zhaokai-mgzn", "github-actions[bot]", "ciyuantongda"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3abc44ce1443920ac06b1f7dced323511cded64421864444f6400660223539e/zhaokai-mgzn/migao"
---

# AI 智能客服系统（AIKF）

> 面向通用行业的多租户 AI 智能客服 SaaS 平台，以布艺窗帘行业为示例场景。  
> 基于大语言模型（DeepSeek V4 Pro + DeepSeek V4 Flash Vision）+ 业务工具（**数量以注册表为单一源**，复算命令见「技术栈」的「版本真值源」），覆盖售前咨询到售后服务全链路。

## ✨ 核心亮点

- **双 Agent 架构** — C 端客服"元元" + B 端工作助手"黄金策"，LangGraph 状态图驱动
- **AI 工具** — 商品搜索、订单管理、物流追踪、客户查询等，自动意图路由（数量以 `registry.py` 注册表为单一源）
- **多租户 SaaS** — 租户隔离（JWT 派生 tenant_id → MyBatis 租户拦截器 → 字段脱敏）
- **完整业务后台** — 商品、订单、CRM、人工坐席、数据看板等 12+ 管理模块
- **微信小程序** — Taro 跨端框架，SSE 流式对话，原生体验
- **阿里云全栈部署** — SWAS 轻量应用服务器（CI 构建镜像 + 服务器 pull）+ RDS + Redis(Tair) + OSS，GitHub Actions CI/CD

> ℹ️ **知识库说明**：旧 RAG 知识库（向量检索文档库）已随 LLM WIKI 板块完全移除（issue #3051）。知识问答采用「知识卡片」模型：行业模板一键套用 + 商品/配置自动派生 + 会话/文档 AI 提炼待确认，AI 客服直接读已发布的知识卡片回答，检索用结构化过滤 + 关键词（无向量库）。设计见 `docs/design/knowledge-wiki-design.md`。

## 🏗️ 系统架构

```mermaid
graph TB
    subgraph 客户端
        A[微信小程序<br/>Taro] --> |SSE| GW[API 网关]
        B[管理后台<br/>Next.js 14] --> |REST| GW
    end

    subgraph 后端服务
        GW --> C[Admin API<br/>Java 21 · Spring Boot]
        GW --> D[AI Agent Service<br/>Python 3.11 · FastAPI]
        C <--> |Service Token| D
    end

    subgraph 数据层
        C --> E[(PostgreSQL 15<br/>41 张表)]
        C --> F[(Redis 7<br/>会话 / 缓存)]
        D -->…
