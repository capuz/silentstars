---
repo: "weiran-tech/wuli3"
name: "wuli3"
description: "A JDK 21 multi-module foundation platform: reusable core utilities, a dependency BOM, and Spring Boot starters (web, mysql, redis, rocketmq, elasticsearch, mongodb)."
readmeQualityOk: true
url: "https://github.com/weiran-tech/wuli3"
homepage: "https://wuli3.wulicode.com/"
language: "Java"
languages: ["Java"]
languagePcts: [90]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-30T09:07:08Z"
lastCommitAt: "2026-11-20T12:00:32Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["aevioni", "Y-cs", "imvkmark"]
openGraphImageUrl: "https://opengraph.githubassets.com/8966d3a916c7fe8d176c31e6fde88f6066d6286f26e92f1df5a9e75c09a40e3e/weiran-tech/wuli3"
---

# wuli3-gradle

wuli3 分布式项目脚手架底座。项目使用 JDK 21、Gradle 9.6.0、多模块构建，面向后续 Spring Boot / DDD 业务项目复用。

首次使用请阅读 [从建项目到业务开发教程](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/tutorial/README.md)：创建并运行项目、使用工具类、接入扩展点与示例代码。

设计文档站源码位于 [`wuli3-docs`](https://github.com/weiran-tech/wuli3/blob/HEAD/wuli3-docs/)，用于通过架构图、核心模型图、模块说明和代码示例解释 Wuli3 的设计。

## 模块

| 模块 | 说明 |
| --- | --- |
| [`wuli3-build-logic`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-build-logic.md) | Gradle 约定插件，统一 Java、Spring、质量检测和发布规则。 |
| [`wuli3-ddd-generator`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-ddd-generator.md) | 通过 CLI 或 Gradle 任务生成带 Shared Kernel 和架构门禁的单体多模块 DDD 服务。 |
| [`wuli3-dependencies`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-dependencies.md) | 统一依赖版本平台。 |
| [`wuli3-core`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-core.md) | 无 Spring 依赖的错误模型、断言、ID、时间和 Stream 工具。 |
| [`wuli3-json`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-json.md) | Jackson facade、Mapper 装配、资源路径和脱敏。 |
| [`wuli3-http`](https://github.com/weiran-tech/wuli3/blob/HEAD/guide/wuli3-http.md) | 无需 Spring 容器的 WebClient 生命周期、传输适配与脱敏日志。 |
