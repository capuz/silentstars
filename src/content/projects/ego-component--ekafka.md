---
repo: "ego-component/ekafka"
name: "ekafka"
description: "ekafka,kafka,ego"
url: "https://github.com/ego-component/ekafka"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 7
forks: 6
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-04-19T15:27:24Z"
lastCommitAt: "2026-06-25T06:41:02Z"
lastReleaseAt: "2025-09-17T09:03:53Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 53
maintainers: ["kl7sn", "sevennt"]
openGraphImageUrl: "https://opengraph.githubassets.com/827afe5495088b7a6d5357240f78350e5477771315acf4db7beeb8ce832221ad/ego-component/ekafka"
fundingLinks: ["CUSTOM:https://cdn.gocn.vip/gotomicro/s.jpeg"]
---

# ekafka 组件使用指南

## Table of contents

- [基本组件](#基本组件)
    - [快速上手](#快速上手)
- [ConsumerGroup](#ConsumerGroup)
- [Consumer Server 组件](#Consumer-Server-组件)
- [Producer](#Producer)
- [Compression](#Compression)
- [SASL Support](#SASL-Support)
- [测试](#测试)
    - [E2E 测试](#E2E-测试)

## 注意事项
如果生产、消费kafka比较慢，并不一定是kafka慢，而是你的配置不正确，请认真查看文档：https://github.com/segmentio/kafka-go/issues/417
* producer比较慢，可能是用的默认配置batchTimeout，1s发送

以下列举kafka producer客户端比较关键的默认配置
  
* BatchTimeout  批量发送消息的周期，默认1s
* BatchSize 批量发送的消息数量，默认100条
* BatchBytes 批量发送的消息大小，默认1MB
* Async 设置成true时会导致WriteMessages非阻塞，会导致调用WriteMessages方法获取不到error
* RequiredAcks ACK配置
  * RequireNone (0) fire-and-forget，producer不等待来自broker同步完成的确认后，就可以发送下一批消息
  * RequireOne  (1) producer在leader已成功收到的数据并得到确认后，才发送下一批消息
  * RequireAll  (-1) producer在所有follower副本确认接收到数据后，才发送下一批消息

更改以上默认配置，可以让速度变快。当然默认配置是可以让你的服务性能损耗耕地，或者可靠性更高，所以你自己需要权衡业务需求，更改配置。	

## 基本组件

对 [kafka-go](https://github.com/segmentio/kafka-go) 进行了轻量封装，并提供了以下功能：

- 规范了标准配置格式，提供了统一的 Load().Build() 方法。
- 支持自定义拦截器
- 提供了默认的 Debug 拦截器，开启 Debug 后可输出 Request、Response 至终端。

### 快速上手

生产者消费者使用样例可参考 [example](examples/main.go)

## ConsumerGroup

相对于 Consumer（对…
