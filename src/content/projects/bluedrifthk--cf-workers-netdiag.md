---
repo: "BlueDriftHK/CF-workers-netdiag"
name: "CF-workers-netdiag"
description: "Cloudflare Workers 实现 IP 地址检测与地区验证的工具"
readmeQualityOk: true
url: "https://github.com/BlueDriftHK/CF-workers-netdiag"
homepage: "http://ipcheck.bjhr.space/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [70, 30]
stars: 13
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-16T09:06:41Z"
lastCommitAt: "2026-07-25T06:03:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 51
maintainers: ["BlueDriftHK"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6bcd2b2964da728a3288e586c3c67583f1c516484318849f036abe8024898a8/BlueDriftHK/CF-workers-netdiag"
discussionCount: 0
---

# NetSight Pro

> 部署在 Cloudflare Workers 边缘节点的专业级网络诊断工具
> **实时监控 · 多维度测试 · 毫秒级响应 · 极光玻璃拟态设计 · 企业级安全防护**

**版本**: 4.2 | **许可证**: AGPL-3.0 | **最后更新**: 2026-07-25

---

## 目录

- [功能特性](#功能特性)
- [界面预览](#界面预览)
- [快速开始](#快速开始)
- [API 端点](#api-端点)
- [命令行测试](#命令行测试)
- [配置说明](#配置说明)
- [技术架构](#技术架构)
- [项目结构](#项目结构)
- [安全策略](#安全策略)
- [更新日志](#更新日志)
- [常见问题](#常见问题)
- [故障排查](#故障排查)
- [许可证](#许可证)

---

## 功能特性

### 网络质量检测

| 功能 | 说明 |
| :--- | :--- |
| **实时延迟监控** | 每 2 秒自动测量 RTT，实时趋势图表（Canvas 绘制） |
| **丢包率测试** | 10 次请求测试，实时计算丢包百分比 |
| **网络抖动评估** | 稳定性分级（非常稳定 / 稳定 / 不稳定 / 极不稳定） |
| **连接质量评分** | 五档分级（优秀 / 良好 / 一般 / 较差 / 极差） |
| **最低 / 最高 RTT** | 统计周期内的延迟极值 |
| **DNS 解析测试** | 通过 Worker 代理路由测试 Cloudflare/Google/GitHub 等域名真实延迟 |
| **多节点对比** | 同时测试多个 Worker 节点的延迟，表格直观对比 |

### 性能测试工具

| 功能 | 说明 | 限制 |
| :--- | :--- | :--- |
| **带宽测速** | 多档位测试（100KB、500KB、2MB） | 最大 5MB |
| **CPU 性能测试** | 密集数学运算，返回 ops/ms | 最大 200 万次迭代，每 IP 每分钟 3 次 |
| **并发请求测试** | 模拟多并发下载（4/6/8 路） | 内部限制 4 并发，最大 16 路 |
| **流式传输测试** | 测试吞吐量（逐步增大数据块） | 最大 10MB |
| **WebSocket 延迟测试** | 5 次 ping-pong 往返延迟，30 秒心跳保持 | - |
| **流媒体连通性** | 检测 Netflix/Disney+/YouTube/ChatGPT 的可访问性 | - |

### 测速历史与用量统计

- **测速历史记录**：自动保存最近 5 条测速结果到 Cloudflare KV…
