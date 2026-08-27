---
repo: "llllllxy/tiny-jdbc"
name: "tiny-jdbc"
description: " 🌟 tiny-jdbc：一款专为 Java 开发者量身打造的极致轻量级数据库 ORM 神器✨！它依托 Spring JdbcTemplate 的强大内核，以精妙的架构设计和卓越的性能表现，无缝融合了 SQL 操作的灵活性与实体类映射操作的便捷性。无论是简单的数据查询，还是复杂的事务处理，tiny-jdbc 都能让数据库操作变得如同行云流水般简单，助你在开发之路上一路狂飙🚀！"
readmeQualityOk: true
url: "https://github.com/llllllxy/tiny-jdbc"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["database", "java", "jdbc-template", "orm", "springboot"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-10-25T14:44:59Z"
lastCommitAt: "2026-08-27T14:22:54Z"
lastReleaseAt: "2023-10-26T06:03:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 47
maintainers: ["llllllxy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f6ab293f2852ef28f9c842ba51f68cd05e81bf2d75b93c166943ed072903183/llllllxy/tiny-jdbc"
---

# TinyJDBC

一个轻量、灵活、基于 Spring JDBC 的 ORM 框架。

## 1、简介

`tiny-jdbc` 是一款基于 `Spring JDBC` 精心打造的轻量、灵活且高性能的数据库 `ORM` 框架。它在继承 `Spring JDBC`
原有强大功能的基础上，进行了大量的增强和优化，为开发者提供了更加便捷、高效的数据库操作体验，让操作数据库这件事变得更加简单！

### 文档导航

- [快速开始](#2快速开始)：引入依赖、基础配置、实体与 DAO 定义。
- [BaseDao CRUD 接口](#4basedao-crud接口说明)：实体、原生 SQL 与分页操作。
- [条件构造器](#5条件构造器criteria)：`QueryCriteria` 与 `UpdateCriteria` 的使用方式。
- [SQL 构建器指南](https://github.com/llllllxy/tiny-jdbc/blob/HEAD/SQL.md)：参数化 SQL、表达式、分组与分页。
- [自动填充](#12字段自动填充metaobjecthandler)、[拦截器](#10拦截器机制)、[SQL 日志](#15sql日志打印分析)。

### 优势

- **轻量级**：除了 Spring JDBC 本身，再无任何第三方依赖，轻量可靠
- **性能高**：依托高性能的 Spring JDBC，在执行数据库操作时性能基本无损耗，能够满足高并发场景下的应用需求
- **功能强**：既支持原生 sql 操作，让开发者可以灵活编写复杂的 sql 语句；又支持实体类映射操作，通过简单的配置即可实现对象与数据库表的映射。BaseDao
里封装了大量的通用方法，配合强大灵活的条件构造器（Criteria）和SQL构造器（SQL），基本能满足各类使用需求。
- **支持 Lambda 形式调用**：条件构造器（Criteria）和SQL构造器（SQL）支持Lambda形式调用，编译期语法增强，无需再担心字段写错，提高代码的安全性和可维护性
- **支持主键自动生成**：内含多种主键生成策略，包括自增主键、UUID、雪花ID 等，同时也支持自定义 ID 生成策略，满足不同业务场景下的主键生成需求。
- **支持多种数据库分页方言**：包括 MySQL、ORACLE、DB2、PostgreSql 等多种常用数据库，无需额外配置，框架会自动识别数据库类型并采用相应的分页方言，大大简化了分页查询的开发工作。
- **同时支持 SpringBoot2 和 SpringBoot3**

### 支持数据库

-…
