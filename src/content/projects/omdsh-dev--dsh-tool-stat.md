---
repo: "omdsh-dev/dsh-tool-stat"
name: "dsh-tool-stat"
description: "DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性"
readmeQualityOk: true
url: "https://github.com/omdsh-dev/dsh-tool-stat"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 30]
topics: ["dsh-plugin", "correlation", "data-analysis", "dsh", "statistics"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-10T07:02:47Z"
lastCommitAt: "2026-08-18T03:57:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 7
maintainers: ["whiteicey"]
openGraphImageUrl: "https://opengraph.githubassets.com/38120583b1fc14a71db347d7e9fcfe47de37a611ec8767be06bdce304ccf880b/omdsh-dev/dsh-tool-stat"
---

# dsh-tool-stat

[English](https://github.com/omdsh-dev/dsh-tool-stat/blob/HEAD/README.en.md)

DSH 统计工具插件 —— 描述统计、百分位数、频数分布、相关性计算。零依赖、纯函数、确定性。

## 动机

Agent 处理数值数据时，从 CSV / JSON 提取出数值数组后往往需要聚合分析（均值、分位数、分布、相关性）。现有工具链没有这类能力：

1. **`calculator` 只做单表达式求值**——一个表达式算不出分位数分布，更算不了相关系数
2. **`dsh-tool-csv` 的 `stats` 只报告行/列结构**——不提供对一组观测值的统计聚合
3. **模型"心算"统计不可验证**——均值、方差、百分位、相关性涉及大量浮点运算，手算错误率极高，且无法给用户展示可复现的过程

本插件接收显式传入的有限数值数组或成对观测值，提供确定性的统计计算：一次函数调用，毫秒级返回结构化 JSON 报告。不读取文件、不访问网络、不创建进程、不保存状态——相同输入永远得到相同输出。

## 安全模型

- **零依赖**：Neumaier 补偿求和、Welford 在线方差、线性插值百分位、Spearman midrank 全部手写，无第三方数值库
- **有限数强约束**：拒绝 `NaN` / `Infinity`（错误信息带下标定位，如 `values[3] must be a finite number (got Infinity)`）；`-0` 在输入与输出中均规范化为 `0`
- **溢出回检**：所有结果在返回前再次做有限数检查，中间或最终结果溢出返回 `numeric-overflow` 错误——canonical 输出**绝不含**非有限值
- **纯函数**：输入数组永不被修改（只读遍历；需要排序时先拷贝）
- **零方差语义**：`correlation` 遇零方差配对返回 `defined: false` + `reason: "zero-variance"`，而不是 NaN 或 ±Infinity
- **预算**：
  - 观测值 1..100,000（超限直接报错）
  - 百分位请求 ≤ 100 个
  - distinct 输出 ≤ 10,000（超出按确定规则截断并标注）
  - `timeoutMs: 2000`
- 工具参数会记入会话日志，不要传入敏感数据

## 工具声明

注册 `stat` 工具（`@deepseek-ai/dsh-tool-stat`，row id `tool-stat`），统一输出 JSON 文本字符串。

| action | 作用 | 输出 |
|---|---|---|
|…
