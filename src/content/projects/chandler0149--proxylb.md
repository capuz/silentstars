---
repo: "chandler0149/proxylb"
name: "proxylb"
description: "A multi-feature loadbalancer with support for mtproto,socks5,shadowsocks "
url: "https://github.com/chandler0149/proxylb"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-05-11T08:30:16Z"
lastCommitAt: "2026-06-28T07:07:39Z"
lastReleaseAt: "2026-06-28T07:13:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["chandler0149"]
openGraphImageUrl: "https://opengraph.githubassets.com/01d467238e23f289a57424cb20e77fd5780f8fc51a6a2ff0ca726f94aa16f9fd/chandler0149/proxylb"
---

# ProxyLB

[English](README_en.md) | [简体中文](README.md)

使用 Rust 编写的高性能代理负载均衡器。支持 SOCKS5、Shadowsocks、HTTP 和 MTProto 入站协议，内置负载均衡、健康检查以及零停机热重载。

---

## 🛠️ 功能特性

### 协议与传输层
- **入站:** SOCKS5 (TCP/UDS/UDP，可选认证与 TLS)、Shadowsocks (TCP/UDP，AEAD 加密)、HTTP (`CONNECT` 隧道与 `GET` 代理，可选 Basic Auth 和 TLS)、MTProto (FakeTLS，可用作 Telegram 代理)。
- **出站:** 直连 (Direct)、SOCKS5h (TCP/UDS/UDP)、Shadowsocks (TCP/UDP)。
- **传输层:** 入站和出站均支持 TCP、UDP 和 Unix 域套接字 (UDS)。

### 路由与负载均衡
- **层级路由:** 将特定的入站监听器绑定到嵌套策略组。
- **路由策略:**
  - `failover` — 优先使用第一个健康的后端。
  - `urltest` — 路由到延迟最低的后端。
  - `loadbalance` — 路由到活跃连接数最少的后端。
  - `hash` — 一致性哈希，确保相同请求固定路由到同一后端。
- **全局兜底:** 未明确指定路由的入站会默认使用全局的 `failover_order` 进行流量转发。

### 运维控制
- **Subcommand CLI:** 提供标准的子命令接口（如 `proxylb run -c config.yaml`）。
- **零停机热重载:** 发送 `SIGHUP` 信号在不中断活动会话的情况下重载配置。
- **网络状态感知:** 检测到链路或网关变更时自动触发重新探测。
- **内置 Web 仪表盘:** 零依赖的 React Web UI，直接编译打包进二进制文件中。支持 10 秒实时流量波形图、客户端追踪和后端延迟可视化。查阅 [RESTful API 接口文档](./restapi.md)。
- **内置 AdBlock:** 在后台定期获取并刷新 AdGuard/Hosts 格式的过滤规则（默认关闭，以保证零开销纯代理转发）。

---

## ⚡ 性能

ProxyLB 为最大吞吐量和极低延迟而生：

- **零拷贝中继:** 在 Linux 上对未加密的中继使用 `splice(2)` 绕过用户空间。加密中继使用优化的缓冲区操作。
- **预热连接池:** 提前在后台完成出站握手，极大地降低热路径延迟。
- **无锁热路径:** 使用原子操作和 `ArcSwap`…
