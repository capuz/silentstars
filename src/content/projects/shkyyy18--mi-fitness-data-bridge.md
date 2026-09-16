---
repo: "shkyyy18/mi_fitness_data_bridge"
name: "mi_fitness_data_bridge"
description: "Unofficial Mi Fitness data export to local SQLite, CSV and JSON, with a local stdio MCP server. 小米运动健康数据导出；实验性，兼容性依设备与地区而异。"
readmeQualityOk: true
url: "https://github.com/shkyyy18/mi_fitness_data_bridge"
homepage: "https://shkyyy18.github.io/mi_fitness_data_bridge/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["data-export", "health-data", "local-first", "mcp", "mi-fitness", "python", "sqlite", "csv", "json", "model-context-protocol"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-07-15T23:20:52Z"
lastCommitAt: "2026-09-16T08:46:51Z"
lastReleaseAt: "2026-08-13T18:53:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["shkyyy18", "ogemboeugene", "le-soleil-se-couche"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec2346fcfd06972d4086d565ddbac679fe5c94d4b8e36c91559959b7beba1be8/shkyyy18/mi_fitness_data_bridge"
---

> English: [README.en.md](https://github.com/shkyyy18/mi_fitness_data_bridge/blob/HEAD/README.en.md)

# 小米设备数据导出skill（Mi Fitness Data Bridge）

**把小米运动健康（Mi Fitness）数据保存到自己的电脑，导出为 CSV、JSON 或 SQLite。** 适合个人备份、表格整理和自己的分析程序；也提供 Python 接口和本机 stdio MCP 查询工具。实际可获取的数据类型取决于设备、账户地区和上游服务。

> **非官方、实验性项目。** 本项目与小米没有隶属、背书或支持关系；小米、米家（Mi Home）和 Mi Fitness 是小米公司的商标。适配器依赖非公开上游接口，小米的服务、账户地区、设备、固件或认证方式变化后，登录、连接或某些数据类型可能随时失效。仅可用于你有权访问的账户和数据。

**[▶ 不用登录，先看合成数据导出演示](https://shkyyy18.github.io/mi_fitness_data_bridge/)** · [兼容性与上手限制](https://github.com/shkyyy18/mi_fitness_data_bridge/blob/HEAD/docs/compatibility.md) · [English](https://github.com/shkyyy18/mi_fitness_data_bridge/blob/HEAD/README.en.md)

## 先试结果，再连接账户

- **只是想看导出效果？** 打开上面的静态演示，在浏览器中切换活动、睡眠、运动和身体测量样例，下载合成 CSV / JSON。无需安装、账号或 Token。
- **想验证本地流程？** 按下方安装步骤完成后，运行 `python examples/synthetic_demo.py`；无需 `setup`，不连接小米。
- **想同步自己的数据？** 先阅读[兼容性和凭证前提](https://github.com/shkyyy18/mi_fitness_data_bridge/blob/HEAD/docs/compatibility.md)。当前没有一键账号授权流程，也不能保证所有设备和地区可用。

> 演示只使用合成记录，不证明真实云端同步或设备兼容性。静态演示页不接收凭证或健康记录。真实导出可能含明文 `user_id`；本地 MCP 也不等于整个 AI 工作流离线，请另外确认客户端和模型如何处理数据。

*截图和本文全部示例均为合成数据；不含凭证、账户标识符或真实健康导出数据。*

## 功能一览

| 功能 | 说明 |
| --- | --- |
| 本地缓存…
