---
repo: "liusaipu/stockfinlens"
name: "stockfinlens"
description: "基于 Wails + Go + React 的跨平台 A股/港股 财报透视工具，集成 AI 投研助手（Tavily 联网搜索 + Kimi/DeepSeek 大模型）。"
readmeQualityOk: true
url: "https://github.com/liusaipu/stockfinlens"
homepage: "https://github.com/liusaipu/18-ML-STOCK/releases"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [44, 43]
topics: ["finance", "go", "react", "stock-analysis", "typescript", "wails", "china-stock", "desktop-app", "financial-analysis", "investment-tools"]
stars: 28
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T10:42:34Z"
lastCommitAt: "2026-08-27T14:25:37Z"
lastReleaseAt: "2026-04-08T08:21:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["liusaipu"]
openGraphImageUrl: "https://opengraph.githubassets.com/938e4c8b0ea417d1741e93682b47c102b0afdb7f543b517d4513364b2dee0367/liusaipu/stockfinlens"
---

# 股票财报透镜 StockFinLens

**基于 Wails + Go + React 的跨平台股票财报透视工具**

集成 **AI 投研助手**：Tavily 联网搜索 + Kimi/DeepSeek 大模型，一键生成带信源的结构化投研报告。

[English](https://github.com/liusaipu/stockfinlens/blob/HEAD/README_EN.md) | 简体中文

</div>

---

## 🔍 这是什么？

一款专为 **A股/港股** 投资者设计的开源财报透视工具。

就像光学透镜能放大肉眼看不见的细微结构，**股票财报透镜** 帮你穿透冗长的财务报表，看清企业真实的经营状况、潜在风险和内在价值。

> ⚠️ **免责声明**：本工具仅供学习研究使用，不构成投资建议。股市有风险，投资需谨慎。

---

## ✨ 核心透视能力

### 🔬 财报透视分析

从审计意见到分红政策，逐层拆解企业财务健康度：

| 透视维度     | 看清什么                 |
| -------- | -------------------- |
| **审计层**  | 审计意见类型、非标事项、会计政策变更   |
| **资产质量** | 应收账款账龄、存货周转、商誉减值风险   |
| **偿债能力** | 流动/速动比率、资产负债率、利息保障倍数 |
| **盈利透视** | 毛利率趋势、净利率稳定性、ROE杜邦分解 |
| **现金流**  | 经营现金流质量、自由现金流、现金含量   |
| **成长性**  | 营收增长可持续性、利润增长质量      |

### ⚠️ A-Score 风险热力图（A股特供）

专为A股设计的6维风险评分，0-100分量化企业"健康度"：

```
A-Score = 财务造假层(60%) + 破产风险层(20%) + 非财务信号层(20%)
        = M-Score + 现金流偏离 + 应收异常 + 毛利率波动
        + Altman Z-Score + 股权质押/监管问询/减持信号
```

- 🔴 **>70分**：高风险，建议远离
- 🟡 **40-70分**：中等风险，需持续监控
- 🟢 **<40分**：低风险，相对健康

### 📡 行业对比雷达

7项关键财务指标与行业均值实时对标，用 🔴🟡🟢 色块直观展示异常信号：

- ROE、毛利率、营收增长率 vs 行业均值
- 应收账款占比、存货周转率、现金含量、资产负债率异常检测
- 当本地样本不足时，自动接入全市场 fallback 数据补充行业基准

### 🎯 可比公司聚焦分析

添加3-5家同行业公司，自动生成：

-…
