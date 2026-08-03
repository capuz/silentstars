---
repo: "Astro2642/trending-hub"
name: "trending-hub"
description: "🔥 多平台社交媒体热点聚合工具，支持 X/Twitter、TikTok、Bilibili、YouTube、Instagram、微博、知乎、百度、抖音等平台。"
readmeQualityOk: true
url: "https://github.com/Astro2642/trending-hub"
homepage: "https://zxc76o.github.io/trending-hub/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [73, 27]
topics: ["trending-hub"]
stars: 18
forks: 32
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-07T13:30:45Z"
lastCommitAt: "2026-08-03T06:45:20Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6844ec36869b0af9e22b0fb0f67c97e482368c6af565c7f8c8009ee98f5fbfb1/Astro2642/trending-hub"
---

# Trending Hub 🔥

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

## 项目结构

```
trending-hub/
├── .github/
│   └── workflows/
│       └── fetch-trending.yml  # GitHub Actions 工作流…
