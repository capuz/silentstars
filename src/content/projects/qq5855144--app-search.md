---
repo: "qq5855144/App-Search"
name: "App-Search"
description: "开源应用商店，所有项目经过后端筛选，没有发行版的项目会被过滤，专注于开源应用程序。"
url: "https://github.com/qq5855144/App-Search"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 15
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-15T00:00:14Z"
lastCommitAt: "2026-06-26T21:32:16Z"
lastReleaseAt: "2026-06-26T15:18:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 60
undervaluedScore: 42
maintainers: ["qq5855144"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb18ea71387233471fa46f3f9d115de2d3e18cf18405a1c38ac40a247fa2c36/qq5855144/App-Search"
---

# App Search - 开源应用商店

![Runtime](https://img.shields.io/badge/Runtime-Expo%20App%20%7C%20Web-2391FF?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Expo](https://img.shields.io/badge/Expo-55-blueviolet?style=flat-square)

**发现、探索、安装优质开源应用**

[快速开始](#快速开始) · [功能](#特性) · [项目结构](#项目结构) · [截图](#截图)

</div>

---

## ✨ 特性

### 🔍 智能搜索
- GitHub 开源仓库全文搜索
- 按平台、应用类型、收藏量筛选
- 搜索历史自动记录

### 📱 安装资产识别
项目会从 GitHub Release 中识别常见安装包格式，方便用户找到可安装的开源应用。当前仓库尚未提供自身的 Android、iOS、Windows、macOS 或 Linux 安装包构建产物。

| 目标平台 | 可识别格式 |
|------|----------|
| Android | APK |
| iOS | IPA |
| macOS | DMG / PKG |
| Windows | EXE / MSI |
| Linux | AppImage / DEB / RPM |

### 🏆 热门榜单
- 热门应用
- 下载排行
- 收藏排行
- 趋势应用

### 💾 本地管理
- 收藏应用
- 下载记录
- 搜索历史
- 本地缓存

### 安卓启动体验
- 浅色主题全屏启动页，背景色统一为 `#F8FBFF`
- 原生 Expo 启动图与 React Native 启动覆盖层视觉一致
- 包含品牌图标、产品名称、标语与轻量加载反馈

---

## 当前功能入口
- `/` / `src/app/(tabs)/index.tsx`：首页入口
- `/search` / `src/app/(tabs)/search.tsx`：搜索、热词、历史记录、分页加载
- `/ranking` / `src/app/(tabs)/ranking.tsx`：榜单页
- `/discover` / `src/app/(tabs)/discover.tsx`：发现页
- `/favorites`：收藏列表
- `/downloads`：下载记录
- `/detail/[id]`：应用详情页

## 数据架构
- 本地数据：Expo SQLite / Web…
