---
repo: "liuxie066/options-monitor"
name: "options-monitor"
description: "cash secured put & covered call"
readmeQualityOk: true
url: "https://github.com/liuxie066/options-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 31
forks: 10
openIssues: 33
closedIssues: 215
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-22T14:57:02Z"
lastCommitAt: "2026-11-09T11:59:45Z"
lastReleaseAt: "2026-04-28T04:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["liuxie066"]
openGraphImageUrl: "https://opengraph.githubassets.com/38d77ce112635189589f42b0cc5a19effde5712dd0cf5c9f5dd37bbb02d6ac75/liuxie066/options-monitor"
---

# Options Monitor（OM）

**在自己的电脑上，查看期权候选、账户资金与持仓风险。**

OM 面向自己做交易决策的期权投资者，支持富途账户及长桥股票、现金接入。它结合行情、账户现金、股票持仓和你设定的策略条件，筛选现金担保卖出认沽（CSP）与备兑卖出看涨（CC）候选，并提供持仓、期权现金流和风险报告。

**OM 不会替你下单，也不保证收益。** 扫描会连接外部数据源，并保存本地结果；缺少必要数据时，会明确提示不可用或结果不完整，不用猜测值补齐。

第一次使用，建议先在 Mac 上完成一个真实账户的一次扫描。通知、Bot 问答和后台定时运行都可以以后再配置。

- **第一次使用：** 按下面的 Mac 入门步骤完成准备、安装、扫描和结果查看。
- **已经安装：** 跳到[日常使用](#日常使用)。
- **使用 Linux、固定版本或源码安装：** 见[安装指南](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/INSTALL.md)。
- **先了解功能：** 见[主要功能](#主要功能)；选择数据来源和扩展见[插件与接入](#插件与接入)。
- **需要开发集成或详细文档：** 见[更多能力与文档](#更多能力与文档)。

## 主要功能

| 功能 | 能做什么 | 使用说明 |
|---|---|---|
| CSP / CC 候选筛选 | 结合账户条件筛选现金担保卖出 Put、备兑卖出 Call 的开仓候选 | [策略架构](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/STRATEGY_ARCHITECTURE.md) |
| 指定标的合约查询 | 指定标的和可选 Delta 绝对值上限，查询卖出 Put / Call 合约；休市时使用经交易日历核验的快照并标注参考时间；只评估合约，不判断账户现金、持股覆盖、成本底线或集中度 | [合约查询](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/TOOL_REFERENCE.md#指定标的卖出开仓候选) |
| Combo Yield | 查看组合候选及策略含义 | [策略架构](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/STRATEGY_ARCHITECTURE.md)、[术语对照](https://github.com/liuxie066/options-monitor/blob/HEAD/docs/STRATEGY_TERMINOLOGY.md) |
| Wheel 轮转策略 |…
