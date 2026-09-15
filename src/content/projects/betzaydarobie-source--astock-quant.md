---
repo: "betzaydarobie-source/astock-quant"
name: "astock-quant"
description: "A股 价值选股量化研究系统 · 挑便宜又优质的好公司、季度调仓、对标沪深300 · 学习研究用,不构成投资建议"
readmeQualityOk: true
url: "https://github.com/betzaydarobie-source/astock-quant"
homepage: "https://betzaydarobie-source.github.io/astock-quant/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["a-share", "backtesting", "python", "quant", "quantitative-finance", "stock-screener", "value-investing"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-20T13:35:55Z"
lastCommitAt: "2026-09-15T08:55:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/88112be29ba8ea9b4f0ceee55230f8a0749dbb5e2147b621546982deeae9c30f/betzaydarobie-source/astock-quant"
---

# astock-quant —— A股 中长期价值选股研究系统（学习/研究用）

一个**从零搭建、用于学习与研究**的 A股 量化系统。代码追求可读、可跑、可改 ——
**不是实盘交易系统，不构成任何投资建议。**

> **当前状态**：项目已从「预测短期涨跌」转向「中长期价值选股」。系统每季度挑出
> 一篮子「又便宜又能赚钱」的好公司，按季度持有，目标是长期对标沪深300指数。
> 详见 `人话报告/12-Stage5价值选股改造.md`（大白话版）。

---

## 这是什么

简单说：**这个系统帮你从 A股 里挑「又便宜、又能赚钱」的好公司，按季度更新一份
推荐名单。**

它不预测「明天哪只股票涨」——项目早期做过这件事，并用 8 天反复诚实地证明：用散户
能拿到的数据预测短期涨跌，**准确率约 51%，跟抛硬币没区别**。所以系统转了方向。

现在做的事，是有大量学术和实践证据支持的「价值投资 + 量化」：

- **挑便宜的**：看一家公司的市盈率（PE）、市净率（PB）跟它自己历史比，是不是处在
  便宜的位置。
- **挑能赚钱的**：看 ROE（用钱赚钱的能力）、净利率、毛利率这些质量指标。
- **挑在成长的**：看营收和利润的同比增速。
- **长期持有**：每个季度（约 60 个交易日）换一次仓，不做短线。

把这三类指标合成一个透明、可解释的「综合分」，每季度选综合分最高的 15-20 只。

### 为什么不在选股这层套机器学习

A股 财报一年只更新 4 次，4 年只有约 16 期数据 —— 样本量对机器学习是杯水车薪，硬套
只会过拟合噪音、回测漂亮实盘崩盘。价值投资的逻辑本身简单可解释，所以这一层用
**透明因子打分**：每一步都看得见，能直接告诉你「这只票为什么入选」（便宜？质量好？）。

---

## 价值选股思路

```
数据层（A股 行情 / 财务 / 估值历史分位）
        │
        ▼
因子打分（三个维度，每个维度由若干因子等权合成）
  ├─ 价值（便宜度）：PE↓  PB↓  股息率↑
  ├─ 质量（赚钱能力）：ROE↑  净利率↑  毛利率↑
  └─ 成长（增长性）：营收增速↑  净利增速↑
        │
        ▼
综合分 = 价值×0.4 + 质量×0.4 + 成长×0.2  （0~1，越高越「便宜+好」）
        │
        ▼
每季度初选综合分 Top 15-20，等权买入，持有整个季度
        │
        ▼
季度调仓回测：扣掉真实交易成本，和沪深300指数比超额收益
```

所有打分的标准化 / 排名都按「每日横截面」做（只用当天同一批股票互相比），这样
天然不会把未来信息泄漏进当前分数 —— 这是防…
