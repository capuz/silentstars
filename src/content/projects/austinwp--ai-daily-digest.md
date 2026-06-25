---
repo: "AustinWp/ai-daily-digest"
name: "ai-daily-digest"
description: "AI-powered daily digest from 90 top Hacker News tech blogs"
url: "https://github.com/AustinWp/ai-daily-digest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 15
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T07:51:15Z"
lastCommitAt: "2026-06-25T01:39:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fb8e65230dec35001719ff5026f7fb2da3b4c546f8344f380e7129d52b31fca/AustinWp/ai-daily-digest"
---

# AI Daily Digest

每天自动从 **104 个技术博客**、**30 个 X/Twitter 账号**、**Hacker News**、**7 个 Reddit 子版块**、**Product Hunt**、**Lobste.rs** 抓取最新内容，融合 **ClawFeed 日报** 和 **GitHub Trending** 热门项目，通过 **Gemini AI** 智能评分、分类和摘要，生成结构化的中文每日技术精选日报，并自动推送到微信。

## 它能做什么

- **多源聚合** — 订阅 114 个 RSS 源（技术博客 + HN + Reddit + Product Hunt + Lobste.rs）加上 30 个 X/Twitter 技术账号
- **ClawFeed 日报** — 聚合 AI 驱动的多源新闻日报，包含头条、精选 Top 10、推荐关注
- **GitHub Trending** — 每日热门开源项目（全语言 + Python），AI 相关项目自动标记
- **AI 智能评分** — 使用 Gemini AI 从相关性、质量、时效性三个维度（各 1-10 分）对每篇文章打分
- **自动分类** — 将文章归入 AI/ML、安全、工程、工具/开源、观点/讨论、其他 六大分类
- **中文摘要** — 为每篇英文文章生成中文标题、4-6 句摘要和推荐理由
- **趋势洞察** — AI 生成当日宏观技术趋势总结
- **可视化统计** — 包含分类分布饼图、关键词频率图表
- **微信推送** — 通过 Server酱 自动将精选内容推送到微信
- **全自动化** — GitHub Actions 定时运行，零人工干预

## 工作流程

```
RSS Feeds (114个源)    ──┐
X/Twitter (30个账号)   ──┤
                         ├──→ 抓取文章 → 时间过滤 → AI 评分 → 选取 Top N → AI 摘要 ──┐
ClawFeed 日报          ──┤                                                              ├──→ 生成日报 → 推送
GitHub Trending        ──┘                                                              ┘
```

**详细流程：**

1. **并行抓取** — 三路并行：RSS/X 源获取文章、ClawFeed API 获取日报、GitHub Trending 页面解析
2. **过滤** — 筛选最近 24 小时内发布的文章（RSS 部分）
3.…
