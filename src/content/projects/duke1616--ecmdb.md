---
repo: "Duke1616/ecmdb"
name: "ecmdb"
description: "基于 CMDB、工单系统、告警中心和分布式任务调度构建的微服务智能运维平台"
readmeQualityOk: true
url: "https://github.com/Duke1616/ecmdb"
homepage: "https://duke1616.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cmdb", "docker", "monitoring", "sre", "task-scheduler", "ticket", "devops"]
stars: 148
forks: 39
openIssues: 0
closedIssues: 11
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-01-18T13:33:21Z"
lastCommitAt: "2026-09-04T08:10:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 45
maintainers: ["Duke1616"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e6886012254f794b5c3b50c295a1a0c423bfb20c02e0f0571bc8b07c793384/Duke1616/ecmdb"
discussionCount: 0
---

# ECMDB - 资产管理服务端

以 CMDB 为核心的资产模型、资源关系与插件能力服务端。

</div>

ECMDB 是一个以 CMDB 为核心的运维服务端项目。当前仓库主要提供资产模型、资产数据、模型关系、资产关系、导入导出、插件能力和终端连接等后端接口，并通过 EIAM SDK 接入登录态与权限校验。

前端界面、身份服务、工单系统、任务执行服务等由独立项目配合使用。本仓库可以单独作为 ECMDB API 服务开发，也可以通过 `deploy/docker-compose.yaml` 与其他服务一起联调。

## 主要功能

- 模型管理：支持模型、模型分组、属性、属性分组和模型关系的维护。
- 资产管理：基于自定义模型管理资产数据，支持列表、详情、搜索、加密字段读取和自定义列。
- 关系管理：维护关系类型、模型关系和资产实例关系，提供关系图谱查询接口。
- 数据导入导出：支持基于 Excel 的资产数据导入、导出和模板导出。
- 终端与文件：对接 SSH/SFTP，提供在线终端、文件浏览、上传下载、预览和基础文件操作接口。
- 权限接入：通过 EIAM SDK 做登录校验、权限校验，并在启动时同步接口权限资源。

## 特色能力：插件化资源动作

ECMDB 的插件能力用于把“资产数据”和“外部操作”连接起来。核心仓库负责插件定义导入、模型与关联关系管理、资源动作绑定、运行时上下文解析和插件服务代理；具体插件后端可以在独立仓库中实现和发布。

官方插件示例与 SSH 插件迁移到独立仓库维护：<https://github.com/Duke1616/ecmdb-plugins>。

- Schema 导入：内置插件可以随绑定自动导入模型、属性、关系类型和模型关系。
- 绑定图：插件动作可以绑定到指定模型，并定义资源字段映射、关联方向、数量基数和过滤条件。
- 动作解析：系统会根据当前资源和绑定图解析动作输入，返回前端需要的 UI 类型、参数和上下文。
- 外部插件：插件可以独立实现 Gin Web Handler、EIAM 权限接入和后端能力，并通过 ECMDB 提供的插件契约与 gRPC Runtime 接口接入主站。
- SSH 插件：`ecmdb-plugins` 中提供 SSH 终端和 SFTP 文件管理插件示例，支持从主机资源及可选网关链路中解析连接信息。

## 项目结构

```text
.
├── api/proto              # protobuf 定义与生成配置
├── cmd                    # CLI 子命令：server、init、backup、repair、plugin
├── config                 # 本地配置示例
├── deploy…
