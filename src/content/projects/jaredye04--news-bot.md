---
repo: "JaredYe04/news-bot"
name: "news-bot"
description: "一个开源的，每天自动爬取、推送新闻的机器人"
url: "https://github.com/JaredYe04/news-bot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 19
forks: 9
openIssues: 174
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-01-04T16:54:54Z"
lastCommitAt: "2026-06-27T00:47:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 70
undervaluedScore: 37
maintainers: ["bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/26c10f347bed5cafdcfb06a96c11b50ac995a3f173c6ceccd9ff01d808ff42ca/JaredYe04/news-bot"
---

# 📰 科研 & 技术热点日报机器人

自动抓取每日热点新闻、市场信息的 GitHub Actions 机器人。

## ✨ 功能特性

- 🤖 **自动运行**：每天定时抓取热点新闻和技术资讯（UTC+8 09:00 和 21:00）
- 📅 **每日存档**：自动生成 `daily/YYYY-MM-DD.md` 文件
- 🔥 **多源聚合**：整合 arXiv、技术博客、Hacker News 等多个信息源
- 📝 **结构化输出**：生成清晰的 Markdown 格式日报
- 🧠 **AI 摘要**：使用硅基流动 GLM-4.7 模型生成今日新闻总结
- 🎯 **精准分类**：包含 AI/LLM、Agent、RAG 等专业科研方向

## 📂 项目结构

```
news-bot/
├── .github/
│   └── workflows/
│       └── daily.yml          # GitHub Actions 工作流
├── scripts/
│   ├── fetch-rss.js           # RSS 抓取模块
│   ├── sources.js             # 信息源配置
│   ├── generate-md.js         # Markdown 生成器
│   ├── generate-summary.js    # LLM 摘要生成模块
│   └── run.js                 # 主执行脚本
├── daily/
│   └── .gitkeep               # 保持目录结构
├── package.json
└── README.md
```

## 🔌 信息源

### AI / LLM
- **arXiv**：cs.AI, cs.LG, cs.CL（自然语言处理）
- **官方博客**：OpenAI, DeepMind, Google Research

### Agent / 智能体
- **arXiv cs.AI**：AI 智能体研究
- **Google News**：AI Agents 相关新闻

### RAG / 检索增强生成
- **arXiv**：cs.AI, cs.IR（信息检索）
- **Google News**：RAG 相关新闻

### LLM / 大语言模型
- **arXiv cs.CL**：计算语言学
- **Google News**：大语言模型研究动态
- **OpenAI Blog**：官方更新

### 技术社区
- **GitHub Blog**：最新产品更新
- **Hacker News**：技术风向标
- **Rust Blog**：系统编程动态

## 🚀 使用方法…
