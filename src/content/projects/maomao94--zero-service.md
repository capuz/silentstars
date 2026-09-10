---
repo: "maomao94/zero-service"
name: "zero-service"
description: "zero-service: ⚡ 基于 go-zero 的 Go 微服务脚手架 | 开箱即用 gRPC服务和API网关、文件传输、IEC104协议、modbus 协议、DJI 机巢上云 api 支持"
readmeQualityOk: true
url: "https://github.com/maomao94/zero-service"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["go-zero", "grpc", "iec-104", "modbus", "go", "tdengine", "dji", "dji-sdk"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-05T06:20:21Z"
lastCommitAt: "2026-09-10T08:20:08Z"
lastReleaseAt: "2025-12-23T03:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["maomao94"]
openGraphImageUrl: "https://opengraph.githubassets.com/6319cc18fc3be362536cd534fdf57004e20f9e3bdfe91f846f223c854a6cc07a/maomao94/zero-service"
---

# Zero-Service

面向工业物联网与边缘集成场景的 Go 微服务集合。项目基于 [go-zero](https://github.com/zeromicro/go-zero) 构建，覆盖工业协议接入、流数据处理、任务调度、实时通信和无人机机场等能力。

Zero-Service 不是一个必须整体部署的单体应用。各服务可以按需独立运行，也可以通过 gRPC、Kafka、MQTT 和 SocketIO 组合成完整业务链路。

[快速开始](#快速开始) · [架构概览](https://github.com/maomao94/zero-service/blob/HEAD/docs/architecture.md) · [完整文档](https://github.com/maomao94/zero-service/blob/HEAD/docs/README.md) · [参与贡献](https://github.com/maomao94/zero-service/blob/HEAD/CONTRIBUTING.md)

## 核心能力

- **视频会议**：基于 LiveKit Server 实现实时音视频会议，提供会议管理、票据邀请、Webhook 状态同步和聊天消息能力。
- **IEC 104 数采**：多从站通信，通过 Kafka、MQTT 和 gRPC 并行分发采集数据，并支持 ASDU 合并与时序存储。
- **DJI 云平台接入**：封装 Dock 3 Cloud API，支持航线任务、直播推流和 DRC 指令飞行。
- **任务调度**：提供 asynq 异步回调、Plan/Batch/ExecItem 计划任务和基于 RRULE 的 CronJob 周期调度。
- **实时通信**：通过 SocketIO 网关完成连接管理、房间广播、服务端推送和 MQTT 桥接。
- **工业协议桥接**：支持 Modbus TCP/RTU、MQTT、Kafka、gRPC-Gateway 及反向隔离装置接入。
- **变电站巡检**：提供 ISP 协议服务端与代理，连接上级平台和下级巡检设备。
- **通用基础能力**：包含地理信息计算、对象存储、文件传输、容器管理、服务发现和可观测性组件。

## 快速开始

### 环境要求

- Go 1.26 或更高版本
- Git
- 与目标服务匹配的外部依赖，例如 Redis、Kafka、数据库或 MQTT Broker

### 获取代码

```bash
git clone https://github.com/maomao94/zero-service.git
cd zero-service
go mod download
```

### 启动服务

各服务均可独立运行。以 Trigger…
