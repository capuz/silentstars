---
repo: "hloolx/codpl"
name: "codpl"
description: "CODPL 是一个静态测速展示站，用来对比不同 Coding Plan / Code API 厂商与模型的响应表现。"
url: "https://github.com/hloolx/codpl"
homepage: "https://bench.codpl.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T04:20:46Z"
lastCommitAt: "2026-06-28T02:00:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e4fc47e20f369f32e9342d45cd5d9bf78a9ff6c03696a44fbfccf3584dd2cafa/hloolx/codpl"
discussionCount: 2
---

# CODPL

CODPL 是一个面向多厂商 Coding Plan / Code API 的静态评测站，用来做 Coding Plan 评测、Coding Plan 测速、Code API Benchmark、模型多厂家对比和长期趋势追踪。项目会持续展示不同平台、不同模型的 TTFT、MedianTPS、综合体验分数与历史快照，帮助开发者在接入、采购和选型前先看真实拨测结果。

如果你正在搜索这些内容，这个项目就是为它们准备的：

- Coding Plan 评测
- Coding Plan benchmark
- Coding Plan 测速
- Coding Plan 厂家对比
- Coding Plan 购买参考
- Code API 响应速度对比
- TTFT / MedianTPS / 综合体验排行

## 在线地址

- 主站：<https://codpl.15o.cc>
- 海外节点：<https://bench.codpl.com/>
- 厂家接入状态、购买链接、官方文档入口：<https://bench.codpl.com/providers>

海外节点由 Cloudflare 提供，适合海外网络访问。

## 项目在做什么

- 持续拨测多家 Coding Plan / Code API 厂商，公开展示最近一轮结果。
- 对比首字延迟 TTFT、MedianTPS、综合得分与多厂家同模型表现。
- 通过静态 JSON 快照沉淀历史数据，方便观察 24 小时与 30 天趋势变化。
- 给开发者、团队采购和模型选型提供一个公开、直观、可复查的参考页面。

这个仓库是前端发布仓库，只保留静态站点需要的前端代码与快照数据，不包含后端源码、数据库和私有环境变量。

## 当前拨测覆盖的厂家

当前公开页面已覆盖以下 Coding Plan / Code API 厂家，完整模型清单见 [BENCHMARK_COVERAGE.md](./BENCHMARK_COVERAGE.md)：

- 讯飞星辰：glm-5
- 百炼（阿里云）：Qwen3.5 Plus、glm-5、kimi-k2.5、MiniMax-M2.5
- Kimi（月之暗面）：kimi-k2.6
- MiniMax：minimax-m2.7、MiniMax-M2.5
- 阶跃星辰：step-3.5-flash
- 火山引擎：minimax-m2.5、minimax-m2.7、glm-5.1、deepseek-v3.2、kimi-k2.6、kimi-k2.5
- 智谱：glm-5、GLM-5-Turbo、glm-5.1
-…
