---
repo: "28H2O2/get-anthropic"
name: "get-anthropic"
description: "每日自动聚合 Anthropic 最新文章，翻译为中文，部署到 Vercel"
url: "https://github.com/28H2O2/get-anthropic"
homepage: "https://get-anthropic.vercel.app"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-13T10:53:04Z"
lastCommitAt: "2026-06-25T01:32:15Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]", "28H2O2"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f252cd066470b6f0e2533670f8cae7da821f13043305c3d951bbe46c664854a/28H2O2/get-anthropic"
---

# Anthropic 资讯日报

每天早上自动从 8 个 Anthropic 官方信息源抓取新文章，翻译成中文，生成本地 Markdown 日报，并构建静态前端展示近 30 天内容。

## 信息源

| 来源 | 内容 |
|------|------|
| [Anthropic News](https://www.anthropic.com/news) | 官方新闻与产品公告 |
| [Anthropic Research](https://www.anthropic.com/research) | 研究论文与技术博客 |
| [Claude Blog](https://www.anthropic.com/claude-blog) | 面向用户与企业的 Claude 博客 |
| [Alignment Science](https://alignment.anthropic.com) | 对齐科学专项博客 |
| [Engineering Blog](https://www.anthropic.com/engineering) | 工程实践博客 |
| [Red Team](https://red.anthropic.com) | 红队安全研究 |
| [Claude Cookbook](https://platform.claude.com/cookbook) | 官方开发示例与教程 |
| [Transformer Circuits](https://transformer-circuits.pub) | 可解释性研究 |

## 架构

```
main.py          # 主调度器：抓取 → 比对索引 → 过滤日期 → 翻译 → 写日报
fetchers/        # 各信息源的抓取层（只返回文章列表）
translator.py    # 翻译层，支持 aliyun / claude / deepl 三引擎
build_data.py    # 将日报和索引合并为前端 JSON（public/data.json）
public/          # 静态前端，可部署到 Vercel / GitHub Pages
article_index.json  # 全量文章索引（持久化，防重复处理）
output/          # 每日中文日报（output/YYYY-MM-DD/digest.md）
```

## 快速开始

**1. 安装依赖**

```bash
pip install -r requirements.txt
```

**2. 配置环境变量**（阿里云机器翻译）

```bash
export ALIYUN_ACCESS_KEY_ID=your_key
export…
