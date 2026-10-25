---
repo: "4ESTSEC/wxvl"
name: "wxvl"
description: "Automatically crawls security vulnerability articles from WeChat Official Accounts, converts them to Markdown format, and builds a local knowledge base, updated continuously every day. This project is extended from [original wxvl](https://github.com/20142995/wxvl)."
originalDescription: "自动抓取微信公众号安全漏洞文章，转换为Markdown格式并建立本地知识库，每日持续更新。本项目基于 [原版wxvl](https://github.com/20142995/wxvl) 进行扩展。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/4ESTSEC/wxvl"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 152
forks: 60
openIssues: 2
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2025-05-16T02:20:07Z"
lastCommitAt: "2026-10-25T09:01:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d0ff202f78be9fdee32488648cc8b9b820f29cf3d4e1f5ad1ee704bdefc1594f/4ESTSEC/wxvl"
---

# WeChat Official Account Security Vulnerability Article Archive

This project extends [original wxvl](https://github.com/20142995/wxvl) and adds security vulnerability articles published between April 2022 and April 2025.

## ✨ Project Features

Automatically crawls security vulnerability articles from WeChat Official Accounts, converts them to Markdown format, and builds a local knowledge base, updated continuously every day.

## 📰 Data Sources

Data comes from Official Account articles from the following channels:
- [chainreactors/picker](https://github.com/chainreactors/picker) daily archive
- [BruceFeIix/picker](https://github.com/BruceFeIix/picker) daily archive
- [Doonsec](https://doonsec.com) RSS feed
- Official Account links extracted from GitHub Issues

## 🔍 Content Filtering Rules

The system automatically identifies articles that contain the following keywords:
复现|漏洞|CVE-\d+|CNVD-\d+|CNNVD-\d+|XVE-\d+|QVD-\d+|POC|EXP|0day|1day|nday|RCE|代码执行|命令执行

## 🛠️ Technical Implementation

- Uses [wechatmp2markdown](https://github.com/fengxxc/wechatmp2markdown) to convert Official Account articles to Markdown format
- Intelligently handles special characters to generate…
