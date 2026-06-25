---
repo: "xjetry/nft-forward"
name: "nft-forward"
description: "Multi-tenant port-forwarding panel built on nftables (Go, single binary, SQLite)"
url: "https://github.com/xjetry/nft-forward"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [70, 22]
stars: 28
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-12T14:21:07Z"
lastCommitAt: "2026-06-25T01:30:40Z"
lastReleaseAt: "2026-06-03T03:20:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["xjetry"]
openGraphImageUrl: "https://opengraph.githubassets.com/7da39d95f140b3b9238ea497fffe6110a4f26d4bd2685e6347939859dfc1d1d4/xjetry/nft-forward"
---

# nft-forward

基于 nftables 的轻量多节点端口转发平台。**单一二进制，零外部依赖**——同一份产物在同一台主机上可以同时充当本机 TUI、多租户 Web 面板和远程受控节点，三种角色共用同一个 host daemon，规则互不覆盖。

---

## 设计思路

市面上有 realm、gost、哆啦A梦面板等方案，但各有不足：

| 维度 | realm | gost | 哆啦A梦面板 | **nft-forward** |
|------|-------|------|-----------|-----------------|
| **数据面** | 用户态 relay（单进程） | 用户态 relay + 丰富协议栈 | 调用 iptables/realm 做后端 | nftables 内核态 DNAT **或** 用户态 split-TCP，逐跳可选 |
| **多节点管理** | 无，每台机器独立配置 | 无，配置文件驱动 | 有面板，但面板与节点是独立进程 | 单二进制内置面板 + agent 反向连接，节点零端口暴露 |
| **多跳链路** | 需手动逐节点配置 | 转发链配置复杂 | 支持，但需手动对齐端口 | 面板自动编排：选跳 + 填出口，端口全自动分配对齐 |
| **多租户** | 无 | 无 | 有，但权限粗粒度 | 通道级授权（端口段 / CIDR / 带宽 / 配额），租户自助建链路 |
| **预连接优化** | 无 | 无 | 无 | userspace 模式内置 TCP 预连接池，多跳链路省掉每一跳的握手 RTT |
| **TUI** | 无 | 无 | 无 | 内置终端交互 TUI，单机场景免开浏览器 |

### 核心差异

**1. 双数据面——内核态与用户态按需混合**

realm/gost 全走用户态 relay，吞吐受限于用户态拷贝开销。nft-forward 的默认模式是 **nftables DNAT**（内核态零拷贝），吞吐量接近线速；在需要拆分 TCP 连接的多跳场景，可逐跳切换为 **userspace split-TCP** 模式——同一条链路的不同跳可以混用两种模式。

**2. TCP 预连接池（userspace 模式）**

借鉴 [TCP-preconnection-relay](https://github.com/Xeloan/TCP-preconnection-relay) 的思路：每个 userspace 转发端口预先与下一跳维持一个连接池（默认 4 条），客户端连入时直接取用已建好的连接，跳过 TCP 三次握手。在 3 跳跨洋链路（每跳 RTT 100ms+）中，可省去 300ms+ 的首字节延迟。池空时自动 fallback 为按需…
