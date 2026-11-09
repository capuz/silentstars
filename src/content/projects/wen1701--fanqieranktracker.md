---
repo: "wen1701/FanqieRankTracker"
name: "FanqieRankTracker"
description: "番茄女频榜单"
readmeQualityOk: true
url: "https://github.com/wen1701/FanqieRankTracker"
homepage: "https://wen1701.github.io/FanqieRankTracker/"
language: "JavaScript"
languages: ["JavaScript", "Python", "CSS"]
languagePcts: [35, 32, 28]
stars: 101
forks: 90
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-10T09:42:51Z"
lastCommitAt: "2026-11-09T04:35:11Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 45
maintainers: ["wen1701"]
openGraphImageUrl: "https://opengraph.githubassets.com/9198c4ceec37e099f1747e0ead4178fbae71ee165c6d26b654f84decdbd388be/wen1701/FanqieRankTracker"
---

# 🏆 番茄风向标 · Fanqie Rank Tracker

> 👗 专注于**番茄小说女频新书榜**，每日自动追踪排行数据并结合 AI 生成趋势分析，部署为精美的在线看板。

---

## ✨ 功能概览

| 功能 | 说明 |
|------|------|
| 🕷️ 自动爬取 | 每日定时抓取番茄女性频道各个分类的新书榜 Top 30 |
| 📊 趋势对比 | 自动对比相邻两天数据：新上榜 / 掉榜 / 排名变化 / 阅读量增长 |
| 🤖 AI 风向分析 | 接入 OpenAI 兼容 API，按分类生成市场趋势速评 |
| 🧭 类型风向标 | 独立趋势页聚合多日数据，用 AI 总结古风言情等综合赛道、具体热门分类和高频题材；未配置 API 时自动规则兜底 |
| 📚 短篇推荐 | 访问时按 99 个题材标签实时读取短故事，展示封面、摘要、阅读时长和互动数据，不落盘推荐内容 |
| 🖥️ 精美看板 | 暗色编辑风格仪表盘，带打字机动画和瀑布流书籍卡片 |
| 📱 移动适配 | 完整的移动端适配，侧边栏抽屉式菜单 |
| 🔌 数据接口 | 生成静态 `lastest` JSON 接口，可按类型读取最新数据 |
| ⚡ 全自动化 | GitHub Actions + GitHub Pages，零服务器运维 |

---

## 🚀 食用指南

### 前置条件

- **Python 3.9+**
- **Git**
- 一个 GitHub 账号
- （可选）一个 OpenAI 兼容 API 的密钥，用于 AI 分析

### 第一步：Fork 仓库

点击 GitHub 页面右上角的 **Fork** 按钮，将项目 Fork 到你自己的账号下。

### 第二步：开启 GitHub Pages

1. 进入你 Fork 后的仓库 → **Settings** → **Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 `main`，目录选择 `/ (root)`
4. 点击 **Save**

稍等几分钟，你的看板就会上线：`https://<你的用户名>.github.io/FanqieRankTracker/`

### 第三步：配置 Secrets（可选，开启 AI 分析）

进入仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**，添加以下三个 Secret：

| Secret 名称 | 说明 | 示例 |
|---|---|---|
| `API_BASE_URL` | OpenAI 兼容 API 的地址 |…
