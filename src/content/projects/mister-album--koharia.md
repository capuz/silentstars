---
repo: "Mister-album/Koharia"
name: "Koharia"
description: "面向 Komga 服务器内容浏览与阅读的独立第三方 Android 阅读器 / An independent third-party Android reader for browsing and reading content from Komga servers."
readmeQualityOk: true
url: "https://github.com/Mister-album/Koharia"
homepage: "https://koharia.org"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 127
forks: 0
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 193
recentReleases: 8
createdAt: "2026-05-28T13:38:34Z"
lastCommitAt: "2026-08-18T04:06:57Z"
lastReleaseAt: "2026-07-29T12:38:22Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 35
maintainers: ["Mister-album"]
openGraphImageUrl: "https://opengraph.githubassets.com/97403497a653398604ac42ead70657acdd7ec9fcf9f78574b79f0cc9c9ddef46/Mister-album/Koharia"
---

<p><strong>简体中文</strong> · <a href="./README_EN.md">English</a></p>

# Koharia

同时支持漫画与 EPUB 书籍的 Android 阅读器

</div>

## 项目简介

Koharia 是一款面向 [Komga](https://komga.org/) 服务器的第三方 Android 客户端与阅读器，同时为漫画、扫描图像内容和可重排 EPUB 书籍提供专门的阅读体验。它将内容浏览、作品详情、阅读进度、离线访问与阅读设置整合在同一个应用中，让漫画和书籍可以按照各自更合适的方式展示和阅读。

项目基于 [Mihon](https://github.com/mihonapp/mihon) 的成熟 Android 阅读基础持续开发。Koharia 不提供或托管内容，你能浏览的作品取决于所连接的媒体库和账号权限。

<table>
  <tr>
    <td align="center" width="25%">
      <sub>主界面</sub>
    </td>
    <td align="center" width="25%">
      <sub>书籍阅读</sub>
    </td>
    <td align="center" width="25%">
      <sub>作品详情</sub>
    </td>
    <td align="center" width="25%">
      <sub>漫画阅读</sub>
    </td>
  </tr>
</table>

## 适合谁使用

- 希望在同一个 Android 应用中阅读漫画与 EPUB 书籍。
- 拥有个人或家庭媒体库，需要封面浏览、作品详情、历史记录与进度同步。
- 重视阅读方向、字体排版、背景颜色、翻页方式和离线访问等个性化体验。
- 希望将手动下载、书籍缓存和漫画页面缓存分开管理。

Koharia 专注于个人媒体库阅读，不提供公共在线内容源，也不以恢复传统扩展生态为目标。

## 主要功能

### 漫画与书籍统一管理

- 可选择将媒体库划分为“漫画”和“书籍”，也可以保持合并书架。
- 支持封面网格、列表、搜索、筛选、排序、作品详情、阅读历史和多服务器快速切换。
- 服务器库分类与本地设置相互独立，便于按不同媒体库组织内容。

### 漫画阅读

- 支持分页、连续滚动、从左到右、从右到左及双页等阅读方式。
- 提供缩放、旋转、裁边、阅读方向、章节切换和进度拖动等常用控制。
- 优先加载当前页面，并根据阅读方向预取相邻页面，提升连续翻页体验。
- 支持单页缓存和手动下载，已缓存内容可在网络不稳定时继续阅读。

### EPUB 书籍阅读

- 使用原生 EPUB…
