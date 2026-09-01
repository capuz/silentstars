---
repo: "123Cx330Yrx/riftcoach-agent"
name: "riftcoach-agent"
description: "A quality-gated League of Legends post-game coaching agent built on deterministic match data, RAG, and LLM evaluation."
readmeQualityOk: true
url: "https://github.com/123Cx330Yrx/riftcoach-agent"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["ai-agent", "fastapi", "league-of-legends", "llm", "python", "rag", "riot-api"]
stars: 94
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-22T03:08:44Z"
lastCommitAt: "2026-08-31T10:37:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 27
maintainers: ["123Cx330Yrx"]
openGraphImageUrl: "https://opengraph.githubassets.com/d78eb55302eee030a9bd9f8843471f5865b86d6aaaf5791995087f2d4ad624c6/123Cx330Yrx/riftcoach-agent"
---

# RiftCoach Agent

RiftCoach 是一个基于 Riot 公开赛后数据的英雄联盟复盘与训练助手。项目坚持“程序计算事实、知识库提供解释依据、模型负责组织表达、独立评测决定是否发布”的设计原则。

## 当前定位

当前版本包含 RiftCoach 独立领域核心、质量门控 Harness、可靠 Tool Runtime、RAG v1、受限
AgentRuntime、PostgreSQL 异步任务基座、玩家身份绑定，以及 owner-scoped Conversation/Message
foundation、typed Memory、Training Plan/Progress、Memory-aware Context/terminal turns 和 owner lifecycle/
export。阶段 6 Session/Memory V1 已由 `cbc7cbd` / Actions `32408101770` 完成最终 exact-SHA 公共闭环。
Stage 7 标准 MCP 与动态 Meta V1 已由 `fac6fe0` / Actions `32484257736` 完成最终公共闭环：RiftCoach
既能通过标准 MCP 调用受限 OP.GG lane-meta，也能被官方 MCP SDK 经 stdio 调用。项目没有直接合并
EchoMind 或 AGI-Saber；正式 Auth/RSO、SSE/前端、Riot+OP.GG 精确版本融合与阶段 8 恢复/Multi-Agent
仍未实现。

如果你想理解这些能力怎样一步步搭建、对应哪些源码/测试、面试时怎样准确表述，请从
[学习与工程证据索引](https://github.com/123Cx330Yrx/riftcoach-agent/blob/HEAD/docs/learning/README.md) 开始。项目执行位置仍以
[当前执行状态](https://github.com/123Cx330Yrx/riftcoach-agent/blob/HEAD/docs/project_execution_state.md) 为唯一事实源。

当前数据分工：

- Riot API：账号、对局详情与时间线事实；
- MatchAnalyzer：补刀、经济、伤害、视野、参团率与死亡时间等确定性指标；
- Data Dragon：英雄、装备、符文和召唤师技能的官方静态中文映射；
- OP.GG MCP：受限 lane-meta 当前快照，固定 partial provenance，不覆盖 Riot 官方事实；
- 本地 RAG v1：混合召回、来源过滤、引用证据、拒答和独立保留集门禁；
- 智谱 GLM：依据事实与检索证据生成教练式中文报告；
-…
