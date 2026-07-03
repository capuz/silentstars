---
repo: "OnyxAxisOwO/PageDye"
name: "PageDye"
description: "给任意网站设置自定义背景的浏览器主题"
url: "https://github.com/OnyxAxisOwO/PageDye"
homepage: "https://pagedye.pages.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-21T10:52:45Z"
lastCommitAt: "2026-07-03T06:24:15Z"
lastReleaseAt: "2026-07-01T11:12:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 56
maintainers: ["OnyxAxisOwO", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/53f54db01abe21a7dec2ad766ee2be4b80111174da85bfad33a504121207c5ec/OnyxAxisOwO/PageDye"
---

# PageDye

官网：[pagedye.pages.dev](https://pagedye.pages.dev)

给任意网站设置自定义背景——纯色、渐变、图片或动态特效壁纸，按站点独立保存，完全本地、无追踪、无网络请求。

支持 **Chrome / Edge / Brave** 等 Chromium 内核浏览器，以及 **Firefox**（含 Firefox for Android）。手机 / 平板可以用精简的 **PageDye Lite** 用户脚本（Android 上的 Edge / Firefox、iOS/iPadOS 上的 Safari）。

## 功能特性

- **多种背景类型**：纯色、线性/径向渐变、图片（本地文件或 URL），或 16 种动态特效壁纸（Matrix 雨、粒子、极光、雪花、打字机等）
- **自定义动效 API**（v0.6，仅扩展版）：在设置页里编写自己的 Canvas 动效，实时预览，和内置效果共用同一套密度/速度/配色控件，支持单个动效导出/导入分享，详见[自定义动效 API 文档](https://pagedye.pages.dev/custom-effects.html)
- **磨砂玻璃**：为指定卡片/容器元素加毛玻璃背景，透出下层壁纸，颜色、模糊度独立可调
- **昼夜双态联动**：跟随系统 `prefers-color-scheme` 自动切换浅色/深色壁纸
- **幻灯轮换**：多张壁纸按间隔（每次打开 / 15 分钟 / 30 分钟 / 1 小时 / 1 天）自动轮换，支持随机顺序
- **高级图片滤镜**：亮度、对比度、灰度、色相旋转、反色，实时预览
- **背景选择器（元素拾取器）**：当站点自身 CSS 遮挡整页背景时，直接把背景应用到指定元素
- **自定义 CSS**：为任意站点注入自定义样式
- **设置面板**：站点管理、备份/还原（含本地图片）、一键清空所有站点配置

## 安装

最简单的方式是直接访问官网 **[pagedye.pages.dev](https://pagedye.pages.dev)**，桌面端下载扩展包、手机 / 平板端一键安装 PageDye Lite，页面上都有对应的按钮和分步说明。

也可以按下面的方式手动安装。

扩展尚未上架各浏览器商店，目前需要手动加载已解压的扩展包。

前往 [**Releases**](../../releases) 下载最新的正式版本 `.zip`，或前往 [**Actions**](../../actions) → 选择最近一次成功的运行 → 下载页面底部的 artifact，然后解压。

### Chrome / Edge / Brave 等 Chromium 内核浏览器

1. 地址栏输入…
