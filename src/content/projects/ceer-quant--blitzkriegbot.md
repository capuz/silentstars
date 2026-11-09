---
repo: "ceer-quant/BlitzkriegBot"
name: "BlitzkriegBot"
description: "不是又一个量化框架，而是一套属于独立交易者的TradingOS。  BlitzkriegBot 用 Rust 重构散户高频交易基础设施，从策略开发、风控执行到多市场扩展全面统一。市场可以变化，策略可以迭代，但你的交易内核永远稳定可靠。Build Once, Trade Everywhere.让个人拥有机构级交易能力。"
readmeQualityOk: true
url: "https://github.com/ceer-quant/BlitzkriegBot"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 14
forks: 4
openIssues: 0
closedIssues: 340
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-09-14T06:23:20Z"
lastCommitAt: "2026-11-09T03:30:04Z"
lastReleaseAt: "2026-10-26T01:02:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["cutefancer", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1369388416/9c13c750-d553-4db9-b541-5cb6b92c73eb"
discussionCount: 0
---

# BlitzkriegBot

### 独立交易者的 TradingOS

市场可以变化，策略可以迭代，你的交易内核永远稳定可靠。

用 Rust 重构散户高频交易基础设施：策略开发、风控执行、多市场扩展全面统一。

**Build Once, Trade Everywhere.** 让个人拥有机构级交易能力。

**[开始模拟](#quickstart) · [创建第一条策略](#blueprint) · [查看验证范围](https://github.com/ceer-quant/BlitzkriegBot/blob/HEAD/docs/FEATURES.md)**

*从节点连线到 Lua 策略包，让交易逻辑看得见、改得动。*

默认 dry 模拟，策略安装后默认关闭。实盘涉及真实资金风险，需要充分验证与明确授权；本项目不构成投资建议。

## TradingOS 的分层

**策略层可换，内核不变。**

| 层 | 是什么 | 换掉它意味着什么 |
| --- | --- | --- |
| **策略包**（Blueprint / Lua） | 把交易想法写成可运行的规则 | 迭代想法：改 Lua、调参数、换策略，**内核零改动** |
| **市场扩展**（Polymarket / Kalshi / predict.fun / PolySimulator） | 一个场地一个扩展 crate，接 market_api 契约 | 迁移市场：**写一个扩展 crate，内核不改一行** |
| **交易内核**（Rust） | OME 订单引擎 · 风控 · 持仓 · 结算 · 对账 | **永远稳定可靠**：市场无关、无交易所 SDK、dry/live 同一本账 |

```
市场可以变化 ──────────────► 换扩展 crate
策略可以迭代 ──────────────► 换 Lua 策略包
交易内核 ──────────────────► 永远稳定可靠（Build Once, Trade Everywhere）
```

## 从一个想法开始

**创建策略 → 回测评估 → 模拟运行 → 满足验证与授权条件后实盘**

| 你要做什么 | 在 BlitzkriegBot 中怎么做 |
| --- | --- |
| 把想法写成规则 | 在 Blueprint 连接数据源、条件与动作；需要更灵活的逻辑时编写 Lua。 |
| 检查策略是否值得继续 | 用支持的回放与回测入口评估历史表现，核对费用、回撤和成交假设。 |
| 观察它如何运行 | 在 dry 模式按账户启用，查看订单、持仓、账本与拒单原因。 |
| 决定是否进入实盘 | 对照功能证据与场地限制完成验证，再明确授权；模拟盈利不是实盘收益保证。 |

##…
