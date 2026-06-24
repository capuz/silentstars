---
repo: "ZhangLi1984/huiboyanbao"
name: "huiboyanbao"
description: "慧博"
url: "https://github.com/ZhangLi1984/huiboyanbao"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-28T01:40:31Z"
lastCommitAt: "2026-06-24T23:38:18Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 70
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d6645df1d67c658663bb712b5999b32e89fbc45188f8e74e9b62ee74eef1b09/ZhangLi1984/huiboyanbao"
---

# 研报爬虫与AI分析系统

这个项目包含两个主要功能：
1. 爬取研报数据
2. 使用Google Gemini AI模型分析研报数据并通过方糖推送摘要

## 功能介绍

### 慧博研报爬虫
- 爬取投研资讯网的研报数据
- 爬取最新买入研报数据
- 爬取热门研报数据（今日热门、本周热门、本月热门）
- 爬取行业分析和投资策略研报数据
- 数据去重并保存为CSV文件

### 研报AI分析
- 使用Google Gemini模型分析研报数据
- 识别核心投资主题
- 构建高成长潜力模拟投资组合
- 通过方糖推送分析结果

## 本地运行

### 安装依赖
```bash
pip install pandas beautifulsoup4 undetected-chromedriver selenium google-generativeai requests
```

### 设置环境变量
```bash
# Linux/Mac
export GEMINI_API_KEY="你的Gemini API密钥"
export FANGTANG_KEY="你的方糖推送密钥"

# Windows
set GEMINI_API_KEY=你的Gemini API密钥
set FANGTANG_KEY=你的方糖推送密钥
```

### 爬取研报数据
```bash
python 慧博研报爬虫整合版.py
```

### 运行AI分析并推送
```bash
python appstore_monitor.py
```
