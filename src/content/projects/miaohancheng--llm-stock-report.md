---
repo: "miaohancheng/llm_stock_report"
name: "llm_stock_report"
description: "Automated daily stock summary & prediction (CN/US/HK) using LightGBM and LLMs."
url: "https://github.com/miaohancheng/llm_stock_report"
homepage: "https://miaohancheng.com/llm_stock_report/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [80, 20]
topics: ["lightgbm", "llm", "quant-trading", "stock-market", "trading-bot"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-03T09:43:47Z"
lastCommitAt: "2026-06-25T01:31:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dacf25314cc4d660a89f0e03c74e71902207cf573052e9cd2e0d6379d8f06d8d/miaohancheng/llm_stock_report"
---

# llm_stock_report

**AI + 传统量化双驱动：** 不是单纯的 LLM 闲聊，而是基于 LightGBM 的客观预测辅助。  
**AI + Quant Dual Engine:** This is not pure LLM chatting; it is grounded by objective LightGBM-based prediction signals.  
**开箱即用的自动化：** 内置完整的 GitHub Actions 工作流，无需服务器即可白嫖算力。  
**Automation Out of the Box:** Built-in end-to-end GitHub Actions workflows, so you can run it without maintaining your own server.  
**支持本地/私有化部署：** 全面兼容本地大语言模型，零 API 成本运行。  
**Local / Private Deployment Ready:** Fully compatible with local LLMs for zero API-cost operation.  

LLM daily stock summary + next-day prediction for CN/US/HK markets, with scheduled GitHub Actions and Telegram delivery.

简体中文 | [English](#english)

- 中文完整使用文档: [docs/full-guide.md](docs/full-guide.md)
- English full guide: [docs/full-guide_EN.md](docs/full-guide_EN.md)
- GitHub Actions 配置手册（中文）: [docs/github-actions-setup.md](docs/github-actions-setup.md)
- GitHub Actions setup guide (EN): [docs/github-actions-setup_EN.md](docs/github-actions-setup_EN.md)

## Pipeline
```mermaid
flowchart LR
  A["AKShare获取数据"] --> B["特征工程 / 缓存"]
  B --> C["LightGBM预测"]
  C --> D["新闻抓取"]
  D --> E["大模型生成"]
  E --> F["Telegram推送"]
```

## 中文

### 推送预览

### 项目功能
- A股使用…
