---
repo: "Weaxs/stock-analysis-plugin"
name: "stock-analysis-plugin"
description: "Multi-market stock analysis, screening & backtesting plugin for AI agents — 39 tools + 20 strategy skills across A/HK/US/JP/KR/TW markets, works with Pi Agent, Hermes, OpenClaw & Deepseek Harness"
originalDescription: "Multi-market stock analysis, screening & backtesting plugin for AI agents — 39 tools + 20 strategy skills across A/HK/US/JP/KR/TW markets, works with Pi Agent, Hermes, OpenClaw & Deepseek Harness"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Weaxs/stock-analysis-plugin"
homepage: "https://www.npmjs.com/package/@weaxs/stock-analysis-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["a-shares", "ai-agent", "akshare", "algorithmic-trading", "backtesting", "factor-investing", "hermes-agent", "hk-stocks", "pi-agent", "pi-extension"]
stars: 65
forks: 15
openIssues: 2
closedIssues: 20
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-14T07:51:12Z"
lastCommitAt: "2026-11-11T11:17:02Z"
lastReleaseAt: "2026-08-18T11:50:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["Weaxs"]
openGraphImageUrl: "https://opengraph.githubassets.com/3892bf0b04f22129c6d31b35e94e21c25c1fa3b94624becefa7bc87482224487/Weaxs/stock-analysis-plugin"
---

# stock-analysis-plugin

A comprehensive toolkit for analysis, multi-factor stock selection, and strategy backtesting across A-shares / Hong Kong stocks / US stocks / Japanese stocks / Korean stocks / Taiwanese stocks. It can be used as a [Pi Agent](https://github.com/anthropics/pi-agent) Extension, a [Hermes Agent](https://github.com/NousResearch/hermes-agent) Plugin, an [OpenClaw](https://docs.openclaw.ai/) Plugin, or a [DeepSeek Harness (dsh)](https://github.com/deepseek-ai/deepseek-harness) Plugin.

All platforms share the same underlying Python CLI tools and SKILL.md workflows. The upper layer adapts the registration mechanism of each of the four platforms separately.

## Table of Contents

- [功能概览](#功能概览)
- [安装](#安装)
  - [Pi Agent Extension](#pi-agent-extension)
  - [Hermes Agent Plugin](#hermes-agent-plugin)
  - [OpenClaw Plugin](#openclaw-plugin)
  - [dsh (DeepSeek Harness) Plugin](#dsh-deepseek-harness-plugin)
  - [Python 依赖](#python-依赖)
- [快速开始](#快速开始)
- [Skills 一览](#skills-一览)
- [工具列表](#工具列表)
- [策略回测 DSL](#策略回测-dsl)
- [市场路由规则](#市场路由规则)
- [独立 CLI 使用](#独立-cli-使用)
- [CI 真实宿主测试](#ci-真实宿主测试)
- [项目结构](#项目结构)
- [致谢](#致谢)
- [常见问题](#常见问题)
- [License](#license)

## Feature…
