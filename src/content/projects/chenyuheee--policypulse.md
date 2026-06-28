---
repo: "ChenyuHeee/PolicyPulse"
name: "PolicyPulse"
description: "PolicyPulse 是一个 GitHub 原生 的金融政策/宏观信息聚合站：每天由 GitHub Actions 自动抓取官方源，数据直接落在仓库里（JSONL），随后构建静态站并部署到 GitHub Pages。"
url: "https://github.com/ChenyuHeee/PolicyPulse"
homepage: "https://chenyuheee.github.io/PolicyPulse/"
language: "Python"
languages: ["Python", "Astro"]
languagePcts: [47, 33]
topics: ["finance", "financial-analysis"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-11T07:43:01Z"
lastCommitAt: "2026-06-28T01:45:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95bb60b7263b29a33f3cd1b122b8e62ec399bf238067cd1f08b5237af6200042/ChenyuHeee/PolicyPulse"
---

# PolicyPulse · 金源观潮

> 说明：本仓库开源内容仅供学习与研究用途，不构成任何投资建议、交易建议或法律意见；使用者应自行评估风险并遵守相关法律法规与各信息源网站条款。

PolicyPulse 是一个 **GitHub 原生** 的金融政策/宏观信息聚合站：每天由 GitHub Actions 自动抓取官方源，数据直接落在仓库里（JSONL），随后构建静态站并部署到 GitHub Pages。

在线预览： https://chenyuheee.github.io/PolicyPulse/

## 目录

- [核心特性](#核心特性)
- [站点页面](#站点页面)
- [仓库结构](#仓库结构)
- [快速开始](#快速开始)
- [数据格式](#数据格式)
- [配置新闻源](#配置新闻源)
- [自动化与部署](#自动化与部署)
- [可选 Secrets](#可选-secrets)
- [常见问题](#常见问题)
- [贡献](#贡献)

## 核心特性

- **低运维**：无需数据库/服务器，数据直接 commit 到仓库
- **全自动**：定时（可手动）抓取 → 校验 → 有变化才提交 → 构建 → Pages 部署
- **信息密度导向**：面向金融从业者的紧凑排版，移动端可用
- **可扩展**：每个来源一个 adapter，RSS/HTML/API 均可接入

## 站点页面

- Latest：按时间线浏览最新条目
- Sources：按来源浏览与追踪
- Topics：按议题（宏观、利率、外汇、财政、监管等）聚合

## 仓库结构

- `crawler/`：Python 爬虫与校验
- `data/`：数据落盘（`news.jsonl`）与索引（`index.json`）
- `site/`：Astro + Tailwind 的静态站
- `.github/workflows/daily.yml`：自动化流水线（抓取+构建+部署）
- `docs/`：规划与来源说明
  - `docs/网站规划.md`
  - `docs/新闻源与获取方式.md`

## 快速开始

### 1) Python 环境

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

### 2) 运行爬虫与校验

```bash
python -m crawler crawl
python -m crawler validate
```

自定义数据路径：

```bash
python -m crawler crawl --data data/news.jsonl --index data/index.json
python -m…
