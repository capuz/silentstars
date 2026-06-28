---
repo: "wonglaitung/fortune"
name: "fortune"
description: "Implementing the concept of Human-AI Hybrid Intelligence, developing a financial asset intelligent quantitative analysis assistant with monetization capabilities. The system integrates Large Language Model reasoning with Machine Learning prediction models, monitoring cryptocurrency, Hong Kong stocks, gold, and other financial markets in real-time. "
url: "https://github.com/wonglaitung/fortune"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["quant", "hongkong-stock", "llm", "machine-learning", "ai", "aigc", "quantitative-trading", "stock", "cryptocurrency", "gold"]
stars: 58
forks: 18
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-11T17:16:26Z"
lastCommitAt: "2026-06-28T02:00:31Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 45
maintainers: ["wonglaitung", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7c721df0a94377814162bed9e424e7764927d341d9d614b7644f455d33971ed/wonglaitung/fortune"
discussionCount: 2
---

# <img src="assets/icon.svg" width="40" height="48" alt="金融智能分析" style="vertical-align: middle; margin-right: 10px;"> 金融资产和港股智能分析与交易系统

**⭐ 如果您觉得这个项目有用，请先给项目Star再Fork，以支持项目发展！⭐**

实践**人机混合智能**的理念，开发具备变现能力的金融资产智能量化分析助手。系统整合**大模型智能决策**与**机器学习预测模型**，实时监控加密货币、港股、黄金等金融市场。

---

## 📄 效果文档

- 每日定时更新[港股买卖建议](output/comprehensive_reports)

---

## 一、核心功能

### 1.1 项目优势

**人机混合智能**：融合大模型推理能力与机器学习预测精度，既保持量化分析的客观性，又具备理解市场上下文的灵活性。相比纯量化策略，能更好地应对市场突发事件和非理性行为。

**经过验证的策略**：所有交易策略均经过至少两年的历史数据回测和Walk-forward验证，确保不是"纸上谈兵"。核心策略如假突破做多（87%胜率）和Z-Score抄底（72%胜率）已在实际交易中验证有效。

**全流程自动化**：从数据采集、特征计算、模型预测到邮件推送，全流程自动化运行。GitHub Actions定时调度，无需人工干预，确保不错过任何交易机会。

**港股市场专注**：专门针对港股市场特性优化，包括南向资金追踪、恒指联动分析、板块轮动研究等。相比通用量化工具，更能把握港股市场规律。

**多维度交叉验证**：单一指标可能失效，但多维度信号共振可显著提高可靠性。系统整合三周期预测、异常检测、大模型分析、板块轮动四大维度，只有多信号一致时才给出强建议。

**透明的性能监控**：每日自动评估预测准确率，按月度、季度、年度统计，真实反映系统表现。不隐藏失败预测，持续迭代改进。

---

### 1.2 恒生指数三周期预测系统

**核心理念**：通过同时预测1天、5天、20天三个时间周期，捕捉不同时间尺度的市场趋势，为短线、中线和长线交易提供决策支持。三周期交叉验证可显著提高预测可靠性。

**多周期预测**（2026-05-18 验证）：

| 周期 | 准确率 | 特点 | 用途 |
|------|--------|------|------|
| 1天 | 51.49% | 噪音大，仅供参考 | 日内短线参考 |
| 5天 | 65.86% | 趋势确认，辅助判断 | 周度持仓决策 |
| **20天** | **81.22%** | **最可靠，主要决策依据** | 月度投资方向 |

**八大交易模式**（恒指增强模型，2026-05-18…
