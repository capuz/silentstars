---
repo: "JustinGuese/python_tradingbot_framework"
name: "python_tradingbot_framework"
description: "Python algorithmic trading bot framework for Kubernetes: backtesting, hyperparameter optimization, 150+ technical analysis indicators (RSI, MACD, Bollinger Bands, ADX), portfolio management, PostgreSQL integration, Helm deployment, CronJob scheduling. Minimal overhead, production-ready, Yahoo Finance data."
readmeQualityOk: true
url: "https://github.com/JustinGuese/python_tradingbot_framework"
homepage: "https://justinguese.github.io/python_tradingbot_framework/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [63, 36]
topics: ["helm", "kubernetes", "python", "quant", "quantitative-finance", "quantitative-trading", "stocks-trading", "trading", "trading-algorithms", "trading-strategies"]
stars: 41
forks: 14
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-09T10:10:55Z"
lastCommitAt: "2026-09-30T09:56:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 41
maintainers: ["JustinGuese"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc165faec430e989d5b71bcefb1f92c7e3fbdf616bce3adab261476e6c948b84/JustinGuese/python_tradingbot_framework"
---

# 🤖 Trading Bot Framework

**A Production-Ready, Kubernetes-Native Algorithmic Trading System**

kubectl create secret generic tradingbot-secrets --from-env-file=.env --namespace=tradingbots-2025 --dry-run=client -o yaml | kubectl apply -f -

This framework allows developers to build, backtest, and deploy automated trading strategies as **Kubernetes CronJobs**. It handles the "boring stuff"—data ingestion, technical analysis, database persistence, and portfolio tracking—so you can focus on the alpha.

## 🚀 Why this Framework?

- **Batteries Included**: 150+ Technical Indicators (RSI, MACD, etc.) ready out of the box.
- **Infrastructure as Code**: Native Helm charts for easy scaling on K8s.
- **Data Consistency**: Built-in caching and PostgreSQL persistence for trade history and market data.
- **Backtesting to Production**: One class handles local testing, hyperparameter optimization, and live execution.

## 🎯 The Target: Alpha vs QQQ, Not Return

Bots are judged by their **annualised alpha against QQQ**: the daily return left
over after removing the bot's QQQ exposure (beta), along with that alpha's
t-stat. Raw return and Sharpe alone are not the target.

**Why:** QQQ exposure…
