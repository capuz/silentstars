---
repo: "redtidev1918/PixivFlow"
name: "PixivFlow"
description: "Pixiv 下载、筛选与自动收集工具，支持批量下载、定时任务和可靠 HTTP 交付 | Pixiv downloader with filtering, scheduling and reliable HTTP delivery"
readmeQualityOk: true
url: "https://github.com/redtidev1918/PixivFlow"
homepage: "https://redtidev1918.github.io/PixivFlow/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["automation", "cli", "downloader", "illustration", "nodejs", "pixiv", "pixiv-api", "scheduler", "typescript", "pixiv-downloader"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-11-07T17:43:15Z"
lastCommitAt: "2026-09-18T14:02:51Z"
lastReleaseAt: "2026-09-18T11:12:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["redtidev1918", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1091908423/5e738419-b1fd-40a9-a3c1-2a0ad4c51f69"
discussionCount: 0
---

# PixivFlow

**语言 / Language:** 中文 · [English](https://github.com/redtidev1918/PixivFlow/blob/HEAD/README.en.md)

**Pixiv 下载、筛选与自动收集工具。**

可以直接下载单个 Pixiv 作品（插画、小说、动图），也可以按标签、热度、日期和收藏数
批量筛选，并通过 scheduler 定时自动收集。结果既能永久保存在本地，也能按需通过 HTTP
可靠交付给其他服务——下游是可选的，PixivFlow 自己就能跑完「发现 → 筛选 → 下载 → 保存」
的完整链路。

## 典型场景

**1. 下载一个链接。** 直接粘贴任意 Pixiv 链接——插画、小说、系列、用户主页都能识别：

```bash
pixivflow download --url https://www.pixiv.net/artworks/123456789
```

**2. 按条件批量下载。** 在配置里定义要收集什么（标签、榜单、发布日期、收藏数下限），
一次跑完；已下载的作品由 SQLite 记录并自动跳过，重复运行不会重复拉取。
见[筛选与下载目标](#筛选与下载目标)。

**3. 定时自动收集并交付。** 用 cron 长期挂机：定时发现、下载，再按需把内容投递给
其他服务——对方确认收到后才删除本地副本。

```text
Pixiv ──► PixivFlow ──┬──► 本地永久保存（persistent）
                      └──► HTTP 交付（cache）──► TelePost / 其他兼容服务
```

## 快速开始

需要 Node.js 22.13 或更高版本；生产环境请使用仍受支持的 LTS。

```bash
npm install -g pixivflow
pixivflow --help
```

登录 Pixiv 账号（生成 OAuth 凭据，只需一次）：

```bash
pixivflow login                 # 本机有浏览器
pixivflow login-headless        # 无图形界面的服务器
```

下载一个作品——直接粘贴任意 Pixiv 链接（插画、小说、系列、用户主页均可识别）：

```bash
pixivflow download --url https://www.pixiv.net/artworks/123456789
```

按配置批量下载并启动定时任务：

```bash
pixivflow download
pixivflow scheduler             # 按 cron 配置长期挂机自动收集
```…
