---
repo: "xiachongbu/qlexpress-rule"
name: "qlexpress-rule"
description: "qlexpress-rule 是一套基于 Spring Boot 2.3 与 QLExpress 4 的可视化规则引擎：在 Web 控制台中编排 决策表、决策树、决策流、交叉表、评分卡、复杂交叉表、复杂评分卡、QL 脚本 等模型，编译发布后由 rule-engine-client SDK 在业务系统中执行；支持 Redis 推送规则变更、可选 Kafka 执行日志等扩展。部署拓扑与业务侧集成步骤见 "
readmeQualityOk: true
url: "https://github.com/xiachongbu/qlexpress-rule"
language: "Vue"
languages: ["Vue", "Java"]
languagePcts: [51, 38]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-30T05:10:22Z"
lastCommitAt: "2026-07-31T06:29:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 56
undervaluedScore: 18
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/328ff5301ae81e95cb340823b0591f5dff5c47d1126be99d15c462fb052ddbc6/xiachongbu/qlexpress-rule"
---

# QLExpress 可视化规则引擎项目使用说明

---

## 1. 项目简介

**qlexpress-rule** 是一套基于 **Spring Boot 2.3** 与 **QLExpress 4** 的可视化规则引擎：在 Web 控制台中编排 **决策表、决策树、决策流、交叉表、评分卡、复杂交叉表、复杂评分卡、QL 脚本** 等模型，并可将多条规则编排为 **规则集（RuleSet）** 链式执行；编译发布后由 **rule-engine-client** SDK 在业务系统中执行。支持基于 **作用域（scope）** 的多变体规则、Redis 推送规则/规则集变更、客户端 **L1/L2** 缓存、可选 Kafka 执行日志等扩展。**部署拓扑与业务侧集成步骤见 §3。**

---

## 2. 模块说明

| 模块 | 说明 |
|------|------|
| `rule-engine-model` | 公共实体与 DTO |
| `rule-engine-core` | 规则编译与执行核心 |
| `rule-engine-server` | 管理端 **REST API**（规则同步、日志等），默认 **8080**；与前端工程解耦，**不再**将 Vue 构建结果输出到本模块目录 |
| `rule-engine-builder-ui` | Vue 2 **独立前端**：**`npm run build`** |
| `rule-engine-client` | 客户端 SDK（HTTP 拉取 + Redis 订阅） |
| `rule-engine-example` | 集成示例服务，默认 **7070**，演示多种模型与函数类型调用 |

---

## 3. 系统架构与客户端集成

从部署拓扑与运行时行为说明 **管理端、MySQL、Redis、业务应用** 如何协作，以及如何在 Spring Boot 中引入 **rule-engine-client**。

### 3.1 部署拓扑

```mermaid
flowchart TB
  subgraph User["使用方"]
    Browser["浏览器"]
  end
  subgraph Frontend["rule-engine-builder-ui（独立前端）"]
    UI["管理控制台\nnpm run build → dist"]
  end
  subgraph Server["rule-engine-server（默认 :8080）"]
    API["REST API\n规则同步 / 日志等"]
  end
  subgraph Store["持久化"]
    MySQL[("MySQL")]
  end
  subgraph…
