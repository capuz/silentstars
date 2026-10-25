---
repo: "m96-chan/ai_research_dashboard"
name: "ai_research_dashboard"
description: "AI Research Dashboard — Latest AI/ML papers, models, repos, trends & news, auto-updated every hour"
readmeQualityOk: true
url: "https://github.com/m96-chan/ai_research_dashboard"
homepage: "https://ai.m96-chan.dev"
language: "Astro"
languages: ["Astro", "TypeScript"]
languagePcts: [54, 44]
topics: ["ai", "arxiv", "astro", "dashboard", "github-trending", "huggingface", "machine-learning", "rss"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T09:22:11Z"
lastCommitAt: "2026-10-25T09:00:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 44
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3facd4923604dda26c719f681cf6cec978884bb62daaa854915d4435555754d4/m96-chan/ai_research_dashboard"
---

A curated dashboard for the latest AI/ML papers, models, repos, trends, and news.<br/>
  Auto-updated every hour via GitHub Actions.<br/><br/>
  AI/ML の最新論文・モデル・リポジトリ・トレンド・ニュースを集約するダッシュボード。<br/>
  GitHub Actions により毎時自動更新。

---

## What's Inside / コンテンツ

| Source | Description / 説明 |
|--------|-------------|
| **arXiv** | Latest papers from cs.AI, cs.LG, cs.CL, cs.CV, stat.ML / AI 関連の最新論文 |
| **HuggingFace** | Trending models & datasets / トレンドのモデルとデータセット |
| **GitHub** | Newly starred AI/ML repositories / 注目の AI/ML リポジトリ |
| **RSS Feeds** | Global & Japan AI news, Hardware, Security (YAML configurable) / 国内外の AI ニュース、ハードウェア、セキュリティ |
| **Google Trends** | Tech trending topics from US, Japan, South Korea / 米・日・韓のテック急上昇ワード |
| **Stock Prices** | AI-related stocks (Semiconductors, Big Tech, AI Pure-Play) / AI 関連銘柄の株価 |
| **TL;DR** | Japanese summaries by GPT-4o-mini / GPT-4o-mini による日本語要約 |

## Tech Stack / 技術スタック

- **Framework:** [Astro](https://astro.build) + Tailwind CSS v4
- **Data Fetching:** TypeScript scripts on GitHub Actions (cron every 60 min)
- **Summarization:** OpenAI GPT-4o-mini
- **Hosting:** GitHub Pages

## Getting Started / はじめかた

```bash
pnpm install
pnpm run…
