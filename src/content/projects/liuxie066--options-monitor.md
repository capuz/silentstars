---
repo: "liuxie066/options-monitor"
name: "options-monitor"
description: "cash secured put & covered call"
readmeQualityOk: true
url: "https://github.com/liuxie066/options-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 6
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-22T14:57:02Z"
lastCommitAt: "2026-08-17T04:19:26Z"
lastReleaseAt: "2026-04-28T04:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 45
maintainers: ["liuxie066"]
openGraphImageUrl: "https://opengraph.githubassets.com/c168e0a98100b7a2d8337c899956287c2172c461fee67d3cd5e2c537b000eab8/liuxie066/options-monitor"
---

# options-monitor

`options-monitor` 是一个本地运行、人工决策优先的期权监控系统。它把行情、现金、正股持仓、期权账本、策略规则、报告和通知串成一条可审计链路，帮助用户完成：

- `Sell Put` 与 `Covered Call` 候选筛选；
- `Combo Yield` 组合候选评估；
- 已开期权 lot 的 `Close Advice`；
- 期权利润、现金活动、持仓与到期生命周期查询；
- Daily Decision Brief、候选变化提醒和离线策略复盘。

它不是自动交易系统，不会替用户下单。候选、平仓建议和研究结论均为 advisory-only；真实交易、配置写入、通知发送、服务变更和生产状态修改必须走各自的显式确认边界。

## 核心边界

系统只有一套主运行链路：

```text
config.yaml
├─ om config build --market us|hk
│  └─ config.us.json / config.hk.json
│     └─ om run tick | om run tick-cron
│        └─ output_runs + output_shared + output_accounts
└─ om config build-assistant
   └─ resolved/config.assistant.json
```

期权持仓只有一套事实链：

```text
trade_events -> projection -> position_lots
```

- `config.yaml` 是人工编辑源；生成的 JSON 是运行快照，不是日常手工编辑入口。
- 本地 SQLite 是期权交易与持仓事实源；Feishu 不承载 `option_positions` 镜像。
- 普通手工 `tick` 不自动发送 scheduled ordinary notification；生产调度使用受保护的 `tick-cron`。
- `./om-agent spec` 是 Tool Gateway 工具名、输入 schema、风险级别和副作用的权威清单。
- 缺少行情、费用、历史汇率、事件或身份事实时，系统显式返回 missing、partial 或 not-evaluable，不补造数据。

产品域见 [产品架构](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/PRODUCT_ARCHITECTURE.md)，技术调用链见…
