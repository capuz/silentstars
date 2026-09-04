---
repo: "Tim0x0/halo-plugin-steam"
name: "halo-plugin-steam"
description: "Halo Steam展示插件 - 展示 Steam 用户资料、游戏库和最近游玩记录"
readmeQualityOk: true
url: "https://github.com/Tim0x0/halo-plugin-steam"
language: "Java"
languages: ["Java"]
languagePcts: [70]
stars: 8
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-09T08:49:32Z"
lastCommitAt: "2026-09-04T08:09:08Z"
lastReleaseAt: "2026-06-27T18:29:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 32
maintainers: ["Tim0x0"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f889e9988e872d388af3f5227c2177da7c203b5d88960c91c47b9dcb4b5ab87/Tim0x0/halo-plugin-steam"
---

# 🎮 Steam 信息展示插件

**在你的 Halo 博客中优雅地展示 Steam 游戏生涯**

用户资料 · 游戏库 · 最近游玩 · 徽章成就 · 游戏时长热力图 · 富文本游戏卡片

<br>

📖 [使用教程](https://github.com/Tim0x0/halo-plugin-steam/blob/HEAD/docs/usage-guide.md) &nbsp;|&nbsp; 📡 [Steam API 技术参考](https://github.com/Tim0x0/halo-plugin-steam/blob/HEAD/docs/steam-api-reference.md) &nbsp;|&nbsp; 🎮 [在线演示](https://blog.timxs.com/steam)

<br>

</div>

---

## ✨ 项目简介

这是一个 [Halo 2.x](https://www.halo.run) 插件，让你在个人博客中展示完整的 Steam 游戏生涯。

它不仅提供开箱即用的 `/steam` 独立页面，还开放了 **Finder API**（主题模板集成）与 **REST API**（前端异步加载），并内置 **富文本编辑器游戏卡片扩展**——在写文章时插入一个 App ID，即可渲染出带封面、简介、价格的游戏卡片。

为了应对 Steam 官方接口在国内访问慢、新游戏封面/名称缺失等问题，插件设计了**后台定时预热缓存**、**官方商店接口数据补全**和**图片 CDN 加速**等机制，开箱即可获得流畅、稳定的展示体验。

## 📑 目录

- [功能特性](#-功能特性)
- [快速开始](#-快速开始)
- [配置说明](#️-配置说明)
- [使用方式](#-使用方式)
  - [独立页面](#1-独立-steam-页面)
  - [主题集成（Finder API）](#2-主题集成finder-api)
  - [REST API](#3-rest-api)
  - [游戏时长热力图](#4-游戏时长热力图)
  - [富文本游戏卡片](#5-富文本游戏卡片)
- [工作原理](#-工作原理)
- [技术架构](#-技术架构)
- [开发与构建](#-开发与构建)
- [常见问题](#-常见问题)
- [环境要求](#-环境要求)
- [贡献](#-贡献)
- [许可证](#-许可证)

## 🌟 功能特性

### 数据展示
- **用户资料** — 头像、昵称、在线状态、Steam 等级、上次在线时间
- **游戏库** — 分页浏览，按游玩时长排序，支持隐藏指定游戏、限制显示数量
- **最近游玩** —…
