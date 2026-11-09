---
repo: "lets-mica/mica-net"
name: "mica-net"
description: "mica-mqtt 的底层网络框架,基于 Java AIO 的轻量、高性能非阻塞网络通信框架。"
readmeQualityOk: true
url: "https://github.com/lets-mica/mica-net"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-08-04T01:33:58Z"
lastCommitAt: "2026-11-09T04:34:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 69
maintainers: ["ChunMengLu", "renovate[bot]", "dingxiaobu"]
openGraphImageUrl: "https://opengraph.githubassets.com/9831ff42cd350eb3ec778622c5643851c041e8d5f39a88ce97ecc9d01d44fa19/lets-mica/mica-net"
---

# mica-net Java 网络框架

## 📋 项目概述

mica-net 是 mica-mqtt 的底层网络框架，基于 Java AIO 的轻量、高性能非阻塞网络通信框架，TCP 使用 Java AIO 的 `AsynchronousSocketChannel`，UDP 使用 Java NIO 的 `DatagramChannel` 实现非阻塞网络通信。

核心能力包括：

- **TCP/UDP 网络通信**：TCP 基于 AIO `AsynchronousSocketChannel`，UDP 基于 NIO `DatagramChannel`
- **HTTP/HTTPS 与 WebSocket**：内置编解码器，支持 SSE、Stream、Router 等
- **MCP（Model Context Protocol）服务端**：完整实现 `tools`、`resources`、`prompts`、`sampling` 等协议能力
- **TCP 代理协议**：支持 PROXY protocol V1/V2，可解析 nginx、ELB 转发的原始 IP
- **SSL/TLS**：支持双向认证、PKCS12 证书，可自定义协议版本与加密套件
- **集群与节点管理**：内置集群同步、节点选择、心跳与重连

[✨✨✨推广：**BladeX 物联网平台**✨✨✨iot.bladex.cn](https://iot.bladex.cn?from=mica-mqtt)

------

## 🏗️ 核心设计架构

### 1. 核心组件设计

```
┌─────────────────────────────────────────────────────────────┐
│                         Tio (API层)                          │
│  提供所有对外API：send、close、bind、unbind等操作              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│          NetChannel / ChannelContext / UdpChannel           │
│  • NetChannel：抽象网络通道接口（send、close）                │
│  • ChannelContext：TCP 连接上下文…
