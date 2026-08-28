---
repo: "mist-trade/mist"
name: "mist"
description: "AI智能体+缠论分析的服务"
readmeQualityOk: true
url: "https://github.com/mist-trade/mist"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2025-02-11T16:06:11Z"
lastCommitAt: "2026-08-28T14:34:20Z"
lastReleaseAt: "2026-08-25T09:27:24Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 70
maintainers: ["moyui"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddea5c54a603e21617247f802c41f5272743732341aa5bf9fc5d85f9f58a5cb2/mist-trade/mist"
---

# Mist 智能量化分析核心系统

</p>

Mist 是面向 A 股市场的核心量化计算与行情服务系统。采用 NestJS Monorepo 架构构建，集成了底层硬件行情接入（TDX/QMT）、实时 1 分钟蜡烛线聚合、纯正缠论（Chan Theory）算法引擎、TA-Lib 技术指标、实时策略求值与告警推送、以及独立的分布式回测运行时。

---

## 🌟 核心特性

- **多源实时行情接收与订阅生命周期**：严格解码 TDX / QMT 原生数据帧（schema-v2），支持声明式订阅同步、自动对账与盘前健康巡检。
- **当日 1m 蜡烛产品化（Candle Aggregator）**：基于事件驱动的高性能内存聚合与 Redis 原子封存（MULTI/EXEC），支持 A 股 242 桶交易宇宙与延迟 Grace 窗口。
- **纯正缠论算法库（ChanCore）**：严格遵循缠论原典算法——合并 K、宽笔、特征序列分段、对称无方向中枢、第一/二/三类买卖点（BSP）全量实时与回测求值。
- **完整指标计算套件**：内置 MACD、RSI、KDJ、ATR、ADX 等常用技术指标与量能剖面。
- **事件驱动策略信号引擎**：基于 BullMQ 实现蜡烛封存即刻分发，支持策略扫描注册表与并发互斥执行。
- **多渠道告警通知投递**：支持企业微信机器人、Webhook 投递与 OpenObserve 告警联动。
- **独立回测运行时（Backtest Runtime）**：将计算密集的策略与缠论回测剥离为独立微服务，支持 TCP RPC 调用与资源准入控制。
- **收盘权威数据同步**：收盘后自动从数据源拉取权威 K 线覆盖入库，确保历史数据纯净。

---

## 🏛️ Monorepo 架构与服务拓扑

```text
mist (NestJS Monorepo)
├── apps/
│   ├── mist/                      # 主业务 API 与 Ingress 接收端 (HTTP :8001)
│   ├── chan/                      # 缠论计算独立 API (HTTP :8008)
│   ├── signal/                    # 实时策略信号评估引擎 (HTTP :8010, TCP RPC :9010)
│   ├── backtest/                  # 隔离回测计算运行时 (HTTP :8004, TCP RPC :8005)
│   ├── notification/              # 告警与消息通知服务 (HTTP :8006)
│   ├── schedule/                  #…
