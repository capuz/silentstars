---
repo: "atreasureboy/ovogo"
name: "ovogo"
description: "Ovogo: Autonomous Red Team Coordination Engine. 基于 AI Agent 的自动化渗透测试与红队协同引擎（专为靶场环境设计），支持 MITRE ATT&CK 攻击链生成、多节点并行利用与 Flag 自动化收集。"
url: "https://github.com/atreasureboy/ovogo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-agent", "automated-security", "ctf-solver", "cyber-range", "langgraph", "llm-security", "mitre-attack", "offensive-security", "pentesting", "red-team"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-16T02:34:24Z"
lastCommitAt: "2026-07-01T07:06:04Z"
lastReleaseAt: "2026-04-22T04:23:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 36
maintainers: ["atreasureboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f29a30fcf053dbdb745de3a87a5f6dfcf5271bd4e8f83387980d2b20c9fda2d/atreasureboy/ovogo"
---

# Ovogo — 自主红队协调引擎

**AI 驱动的渗透测试自主协调 Agent | Think-Act-Observe 引擎 | 多 Agent 编排 | 防护感知利用 | 跨轮次记忆**

> 用一句话启动: `ovogo "对 target.com 进行渗透测试"`

</div>

---

## 目录

- [项目简介](#项目简介)
- [完整架构全景图](#完整架构全景图)
- [核心模块详解](#核心模块详解)
  - [执行引擎：Think-Act-Observe](#执行引擎think-act-observe)
  - [状态机编排器](#状态机编排器)
  - [子 Agent 作战体系](#子-agent-作战体系)
  - [记忆与知识系统](#记忆与知识系统)
  - [工具系统（22 Tools）](#工具系统22-tools)
  - [安全基础设施](#安全基础设施)
  - [环境感知与绕过引擎](#环境感知与绕过引擎)
  - [工程化能力](#工程化能力)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [设计决策](#设计决策)
- [技术栈](#技术栈)
- [安全声明](#安全声明)

---

## 项目简介

Ovogo 是一个**自主红队协调引擎**——它不是一堆散装的扫描脚本，而是一个具备完整推理能力的 AI Agent，能够：

1. **理解目标** — 接收渗透测试目标（URL / IP / 域名）
2. **环境感知** — 自动检测 WAF/EDR/沙箱防护，生成结构化绕过建议
3. **制定计划** — 基于 MITRE ATT&CK 框架自动生成攻击链
4. **并行分发** — 同时派遣多个专业子 Agent 执行侦察、扫描、利用
5. **防护感知利用** — 集成 Havoc C2 / Sliver C2 / APT28 三大框架的 23 种绕过技术
6. **监控进度** — 定时读取子 Agent 输出，评估进展，调整策略
7. **联动利用** — 将一个 Agent 的发现传递给另一个 Agent 利用
8. **收集 Flag** — 自动搜索、提取目标 Flag
9. **生成报告** — 汇总所有发现，形成完整攻击链记录

**与传统红队框架的本质区别：**
- 传统框架 = 脚本编排（if-then 流程固定，遇防护即失效）
- Ovogo = AI 自主决策 + 防护感知（LLM 每轮推理，动态检测防护并选择绕过技术）

---

## 完整架构全景图

```…
