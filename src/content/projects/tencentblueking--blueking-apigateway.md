---
repo: "TencentBlueKing/blueking-apigateway"
name: "blueking-apigateway"
description: "蓝鲸 API 网关（API Gateway），是一种高性能、高可用的 API 托管服务"
url: "https://github.com/TencentBlueKing/blueking-apigateway"
language: "Python"
languages: ["Python"]
languagePcts: [60]
topics: ["apigateway", "gateway", "control-panel", "esb"]
stars: 55
forks: 44
openIssues: 9
closedIssues: 22
watchers: 9
contributors: 25
recentReleases: 0
createdAt: "2023-02-06T03:59:36Z"
lastCommitAt: "2026-07-03T06:23:04Z"
lastReleaseAt: "2023-06-29T07:11:23Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 56
maintainers: ["wklken", "lhzzforever", "Carlmac"]
openGraphImageUrl: "https://opengraph.githubassets.com/3064349b13ec0d3962ab6aae4be09c02292796df377e5fc8e5d1f9394b0c984a/TencentBlueKing/blueking-apigateway"
---

---

简体中文 | [English](README_EN.md)

## 概览

蓝鲸 API 网关（API Gateway），是一种高性能、高可用的 API 托管服务，可以帮助开发者创建、发布、维护、监控和保护 API， 以快速、低成本、低风险地对外开放蓝鲸应用或其他系统的数据或服务。

蓝鲸 API 网关分为控制面和数据面，控制面负责 API 的配置、发布、监控、权限管理等功能，数据面负责 API 的流量转发、安全防护等功能。其中数据面是基于 [Apache APISIX](https://github.com/apache/apisix) 增加一系列插件以支持蓝鲸 API 网关的特性。得益于 Apache APISIX 动态、实时、高性能等特点，蓝鲸 API 网关能够支持高并发、低延迟的 API 托管服务。

本项目是 `蓝鲸 API 网关 - 控制面`。

**蓝鲸 API 网关核心服务开源项目**

- 蓝鲸 API 网关 - [控制面](https://github.com/TencentBlueKing/blueking-apigateway)
  - dashboard：API 网关的控制面
  - dashboard-front:  API 网关控制面前端
  - operator: 网关配置转换
  - core-api: 网关高性能核心 API
  - mcp-proxy: 网关 MCP server 代理
  - esb: ESB 组件服务
- 蓝鲸 API 网关 - [数据面](https://github.com/TencentBlueKing/blueking-apigateway-apisix)

## 功能特性

- API 生命周期管理: 涵盖 API 的配置、发布、测试、监控、下线等各个生命周期的管理。
- 版本发布: 支持多环境管理，用户可新建环境，满足开发、测试、正式等多环境的需求;提供 API 的版本管理，各环境可一键切换版本，互不影响。
- 文档和SDK: 提供在线文档，及调用网关 API 的 SDK，降低 API 的使用门槛。
- 权限管理: 默认开启权限限制, 支持权限期限及授权维度。
- 安全防护: 支持蓝鲸应用认证、用户认证，控制请求来源; 支持 IP 访问控制，可设置 IP 黑/白名单; 支持秒级的流量控制，可根据需求进行流量分配，以避免高流量导致的后端服务过载; 支持操作审计。
- 可观测性: 支持调用流水查询; 支持接入 OpenTelemetry; 内置多种告警策略。

## 快速开始

- [本地开发部署指引](docs/DEVELOP_GUIDE.md)

## 支持

- [蓝鲸 API…
