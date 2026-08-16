---
repo: "zzxCoding/Flydb"
name: "Flydb"
description: "面向 JDBC 数据库的 Schema 版本化迁移工具：Java 8 零依赖内核，内置信创数据库方言，提供安全 CLI、Spring Boot 2/3 Starter 与 Agent Skill。"
readmeQualityOk: true
url: "https://github.com/zzxCoding/Flydb"
homepage: "https://flydb.zzxcoding.dev"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["cli", "dameng", "database-devops", "database-migration", "java", "java8", "jdbc", "kingbasees", "mysql", "oceanbase"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-06-04T02:53:00Z"
lastCommitAt: "2026-08-16T04:07:25Z"
lastReleaseAt: "2026-08-15T12:12:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 89
maintainers: ["zzxCoding", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f12cc9d72b6bc82662dabac1a6c771051740461a8ed2dcc0c6eabc57acebf87/zzxCoding/Flydb"
---

[English](https://github.com/zzxCoding/Flydb/blob/HEAD/README.en.md) | 中文

</p>

# Flydb

Flydb 是面向任意支持 JDBC 驱动的数据库的 Schema 版本化迁移工具：内置主流数据库方言，以国产信创数据库支持为特色，并通过 `DatabaseType` SPI 扩展小众 JDBC 数据库。

**现在**，Flydb 0.2 是一个可靠的迁移运行时：`migrate`、`info`、`validate`、`baseline`、`repair`、`undo`、`clean` 等命令，配合并发锁、事务语义、checksum 校验、失败阻断与恢复，内置主流与信创共 8 个数据库方言，并提供 Spring Boot 2/3 starter。**长期方向**，是让人类与 AI Agent 共用同一套安全的数据库变更能力：Agent 决定“改什么”，Flydb 保证“怎么改是安全的”。各阶段目标与当前进度见[路线图](https://github.com/zzxCoding/Flydb/blob/HEAD/ROADMAP.md)。

> **能力边界：** Flydb 负责迁移版本、执行安全与数据库方言适配，不会把任意一套厂商 SQL 自动转换成所有数据库语法。存在方言差异时，请按数据库家族维护迁移目录，具体组织方式见[多环境自动化指南](https://github.com/zzxCoding/Flydb/blob/HEAD/docs/getting-started/multi-environment.md#4-脚本仓库按数据库家族分目录)。

## 为什么选 Flydb

- **信创数据库一等公民**：达梦 DM8、人大金仓 KingbaseES、openGauss、OceanBase、TiDB 与 MySQL、PostgreSQL、Oracle 同为内置方言；CLI 不捆绑厂商驱动，从 `drivers/`、运行时 classpath 或 Maven 私服外置解析加载，适配不能公开分发的驱动。
- **零依赖的 Java 8 内核**：`flydb-core` 无任何第三方运行时依赖（由 Maven Enforcer 强制），可直接进入任何存量 Java 8 系统；Boot 3 / Java 17 环境使用独立 starter。
- **对人和 Agent 同样友好**：稳定退出码与错误码、`--dry-run` 预览、非交互可用；发行包随附与 CLI 版本匹配的 Agent Skill 和文档。
- **安全默认**：`clean` 默认禁用且需双重开关；失败迁移阻断后续执行；密码支持环境变量与密码文件，不落命令行、日志和 SQL。

## 快速上手…
