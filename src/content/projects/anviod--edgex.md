---
repo: "anviod/edgex"
name: "edgex"
description: "边缘计算网关 edgex 部署于工业现场(零依赖)，南向支持Modbus、BACnet、OPC-UA 、CAN、PLC，北向通过MQTT、OPC-UA Server、Sparkplug-B接入云端，实现数据采集与边缘计算。  Edge Gateway collects data southbound via Modbus, OPC-UA Client, CAN, PLC, and connects northbound via MQTT, OPC-UA Server, Sparkplug-B for edge computing and cloud integration."
readmeQualityOk: true
url: "https://github.com/anviod/edgex"
homepage: "https://anviod.github.io/edgex/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["bacnet", "edge", "iot", "modbus", "mqtt", "things", "plc", "s7", "sparkplug-b", "go"]
stars: 90
forks: 27
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T06:59:13Z"
lastCommitAt: "2026-07-21T06:09:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 38
maintainers: ["anviod"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f00aa842a5ef6dc9575766c54e7198d223c572df900dd5da272c785575ad7fa/anviod/edgex"
discussionCount: 1
---

# Industrial Edge Gateway

[中文文档站点](https://anviod.github.io/edgex/) | [English](https://github.com/anviod/edgex/blob/HEAD/README.en.md)

EdgeX（工业边缘网关）是一款轻量级工业边缘计算网关软件，面向制造、能源、楼宇等现场部署。后端采用 Go，管理界面采用 Vue 3 + Vuetify。

## 产品概览

EdgeX 部署在工业现场，使命是打通 **OT 设备 ↔ IT 系统** 的数据通道 — 南向统一接入、边缘就地处理、北向灵活对接，一机完成采集到上报的闭环。**以南向 13 协议采集写入 ShadowCore 影子真源，联动虚拟设备、边缘规则、持久化与北向通道；并以工业级 SLA 与 Soak 长稳验证保障现场长期可靠运行。**

- **统一接入**：异构 PLC、表计、楼宇与网络设备，一套网关采集
- **影子真源**：内存 ShadowCore 统一服务 UI、边缘计算与北向上报
- **边缘智能**：本地规则与派生点位，联动控制、减轻上行
- **开放集成**：对接云平台、SCADA 与企业应用，支持反向写控
- **工业级稳定**：内置指标门控、Soak 长稳回归与 CI 五 gate，SLA 可观测、可验证

> 以工业现场为设计原点，坚持稳定性优先、统一架构、长期可维护，构建面向未来的工业边缘计算平台。

能力与指标详见 [产品优势](#产品优势)；精简宣传见 [产品手册](https://github.com/anviod/edgex/blob/HEAD/docs/guide/PRODUCT.zh-CN.md)；完整说明见 [产品说明](https://anviod.github.io/edgex/guide/%E4%BA%A7%E5%93%81%E8%AF%B4%E6%98%8E.html#产品优势)（[源码](https://github.com/anviod/edgex/blob/HEAD/docs/guide/产品说明.md#产品优势)）。

## 为何叫 EdgeX？

每个工业现场都有一批「还没被接进来」的设备与数据 — 不同协议、不同年代、不同厂商，各自沉默在 OT 一侧。它们像是一群尚未被发现的潜能：有价值，却还没进入 IT 的视线。

我们把这个未知数叫作 **X**。

**Edge** 是它们所在的地方：产线旁的控制柜、楼宇的弱电间、站场的边缘机柜 — 离数据源最近、也最该做决策的位置。**X** 则是现场的交叉点：多协议在此汇聚，边缘规则在此运行，OT 与 IT 在此第一次真正对话。

**EdgeX** 因此不是两个字母的简单拼接，而是 **Edge（边缘）+…
