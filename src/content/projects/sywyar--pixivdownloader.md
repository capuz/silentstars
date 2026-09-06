---
repo: "Sywyar/PixivDownloader"
name: "PixivDownloader"
description: "一款注重下载后体验的Pixiv下载器！高集成画廊，自动化任务，AI翻译！A pixiv downloader that prioritizes the post-download experience! Features include a highly integrated gallery, automated tasks, and AI translation!"
readmeQualityOk: true
url: "https://github.com/Sywyar/PixivDownloader"
homepage: "http://sywyar.github.io/PixivDownloader/"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [69, 24]
topics: ["pixiv", "tampermonkey", "downloader", "artwork", "artwork-downloader", "novel", "novel-downloader", "pixiv-download", "pixiv-downloader", "gallery"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-05T02:50:55Z"
lastCommitAt: "2026-09-06T08:04:58Z"
lastReleaseAt: "2026-04-06T12:03:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["Sywyar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/25b0d6eaf13ebde9cb8b1264249c67e9407b7573be926ec3bc5fa7b76862dc8c/Sywyar/PixivDownloader"
discussionCount: 0
---

# PixivDownloader

中文 | [繁體中文](https://github.com/Sywyar/PixivDownloader/blob/HEAD/README_zh-Hant.md) | [日本語](https://github.com/Sywyar/PixivDownloader/blob/HEAD/README_ja.md) | [한국어](https://github.com/Sywyar/PixivDownloader/blob/HEAD/README_ko.md) | [English](https://github.com/Sywyar/PixivDownloader/blob/HEAD/README_en.md)

> [!NOTE]
> 此文档中提及的作品范围包括 插画/漫画/动图/小说

### 本地 Pixiv 作品批量下载工具，支持小说/漫画的各种类型下载

- 批量通过作品链接下载作品
- 通过用户ID批量下载作品
- 通过内置搜索代理批量下载作品
- 通过输入作品系列链接或者系列中作品链接批量下载整个系列作品
- 通过油猴脚本在 Pixiv 网页上抓取插画/漫画/动图/小说，或在单作品页直接下载
- 强大的作品/小说画廊

## 功能特点

> [!WARNING]
> **标记 `*` 的功能尚未在正式版中上线，仅每夜构建版可用**

- 一站式下载网页，支持快捷获取、批量导入单作品、User 模式、Search 模式、系列模式
- 快捷获取：凭已保存的 Cookie 一键拉取本账户的收藏（插画/小说，含不公开）、自己的作品（含不公开）、关注列表、珍藏集，可钻取查看并加入下载队列
- 页面批量下载脚本 — 抓取搜索页、关注动态、排行榜等 Pixiv 页面中的插画/漫画/动图/小说
- 体验增强工具箱脚本（已下载标记、Cookie 导入）
- 强大的作品/小说画廊，支持搜索范围选择、筛选排序和收藏夹
- 小说画廊支持「正文」全文检索（基于本地全文索引，可与年龄分级/标签/作者等筛选叠加）
- 统计仪表盘：总览卡片、按月下载量折线、下载量 Top 作者、热门标签词云，作者/标签可点击直达画廊筛选
- 疑似重复检测：基于感知哈希（dHash）识别实质重复的已下载图片，支持阈值调节、跨作品/全部范围切换与手动扫描回填
- `*` 插件管理页：卡片列表展示所有插件的状态/来源/版本/依赖，支持加载、启动、静默、停止、卸下、删除、重启和重载（未上线）
- `*` 插件市场页：浏览、搜索、分页查看并安装受信仓库插件；可输入公网 HTTPS `repository.json`，核对发布者、联网主机和完整公钥指纹后保存第三方仓库，安装前会重新解析版本并校验大小、SHA-256、签名及包内描述符
- 计划任务：后台按周期或…
