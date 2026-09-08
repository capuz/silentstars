---
repo: "njydsz/ydsz-cloud"
name: "ydsz-cloud"
description: "Ydsz Cloud 即云顶数字-快速开发平台的后端微服务代码仓库。"
readmeQualityOk: true
url: "https://github.com/njydsz/ydsz-cloud"
homepage: "https://njydsz.com"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T14:59:00Z"
lastCommitAt: "2026-09-08T08:05:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["limw1888"]
openGraphImageUrl: "https://opengraph.githubassets.com/189ba0ca84405d850c599655c410440cba89055e24117668a32dd38dd150f6ff/njydsz/ydsz-cloud"
---

<h1 align="center">Ydsz Cloud</h1>
    基于 Jdk21 &amp; Spring Boot 4 &amp; Spring Cloud 的企业级微服务开发平台
  </p>
</p>

</p>

---

## 项目简介

**Ydsz Cloud** 是一套面向企业级应用的微服务快速开发平台，基于 **Spring Boot 4.0.8**、**Spring Cloud 2025.1.2** 和 **Spring Cloud Alibaba 2025.1.0.0** 构建。平台采用 **DDD（领域驱动设计）** 六层分层架构（`api` / `domain` / `infra` / `server` / `app` / `web`），内置 **11 大核心模块**（1 网关 + 9 微服务 + 1 代码生成器 + 1 公共依赖库），覆盖用户认证、系统管理、流程引擎、消息引擎、任务引擎、规则引擎、网盘引擎、智能引擎、代码生成等企业级全业务场景。

## 关联仓库

| 平台     | 前端仓库 |
|----------| -------- |
| Gitee    | https://gitee.com/njydsz/ydsz-micro |
| GitHub   | https://github.com/njydsz/ydsz-micro |
| 官方文档 | https://www.yuque.com/marvin-lee/ydsz-org |

---

## 核心特性

- **前沿技术栈**：Java 21 虚拟线程 + Spring Boot 4 + Spring Cloud 2025.1.2 + Jakarta EE 10
- **DDD 分层架构**：严格 `api` / `domain` / `infra` / `server` / `app` / `web` 六层分离，依赖方向单向收敛（gateway 为单模块 reactive 栈，不拆分 DDD 层）
- **自研引擎矩阵**：「规则引擎 + 任务调度 + 工作流（BPMN 2.0）+ AI Agent 框架」——四大引擎全部自研，开箱即用
- **多租户隔离**：支持 SINGLE（共享表）、MULTI（字段隔离）、ISOLATE_DB（独立数据库）三种策略
- **全渠道消息**：6 种通知渠道（短信/邮件/Push/企微/IM等），支持 DAG 编排与跨渠道抑制
- **安全纵深防御**：JWT + RBAC + 数据权限 + PII 脱敏 + XSS/SQL 注入/CSRF 防护 + 敏感配置加密（AES-256-GCM）
- **生产可观测**：Prometheus + Grafana + Sentry + ELK/Loki +…
