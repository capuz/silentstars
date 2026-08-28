---
repo: "PUAA-Team/aituan"
name: "aituan"
description: "爱团"
readmeQualityOk: true
url: "https://github.com/PUAA-Team/aituan"
homepage: "https://aituan.2b.gs"
language: "Java"
languages: ["Java", "Dart"]
languagePcts: [44, 34]
stars: 14
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2026-05-17T08:37:47Z"
lastCommitAt: "2026-08-28T15:32:55Z"
lastReleaseAt: "2026-06-08T12:50:41Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 53
maintainers: ["lixu10", "Camellia-0110", "l-x-y06"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca58010f1481ae1bacc40be6b5bbc006e531d6ffb907b5be2b556e10a5ad129/PUAA-Team/aituan"
---

# 爱团本地生活服务综合平台

爱团是一个面向本地生活服务场景的综合平台，覆盖用户消费、商家经营、平台治理和 AI 辅助。项目围绕“生活助手平台”课程题目设计，实现了用户端 APP / Web、商家端 Web、后台端 Web、Spring Boot 后端、MySQL 数据库、自动化测试、Docker Compose 回退部署和 Kubernetes CI/CD 主部署链路。

项目目标是一套可以运行、可以联调、可以部署、可以测试、可以展示的课程级完整软件工程项目。

## 1. 项目概览

### 1.1 核心定位

- 面向用户：提供本地商家搜索、外卖点餐、团购预约、优惠券、会员、评价、客服、投诉和 AI 助手。
- 面向商家：提供门店资料、商品/服务管理、订单履约、券码核销、评价回复和客服会话。
- 面向平台：提供商户治理、商品治理、订单治理、会员优惠券配置、评价审核、投诉处理、平台客服、审计日志和系统配置。

### 1.2 八大服务模块

| 服务模块 | 用户侧能力 | 履约方式 |
| --- | --- | --- |
| 外卖 | 商家浏览、商品点单、购物车、地址选择、模拟支付、配送时间线 | 点单 + 配送模拟 |
| 团购 | 套餐浏览、购买、券码展示、到店使用 | 券码核销 |
| 酒店 | 房型/服务展示、预约信息、凭证展示 | 预约 / 凭证使用 |
| 休闲娱乐 | 项目、套餐、时段和到店须知展示 | 预约 / 券码 |
| 电影演出 | 场次、票档、入场规则展示 | 票券核销 |
| 丽人医美 | 项目流程、服务时长、注意事项展示 | 预约服务 |
| 景点门票 | 票种、入园日期、开放时间展示 | 电子票核销 |
| 洗脚按摩 | 项目时长、到店/上门说明、预约时间展示 | 预约 / 服务完成 |

### 1.3 当前交付形态

| 交付项 | 说明 |
| --- | --- |
| 用户端 APP | Flutter Android APK，支持用户主流程演示。 |
| 用户端 Web | Flutter Web 预览版，由 Nginx 托管在 `/web/`，用于移动宽度下的用户端 E2E 与演示。 |
| 商家端 Web | Vue 3 + TypeScript 商家经营控制台，由 Nginx 托管在 `/merchant/`。 |
| 后台端 Web | Vue 3 + TypeScript 平台管理后台，由 Nginx 托管在 `/admin/`。 |
| 后端服务 | Spring Boot 3 + Java 17，提供统一 REST API。 |
| 数据库 | MySQL 8，使用 Flyway 管理 V001-V019 迁移和 repeatable seed 数据。 |
| 部署 |…
