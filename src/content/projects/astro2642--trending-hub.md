---
repo: "Astro2642/trending-hub"
name: "trending-hub"
description: "🔥 多平台社交媒体热点聚合工具，支持 X/Twitter、TikTok、Bilibili、YouTube、Instagram、微博、知乎、百度、抖音等平台。"
url: "https://github.com/Astro2642/trending-hub"
homepage: "https://zxc76o.github.io/trending-hub/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [72, 28]
topics: ["trending-hub"]
stars: 13
forks: 22
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-07T13:30:45Z"
lastCommitAt: "2026-06-23T23:29:24Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3796ccf8cf364096aafdf9387dde06babb6e4ed13036e6ee07657a054b90da53/Astro2642/trending-hub"
---

# Trending Hub 🔥

![Build Status](https://github.com/zxc76o/trending-hub/actions/workflows/fetch-trending.yml/badge.svg)

多平台社交媒体热点聚合工具，支持 X/Twitter、TikTok、Bilibili、YouTube、Instagram、微博、知乎、百度、抖音等平台。

## 特性

- 🔄 **每30分钟自动更新** - 通过 GitHub Actions 定时抓取
- 🌐 **多平台支持** - 覆盖国内外主流社交媒体
- 📱 **响应式设计** - 支持桌面和移动端
- 🆓 **完全免费** - 使用 GitHub Pages 托管
- 🔓 **开源** - 可自定义和扩展

## 支持的平台

| 平台 | 数据源 | 状态 |
|------|--------|------|
| X (Twitter) | trends24.in | ✅ |
| TikTok | tokboard.com | ✅ |
| Bilibili | RSSHub | ✅ |
| YouTube | RSSHub | ✅ |
| Instagram | top-hashtags.com | ✅ |
| 微博 | RSSHub | ✅ |
| 知乎 | RSSHub | ✅ |
| 百度热搜 | 百度 API | ✅ |
| 抖音 | RSSHub | ✅ |

## 快速开始

### 1. Fork 本仓库

点击右上角 Fork 按钮

### 2. 启用 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"

### 3. 启用 Actions

1. 进入仓库 Actions 页面
2. 点击 "I understand my workflows, go ahead and enable them"

### 4. 手动触发首次运行

1. 进入 Actions → "Fetch Trending Topics"
2. 点击 "Run workflow"

几分钟后，访问 `https://你的用户名.github.io/trending-hub/` 查看效果。

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/你的用户名/trending-hub.git
cd trending-hub

# 安装依赖
npm install

# 抓取数据
npm run fetch

# 构建 HTML
npm run build

# 本地预览
npm run dev
```

## 项目结构…
