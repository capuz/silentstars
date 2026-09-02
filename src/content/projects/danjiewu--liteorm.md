---
repo: "danjiewu/LiteOrm"
name: "LiteOrm"
description: ".Net Orm"
readmeQualityOk: true
url: "https://github.com/danjiewu/LiteOrm"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-27T03:39:46Z"
lastCommitAt: "2026-09-02T07:58:51Z"
lastReleaseAt: "2026-01-29T04:27:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["danjiewu"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c0b01b0483bfbde614c588bdfe218a77e49aed48aa2dd99ce24ea7acdfab350/danjiewu/LiteOrm"
discussionCount: 0
---

# LiteOrm

> 一个轻量级、高性能的 .NET ORM 框架

***

## 📖 Language / 语言

**[English](https://github.com/danjiewu/LiteOrm/blob/HEAD/README.en.md)** | **中文**

***

## 📚 文档导航

建议先从文档中心进入，再按场景查阅索引页，这样更容易建立完整的使用路径。

**[文档中心](https://danjiewu.github.io/LiteOrm/)**

- **入门篇**：快速完成安装、注册和第一个可运行示例
- **核心使用篇**：重点阅读实体映射、Expr / 查询指南、CRUD、关联查询，以及 **Lambda 与 Expr 组合使用**
- **高级特性篇**：集中查看事务、分表、性能、窗口函数、权限过滤和日志诊断
- **扩展开发篇**：查看表达式扩展、Expr 序列化，以及前端 `QueryString` / 原生 `Expr` 查询接入方案

LiteOrm 是一个轻量级、高性能的 .NET ORM 框架，兼顾微型 ORM 的执行效率和完整 ORM 的易用性，适合对性能敏感且又需要灵活处理复杂 SQL 的业务场景。

## 🎯 核心特性

- **极速性能**：性能接近原生 Dapper，远超 EF Core
- **多数据库支持**：原生支持 SQL Server、MySQL、Oracle、PostgreSQL、SQLite；内置达梦、人大金仓、华为 GaussDB、OceanBase、TiDB、GreatDB 等国产 / 兼容数据库方言
- **灵活查询**：支持基于 Lambda、`Expr` 或 `ExprString` 的多种查询方式
- **自动关联**：通过特性实现无损的 JOIN 查询，无需手写 SQL
- **声明式事务**：`[Transaction]` 特性实现 AOP 事务管理
- **日志与诊断**：支持 `ServiceLog`、`Log` 特性及慢查询日志
- **动态分表**：`IArged` 接口支持分表路由
- **异步支持**：完整的 async/await 支持
- **类型安全**：强类型泛型接口，编译时类型检查

## 📋 环境要求

- **.NET 8.0+** / **.NET Standard 2.0**（兼容 .NET Framework 4.6.1+）
- **依赖库**：Autofac、Castle.Core
- **支持的数据库**：SQL Server 2012+、Oracle 12c+、PostgreSQL、MySQL 8.0+、SQLite、达梦（DM）、人大金仓（KingbaseES）、华为 GaussDB /…
