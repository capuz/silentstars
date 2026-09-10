---
repo: "pucj0/gbaselite"
name: "gbaselite"
description: "轻量兼容mysql数据库，go语言，0成本迁移"
readmeQualityOk: true
url: "https://github.com/pucj0/gbaselite"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-04T01:32:44Z"
lastCommitAt: "2026-09-10T07:56:37Z"
lastReleaseAt: "2026-09-09T03:20:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 47
maintainers: ["pucj0"]
openGraphImageUrl: "https://opengraph.githubassets.com/3de7260c427666d16d487e3d9c241b3d9adaf50b334b51d23b4f40c69720ab44/pucj0/gbaselite"
---

# GBaseLite

GBaseLite 是一个使用 Go 编写、默认单机运行的轻量级关系型数据库服务。它不依赖 MySQL 或
PostgreSQL，使用自己的存储文件持久化数据，并通过 MySQL 协议向 Navicat、DBeaver、
JDBC、Go MySQL 驱动等客户端提供服务。

当前版本：`1.1.2`（工作区开发改造；历史发布包以对应发布说明为准）

**MVCC 是唯一运行事务引擎。snapshot/paged 仅作为离线迁移源格式保留。**

> GBaseLite 是 MySQL 兼容子集，不是 MySQL 的完整替代品。生产使用前请阅读
> [兼容范围与限制](#兼容范围与限制)，并使用真实业务 SQL 做完整验证。

## 目录

- [使用者入口](#使用者入口)
  - [SQL 使用教程](https://github.com/pucj0/gbaselite/blob/HEAD/docs/使用文档/SQL使用教程.md)
  - [SQL 兼容参考](https://github.com/pucj0/gbaselite/blob/HEAD/docs/使用文档/SQL兼容性参考.md)
- [项目定位](#项目定位)
- [MVCC 范围与写入优化](#mvcc-范围与写入优化)
- [数据库实测对比](#数据库实测对比)
- [主要能力](#主要能力)
- [快速开始](#快速开始)
- [配置](#配置)
- [部署](#部署)
- [升级与回滚](#升级与回滚)
- [SQL 示例](#sql-示例)
- [兼容范围与限制](#兼容范围与限制)
- [旧数据迁移](#旧数据迁移)
- [备份与恢复](#备份与恢复)
- [CLI](#cli)
- [持久化布局](#持久化布局)
- [项目结构](#项目结构)
- [开发与测试](#开发与测试)
- [本地发布打包](#本地发布打包)
- [GitHub 与 Docker Hub 发布](#github-与-docker-hub-发布)
- [贡献规范](#贡献规范)
- [开源许可证](#开源许可证)
- [路线图](#路线图)

## 使用者入口

当前 SQL 范围以本页[兼容矩阵](#兼容范围与限制)和 [MVCC 文档](https://github.com/pucj0/gbaselite/blob/HEAD/docs/使用文档/MVCC复制与高可用.md)为准。
[SQL…
