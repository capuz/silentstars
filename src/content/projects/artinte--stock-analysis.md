---
repo: "artinte/stock-analysis"
name: "stock-analysis"
description: "股票量化分析"
readmeQualityOk: true
url: "https://github.com/artinte/stock-analysis"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-21T14:10:48Z"
lastCommitAt: "2026-08-30T00:45:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["artinte"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe20f574f3927069d7f649f77f727ac7edb812245c123729384c7599eba656ad/artinte/stock-analysis"
discussionCount: 1
---

# Stock Analysis

> 面向个人开发者与量化研究团队的行情分析与量化选股工具。

---

## 📖 目录

* [项目简介](#project-introduction)
* [系统架构](#architecture)
* [核心功能](#core-features)

  * [智能数据感知与舆情系统](#crawler-feature)
  * [行情接入与技术指标引擎](#market-feature)
  * [人工智能分析与预测](#ai-feature)
  * [量化策略与股票筛选](#strategy-feature)

* [项目结构](#project-structure)

  * [common](#common)
  * [core](#core)
  * [crawler](#crawler)
  * [docs](#docs)
  * [gateways](#gateways)
  * [gui](#gui)
  * [tests](#tests)
  * [tools](#tools)
  * [utils](#utils)

* [系统安装](#installation)

  * [安装 Python 依赖](#install-python)
  * [安装 Ollama](#install-ollama)

* [快速开始](#quick-start)
* [量化分析界面](#quant-interface)
* [量化分析示例](#quant-example)
* [全市场量化选股](#market-selection)
* [股票预测实验](#stock-prediction)
* [数据接口](#data-interface)
* [路线图](#roadmap)
* [学习与扩展](#learning)
* [免责声明](#disclaimer)
* [Star](#star)

---

# 📌 项目简介

**Stock Analysis** 是一款面向个人开发者与量化研究团队打造的**行情分析与量化选股工具**。

项目围绕：

> **数据采集 → 数据清洗 → AI 分析 → 技术指标计算 → 量化策略筛选 → 报告生成 → 消息推送**

构建完整的数据分析闭环。

系统主要由以下几个部分组成：

* **`crawler`**：财经新闻、交易所公告、政策文件等数据采集与 AI 分析。
* **`docs`**: 量化交易、股票分析、策略开发与系统架构等相关技术文档。
* **`gateways`**：券商行情数据接入，为上层策略提供统一的数据接口。
* **`gui`**：通过自然语言与量化系统交互，自动识别股票及操作意图。
*…
