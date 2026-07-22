---
repo: "huxuehao/apboa-next"
name: "apboa-next"
description: "Apboa Next是基于React理念的智能体开发平台，让复杂开发简单高效。提供敏感词过滤、提示词工坊、多模型接入、工具集成、工作流、知识库与编排管理等全链路方案，模块无缝整合。 新版本后台拆分为5个服务、1个控制台、3个可扩展运行时及1个消息服务，支持分布式部署与弹性扩容；前端强化多租户与权限隔离。支持多Session并行、消息后端存储、状态自动保存及断流续传，新增文档识别，全面突破智能体边界。"
readmeQualityOk: true
url: "https://github.com/huxuehao/apboa-next"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [47, 39]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T13:12:57Z"
lastCommitAt: "2026-07-22T06:06:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["huxuehao"]
openGraphImageUrl: "https://opengraph.githubassets.com/3349d9011cc3cb2d7122dc843951d7c7b7ebff63f08420bb6dffc21476beea70/huxuehao/apboa-next"
---

<h1 align="center">Apboa Next</h1>

  <strong>企业级 AI 智能体平台 — 从定义到生产</strong>
</p>

  基于 ReAct 范式的多租户智能体构建与运行平台<br/>
  <code>MCP 协议</code> · <code>A2A 协作</code> · <code>多向量存储</code> · <code>一键部署</code>
</p>

</p>

Apboa Next 是基于ReAct理念的智能体开发与管理平台，旨在简化AI智能体的构建流程，帮助用户快速打造专属数字助手。平台整合了敏感词过滤、提示词管理、多模型接入、工具集成、知识库和智能体编排等核心功能，形成一站式解决方案，架构清晰，易于使用。

## 目录

- [快速开始](#快速开始)
- [本地开发](#本地开发)
- [核心特性](#核心特性)
- [系统架构](#系统架构)
- [为什么选择 Apboa](#为什么选择-apboa)
- [能力清单](#能力清单)
- [技术栈](#技术栈)
- [核心页面预览](#核心页面预览)
- [部署指南](#部署指南)
- [项目结构](#项目结构)
- [贡献指南](#贡献指南)
- [交流与赞助](#交流与赞助)
- [开源协议](#开源协议)
- [Workflow 专题](#workflow-可视化工作流引擎)

## 快速开始

前置条件：Docker Engine 20+ & Docker Compose v2+

```bash
git clone https://gitee.com/studious_tiger/apboa-next.git
cd apboa-next/docker
bash start-simple.sh
```

启动完成后访问 `http://localhost`，默认账号 `admin / Admin@123.com`。

> 单机体验版包含全部 5 个服务 + 3 个中间件，约 5 分钟完成初始化。生产部署请参考 [docker-compose-execute.yml](https://github.com/huxuehao/apboa-next/blob/HEAD/docker/docker-compose-execute.yml)。

## 本地开发

### 环境要求

| 依赖 | 版本 | 说明 |
|------|------|------|
| JDK | 21+ | 后端编译与运行 |
| Maven | 3.8+ | 后端构建 |
| MySQL | 8.0+ | 主数据库，库名 `apboa_next` |
| Redis | 7+ | 缓存与分布式锁 |
| Node.js | 20.19+ 或 22.12+ |…
