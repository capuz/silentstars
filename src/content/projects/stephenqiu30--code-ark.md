---
repo: "StephenQiu30/code-ark"
name: "code-ark"
description: "🚢 代码方舟 - 一键启动 9+ 种开发环境，跨平台 Docker 中间件集合，无需配置环境，开箱即用！"
url: "https://github.com/StephenQiu30/code-ark"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [61, 25]
topics: ["docker", "cross-platform", "developer-tools", "development-environment", "docker-compose", "elasticsearch", "kafka", "kibana", "local-development", "middleware"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-03T02:37:19Z"
lastCommitAt: "2026-07-01T07:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 16
maintainers: ["StephenQiu30"]
openGraphImageUrl: "https://opengraph.githubassets.com/80649f6653afcb5f2d0b3e6909666dadb398989b801a25c260911f7800bbb046/StephenQiu30/code-ark"
---

# DevForge

DevForge 是一个面向本地开发与联调场景的 Docker Compose 配置集合。仓库把常见基础设施拆成独立目录，尽量做到开箱即用、端口清晰、配置可控，方便个人开发、团队入职和多项目并行调试。

## English Summary

DevForge is a collection of Docker Compose stacks for local development.
Each service lives in its own directory with focused documentation and reproducible startup steps.
These stacks are intended for development and integration testing, not production use.

## 特性

- 服务拆分清晰：每个基础设施一个目录，按需启动，不必一次性拉起全部依赖。
- 文档统一：根 README 负责导航，各服务目录 README 负责具体启动与配置说明。
- 配置可控：优先通过 `.env.example` 管理公开配置入口，避免在文档中传播真实凭据。
- 数据可预期：持久化目录或 Docker volume 都会在 README 中明确说明。
- 适合协作：新同学可以按统一步骤快速复现本地环境。

## 适用场景

- 本地开发依赖服务快速启动
- 后端联调和接口测试
- 中间件、数据库、监控组件的实验环境
- 团队统一开发环境模板

## 服务矩阵

> 说明：仓库中保留了少量历史目录命名，例如 `mysql-start-lcoal`、`rabbitmq-start-lcoal`。本轮只统一文档，不改目录名。

| 服务 | 目录 | 主要端口 | 说明 |
| --- | --- | --- | --- |
| Elasticsearch + Kibana + Logstash | [`elastic-start-local`](./elastic-start-local/README.md) | `9200`, `5601`, `5044` | 本地搜索与日志处理栈 |
| Kafka + Kafka UI | [`kafka-start-local`](./kafka-start-local/README.md) | `9092`, `19000` | 本地消息流平台 |
| LibreOffice | [`libreoffice-start-local`](./libreoffice-start-local/README.md) | 无 | 真实 LibreOffice headless 文档转换环境 |
| MinIO |…
